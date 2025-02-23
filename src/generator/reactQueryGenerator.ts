import type { OpenAPIV3 } from "openapi-types";
import type { OperationInfo } from "./clientGenerator";

function sanitizeString(operationId: string): string {
	return operationId.replace(/[^a-zA-Z0-9_]/g, "_");
}

function generateQueryOptions(operation: OperationInfo, spec: OpenAPIV3.Document): string {
	const { operationId: rawOperationId, parameters, requestBody } = operation;
	const operationId = sanitizeString(rawOperationId);

	const hasData = (parameters && parameters.length > 0) || operation.requestBody;

	// Helper to get required fields from a schema
	const getRequiredFields = (
		schema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject,
		context: { schemas: { [key: string]: OpenAPIV3.SchemaObject } }
	): string[] => {
		if ("$ref" in schema) {
			const refType = schema.$ref.split("/").pop();
			const refSchema = context.schemas[refType as string];
			return refSchema?.required?.map((p) => `'${p}'`) || [];
		}
		return schema.required?.map((p) => `'${p}'`) || [];
	};

	// Get required parameter names from both parameters and request body
	const requiredParams = [
		...(parameters?.filter((p) => p.required).map((p) => `'${p.name}'`) || []),
		...(requestBody && "content" in requestBody && requestBody.content?.["application/json"]?.schema
			? getRequiredFields(requestBody.content["application/json"].schema, {
					schemas: (spec.components?.schemas as { [key: string]: OpenAPIV3.SchemaObject }) || {},
				})
			: []),
		...(requestBody && "content" in requestBody && requestBody.content?.["multipart/form-data"]?.schema
			? getRequiredFields(requestBody.content["multipart/form-data"].schema, {
					schemas: (spec.components?.schemas as { [key: string]: OpenAPIV3.SchemaObject }) || {},
				})
			: []),
	];

	return `
export const ${operationId}QueryOptions = (
  apiClient: ApiClient,
  ${hasData ? `params: Partial<Parameters<ApiClient['${operationId}']>[0]>` : ""}
) => {
  const enabled = ${hasData ? `hasDefinedProps(params, ${requiredParams.join(", ")})` : "true"};
  return queryOptions({
    queryKey: ['${operationId}', ${hasData ? "params" : "undefined"}],
    queryFn: enabled ? async () => {
      const response = await apiClient.${operationId}(${hasData ? "params" : "undefined"});
      return response.data;
    } : skipToken,
  });
};`;
}

export function generateReactQuery(spec: OpenAPIV3.Document): string {
	const operations: OperationInfo[] = [];

	// Collect operations (same as in clientGenerator)
	Object.entries(spec.paths || {}).forEach(([path, pathItem]) => {
		if (!pathItem) return;

		["get", "post", "put", "delete", "patch"].forEach((method) => {
			const operation = pathItem[method as keyof OpenAPIV3.PathItemObject] as OpenAPIV3.OperationObject;
			if (!operation) return;

			operations.push({
				method: method.toUpperCase(),
				path,
				operationId: sanitizeString(operation.operationId || `${method}${path.replace(/\W+/g, "_")}`),
				summary: operation.summary,
				description: operation.description,
				parameters: [
					...(pathItem.parameters || []),
					...(operation.parameters || []),
				] as OpenAPIV3.ParameterObject[],
				requestBody: operation.requestBody as OpenAPIV3.RequestBodyObject,
				responses: operation.responses,
			});
		});
	});

	const title = spec.info.title.toLowerCase().replace(/\s+/g, "-");

	return `import { queryOptions, skipToken } from '@tanstack/react-query';
import type { ApiClient } from './${title}.client';

const hasDefinedProps = <T extends { [P in K]?: any }, K extends PropertyKey>(
  obj: T,
  ...keys: K[]
): obj is T & { [P in K]-?: Exclude<T[P], undefined> } => {
  return keys.every((k) => obj[k] !== undefined);
};

${operations.map((op) => generateQueryOptions(op, spec)).join("\n\n")}
`;
}
