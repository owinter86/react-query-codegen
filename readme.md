# @lightbase/react-query-codegen

Generate type-safe Axios API clients and React Query hooks from OpenAPI specifications.

## Features

- 🔄 Automatic code generation from OpenAPI/Swagger specs
- 📝 Type-safe API client functions
- 🎣 React Query integration with query options
- 📦 Support for multiple API specifications
- 📤 Handle multipart/form-data uploads
- 💪 Full TypeScript support
- 🔒 Type-safe request/response handling

## Installation

```bash
npm install @lightbase/react-query-codegen
```

## Quick Start

### 1. Configure Generation

Create a script to generate your API code (e.g., `scripts/generate.ts`):

```typescript
import { codegenerate } from '@lightbase/react-query-codegen';
await codegenerate({
  specSource: './specs/api.yaml', // or array of specs
  exportDir: './src/generated'
});
```

### 2. Configure API Instance

```typescript
import axios from "axios";
import { setApiClient } from "../generated/apiClient";

const api = axios.create({ baseURL: "https://api.diks.acc.lightbase.nl" });
// Set the API client instance to be used by the generated client functions
setApiClient(api);

```

### 3. Use Generated Query Options

```typescript
import { useQuery } from '@tanstack/react-query';
import { AccountFavoritesQueryOptions } from './src/generated/api';

const { data, isLoading, error } = useQuery(AccountFavoritesQueryOptions());
```

## Generated Files

For each API specification, the following files are generated:

- `{api}.schema.ts` - TypeScript types for requests/responses
- `apiClient.ts` - Global Axios instance configuration to be used by all generated clients
- `{api}.client.ts` - Type-safe API client functions
- `{api}.queryOptions.ts` - React Query integration

### Multiple API Specifications

```typescript
await codegenerate({
specSource: [
'./specs/auth-api.yaml',
'./specs/user-api.yaml',
'./specs/payment-api.yaml'
],
exportDir: './src/generated'
});
```