import type { OpenAPIV3 } from "openapi-types";

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

function sanitizeOperationId(operationId: string): string {
	return operationId.replace(/[^a-zA-Z0-9_]/g, "_");
}

function sanitizePropertyName(name: string): string {
	return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name) ? name : `'${name}'`;
}

function resolveSchema(
	schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject | undefined,
	spec: OpenAPIV3.Document
): OpenAPIV3.SchemaObject | undefined {
	if (!schema) return undefined;
	if ("$ref" in schema) {
		const index = schema.$ref.split("/").pop();
		return spec.components?.schemas?.[index as string] as OpenAPIV3.SchemaObject;
	}
	return schema;
}

function generateAxiosMethod(operation: OperationInfo, spec: OpenAPIV3.Document): string {
	const {
		method,
		path,
		operationId: rawOperationId,
		summary,
		description,
		parameters,
		requestBody,
		responses,
	} = operation;
	const operationId = rawOperationId || `${method.toLowerCase()}${path.replace(/\W+/g, "_")}`;
	const sanitizedOperationId = sanitizeOperationId(operationId);

	// Generate JSDoc
	const jsDocLines = ["/**"];
	if (summary) jsDocLines.push(` * ${summary}`);
	if (description) jsDocLines.push(` * ${description}`);

	// Add parameter descriptions
	parameters?.forEach((param) => {
		const desc = param.description ? ` - ${param.description}` : "";
		jsDocLines.push(
			` * @param ${param.in === "path" ? "params." : param.in === "query" ? "query." : ""}${param.name}${desc}`
		);
	});

	if (requestBody && "description" in requestBody) {
		jsDocLines.push(` * @param data - ${requestBody.description}`);
	}

	// Add return type description
	const responseDetails = Object.entries(responses).find(([code]) => code.startsWith("2"));
	if (responseDetails) {
		const [code, response] = responseDetails;
		const responseObj = response as OpenAPIV3.ResponseObject;
		const desc = "description" in responseObj ? responseObj.description : "";
		const contentType = responseObj.content?.["application/json"]?.schema;
		const typeName = `${sanitizedOperationId}Response${code}`;

		if (contentType) {
			if (desc) {
				jsDocLines.push(` * @returns ${desc}`);
			}
			jsDocLines.push(` * @see ${typeName}`);
		} else if (desc) {
			jsDocLines.push(` * @returns ${desc}`);
		}
	}

	jsDocLines.push(" */");

	const urlParams = parameters?.filter((p) => p.in === "path") || [];
	const queryParams = parameters?.filter((p) => p.in === "query") || [];

	const isFormData = requestBody && "content" in requestBody && requestBody.content?.["multipart/form-data"];

	const formDataSchema = isFormData
		? resolveSchema(requestBody.content["multipart/form-data"].schema, spec)
		: undefined;

	const requestBodySchema = requestBody?.content?.["application/json"]?.schema
		? resolveSchema(requestBody.content["application/json"].schema, spec)
		: undefined;

	// Build data type parts
	const dataProps: string[] = [];

	// Add path and query parameters
	urlParams.forEach((p) => {
		const safeName = sanitizePropertyName(p.name);
		dataProps.push(`${safeName}: ${getTypeFromParam(p)}`);
	});
	queryParams.forEach((p) => {
		const safeName = sanitizePropertyName(p.name);
		dataProps.push(`${safeName}${p.required ? "" : "?"}: ${getTypeFromParam(p)}`);
	});

	// Add request body type if it exists
	const hasData = (parameters && parameters.length > 0) || operation.requestBody;
	const dataType = hasData
		? requestBody
			? `${sanitizedOperationId}Request & { ${dataProps.join("; ")} }`
			: `{ ${dataProps.join("; ")} }`
		: "undefined";

	// Get response type from 2xx response
	const successResponse = Object.entries(responses).find(([code]) => code.startsWith("2"));
	const responseType = successResponse ? `${sanitizedOperationId}Response${successResponse[0]}` : "any";

	const urlWithParams = urlParams.length > 0 ? path.replace(/{(\w+)}/g, "${data.$1}") : path;

	const title = sanitizeOperationId(spec.info.title.toLowerCase().replace(/\s+/g, "-"));

	const methodBody = [
		`const url = \`${urlWithParams}\`;`,
		queryParams.length > 0
			? `const queryData = {
				${queryParams.map((p) => `["${p.name}"]: data["${p.name}"]`).join(",\n				")}
			};`
			: "",
		requestBodySchema?.properties
			? `const bodyData = {
				${Object.entries(requestBodySchema.properties)
					.map(([key]) => `${key}: data.${key}`)
					.join(",\n				")}
			};`
			: "",
		formDataSchema?.properties
			? `const formData = new FormData();
			${Object.entries(formDataSchema.properties)
				.map(([key, prop]) => {
					const schemaProperty = prop as OpenAPIV3.SchemaObject;
					const isBinary = schemaProperty.format === "binary";
					return formDataSchema?.required?.includes(key)
						? `formData.append("${key}", ${isBinary ? "" : "String("}${queryParams.length > 0 ? "bodyData" : "data"}.${key}${isBinary ? "" : ")"});`
						: `if (${queryParams.length > 0 ? "bodyData" : "data"}.${key} != null) {
							formData.append("${key}", ${isBinary ? "" : "String("}${queryParams.length > 0 ? "bodyData" : "data"}.${key}${isBinary ? "" : ")"});
						}`;
				})
				.join("\n			")}`
			: "",
		`return get${title}Instance().${method.toLowerCase()}<${responseType}>(url, {
			${queryParams.length > 0 ? "params: queryData," : ""}
			${requestBody ? `data: ${isFormData ? "formData" : "bodyData"},` : ""}
			${isFormData ? `headers: { 'Content-Type': 'multipart/form-data', ...headers },` : "headers"}
		});`,
	]
		.filter(Boolean)
		.join("\n	");

	return `
	${jsDocLines.join("\n	")}
	export async function ${sanitizedOperationId}(data${hasData ? `: ${dataType}` : "?: undefined"}, headers?: Record<string, string>): Promise<AxiosResponse<${responseType}>> {
		${methodBody}
	}`;
}

