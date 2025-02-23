import { OpenAPIV3 } from 'openapi-types';

export interface OperationInfo {
  method: string;
  path: string;
  operationId: string;
  summary?: string;
  description?: string;
  parameters?: OpenAPIV3.ParameterObject[];
  requestBody?: OpenAPIV3.RequestBodyObject;
  responses: OpenAPIV3.ResponsesObject;
}

function generateAxiosMethod(operation: OperationInfo, spec: OpenAPIV3.Document): string {
  const { method, path, operationId, summary, description, parameters, requestBody, responses } = operation;
  
  // Generate JSDoc
  const jsDocLines = ['/**'];
  if (summary) jsDocLines.push(` * ${summary}`);
  if (description) jsDocLines.push(` * ${description}`);
  
  // Add parameter descriptions
  parameters?.forEach(param => {
    const desc = param.description ? ` - ${param.description}` : '';
    jsDocLines.push(` * @param ${param.in === 'path' ? 'params.' : param.in === 'query' ? 'query.' : ''}${param.name}${desc}`);
  });

  if (requestBody && 'description' in requestBody) {
    jsDocLines.push(` * @param data - ${requestBody.description}`);
  }

  // Add return type description
  const responseDetails = Object.entries(responses).find(([code]) => code.startsWith('2'));
  if (responseDetails) {
    const [code, response] = responseDetails;
    const responseObj = response as OpenAPIV3.ResponseObject;
    const desc = 'description' in responseObj ? responseObj.description : '';
    const contentType = responseObj.content?.['application/json']?.schema;
    const typeName = `${operationId}Response${code}`;
    
    if (contentType) {
      if (desc) {
        jsDocLines.push(` * @returns ${desc}`);
      }
      jsDocLines.push(` * @see ${typeName}`);
    } else if (desc) {
      jsDocLines.push(` * @returns ${desc}`);
    }
  }
  
  jsDocLines.push(' */');

  const urlParams = parameters?.filter(p => p.in === 'path') || [];
  const queryParams = parameters?.filter(p => p.in === 'query') || [];
  
  const isFormData = requestBody && 
    'content' in requestBody && 
    requestBody.content?.['multipart/form-data'];

  const formDataSchema = isFormData && requestBody.content['multipart/form-data'].schema ? (
    '$ref' in requestBody.content['multipart/form-data'].schema
      ? spec.components?.schemas?.[requestBody.content['multipart/form-data'].schema.$ref.split('/').pop()!]
      : requestBody.content['multipart/form-data'].schema
  ) as OpenAPIV3.SchemaObject : undefined;

  // Build data type parts
  const dataProps: string[] = [];
  
  // Add path and query parameters
  urlParams.forEach(p => {
    dataProps.push(`${p.name}: ${getTypeFromParam(p)}`);
  });
  queryParams.forEach(p => {
    dataProps.push(`${p.name}${p.required ? '' : '?'}: ${getTypeFromParam(p)}`);
  });

  // Add request body type if it exists
  const hasData = (parameters && parameters.length > 0) || operation.requestBody;
  const dataType = hasData 
    ? requestBody 
      ? `${operationId}Request & { ${dataProps.join('; ')} }`
      : `{ ${dataProps.join('; ')} }`
    : 'undefined';

  // Get response type from 2xx response
  const successResponse = Object.entries(responses).find(([code]) => code.startsWith('2'));
  const responseType = successResponse ? `${operationId}Response${successResponse[0]}` : 'any';

  const urlWithParams = urlParams.length > 0 
    ? path.replace(/{(\w+)}/g, '${data.$1}')
    : path;

  const methodBody = [
    `const url = \`${urlWithParams}\`;`,
    queryParams.length > 0 ? 
      `const queryData = Object.fromEntries(Object.entries(data).filter(([key]) => ${JSON.stringify(queryParams.map(p => p.name))}.includes(key)));` : '',
    requestBody && queryParams.length > 0 ? 
      `const bodyData = Object.fromEntries(Object.entries(data).filter(([key]) => !${JSON.stringify(queryParams.map(p => p.name))}.includes(key)));` : '',
    isFormData ? 
      `const formData = new FormData();
      ${Object.entries((formDataSchema?.properties || {})
      ).map(([key, prop]: [string, any]) => {
        const isBinary = prop.format === 'binary';
        return formDataSchema?.required?.includes(key)
          ? `formData.append("${key}", ${isBinary ? '' : 'String('}${queryParams.length > 0 ? 'bodyData' : 'data'}.${key}${isBinary ? '' : ')'});`
          : `if (${queryParams.length > 0 ? 'bodyData' : 'data'}.${key} != null) {
              formData.append("${key}", ${isBinary ? '' : 'String('}${queryParams.length > 0 ? 'bodyData' : 'data'}.${key}${isBinary ? '' : ')'});
            }`
      }).join('\n      ')}` : '',
    `return this.axios.${method.toLowerCase()}<${responseType}>(url, {
      ${queryParams.length > 0 ? `params: queryData,` : ''}
      ${requestBody ? `data: ${isFormData ? 'formData' : queryParams.length > 0 ? 'bodyData' : 'data'},` : ''}
      ${isFormData ? `headers: { 'Content-Type': 'multipart/form-data', ...headers },` : 'headers'}
    });`
  ].filter(Boolean).join('\n    ');

  return `
  ${jsDocLines.join('\n  ')}
  async ${operationId}(data${hasData ? `: ${dataType}` : '?: undefined'}, headers?: Record<string, string>): Promise<AxiosResponse<${responseType}>> {
    ${methodBody}
  }`;
}

