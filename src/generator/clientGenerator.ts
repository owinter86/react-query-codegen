import { OpenAPIV3 } from 'openapi-types';

interface OperationInfo {
  method: string;
  path: string;
  operationId: string;
  summary?: string;
  description?: string;
  parameters?: OpenAPIV3.ParameterObject[];
  requestBody?: OpenAPIV3.RequestBodyObject;
  responses: OpenAPIV3.ResponsesObject;
}

function generateAxiosMethod(operation: OperationInfo): string {
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

  // Generate method parameters
  const params: string[] = [];
  const urlParams = parameters?.filter(p => p.in === 'path') || [];
  const queryParams = parameters?.filter(p => p.in === 'query') || [];
  
  // Add request body parameter if it exists
  if (requestBody) {
    params.push(`data: ${operationId}Request`);
  }

  // Add path parameters
  if (urlParams.length > 0) {
    params.push(`params: { ${
      urlParams.map(p => `${p.name}: ${getTypeFromParam(p)}`).join(', ')
    } }`);
  }

  // Add query parameters
  if (queryParams.length > 0) {
    params.push(`query?: { ${
      queryParams.map(p => `${p.name}${p.required ? '' : '?'}: ${getTypeFromParam(p)}`).join(', ')
    } }`);
  }

  // Add headers parameter
  params.push('headers?: Record<string, string>');

  // Get response type from 2xx response
  const successResponse = Object.entries(responses).find(([code]) => code.startsWith('2'));
  const responseType = successResponse ? `${operationId}Response${successResponse[0]}` : 'any';

  // Generate method
  const urlWithParams = urlParams.length > 0 
    ? path.replace(/{(\w+)}/g, '${params.$1}')
    : path;

  const methodBody = [
    `const url = \`${urlWithParams}\`;`,
    queryParams.length > 0 ? 'const queryString = query ? `?${new URLSearchParams(query)}` : \'\';' : '',
    `return this.axios.${method.toLowerCase()}<${responseType}>(url${queryParams.length > 0 ? ' + queryString' : ''}, {
      ${requestBody ? 'data,' : ''}
      headers
    });`
  ].filter(Boolean).join('\n    ');

  return `
  ${jsDocLines.join('\n  ')}
  async ${operationId}(${params.join(', ')}): Promise<AxiosResponse<${responseType}>> {
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
${operations.map(op => generateAxiosMethod(op)).join('\n\n')}
}
`;
} 