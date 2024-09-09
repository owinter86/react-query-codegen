import { importSpecs } from '../dist/importSpecs.js';

importSpecs({
  sourceUrls: [
    { name: 'openapi', url: 'https://api.diks.acc.lightbase.nl/_compas/structure.json?format=openapi' },
  ],
  sourceDirectory: 'test/specs-private',
  exportDirectory: 'test/generated',
  apiDirectory: '../../api',
  headerFilters: ['X-Parse-Session-Token', 'X-Golf-Platform', 'X-JWT-Assertion'],
});
