/** True on Vercel production and preview deployments. */
export function isDeployedEnvironment(): boolean {
  return (
    process.env.NODE_ENV === 'production' ||
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview' ||
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
  );
}

/** Allow GA4 on localhost when explicitly enabled for Real-Time testing. */
export function isGa4Enabled(): boolean {
  if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) return false;
  if (isDeployedEnvironment()) return true;
  return process.env.NEXT_PUBLIC_ANALYTICS_DEV === 'true';
}
