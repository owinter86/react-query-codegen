import Case from 'case';
import chalk from 'chalk';
import { readFileSync, writeFileSync, readdir, mkdirSync } from 'fs';
import { OperationObject, PathItemObject } from 'openapi3-ts';
import { join, parse } from 'path';
import { convertSwaggerFile } from './convertSwaggerFile.js';
import { createHook } from './generateHooks.js';
import { generateImports } from './generateImports.js';
import { generateSchemas } from './generateSchemas.js';

export function importSpecs({
  sourceUrls,
  sourceDirectory,
  exportDirectory,
  apiDirectory,
  headerFilters,
}: {
  sourceUrls?: { name: string; url: string }[];
  sourceDirectory?: string;
  exportDirectory: string;
  apiDirectory: string;
  headerFilters?: string[];
}) {
  if (sourceUrls) {
    sourceUrls.forEach(async (d) => {
      const data = await fetch(d.url).then((res) => res.text());
      // data response is raw text, check if it is yaml or json
      let isYaml = true;
      try {
        JSON.parse(data);
        isYaml = false;
      } catch (error) {
        return false;
      }

      const format = isYaml ? 'yaml' : 'json';

      make({
        data,
        format,
        filename: d.name,
        exportDirectory,
        headerFilters,
        apiDirectory,
      });
    });
  }
  if (sourceDirectory) {
    readdir(sourceDirectory, async (err, filenames) => {
      if (err) {
        console.log(err);
        throw err;
      }
      filenames.forEach(async (filename) => {
        try {
          const data = readFileSync(join(process.cwd(), sourceDirectory + '/' + filename), 'utf-8');
          const { ext } = parse(sourceDirectory + '/' + filename);
          const format = ['.yaml', '.yml'].includes(ext.toLowerCase()) ? 'yaml' : 'json';
          make({
            data,
            format,
            filename,
            exportDirectory,
            headerFilters,
            apiDirectory,
          });
        } catch (error) {
          if ((error as any).code === 'EISDIR') {
            console.log(chalk.red('nested folder structure not supported'));
            return;
          }
          console.log(chalk.red(`[${filename}]:`), chalk.red(error));
        }
      });
    });
  }
}

async function make({
  data,
  format,
  filename,
  exportDirectory,
  headerFilters,
  apiDirectory,
}: {
  data: string;
  format: 'yaml' | 'json';
  filename: string;
  exportDirectory: string;
  headerFilters?: string[];
  apiDirectory: string;
}) {
  let spec = await convertSwaggerFile(data, format);

  const formattedFileName = Case.camel(`useQueries, ${filename.split('.')[0]}`);
  const schemaName = `${formattedFileName}.schema`;
  const hooksName = `${formattedFileName}`;
  const name = filename.split('.')[0];
  mkdirSync(join(process.cwd(), `${exportDirectory}/${name}`), { recursive: true });

  const operationIds: string[] = [];

  let hooks = `
  function hasDefinedProps<T extends { [P in K]?: any }, K extends PropertyKey>(
    obj: T,
    ...keys: K[]
  ): obj is T & { [P in K]-?: Exclude<T[P], undefined> } {
    return keys.every((k) => obj[k] !== undefined);
  }
  `;
  let schemaImportsArray = [] as string[];
  let collectedQueryImports = [] as ('query' | 'mutation' | 'infiniteQuery')[];
  Object.entries(spec.paths).forEach(([route, verbs]: [string, PathItemObject]) => {
    Object.entries(verbs).forEach(([verb, operation]: [string, OperationObject]) => {
      if (['get', 'post', 'patch', 'put', 'delete'].includes(verb) && !operation.deprecated) {
        const { implementation, imports, queryImports } = createHook({
          operation,
          verb,
          route: (spec.basePath || '') + route,
          operationIds,
          parameters: verbs.parameters,
          schemasComponents: spec.components,
          headerFilters,
        });

        hooks += implementation;
        imports.forEach((element) => {
          const formattedImport = element.replace('[]', '');

          if (
            !schemaImportsArray.includes(formattedImport) &&
            element !== 'void' &&
            element !== 'string' &&
            !element.includes('{') &&
            !element.includes('unknown')
          ) {
            schemaImportsArray.push(formattedImport);
          }
        });
        queryImports.forEach((element) => {
          if (!schemaImportsArray.includes(element)) {
            collectedQueryImports.push(element);
          }
        });
      }
    });
  });

  const imports = generateImports({
    apiDirectory,
    schemaName,
    schemaImports: schemaImportsArray,
    queryImports: collectedQueryImports,
  });

  writeFileSync(join(process.cwd(), `${exportDirectory}/${name}/${hooksName}.tsx`), imports + hooks);

  writeFileSync(
    join(process.cwd(), `${exportDirectory}/${name}/${schemaName}.tsx`),
    generateSchemas({ spec })
  );
  console.log(chalk.green(`🎉 [${filename}] Your OpenAPI spec has been converted into react query hooks`));
}
