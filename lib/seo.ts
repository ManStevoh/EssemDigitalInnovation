import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

/** Stable @id anchors for JSON-LD entity graph */
export const ORGANIZATION_ID = `${siteConfig.url}/#organization`;
export const WEBSITE_ID = `${siteConfig.url}/#website`;

export function absoluteUrl(path = ''): string {
  const base = siteConfig.url.replace(/\/$/, '');
  if (!path) return base;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

const defaultOgImage = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — ${siteConfig.brandTagline}`,
} as const;

type PageMetadataOptions = {
  title?: string;
  description?: string;
  /** Route path e.g. `/blog` or `/blog/my-post` */
  path: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noIndex?: boolean;
};

/** Per-page metadata with canonical URL, hreflang, Open Graph, and Twitter cards */
export function createPageMetadata({
  title,
  description,
  path,
  ogType = 'website',
  publishedTime,
  modifiedTime,
  authors,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const pageDescription = description ?? siteConfig.description;
  const pageTitle = title ?? `${siteConfig.name} — ${siteConfig.brandTagline}`;

  const openGraph: NonNullable<Metadata['openGraph']> = {
    title: pageTitle,
    description: pageDescription,
    url,
    type: ogType,
    locale: 'en_KE',
    alternateLocale: ['en'],
    siteName: siteConfig.name,
    images: [defaultOgImage],
    ...(ogType === 'article' && publishedTime
      ? {
          publishedTime,
          ...(modifiedTime ? { modifiedTime } : {}),
          ...(authors?.length ? { authors } : {}),
        }
      : {}),
  };

  return {
    title: title ? title : undefined,
    description: pageDescription,
    alternates: {
      canonical: url,
      languages: {
        'en-KE': url,
        en: url,
        'x-default': url,
      },
    },
    openGraph,
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [defaultOgImage.url],
    },
    robots: noIndex
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
        },
    category: 'technology',
  };
}

export function jsonLdScript(data: Record<string, unknown> | Record<string, unknown>[]) {
  return JSON.stringify(data);
}
