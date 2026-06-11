import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ConsentAwareAnalytics } from '@/components/consent-aware-analytics';
import { CookieConsent } from '@/components/cookie-consent';
import { SkipLink } from '@/components/skip-link';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/json-ld';
import { createPageMetadata } from '@/lib/seo';
import { siteConfig, brand } from '@/lib/site';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  ...createPageMetadata({ path: '/' }),
  title: {
    default: `${siteConfig.name} — ${siteConfig.brandTagline}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  applicationName: siteConfig.shortName,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  keywords: [
    'software development Kenya',
    'mobile app development Mombasa',
    'custom software East Africa',
    'digital marketing Kenya',
    'ICT support startups Kenya',
    'school management software Kenya',
    'government digital services Africa',
    'NGO technology solutions',
    'ESSEM Digital Innovations',
  ],
  icons: {
    icon: [
      { url: brand.favicon, sizes: '32x32', type: 'image/png' },
      { url: brand.icon, sizes: '192x192', type: 'image/png' },
    ],
    apple: brand.appleIcon,
    shortcut: brand.favicon,
  },
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { other: { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } }
      : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-KE" className={montserrat.variable}>
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <link rel="alternate" type="application/rss+xml" title={`${siteConfig.name} Blog RSS`} href="/feed.xml" />
      </head>
      <body className="font-sans antialiased">
        <SkipLink />
        {children}
        <WhatsAppButton />
        <CookieConsent />
        <ConsentAwareAnalytics />
      </body>
    </html>
  );
}
