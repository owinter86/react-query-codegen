import { OpenAPIV3 } from 'openapi-types';

interface SchemaContext {
  schemas: { [key: string]: OpenAPIV3.SchemaObject };
  generatedTypes: Set<string>;
}

/**
 * Converts OpenAPI schema type to TypeScript type
 */
function sanitizePropertyName(name: string): string {
  // If property name has special characters, wrap it in quotes
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name) ? name : `'${name}'`;
}

function getTypeFromSchema(schema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject, context: SchemaContext): string {
  if (!schema) return 'any';

  if ('$ref' in schema) {
    const refType = schema.$ref.split('/').pop()!;
    return sanitizeString(refType);
  }

  // Handle enum types properly
  if (schema.enum) {
    return schema.enum.map(e => typeof e === 'string' ? `'${e}'` : e).join(' | ');
  }

  switch (schema.type) {
    case 'string':
      return 'string';
    case 'number':
    case 'integer':
      return 'number';
    case 'boolean':
      return 'boolean';
    case 'array':
      const itemType = getTypeFromSchema(schema.items as OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject, context);
      return `Array<${itemType}>`;
    case 'object':
      if (schema.properties) {
        const properties = Object.entries(schema.properties)
          .map(([key, prop]) => {
            const isRequired = schema.required?.includes(key);
            const propertyType = getTypeFromSchema(prop as OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject, context);
            const safeName = sanitizePropertyName(key);
            return `  ${safeName}${isRequired ? '' : '?'}: ${propertyType};`;
          })
          .join('\n');
        return `{\n${properties}\n}`;
      }
      if (schema.additionalProperties) {
        const valueType = typeof schema.additionalProperties === 'boolean' 
          ? 'any' 
          : getTypeFromSchema(schema.additionalProperties as OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject, context);
        return `Record<string, ${valueType}>`;
      }
      return 'Record<string, any>';
    default:
      return 'any';
  }
}

function generateTypeDefinition(badName: string, schema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject, context: SchemaContext): string {
  const description = !('$ref' in schema) && schema.description 
    ? `/**\n * ${schema.description}\n */\n`
    : '';

  const name = sanitizeString(badName)

  const typeValue = getTypeFromSchema(schema, context);
  
  // Use 'type' for primitives, unions, and simple types
  // Use 'interface' only for complex objects with properties
  const isInterface = !('$ref' in schema) && schema.type === 'object' && schema.properties;
  
  return isInterface
    ? `${description}export interface ${name} ${typeValue}\n\n`
    : `${description}export type ${name} = ${typeValue}\n\n`;
}

function sanitizeString(operationId: string): string {
  return operationId.replace(/[^a-zA-Z0-9_]/g, '_');
}

/**
 * Generates TypeScript interface definitions from OpenAPI schemas
 */
export function generateTypeDefinitions(spec: OpenAPIV3.Document): string {
  const context: SchemaContext = {
    schemas: spec.components?.schemas as { [key: string]: OpenAPIV3.SchemaObject } || {},
    generatedTypes: new Set()
  };

  let output = '/* Generated TypeScript Definitions */\n\n';

  // Generate types for all schema definitions
  for (const [name, schema] of Object.entries(context.schemas)) {
    if (context.generatedTypes.has(name)) continue;
    output += generateTypeDefinition(name, schema, context);
    context.generatedTypes.add(name);
  }

  // Generate request/response types
  if (spec.paths) {
    for (const [path, pathItem] of Object.entries(spec.paths)) {
      for (const [method, operation] of Object.entries(pathItem as OpenAPIV3.PathItemObject)) {
        if (method === '$ref') continue;

        const operationObject = operation as OpenAPIV3.OperationObject;
        if (!operationObject) continue;

        // Generate request body type
        if (operationObject.requestBody) {
          const content = (operationObject.requestBody as OpenAPIV3.RequestBodyObject).content;
          const jsonContent = content['application/json'] || content['multipart/form-data']
          if (jsonContent?.schema) {
            const typeName = sanitizeString(`${operationObject.operationId}Request`);
            output += generateTypeDefinition(typeName, jsonContent.schema as OpenAPIV3.SchemaObject, context);
          }
        }

        // Generate response types
        if (operationObject.responses) {
          for (const [code, response] of Object.entries(operationObject.responses)) {
            const responseObj = response as OpenAPIV3.ResponseObject;
            const content = responseObj.content?.['application/json'];
            if (content?.schema) {
              const typeName = sanitizeString(`${operationObject.operationId || `${method.toLowerCase()}${path.replace(/\W+/g, '_')}`}Response${code}`);
              output += generateTypeDefinition(typeName, content.schema as OpenAPIV3.SchemaObject, context);
            }
          }
        }
      }
    }
  }

  return output;
} 