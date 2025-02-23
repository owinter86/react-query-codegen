#!/usr/bin/env node

import { resolve } from "node:path";
import { loadConfig } from "./config/loadConfig";
import { generateApiClient } from "./generator/apiGenerator";

async function main() {
	try {
		const configPath = process.argv[2];

		if (!configPath) {
			console.error("Please provide a path to your configuration file");
			process.exit(1);
		}

		const resolvedConfigPath = resolve(process.cwd(), configPath);
		const config = await loadConfig(resolvedConfigPath);

		await generateApiClient(config);

		console.log("API client generated successfully!");
	} catch (error) {
		if (error instanceof Error) {
			console.error("Error:", error.message);
		} else {
			console.error("Error: Unknown error occurred");
		}
		process.exit(1);
	}
}

main();
