import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { contactFormSchema } from '@/lib/contact-schema';
import { MARKETING_CONSENT_TEXT } from '@/lib/newsletter-schema';
import { subscribeToNewsletter } from '@/lib/newsletter';
import { siteConfig } from '@/lib/site';

function formatInquiryEmail(data: {
  name: string;
  email: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  message: string;
  marketingConsent?: boolean;
}) {
  return [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Project type: ${data.projectType}`,
    `Budget range: ${data.budgetRange}`,
    `Timeline: ${data.timeline}`,
    `Marketing opt-in: ${data.marketingConsent ? 'Yes' : 'No'}`,
    '',
    'Message:',
    data.message,
  ].join('\n');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactFormSchema.parse(body);

    const resendKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL ?? siteConfig.email;

    if (resendKey) {
      const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'ESSEM Website <onboarding@resend.dev>';
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [contactEmail],
          reply_to: data.email,
          subject: `[${data.projectType}] Inquiry from ${data.name}`,
          text: formatInquiryEmail(data),
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error('Resend API error:', error);
        return NextResponse.json(
          { error: 'Failed to send message. Please try again or email us directly.' },
          { status: 502 }
        );
      }
    } else if (process.env.NODE_ENV === 'development') {
      console.log('[Contact form]', data);
    } else {
      return NextResponse.json(
        {
          error:
            'Contact form is not configured yet. Please email us directly at contact@essemdigital.com.',
        },
        { status: 503 }
      );
    }

    if (data.marketingConsent) {
      const newsletterResult = await subscribeToNewsletter({
        email: data.email,
        marketingConsent: true,
        consentTimestamp: new Date().toISOString(),
        source: 'contact-form',
        consentText: MARKETING_CONSENT_TEXT,
        name: data.name,
      });

      if (!newsletterResult.ok) {
        console.error('[Contact form] Marketing list signup failed:', newsletterResult.error);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: 'Invalid form data. Please check your inputs.' }, { status: 400 });
    }
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
