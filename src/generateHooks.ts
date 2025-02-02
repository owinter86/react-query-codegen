import lodash from 'lodash';
const { get, groupBy } = lodash;
import {
  ComponentsObject,
  OperationObject,
  ParameterObject,
  ReferenceObject,
  ResponseObject,
  SchemaObject,
} from 'openapi3-ts';
import { formatDescription, getResReqTypes, isReference, resolveValue } from './utils.js';
import pasCase from 'case';

const { pascal, camel } = pasCase;

const IdentifierRegexp = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

/**
 * Return every params in a path
 */
const getParamsInPath = (path: string) => {
  let n;
  const output = [];
  const templatePathRegex = /\{(\w+)}/g;
  while ((n = templatePathRegex.exec(path)) !== null) {
    output.push(n[1]);
  }

  return output;
};

export let imports: string[] = [];

/**
 * Generate a react-query component from openapi operation specs
 */
export const createHook = ({
  operation,
  verb,
  route,
  operationIds,
  parameters,
  schemasComponents,
  headerFilters,
}: {
  operation: OperationObject;
  verb: string;
  route: string;
  operationIds: string[];
  parameters: (ReferenceObject | ParameterObject)[] | undefined;
  schemasComponents?: ComponentsObject;
  headerFilters?: string[];
}) => {
  const { operationId = route.replace('/', '') } = operation;
  if (operationId === '*') {
    throw new Error(`Invalid operationId/Route set for ${verb} ${route}`);
  }
  if (operationIds.includes(operationId)) {
    return { implementation: '', imports: [], queryImports: [] };
  }
  operationIds.push(operationId);

  imports = [];

  route = route.replace(/\{/g, '${').replace('//', '/'); // `/pet/{id}` => `/pet/${id}`

  // Remove the last param of the route if we are in the DELETE case
  let lastParamInTheRoute: string | null = null;

  const componentName = pascal(operationId!);

  const isOk = ([statusCode]: [string, ResponseObject | ReferenceObject]) =>
    statusCode.toString().startsWith('2');

  const responseTypes = getResReqTypes(Object.entries(operation.responses).filter(isOk)) || 'unknown';
  const requestBodyTypes = operation.requestBody ? getResReqTypes([['body', operation.requestBody]]) : null;

  let queryImports = [] as Array<'mutation' | 'query' | 'infiniteQuery'>;

  const paramsInPath = getParamsInPath(route).filter(
    (param) => !(verb === 'delete' && param === lastParamInTheRoute)
  );

  const {
    query: queryParams = [],
    path: pathParams = [],
    header = [],
  } = groupBy(
    [...(parameters || []), ...(operation.parameters || [])].map<ParameterObject>((p) => {
      if (isReference(p)) {
        return get(schemasComponents, p.$ref.replace('#/components/', '').replace('/', '.'));
      } else {
        return p;
      }
    }),
    'in'
  );

  const headerParams = header.filter((p) => !headerFilters?.includes(p.name));
  const requiredParams = [...queryParams, ...pathParams, ...headerParams].filter((p) => p.required);
  // TODO: extract all requestBody or remove useQuery variants
  let enabledParam: boolean | string = true;
  if (requiredParams.length) {
    enabledParam = 'hasDefinedProps(params,';
    enabledParam += requiredParams.map((p) => `"${p.name}"`).join(', ');
  }

  if (operation.requestBody && 'content' in operation.requestBody) {
    // get all required requestBody schemas and output the required properties
    const generatedBodyProps = Object.keys(operation.requestBody.content).reduce((acc, contentType) => {
      if (
        contentType.startsWith('application/json') ||
        contentType.startsWith('application/ld+json') ||
        contentType.startsWith('application/octet-stream')
      ) {
        // @ts-ignore
        const schema = operation.requestBody.content[contentType].schema!;

        if ('required' in schema) {
          // @ts-ignore
          acc.push(...schema.required);
        }
      }
      return acc;
    }, []);

    if (generatedBodyProps.length) {
      if (enabledParam === true) {
        enabledParam = 'hasDefinedProps(params,';
        enabledParam += generatedBodyProps.map((p) => `"${p}"`).join(', ');
      } else {
        enabledParam += ',';
        enabledParam += generatedBodyProps.map((p) => `"${p}"`).join(', ');
      }
    }
  }

  const paramsTypes = paramsInPath
    .map((p) => {
      try {
        const { name, required, schema } = pathParams.find((i) => i.name === p)!;
        return `${name}${required ? '' : '?'}: ${resolveValue(schema!)}`;
      } catch (err) {
        throw new Error(`The path params ${p} can't be found in parameters (${operationId})`);
      }
    })
    .join('; ');

  const queryParamsType = queryParams
    .map((p) => {
      const processedName = IdentifierRegexp.test(p.name) ? p.name : `"${p.name}"`;
      return `${formatDescription(p.description)}
      ${processedName}${p.required ? '' : '?'}: ${resolveValue(p.schema!)}`;
    })
    .join(';\n  ');

  const headerType = headerParams
    .map((p) => {
      try {
        const { name, required, schema } = headerParams.find((i) => i.name === p.name)!;
        return `"${name}"${required ? '' : '?'}: ${resolveValue(schema!)}`;
      } catch (err) {
        throw new Error(`The path params ${p} can't be found in parameters (${operationId})`);
      }
    })
    .join('; ');

  // Retrieve the type of the param for delete verb
  const lastParamInTheRouteDefinition =
    operation.parameters && lastParamInTheRoute
      ? (operation.parameters.find((p) => {
          if (isReference(p)) {
            return false;
          }
          return p.name === lastParamInTheRoute;
        }) as ParameterObject | undefined) // Reference is not possible
      : { schema: { type: 'string' } };

  if (!lastParamInTheRouteDefinition) {
    throw new Error(`The path params ${lastParamInTheRoute} can't be found in parameters (${operationId})`);
  }

  let defaultDescription = `type: ${verb}\noperationId: ${operationId}\nurl: ${route}`;
  if (operation.summary) {
    defaultDescription += `\n\n${operation.summary}`;
  }
  if (operation.description) {
    defaultDescription += `\n\n${operation.description}`;
  }

  const description = formatDescription(defaultDescription);

  let output = `\n\n${description}`;

  const headerParam = headerType && headerType !== 'void' ? `${headerType};` : '';
  const queryParam = queryParamsType && queryParamsType !== 'void' ? `${queryParamsType}` : '';
  const requestBodyComponent = requestBodyTypes && requestBodyTypes !== 'void' ? `${requestBodyTypes}` : '';

  const isUpdateRequest = ['post', 'patch', 'put'].includes(verb);

  const fetchName = camel(componentName);

  const hasRequestBodyArrray = requestBodyComponent && requestBodyComponent.includes('[]');
  const body = hasRequestBodyArrray ? `{body: ${requestBodyComponent}}` : `${requestBodyComponent}`;
  const bodyProps = hasRequestBodyArrray ? `{body, ...props}` : 'props';

  // const generateEnabledBodyProps = () => {
  const definitionKey = Object.keys(schemasComponents?.schemas || {}).find(
    (key) => pascal(key) === requestBodyComponent
  );

  if (definitionKey && !hasRequestBodyArrray) {
    const scheme = schemasComponents?.schemas?.[definitionKey] as SchemaObject;
    const generatedBodyProps = Object.keys(scheme.properties as SchemaObject);
    const requiredBodyProps = generatedBodyProps.filter((p) => scheme.required?.includes(p));

    if (requiredBodyProps.length) {
      if (enabledParam === true) {
        enabledParam = 'hasDefinedProps(params,';
        enabledParam += requiredBodyProps.map((p) => `"${p}"`).join(', ');
      } else {
        enabledParam += ',';
        enabledParam += requiredBodyProps.map((p) => `"${p}"`).join(', ');
      }
    }
  }

  if (operation.requestBody && 'content' in operation.requestBody) {
    let generatedBodyProps = [];
    for (let contentType of Object.keys(operation.requestBody.content)) {
      if (
        contentType.startsWith('application/json') ||
        contentType.startsWith('application/ld+json') ||
        contentType.startsWith('application/octet-stream')
      ) {
        const schema = operation.requestBody.content[contentType].schema!;

        if ('properties' in schema) {
          // @ts-ignore
          generatedBodyProps.push(...Object.keys(schema.properties));
        }
      }
    }
  }

  if (enabledParam !== true) {
    enabledParam += ')';
  }

  const createQueryHooks = (emptyParams?: boolean) => {
    const key = emptyParams ? '' : `params`;
    const queryParamType = emptyParams ? '' : `Partial<${componentName}Params>`;
    const queryKey = emptyParams
      ? `["${componentName.toLowerCase()}"]`
      : `["${componentName.toLowerCase()}", params]`;
    const props = emptyParams ? `props?` : `params`;
    const propTest = emptyParams ? '' : `${props}: ${queryParamType}`;
    const createQuery = () => `
    export function get${componentName}QueryOptions(${propTest}) { 
      const enabled = ${enabledParam}

      return queryOptions({
        queryKey: ${queryKey},
        queryFn: enabled ?  () => ${fetchName}(${key}) : skipToken, 
      });
    }`;

    queryImports.push('query');
    return createQuery();
  };

  const generateProps = (props: ParameterObject[]) => {
    return props.map((item) => `["${item.name}"]: props["${item.name}"]`).join(',');
  };

  const generateBodyProps = () => {
    if (definitionKey && !hasRequestBodyArrray) {
      const scheme = schemasComponents?.schemas?.[definitionKey] as SchemaObject;
      const schemProperties = Object.keys(scheme.properties as SchemaObject);
      if (
        operation.requestBody &&
        'content' in operation.requestBody &&
        Object.keys(operation.requestBody.content)[0] === 'multipart/form-data'
      ) {
        let formData = `const body = new FormData()`;
        schemProperties.forEach((item) => {
          if (scheme.required?.includes(item)) {
            formData += `\nbody.append("${item}",  props["${item}"]);`;
          } else {
            formData += `\n if (props["${item}"] != null) {\n  body.append("${item}",  props["${item}"]);\n}`;
          }
        });
        return formData;
      }

      const generatedBodyProps = schemProperties
        .map((item: string) => `["${item}"]: props["${item}"]`)
        .join(',');
      return `const body = {${generatedBodyProps}}`;
    }

    if (operation.requestBody && 'content' in operation.requestBody) {
      let generatedBodyProps = [];
      let bodyData = '';
      const contentTypes = Object.keys(operation.requestBody.content);
      if (contentTypes.includes('multipart/form-data')) {
        console.log('UPDATE2');

        bodyData += `const body = new FormData()`;

        for (let contentType of contentTypes) {
          const schema = operation.requestBody.content[contentType].schema!;
          if ('properties' in schema) {
            const schemaProperties = Object.keys(schema.properties || []);
            for (let item of schemaProperties) {
              if (schema.required?.includes(item)) {
                bodyData += `\nbody.append("${item}",  props["${item}"].toString());`;
              } else {
                bodyData += `\n if (props["${item}"] != null) {\n  body.append("${item}",  props["${item}"].toString());\n}`;
              }
            }
          }
        }
        return bodyData;
      }
      for (let contentType of contentTypes) {
        if (
          contentType.startsWith('application/json') ||
          contentType.startsWith('application/ld+json') ||
          contentType.startsWith('application/octet-stream')
        ) {
          const schema = operation.requestBody.content[contentType].schema!;

          if ('properties' in schema) {
            // @ts-ignore
            generatedBodyProps.push(...Object.keys(schema.properties));
          }
        }
      }
      return `const body = {${generatedBodyProps.map((item) => `${item}: props["${item}"]`).join(',')}}`;
    }
  };

  const hasFormData = generateBodyProps()?.includes('FormData');
  const defaultHeaders = JSON.stringify({
    ContentType: hasFormData ? 'multipart/form-data' : 'application/json',
  });

  if (!requestBodyComponent && !paramsInPath.length && !queryParam && !headerParam) {
    output += `
    export const ${fetchName} = async () => {
      const result = await api.${verb}<${responseTypes}>("${route}");
      return result.data;
    }
    `;
  }
  if (!requestBodyComponent && paramsInPath.length && queryParam && !headerParam) {
    const config = isUpdateRequest ? 'undefined,{params}' : '{params}';
    output += `
    export type ${componentName}Params = {
      ${paramsTypes}
      ${queryParamsType}; 
    }

     export const ${fetchName} = async (props:${componentName}Params) => {
      const {${paramsInPath.join(', ')}, ...params} = props
      const result = await api.${verb}<${responseTypes}>(\`${route}\`, ${config})
      return result.data;
    }`;
  }
  if (!requestBodyComponent && paramsInPath.length && !queryParam && !headerParam) {
    output += `
    export type ${componentName}Params = {
      ${paramsTypes}
    }

    export const ${fetchName} = async (props: ${componentName}Params ) => {
      const result = await api.${verb}<${responseTypes}>(\`${route.replace(/\{/g, '{props.')}\`);
      return result.data;
    }
    `;
  }
  if (!requestBodyComponent && !paramsInPath.length && queryParam && !headerParam) {
    const config = isUpdateRequest ? 'null,{params}' : '{params}';
    output += `
    export type ${componentName}Params = { 
      ${queryParamsType} 
    }

    export const ${fetchName} = async (params: ${componentName}Params) => {
      const result = await api.${verb}<${responseTypes}>("${route}", ${config})
      return result.data;
    }
    `;
  }
  if (!requestBodyComponent && !paramsInPath.length && queryParam && headerParam) {
    const config = isUpdateRequest ? 'null,{headers, params: queryParams}' : '{headers, params: queryParams}';
    output += `
      export type ${componentName}Params = {
        ${headerParam}
        ${queryParamsType}
      }
      export const ${fetchName} = async (props: ${componentName}Params) => {
        const headers = {${generateProps(header)}}
        const queryParams = {${generateProps(queryParams)}}
        const result = await api.${verb}<${responseTypes}>("${route}", ${config})
        return result.data
      }`;
  }
  if (!requestBodyComponent && !paramsInPath.length && !queryParam && headerParam) {
    const config = isUpdateRequest ? 'null,{headers}' : '{headers}';
    output += `
      export type ${componentName}Params = {
        ${headerParam}
      };
  
      export const ${fetchName} = async (headers: ${componentName}Params) => {
        const result = await api.${verb}<${responseTypes}>("${route}", ${config});
        return result.data;
      }
      `;
  }
  if (requestBodyComponent && !paramsInPath.length && !queryParam && !headerParam) {
    output += `

    export type ${componentName}Params = ${requestBodyComponent}

    export const ${fetchName} = async (body: ${componentName}Params) => {
      const result = await api.${verb}<${responseTypes}>("${route}", body, {headers: ${defaultHeaders}})
      return result.data
    } 
      `;
  }
  if (requestBodyComponent && !paramsInPath.length && queryParam && !headerParam) {
    output += `
      export type ${componentName}Params =  ${body} & {
        ${queryParamsType}
      }

     export const ${fetchName} = async (${bodyProps}: ${componentName}Params) => {   
      ${generateBodyProps()}
      const params =  {${generateProps(queryParams)}}
      const result = await api.${verb}<${responseTypes}>("${route}", body, {params, headers: ${defaultHeaders}})
      return result.data
    }
    `;
  }
  if (requestBodyComponent && !paramsInPath.length && !queryParam && headerParam) {
    output += `
    export type ${componentName}Params =  ${body} & {
      ${headerParam}
    };

    export const ${fetchName} = async (${bodyProps}: ${componentName}Params) => {
      ${generateBodyProps()}
      const headers = null
      const result = await api.${verb}<${responseTypes}>("${route}", body, {headers})
      return result.data
    }
    `;
  }
  if (requestBodyComponent && !paramsInPath.length && queryParam && headerParam) {
    output += `
    export type ${componentName}Params = ${body} & {
      ${headerParam}
      ${queryParamsType}
    };
    export const ${fetchName} = async (${bodyProps}: ${componentName}Params) => {
      ${generateBodyProps()}
      const headers = null
      const params =  {${generateProps(queryParams)}}
      const result = await api.${verb}<${responseTypes}>("${route}", body, {headers, params})
      return result.data
    }
    `;
  }
  if (requestBodyComponent && paramsInPath.length && !queryParam && !headerParam) {
    output += `
    export type ${componentName}Params = ${body} & {
      ${headerParam}
      ${paramsTypes}
    };

    export const ${fetchName} = async (${bodyProps}: ${componentName}Params) => {
      ${generateBodyProps()}
      const result = await api.${verb}<${responseTypes}>(\`${route.replace(/\{/g, '{props.')}\`, body, {headers: ${defaultHeaders}})
      return result.data
    }
    `;
  }

  if (requestBodyComponent && paramsInPath.length && queryParam && !headerParam) {
    output += `
    export type ${componentName}Params = ${body} & {
      ${headerParam}
      ${paramsTypes}
      ${queryParamsType}
    };

    export const ${fetchName} = async (${bodyProps}: ${componentName}Params) => {
      ${generateBodyProps()}
      const params =  {${generateProps(queryParams)}}
      const result = await api.${verb}<${responseTypes}>(\`${route.replace(/\{/g, '{props.')}\`, body, {params, headers: ${defaultHeaders}})
      return result.data
    }
    `;
  }

  if (requestBodyComponent && paramsInPath.length && queryParam && headerParam) {
    output += `// TODO: NOT SUPPORTED requestBodyComponent && paramsInPath && queryParam && headerParam)`;
  }

  if (!requestBodyComponent && paramsInPath.length && !queryParam && headerParam) {
    const config = isUpdateRequest ? 'null,{headers}' : '{headers}';
    output += `
    export type ${componentName}Params = {
      ${headerParam}
      ${paramsTypes}
    };

    export const ${fetchName} = async (props: ${componentName}Params) => {
      const headers = {${generateProps(header)}}
      const result = await api.${verb}<${responseTypes}>(\`${route.replace(/\{/g, '{props.')}\`, ${config})
      return result.data
    }
    `;
  }

  if (!requestBodyComponent && paramsInPath.length && queryParam && headerParam) {
    output += `// TODO: NOT SUPPORTED (paramsInPath && queryParam && headerParam)`;
  }

  if (requestBodyComponent && paramsInPath.length && !queryParam && headerParam) {
    output += `// TODO: NOT SUPPORTED (requestBodyComponent && paramsInPath && headerParam)`;
  }

  output += createQueryHooks(!requestBodyComponent && !paramsInPath.length && !queryParam && !headerParam);

  return { implementation: output, imports, queryImports };
};
