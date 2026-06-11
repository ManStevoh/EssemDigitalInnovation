import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import {
  MARKETING_CONSENT_TEXT,
  newsletterSchema,
} from '@/lib/newsletter-schema';
import { subscribeToNewsletter } from '@/lib/newsletter';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = newsletterSchema.parse(body);

    const result = await subscribeToNewsletter({
      email: data.email,
      marketingConsent: true,
      consentTimestamp: new Date().toISOString(),
      source: data.source ?? 'website-footer',
      consentText: MARKETING_CONSENT_TEXT,
    });

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof ZodError) {
      const message = error.errors[0]?.message ?? 'Please check your subscription details.';
      return NextResponse.json({ error: message }, { status: 400 });
    }
    console.error('Newsletter signup error:', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
