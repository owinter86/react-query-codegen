import type { OpenAPIV3 } from "openapi-types";

function sanitizeOperationId(operationId: string): string {
	return operationId.replace(/[^a-zA-Z0-9_]/g, "_");
}

export function generateAxiosInstance(spec: OpenAPIV3.Document): string {
	const title = sanitizeOperationId(spec.info.title.toLowerCase().replace(/\s+/g, "-"));

	return `import type { AxiosInstance } from 'axios';

let ${title}Instance: AxiosInstance;

export function configure${title}Instance(instance: AxiosInstance) {
  ${title}Instance = instance;
}

export function get${title}Instance(): AxiosInstance {
  if (!${title}Instance) {
    throw new Error('${title} API instance not configured. Call configure${title}Instance first.');
  }
  return ${title}Instance;
}`;
}
