import { importSpecs } from '../dist/importSpecs.js';

importSpecs({
  sourceUrls: [
    {
      name: 'location',
      url: 'https://developer.yourtravis.com/apis/6551f664dcc3f80001c43645/documentation/raw',
    },
  ],
  sourceDirectory: 'test/specs-private',
  exportDirectory: 'test/generated',
  apiDirectory: '../../api',
  queryClientDir: '../../queryClient',
  headerFilters: ['X-Parse-Session-Token', 'X-Golf-Platform', 'X-JWT-Assertion'],
});