function getTypeFromParam(param: OpenAPIV3.ParameterObject): string {
  if ('schema' in param) {
    const schema = param.schema as OpenAPIV3.SchemaObject;
    switch (schema.type) {
      case 'string': return 'string';
      case 'integer':
      case 'number': return 'number';
      case 'boolean': return 'boolean';
      case 'array': return 'Array<any>'; // You might want to make this more specific
      default: return 'any';
    }
  }
  return 'any';
}

export function generateApiClient(spec: OpenAPIV3.Document): string {
  let operations: OperationInfo[] = [];

  // Collect all operations
  Object.entries(spec.paths || {}).forEach(([path, pathItem]) => {
    if (!pathItem) return;

    ['get', 'post', 'put', 'delete', 'patch'].forEach(method => {
      const operation = pathItem[method as keyof OpenAPIV3.PathItemObject] as OpenAPIV3.OperationObject;
      if (!operation) return;

      operations.push({
        method: method.toUpperCase(),
        path,
        operationId: operation.operationId || `${method}${path.replace(/\W+/g, '_')}`,
        summary: operation.summary,
        description: operation.description,
        parameters: [...(pathItem.parameters || []), ...(operation.parameters || [])] as OpenAPIV3.ParameterObject[],
        requestBody: operation.requestBody as OpenAPIV3.RequestBodyObject,
        responses: operation.responses
      });
    });
  });

  // Collect actually used types
  const usedTypes = new Set<string>();
  operations.forEach(op => {
    // Add request type if method has request body
    if (op.requestBody) {
      usedTypes.add(`${op.operationId}Request`);
    }
    // Add only the 2xx response type that's used
    const successResponse = Object.entries(op.responses).find(([code]) => code.startsWith('2'));
    if (successResponse) {
      usedTypes.add(`${op.operationId}Response${successResponse[0]}`);
    }
  });

  // Generate the client class
  return `import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { 
  ${Array.from(usedTypes).join(',\n  ')}
} from './types';

export class ApiClient {
  private axios: AxiosInstance;

  constructor(baseURL: string, headers?: Record<string, string>) {
    this.axios = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    });
  }
${operations.map(op => generateAxiosMethod(op, spec)).join('\n\n')}
}
`;
} 