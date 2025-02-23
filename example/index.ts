import { resolve } from "node:path";
import { loadConfig } from "../src/config/loadConfig";
import { codegenerate } from "../src/index";

async function runTest() {
	try {
		const configPath = resolve(__dirname, "../example/configs/test-config.json");
		const config = await loadConfig(configPath);

		await codegenerate(config);
		console.log("Test completed successfully");
	} catch (error) {
		if (error instanceof Error) {
			console.error("Test failed:", error.message);
		} else {
			console.error("Test failed: Unknown error");
		}
		process.exit(1);
	}
}

runTest();
