import { z } from 'zod';

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  marketingConsent: z.literal(true, {
    errorMap: () => ({ message: 'Please agree to receive marketing communications.' }),
  }),
  source: z.string().max(100).optional(),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

export type MarketingConsentRecord = {
  email: string;
  marketingConsent: true;
  consentTimestamp: string;
  source: string;
  consentText: string;
  name?: string;
};

export const MARKETING_CONSENT_TEXT =
  'I agree to receive marketing emails from ESSEM Digital Innovations, including newsletters, service updates, and promotional offers. I can unsubscribe at any time.';
