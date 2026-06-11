import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { contactFormSchema } from '@/lib/contact-schema';
import { siteConfig } from '@/lib/site';

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
          subject: `Website inquiry from ${data.name}`,
          text: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
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

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: 'Invalid form data. Please check your inputs.' }, { status: 400 });
    }
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
