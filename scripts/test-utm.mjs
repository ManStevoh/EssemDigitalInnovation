import assert from 'node:assert/strict';
import { buildUtmUrl, getPostShareUrl, getSocialShareUrls } from '../lib/utm.ts';

const base = 'https://www.essemdigital.com';

const homeFacebook = buildUtmUrl(base, {
  source: 'facebook',
  medium: 'social',
  campaign: 'profile-link',
});
assert.equal(
  homeFacebook,
  'https://www.essemdigital.com/?utm_source=facebook&utm_medium=social&utm_campaign=profile-link'
);

const blogLinkedIn = getPostShareUrl(base, '/blog/ict-foundation-for-startups', 'linkedin', 'blog-june');
assert.ok(blogLinkedIn.includes('/blog/ict-foundation-for-startups'));
assert.ok(blogLinkedIn.includes('utm_source=linkedin'));
assert.ok(blogLinkedIn.includes('utm_campaign=blog-june'));

const social = getSocialShareUrls(base);
assert.ok(social.instagram.includes('utm_source=instagram'));
assert.ok(social.whatsapp.includes('utm_medium=social'));

console.log('✓ UTM helpers: all assertions passed');
console.log('  Example Facebook bio link:', social.facebook);
console.log('  Example blog share link:', blogLinkedIn);
