import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Legacy Base44 client retained for generated pages that are not part of the current landing page.
export const base44 = createClient({
  appId: "68de6f4406059aa7571edbed", 
  requiresAuth: false
});
