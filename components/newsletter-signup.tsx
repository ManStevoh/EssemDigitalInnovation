'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MARKETING_CONSENT_TEXT, newsletterSchema } from '@/lib/newsletter-schema';
import { brandHoverClasses } from '@/lib/brand-guide';

type Status = 'idle' | 'loading' | 'success' | 'error';

type NewsletterSignupProps = {
  compact?: boolean;
  source?: string;
};

export function NewsletterSignup({ compact = false, source = 'website-footer' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const result = newsletterSchema.safeParse({
      email,
      marketingConsent: marketingConsent ? true : undefined,
      source,
    });

    if (!result.success) {
      setStatus('error');
      setMessage(result.error.errors[0]?.message ?? 'Invalid email.');
      return;
    }

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      });
      const data = await response.json();

      if (!response.ok) {
        setStatus('error');
        setMessage(data.error ?? 'Subscription failed. Please try again.');
        return;
      }

      setStatus('success');
      setMessage('You are subscribed. Thank you!');
      setEmail('');
      setMarketingConsent(false);
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <div className={compact ? 'w-full' : 'w-full max-w-md'}>
      <form onSubmit={handleSubmit} className="space-y-3" noValidate>
        <div className="flex flex-col sm:flex-row gap-2">
          <label htmlFor={`newsletter-email-${source}`} className="sr-only">
            Email for newsletter
          </label>
          <input
            id={`newsletter-email-${source}`}
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== 'idle') setStatus('idle');
            }}
            placeholder="you@company.com"
            disabled={status === 'loading'}
            className="flex-1 px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
            required
          />
          <Button
            type="submit"
            disabled={status === 'loading' || !marketingConsent}
            className={`shrink-0 bg-primary text-primary-foreground ${brandHoverClasses.button}`}
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            <Send size={16} aria-hidden />
          </Button>
        </div>

        <label className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed cursor-pointer">
          <input
            type="checkbox"
            checked={marketingConsent}
            onChange={(e) => setMarketingConsent(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-primary"
            required
          />
          <span>
            {MARKETING_CONSENT_TEXT}{' '}
            <Link href="/privacy" className={`text-primary ${brandHoverClasses.link}`}>
              Privacy Policy
            </Link>
            .
          </span>
        </label>
      </form>

      {message && (
        <p
          role="status"
          className={`mt-2 text-xs ${status === 'success' ? 'text-secondary' : 'text-destructive'}`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
