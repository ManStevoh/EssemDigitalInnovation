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

## Deploy to Vercel

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
