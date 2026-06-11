'use client';

import { openCookiePreferences } from '@/lib/cookie-consent';

type CookieSettingsLinkProps = {
  className?: string;
  children?: React.ReactNode;
};

export function CookieSettingsLink({
  className,
  children = 'Cookie settings',
}: CookieSettingsLinkProps) {
  return (
    <button
      type="button"
      onClick={openCookiePreferences}
      className={className}
    >
      {children}
    </button>
  );
}
