import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import { siteConfig } from '@/lib/site';

const SITE_UPDATED = new Date(siteConfig.legalUpdated.privacy);

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: SITE_UPDATED,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteConfig.url}/case-studies`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/careers`,
      lastModified: new Date(siteConfig.careersPostedDate),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${siteConfig.url}/privacy`,
      lastModified: new Date(siteConfig.legalUpdated.privacy),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/terms`,
      lastModified: new Date(siteConfig.legalUpdated.terms),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...blogPosts,
  ];
}
