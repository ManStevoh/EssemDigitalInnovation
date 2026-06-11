export const COOKIE_CONSENT_STORAGE_KEY = 'essem-cookie-consent';
export const COOKIE_CONSENT_VERSION = 1;
export const COOKIE_CONSENT_OPEN_EVENT = 'essem:cookie-consent-open';
export const COOKIE_CONSENT_CHANGED_EVENT = 'essem:cookie-consent-changed';

export type CookieConsent = {
  essential: true;
  analytics: boolean;
  timestamp: string;
  version: number;
};

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;

  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as CookieConsent;
    if (parsed.version !== COOKIE_CONSENT_VERSION) return null;

    return parsed;
  } catch {
    return null;
  }
}

export function saveCookieConsent(analytics: boolean): CookieConsent {
  const consent: CookieConsent = {
    essential: true,
    analytics,
    timestamp: new Date().toISOString(),
    version: COOKIE_CONSENT_VERSION,
  };

  localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new Event(COOKIE_CONSENT_CHANGED_EVENT));

  return consent;
}

export function openCookiePreferences(): void {
  window.dispatchEvent(new Event(COOKIE_CONSENT_OPEN_EVENT));
}
