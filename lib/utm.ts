export type UtmParams = {
  source: string;
  medium: string;
  campaign: string;
  content?: string;
  term?: string;
};

/** Build a UTM-tagged URL for tracking organic social and campaign traffic in GA4. */
export function buildUtmUrl(baseUrl: string, params: UtmParams, path = '/'): string {
  const url = new URL(path, baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`);
  url.searchParams.set('utm_source', params.source);
  url.searchParams.set('utm_medium', params.medium);
  url.searchParams.set('utm_campaign', params.campaign);
  if (params.content) url.searchParams.set('utm_content', params.content);
  if (params.term) url.searchParams.set('utm_term', params.term);
  return url.toString();
}

/** Pre-built links to paste into social bios or organic posts. */
export function getSocialShareUrls(baseUrl: string) {
  return {
    facebook: buildUtmUrl(baseUrl, {
      source: 'facebook',
      medium: 'social',
      campaign: 'profile-link',
    }),
    instagram: buildUtmUrl(baseUrl, {
      source: 'instagram',
      medium: 'social',
      campaign: 'bio-link',
    }),
    linkedin: buildUtmUrl(baseUrl, {
      source: 'linkedin',
      medium: 'social',
      campaign: 'profile-link',
    }),
    whatsapp: buildUtmUrl(baseUrl, {
      source: 'whatsapp',
      medium: 'social',
      campaign: 'status-link',
    }),
  } as const;
}

/** Tag a blog or campaign post when sharing on a specific platform. */
export function getPostShareUrl(
  baseUrl: string,
  path: string,
  platform: 'facebook' | 'instagram' | 'linkedin' | 'whatsapp',
  campaign: string
) {
  return buildUtmUrl(
    baseUrl,
    {
      source: platform,
      medium: 'social',
      campaign,
    },
    path
  );
}
