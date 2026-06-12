'use client';

import { Suspense, useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { GoogleAnalytics } from '@/components/google-analytics';
import { isDeployedEnvironment, isGa4Enabled } from '@/lib/analytics-env';
import { COOKIE_CONSENT_CHANGED_EVENT, getCookieConsent } from '@/lib/cookie-consent';

export function ConsentAwareAnalytics() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const isDev = process.env.NODE_ENV === 'development';

  useEffect(() => {
    const sync = () => {
      setAnalyticsEnabled(getCookieConsent()?.analytics === true);
    };

    sync();
    window.addEventListener(COOKIE_CONSENT_CHANGED_EVENT, sync);
    window.addEventListener('storage', sync);

    return () => {
      window.removeEventListener(COOKIE_CONSENT_CHANGED_EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  if (!analyticsEnabled) {
    return null;
  }

  // Local dev: log Vercel Analytics events to the browser console (debug mode).
  if (isDev) {
    return (
      <>
        <Analytics debug />
        {isGa4Enabled() ? (
          <Suspense fallback={null}>
            <GoogleAnalytics />
          </Suspense>
        ) : null}
      </>
    );
  }

  if (!isDeployedEnvironment()) {
    return null;
  }

  return (
    <>
      <Analytics />
      <Suspense fallback={null}>
        <GoogleAnalytics />
      </Suspense>
    </>
  );
}
