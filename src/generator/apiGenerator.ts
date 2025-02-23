import { OpenAPIConfig } from '../types/config';
import { readFile, mkdir, writeFile } from 'fs/promises';
import { resolve } from 'path';
import axios from 'axios';
import * as yaml from 'yaml';
import { OpenAPIV3 } from 'openapi-types';
import { generateTypeDefinitions } from './schemaGenerator';
import { generateApiClient as generateApiClientCode } from './clientGenerator';

/**
 * Loads the OpenAPI specification from either a URL or local file
 */
async function loadOpenAPISpec(specSource: string): Promise<OpenAPIV3.Document> {
  try {
    if (specSource.startsWith('http')) {
      const response = await axios.get(specSource);
      return response.data;
    } else {
      const content = await readFile(specSource, 'utf-8');
      // Handle both JSON and YAML formats
      return specSource.endsWith('.json') 
        ? JSON.parse(content)
        : yaml.parse(content);
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to load OpenAPI spec: ${error.message}`);
    }
    throw new Error('Failed to load OpenAPI spec: Unknown error');
  }
}

/**
 * Main function to generate the API client
 */
export async function generateApiClient(config: OpenAPIConfig): Promise<void> {
  try {
    // Load the OpenAPI specification
    const spec = await loadOpenAPISpec(config.specSource);
    
    // Create export directory if it doesn't exist
    await mkdir(config.exportDir, { recursive: true });
    
    // Generate and write type definitions
    const typeDefinitions = generateTypeDefinitions(spec);
    await writeFile(
      resolve(config.exportDir, 'types.ts'),
      typeDefinitions,
      'utf-8'
    );
    
    // Generate and write API client
    const clientCode = generateApiClientCode(spec);
    await writeFile(
      resolve(config.exportDir, 'client.ts'),
      clientCode,
      'utf-8'
    );
    
    console.log('Generated TypeScript interfaces successfully');
    console.log('Generated API client successfully');
    
    // TODO: Implement remaining steps
    // 1. Generate Axios client methods for each path
    // 2. Generate mock data if enabled
    // 3. Add JSDoc comments if enabled
    
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to generate API client: ${error.message}`);
    }
    throw new Error('Failed to generate API client: Unknown error');
  }
} 