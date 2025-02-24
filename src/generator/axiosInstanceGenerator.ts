import type { OpenAPIV3 } from "openapi-types";
import { specTitle } from "../utils";

export function generateAxiosInstance(spec: OpenAPIV3.Document): string {
	const title = specTitle(spec);

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
