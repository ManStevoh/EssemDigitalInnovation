import type { MarketingConsentRecord } from '@/lib/newsletter-schema';

type SubscribeResult = { ok: true } | { ok: false; error: string };

/** Subscribe with explicit marketing consent metadata for your email CRM. */
export async function subscribeToNewsletter(
  record: MarketingConsentRecord
): Promise<SubscribeResult> {
  const provider = process.env.NEWSLETTER_PROVIDER?.toLowerCase();

  if (provider === 'brevo') {
    return subscribeBrevo(record);
  }
  if (provider === 'mailchimp') {
    return subscribeMailchimp(record);
  }
  if (provider === 'convertkit') {
    return subscribeConvertKit(record);
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('[Newsletter signup — marketing consent]', record);
    return { ok: true };
  }

  return { ok: false, error: 'Newsletter signup is not configured yet.' };
}

async function subscribeBrevo(record: MarketingConsentRecord): Promise<SubscribeResult> {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;

  if (!apiKey || !listId) {
    return { ok: false, error: 'Newsletter provider is misconfigured.' };
  }

  const response = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: record.email,
      listIds: [Number(listId)],
      updateEnabled: true,
      attributes: {
        FIRSTNAME: record.name?.split(' ')[0] ?? undefined,
        MARKETING_CONSENT: true,
        CONSENT_DATE: record.consentTimestamp.slice(0, 10),
        CONSENT_SOURCE: record.source,
        CONSENT_TEXT: record.consentText,
      },
    }),
  });

  if (response.ok || response.status === 204) {
    return { ok: true };
  }

  const body = await response.text();
  console.error('Brevo API error:', body);
  return { ok: false, error: 'Could not subscribe. Please try again.' };
}

async function subscribeMailchimp(record: MarketingConsentRecord): Promise<SubscribeResult> {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const server = process.env.MAILCHIMP_SERVER_PREFIX;
  const listId = process.env.MAILCHIMP_LIST_ID;

  if (!apiKey || !server || !listId) {
    return { ok: false, error: 'Newsletter provider is misconfigured.' };
  }

  const response = await fetch(
    `https://${server}.api.mailchimp.com/3.0/lists/${listId}/members`,
    {
      method: 'POST',
      headers: {
        Authorization: `apikey ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: record.email,
        status: 'subscribed',
        merge_fields: {
          FNAME: record.name?.split(' ')[0] ?? '',
          CONSENT_DT: record.consentTimestamp.slice(0, 10),
          SOURCE: record.source,
        },
        marketing_permissions: [
          {
            marketing_permission_id: 'email_marketing',
            enabled: true,
          },
        ],
      }),
    }
  );

  if (response.ok) {
    return { ok: true };
  }

  const data = (await response.json()) as { title?: string; detail?: string };
  if (data.title === 'Member Exists') {
    return { ok: true };
  }

  console.error('Mailchimp API error:', data);
  return { ok: false, error: 'Could not subscribe. Please try again.' };
}

async function subscribeConvertKit(record: MarketingConsentRecord): Promise<SubscribeResult> {
  const apiKey = process.env.CONVERTKIT_API_KEY;
  const formId = process.env.CONVERTKIT_FORM_ID;

  if (!apiKey || !formId) {
    return { ok: false, error: 'Newsletter provider is misconfigured.' };
  }

  const response = await fetch(
    `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: apiKey,
        email: record.email,
        tags: ['website-signup', 'marketing-consent'],
        fields: {
          consent_date: record.consentTimestamp.slice(0, 10),
          consent_source: record.source,
        },
      }),
    }
  );

  if (response.ok) {
    return { ok: true };
  }

  const body = await response.text();
  console.error('ConvertKit API error:', body);
  return { ok: false, error: 'Could not subscribe. Please try again.' };
}
