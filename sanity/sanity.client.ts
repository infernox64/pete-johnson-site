
// sanity.client.ts
import { createClient } from '@sanity/client';

const {
  NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET,
  NEXT_PUBLIC_SANITY_API_VERSION,
} = process.env;

const client = createClient({
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-default-project-id',
  dataset: NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-20', // use the date you defined
  useCdn: true, // `false` if you want to ensure fresh data
});

export default client;
