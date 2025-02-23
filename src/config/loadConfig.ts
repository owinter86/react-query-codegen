import { readFile } from "node:fs/promises";
import type { OpenAPIConfig } from "../types/config";

export async function loadConfig(configPath: string): Promise<OpenAPIConfig> {
	try {
		const configContent = await readFile(configPath, "utf-8");
		const config = JSON.parse(configContent) as OpenAPIConfig;

		// Validate required fields
		if (!config.specSource) {
			throw new Error("specSource is required in configuration");
		}

		if (!config.exportDir) {
			throw new Error("exportDir is required in configuration");
		}

		return config;
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Failed to load configuration: ${error.message}`);
		}
		throw new Error("Failed to load configuration: Unknown error");
	}
}
