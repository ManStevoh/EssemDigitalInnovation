import { siteConfig, brand, faqs } from '@/lib/site';
import { ORGANIZATION_ID, WEBSITE_ID, absoluteUrl, jsonLdScript } from '@/lib/seo';
import type { BlogPostMeta } from '@/lib/blog';

function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(data) }} />
  );
}

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService', 'LocalBusiness'],
    '@id': ORGANIZATION_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl(brand.logo),
      width: 512,
      height: 512,
    },
    image: absoluteUrl(brand.logo),
    description: siteConfig.description,
    slogan: siteConfig.brandTagline,
    email: siteConfig.email,
    telephone: siteConfig.phone.replace(/\s/g, ''),
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: '80100',
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -4.0435,
      longitude: 39.6682,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone.replace(/\s/g, ''),
      email: siteConfig.email,
      contactType: 'customer service',
      areaServed: ['KE', 'TZ', 'UG', 'RW', 'ET'],
      availableLanguage: ['English', 'Swahili'],
    },
    areaServed: [
      { '@type': 'Country', name: 'Kenya' },
      { '@type': 'AdministrativeArea', name: 'East Africa' },
    ],
    serviceType: [
      'Software Development',
      'Mobile App Development',
      'Education Technology',
      'Government Digital Services',
      'NGO Programme Systems',
      'Digital Marketing',
      'ICT Support',
    ],
    sameAs: Object.values(siteConfig.social),
    knowsAbout: [
      'Custom Software Development',
      'Mobile Applications',
      'Digital Marketing',
      'ICT Infrastructure',
      'Education Technology',
    ],
  };

  return <JsonLd data={data} />;
}

export function WebSiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: 'en-KE',
    publisher: { '@id': ORGANIZATION_ID },
  };

  return <JsonLd data={data} />;
}

export function FaqPageJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return <JsonLd data={data} />;
}

type BreadcrumbItem = { name: string; path: string };

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };

  return <JsonLd data={data} />;
}

export function BlogPostingJsonLd({ post }: { post: BlogPostMeta }) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(brand.logo),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    url,
    image: absoluteUrl('/opengraph-image'),
    inLanguage: 'en-KE',
    articleSection: post.category,
  };

  return <JsonLd data={data} />;
}

type JobRole = { title: string; type: string; description: string; employmentType: string };

export function JobPostingJsonLd({ roles }: { roles: JobRole[] }) {
  const data = roles.map((role) => ({
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: role.title,
    description: role.description,
    datePosted: siteConfig.careersPostedDate,
    employmentType: role.employmentType,
    hiringOrganization: {
      '@type': 'Organization',
      name: siteConfig.name,
      sameAs: siteConfig.url,
      logo: absoluteUrl(brand.logo),
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteConfig.address.addressLocality,
        addressRegion: siteConfig.address.addressRegion,
        addressCountry: siteConfig.address.addressCountry,
      },
    },
    applicantLocationRequirements: {
      '@type': 'Country',
      name: 'Kenya',
    },
    directApply: true,
  }));

  return <JsonLd data={data} />;
}
