'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { brandHoverClasses } from '@/lib/brand-guide';
import {
  COOKIE_CONSENT_OPEN_EVENT,
  getCookieConsent,
  saveCookieConsent,
} from '@/lib/cookie-consent';

export function CookieConsent() {
  const [bannerVisible, setBannerVisible] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = getCookieConsent();
    if (!consent) {
      setBannerVisible(true);
    } else {
      setAnalyticsEnabled(consent.analytics);
    }

    const handleOpenPreferences = () => {
      const current = getCookieConsent();
      setAnalyticsEnabled(current?.analytics ?? false);
      setPreferencesOpen(true);
      setBannerVisible(false);
    };

    window.addEventListener(COOKIE_CONSENT_OPEN_EVENT, handleOpenPreferences);
    return () => window.removeEventListener(COOKIE_CONSENT_OPEN_EVENT, handleOpenPreferences);
  }, []);

  const applyConsent = (analytics: boolean) => {
    saveCookieConsent(analytics);
    setAnalyticsEnabled(analytics);
    setBannerVisible(false);
    setPreferencesOpen(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      {bannerVisible && (
        <div
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-description"
          className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/95 p-4 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-sm sm:p-6"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <div className="flex items-start gap-3 sm:max-w-2xl">
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Cookie size={20} aria-hidden />
              </div>
              <div>
                <h2 id="cookie-consent-title" className="text-sm font-semibold text-foreground sm:text-base">
                  We value your privacy
                </h2>
                <p id="cookie-consent-description" className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  We use essential cookies for basic site functionality and optional analytics cookies
                  to understand how visitors use our website. You can accept all, reject non-essential
                  cookies, or manage your preferences. Read our{' '}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:shrink-0 sm:flex-row sm:items-center">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-full sm:w-auto"
                onClick={() => {
                  setAnalyticsEnabled(false);
                  setPreferencesOpen(true);
                }}
              >
                Customize
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-full sm:w-auto"
                onClick={() => applyConsent(false)}
              >
                Reject non-essential
              </Button>
              <Button
                type="button"
                size="sm"
                className={`w-full bg-primary text-primary-foreground sm:w-auto ${brandHoverClasses.button}`}
                onClick={() => applyConsent(true)}
              >
                Accept all
              </Button>
            </div>
          </div>
        </div>
      )}

      <Dialog open={preferencesOpen} onOpenChange={setPreferencesOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Cookie preferences</DialogTitle>
            <DialogDescription>
              Choose which cookies you allow. Essential cookies are required for the site to work and
              cannot be disabled.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-5 py-2">
            <div className="flex items-start justify-between gap-4 rounded-lg border border-border/60 p-4">
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">Essential</p>
                <p className="text-sm text-muted-foreground">
                  Required for core features such as security and remembering your cookie choice.
                </p>
              </div>
              <Switch checked disabled aria-readonly />
            </div>

            <div className="flex items-start justify-between gap-4 rounded-lg border border-border/60 p-4">
              <div className="space-y-1">
                <Label htmlFor="analytics-cookies" className="text-sm font-medium text-foreground">
                  Analytics
                </Label>
                <p className="text-sm text-muted-foreground">
                  Helps us understand traffic and improve the site using privacy-focused analytics
                  (Vercel Analytics). No advertising cookies are used.
                </p>
              </div>
              <Switch
                id="analytics-cookies"
                checked={analyticsEnabled}
                onCheckedChange={setAnalyticsEnabled}
              />
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button type="button" variant="outline" onClick={() => setPreferencesOpen(false)}>
              Cancel
            </Button>
            <Button type="button" onClick={() => applyConsent(analyticsEnabled)}>
              Save preferences
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
