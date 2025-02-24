import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import axios from "axios";
import type { OpenAPIV3 } from "openapi-types";
import * as yaml from "yaml";
import { generateAxiosInstance } from "./generator/axiosInstanceGenerator";
import { generateApiClient } from "./generator/clientGenerator";
import { generateReactQuery } from "./generator/reactQueryGenerator";
import { generateTypeDefinitions } from "./generator/schemaGenerator";
import type { OpenAPIConfig } from "./types/config";
import { specTitle } from "./utils";

/**
 * Loads the OpenAPI specification from either a URL or local file
 */
async function loadOpenAPISpec(specSource: string): Promise<OpenAPIV3.Document> {
	try {
		if (specSource.startsWith("http")) {
			const response = await axios.get(specSource);
			return response.data;
		}
		const content = await readFile(specSource, "utf-8");
		// Handle both JSON and YAML formats
		return specSource.endsWith(".json") ? JSON.parse(content) : yaml.parse(content);
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Failed to load OpenAPI spec: ${error.message}`);
		}
		throw new Error("Failed to load OpenAPI spec: Unknown error");
	}
}

function sanitizeOperationId(operationId: string): string {
	return operationId.replace(/[^a-zA-Z0-9_]/g, "_");
}

/**
 * Main function to generate the API client
 */
export async function codegenerate(config: OpenAPIConfig): Promise<void> {
	try {
		// Load specs
		const specs = Array.isArray(config.specSource)
			? await Promise.all(config.specSource.map(loadOpenAPISpec))
			: [await loadOpenAPISpec(config.specSource)];
		// Generate for each spec...
		for (const spec of specs) {
			// Create export directory if it doesn't exist
			await mkdir(config.exportDir, { recursive: true });

			const title = specTitle(spec);

			// Generate and write type definitions
			const typeDefinitions = generateTypeDefinitions(spec);
			await writeFile(resolve(config.exportDir, `${title}.schema.ts`), typeDefinitions, "utf-8");

			// Generate and write axios instance
			const axiosInstance = generateAxiosInstance(spec);
			await writeFile(resolve(config.exportDir, `${title}.axios.ts`), axiosInstance, "utf-8");

			// Generate and write API client
			const clientCode = generateApiClient(spec);
			await writeFile(resolve(config.exportDir, `${title}.client.ts`), clientCode, "utf-8");

			// Generate and write React Query options
			const queryCode = generateReactQuery(spec);
			await writeFile(resolve(config.exportDir, `${title}.queryOptions.ts`), queryCode, "utf-8");
		}
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Failed to generate API client: ${error.message}`);
		}
		throw new Error("Failed to generate API client: Unknown error");
	}
}
