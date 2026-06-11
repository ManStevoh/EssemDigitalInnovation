import type { MetadataRoute } from 'next';
import { siteConfig, brand } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: '/',
    scope: '/',
    lang: 'en-KE',
    dir: 'ltr',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#2563EB',
    categories: ['business', 'productivity', 'technology'],
    icons: [
      {
        src: brand.icon,
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: brand.icon,
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: brand.favicon,
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  };
}
