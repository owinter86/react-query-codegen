import { resolve } from 'path';
import { generateApiClient } from '../src/generator/apiGenerator';
import { loadConfig } from '../src/config/loadConfig';

async function runTest() {
  try {
    const configPath = resolve(__dirname, '../../test/configs/test-config.json');
    const config = await loadConfig(configPath);
    
    await generateApiClient(config);
    console.log('Test completed successfully');
  } catch (error) {
    if (error instanceof Error) {
      console.error('Test failed:', error.message);
    } else {
      console.error('Test failed: Unknown error');
    }
    process.exit(1);
  }
}

runTest(); 