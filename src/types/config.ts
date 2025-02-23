export interface OpenAPIConfig {
	/**
	 * OpenAPI specification source - can be a URL or local file path
	 * Supports JSON, YAML, or YML formats
	 */
	specSource: string | string[];

	/**
	 * Directory where generated files will be exported
	 */
	exportDir: string;
}