function getTypeFromParam(param: OpenAPIV3.ParameterObject): string {
	if ("schema" in param) {
		const schema = param.schema as OpenAPIV3.SchemaObject;
		switch (schema.type) {
			case "string":
				return "string";
			case "integer":
			case "number":
				return "number";
			case "boolean":
				return "boolean";
			case "array":
				return "Array<any>"; // You might want to make this more specific
			default:
				return "any";
		}
	}
	return "any";
}

export function generateApiClient(spec: OpenAPIV3.Document): string {
	const operations: OperationInfo[] = [];

	const resolveParameters = (
		parameters: (OpenAPIV3.ParameterObject | OpenAPIV3.ReferenceObject)[]
	): OpenAPIV3.ParameterObject[] => {
		return parameters.map((p) => {
			if ("$ref" in p) {
				const index = p.$ref.split("/").pop();
				return spec.components?.schemas?.[index as string] as OpenAPIV3.ParameterObject;
			}
			return p;
		});
	};

	const resolveRequestBody = (
		requestBody: OpenAPIV3.RequestBodyObject | OpenAPIV3.ReferenceObject | undefined
	): OpenAPIV3.RequestBodyObject | undefined => {
		if (!requestBody) return undefined;
		if ("$ref" in requestBody) {
			console.log(requestBody);
			const index = requestBody.$ref.split("/").pop();
			return spec.components?.schemas?.[index as string] as OpenAPIV3.RequestBodyObject;
		}
		return requestBody;
	};

	// Collect all operations
	Object.entries(spec.paths || {}).forEach(([path, pathItem]) => {
		if (!pathItem) return;
		["get", "post", "put", "delete", "patch"].forEach((method) => {
			const operation = pathItem[method as keyof OpenAPIV3.PathItemObject] as OpenAPIV3.OperationObject;
			if (!operation) return;

			operations.push({
				method: method.toUpperCase(),
				path,
				operationId: sanitizeOperationId(operation.operationId || `${method}${path.replace(/\W+/g, "_")}`),
				summary: operation.summary,
				description: operation.description,
				parameters: resolveParameters([...(pathItem.parameters || []), ...(operation.parameters || [])]),
				requestBody: resolveRequestBody(operation.requestBody),
				responses: operation.responses,
			});
		});
	});

	// Collect actually used types
	const usedTypes = new Set<string>();
	operations.forEach((op) => {
		// Add request type if method has request body
		if (op.requestBody) {
			usedTypes.add(`${op.operationId}Request`);
		}
		// Add only the 2xx response type that's used
		const successResponse = Object.entries(op.responses).find(([code]) => code.startsWith("2"));
		if (successResponse) {
			usedTypes.add(`${op.operationId}Response${successResponse[0]}`);
		}
	});

	const title = sanitizeOperationId(spec.info.title.toLowerCase().replace(/\s+/g, "-"));

	// Generate the client class
	return `import { get${title}Instance } from './${title}.axios';
import type { AxiosResponse } from 'axios';
import type { 
	${Array.from(usedTypes).join(",\n	")}
} from './${title}.schema';


${operations.map((op) => generateAxiosMethod(op, spec)).join("\n\n")}`;
}
