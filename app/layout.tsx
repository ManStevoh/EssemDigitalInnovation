import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SkipLink } from '@/components/skip-link';
import { OrganizationJsonLd } from '@/components/json-ld';
import { siteConfig, brand } from '@/lib/site';
import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    'software development Kenya',
    'mobile app development Mombasa',
    'startup ICT support Kenya',
    'digital marketing East Africa',
    'social media management Kenya',
    'security industry software',
    'custom software development',
    'technology partner startups',
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: 'website',
    locale: 'en_KE',
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  icons: {
    icon: [
      { url: brand.favicon, sizes: '32x32', type: 'image/png' },
      { url: brand.icon, sizes: '192x192', type: 'image/png' },
    ],
    apple: brand.appleIcon,
    shortcut: brand.favicon,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <OrganizationJsonLd />
      </head>
      <body className="font-sans antialiased">
        <SkipLink />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
