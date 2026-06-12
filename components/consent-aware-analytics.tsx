'use client';

import { Suspense, useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { GoogleAnalytics } from '@/components/google-analytics';
import { COOKIE_CONSENT_CHANGED_EVENT, getCookieConsent } from '@/lib/cookie-consent';

export function ConsentAwareAnalytics() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

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

  if (process.env.NODE_ENV !== 'production' || !analyticsEnabled) {
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
