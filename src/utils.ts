import type { OpenAPIV3 } from "openapi-types";

export function camelCase(str: string): string {
	return str
		.toLowerCase()
		.replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
		.replace(/^[A-Z]/, (c) => c.toLowerCase());
}

export function pascalCase(str: string): string {
	return str
		.toLowerCase()
		.replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
		.replace(/^[a-z]/, (c) => c.toUpperCase());
}

export function sanitizePropertyName(name: string): string {
	return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name) ? name : `'${name}'`;
}

export function sanitizeTypeName(name: string): string {
	return name.replace(/[^a-zA-Z0-9_]/g, "_");
}

export function specTitle(spec: OpenAPIV3.Document): string {
	return camelCase(spec.info.title.toLowerCase().replace(/\s+/g, "-"));
}
