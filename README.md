# ESSEM Digital Innovations — Website

Company website for [ESSEM Digital Innovations](https://www.essemdigital.com), built with Next.js 16, React 19, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local`:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (SEO, sitemap) |
| `RESEND_API_KEY` | Email delivery for contact form |
| `RESEND_FROM_EMAIL` | Sender address for form emails |
| `CONTACT_EMAIL` | Where inquiries are delivered |

Without `RESEND_API_KEY`, the contact form logs submissions in development only.

## Analytics and social tracking

Traffic is measured after visitors accept **analytics cookies**:

- **Vercel Analytics** — page views in the Vercel dashboard
- **Google Analytics 4** — traffic sources and UTM campaigns (set `NEXT_PUBLIC_GA_MEASUREMENT_ID`)

### Test locally

1. Copy `.env.example` to `.env.local`
2. Optional: set `NEXT_PUBLIC_GA_MEASUREMENT_ID` and `NEXT_PUBLIC_ANALYTICS_DEV=true`
3. Run `npm run dev`, open the site, accept analytics cookies
4. Open browser DevTools → Console — Vercel Analytics **debug** events appear on each page view
5. Run `npm run test:utm` to verify UTM link helpers

### Test on production

1. Visit your live Vercel URL, accept analytics cookies, browse a few pages
2. **Vercel** → Project → **Analytics** — data within ~30 seconds
3. **GA4** → Reports → **Realtime** — active users while browsing

### Share links with UTM tags

Pre-built bio links are in `socialShareUrls` (`lib/site.ts`). On each blog post, use **Share this article** to copy platform-specific tracked links for Facebook, Instagram, LinkedIn, and WhatsApp.

Example Instagram bio link:

`https://www.essemdigital.com/?utm_source=instagram&utm_medium=social&utm_campaign=bio-link`


1. Push this repo to GitHub
2. Import the project at [vercel.com](https://vercel.com)
3. Add environment variables from `.env.example`
4. Deploy — Vercel auto-detects Next.js

## Brand

Official colors: Electric Blue `#2563EB`, Emerald Green `#10B981`.

Brand tokens live in `lib/brand-guide.ts` and `lib/site.ts`.

## Structure

- `app/` — Pages and API routes
- `components/` — UI sections
- `content/blog/` — Markdown blog articles (add `.md` files with frontmatter)
- `lib/site.ts` — Content, services, contact info
- `public/brand/` — Logo and favicon assets

## Blog

Add articles as Markdown files in `content/blog/`:

```md
---
title: "Your article title"
description: "Short summary for SEO"
date: "2026-06-11"
author: "ESSEM Digital Innovations"
category: "Startups"
---

Your article body here...
```

## Live chat

Live chat is WhatsApp to **+254 728 210 962**. Configure the number in `lib/site.ts` → `whatsapp`.
