import { importSpecs } from '../dist/importSpecs.js';

importSpecs({
  sourceUrls: [
    {
      name: 'locations',
      url: 'https://developer.yourtravis.com/apis/6551f664dcc3f80001c43645/documentation/raw',
    },
    {
      name: 'bookings',
      url: 'https://developer.yourtravis.com/apis/65af901265a19f00010aad03/documentation/raw',
    },
    {
      name: 'driver',
      url: 'https://developer.yourtravis.com/apis/664df3a089431e0001d72c9b/documentation/raw',
    },
    {
      name: 'vehicles',
      url: 'https://developer.yourtravis.com/apis/664df0135b6a0d0001d9bb5e/documentation/raw',
    },
    {
      name: 'fuel-cards',
      url: 'https://developer.yourtravis.com/apis/663a39195182e000017f0276/documentation/raw',
    },
  ],
  // sourceDirectory: 'test/specs-private',
  exportDirectory: 'test/generated',
  apiDirectory: '../../api',
  queryClientDir: '../../queryClient',
  headerFilters: ['X-Parse-Session-Token', 'X-Golf-Platform', 'X-JWT-Assertion'],
});
