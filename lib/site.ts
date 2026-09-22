import { getSocialShareUrls } from '@/lib/utm';

export const siteConfig = {
  name: 'ESSEM Digital Innovations',
  shortName: 'ESSEM',
  tagline: 'Digitize. Automate. Show up online.',
  description:
    'ESSEM helps businesses digitize, automate, and show up online — through automations, digitization, online presence, websites and apps. Based in Mombasa, Kenya.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.essemdigital.com',
  email: 'contact@essemdigital.com',
  phone: '+254 728 210 962',
  whatsapp: '254728210962',
  location: 'Mwembe Tayari, Mombasa',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Mwembe+Tayari,Mombasa,Kenya&z=15&output=embed',
  address: {
    streetAddress: 'Mwembe Tayari',
    addressLocality: 'Mombasa',
    addressRegion: 'Coast',
    addressCountry: 'KE',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/essem-digital/',
    facebook: 'https://www.facebook.com/share/1TfTTa5qQo/',
    instagram: 'https://www.instagram.com/essemdigital?igsh=MWpmOWw0cWFpaTJubg==',
  },
  brandTagline: 'Building a Connected World',
  vision:
    'To build a smarter, more connected, and sustainable world through technology.',
  mission:
    'To help businesses digitize, automate, and show up online through practical systems, websites, apps, and smart automations.',
  legalUpdated: {
    privacy: '2026-06-01',
    terms: '2026-06-01',
  },
  careersPostedDate: '2026-06-01',
} as const;

/** UTM-tagged website URLs — use these in social bios and organic posts for GA4 tracking. */
export const socialShareUrls = getSocialShareUrls(siteConfig.url);

export const openRoles = [
  {
    title: 'Full-Stack Developer',
    type: 'Part-time · Mombasa',
    employmentType: 'PART_TIME',
    description:
      'Build web and mobile solutions for clients across East Africa. Experience with React, Node.js, or similar modern stacks preferred.',
  },
  {
    title: 'Mobile App Developer',
    type: 'Part-time · Mombasa',
    employmentType: 'PART_TIME',
    description:
      'Develop iOS and Android applications for business and startup clients. Cross-platform experience is a plus.',
  },
  {
    title: 'Digital Marketing Specialist',
    type: 'Part-time · Mombasa',
    employmentType: 'PART_TIME',
    description:
      'Plan and execute social media, content, and campaign work for SME clients with clear reporting.',
  },
  {
    title: 'ICT Support & Solutions Associate',
    type: 'Volunteer · Mombasa',
    employmentType: 'VOLUNTEER',
    description:
      'Support startups and businesses with hosting, cloud tools, web presence, and day-to-day technology needs.',
  },
] as const;

export type CoreValueIcon =
  | 'innovation'
  | 'impact'
  | 'integrity'
  | 'collaboration'
  | 'sustainability'
  | 'accessibility'
  | 'excellence';

export const coreValues: ReadonlyArray<{
  icon: CoreValueIcon;
  title: string;
  description: string;
}> = [
  {
    icon: 'innovation',
    title: 'Innovation',
    description:
      'We create forward-thinking digital solutions that solve real-world challenges through technology, creativity, and continuous improvement.',
  },
  {
    icon: 'impact',
    title: 'Impact',
    description:
      'We strive to create meaningful value by driving business growth, empowering communities, and contributing to positive change.',
  },
  {
    icon: 'integrity',
    title: 'Integrity',
    description:
      'We uphold transparency, accountability, professionalism, and ethical responsibility in every decision and interaction.',
  },
  {
    icon: 'collaboration',
    title: 'Collaboration',
    description:
      'We believe great innovation is built through teamwork, strategic partnerships, and shared ideas.',
  },
  {
    icon: 'sustainability',
    title: 'Sustainability',
    description:
      'We are committed to building responsible solutions and practices that support a sustainable future.',
  },
  {
    icon: 'accessibility',
    title: 'Accessibility',
    description:
      'We design inclusive, user-centered technologies that are practical and beneficial to diverse communities.',
  },
  {
    icon: 'excellence',
    title: 'Excellence',
    description:
      'We are committed to delivering high-quality solutions, continuous learning, and exceptional experiences.',
  },
] as const;

export const projectTypes = [
  'Automations',
  'Digitization / business systems',
  'Online presence',
  'Website',
  'Mobile app',
  'RelayIQ / product setup',
  'Other / Not sure yet',
] as const;

export const budgetRanges = [
  'Under KES 100,000',
  'KES 100,000 – 500,000',
  'KES 500,000 – 1,000,000',
  'KES 1,000,000 – 3,000,000',
  'Above KES 3,000,000',
  'Prefer to discuss',
] as const;

export const projectTimelines = [
  'ASAP / Urgent',
  'Within 1 month',
  '1–3 months',
  '3–6 months',
  '6+ months',
  'Flexible / exploring options',
] as const;

export const brand = {
  logo: '/brand/logo-full.png',
  icon: '/brand/favicon.png',
  favicon: '/favicon.png',
  appleIcon: '/apple-icon.png',
} as const;

export const navLinks = [
  { href: '/#solutions', label: 'Services' },
  { href: '/#products', label: 'Products' },
  { href: '/#about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
] as const;

export const trustChips = [
  'Built for Kenya SMEs',
  'Practical systems',
  'Clear process',
  'Transparent contact',
] as const;

export type SolutionIcon =
  | 'workflow'
  | 'laptop'
  | 'globe'
  | 'smartphone'
  | 'code'
  | 'cpu'
  | 'rocket'
  | 'layers'
  | 'megaphone'
  | 'cloud'
  | 'shield';

export const solutions: ReadonlyArray<{
  icon: SolutionIcon;
  title: string;
  description: string;
  features: readonly string[];
}> = [
  {
    icon: 'workflow',
    title: 'Automations',
    description:
      'Workflows that connect your tools, people, and customers — so repetitive work stops living in chats and spreadsheets.',
    features: ['Process mapping', 'Tool integrations', 'Ongoing refinement'],
  },
  {
    icon: 'laptop',
    title: 'Digitization',
    description:
      'Practical systems that replace paper, scattered files, and manual follow-ups with clearer digital operations.',
    features: ['Operations systems', 'Records & workflows', 'Staff-ready tools'],
  },
  {
    icon: 'globe',
    title: 'Online presence',
    description:
      'The digital face of your business — clear, credible, and built to turn interest into enquiries.',
    features: ['Brand positioning', 'Content foundations', 'Lead pathways'],
  },
  {
    icon: 'smartphone',
    title: 'Websites and apps',
    description:
      'Custom websites and mobile apps when your operation needs a strong front end or a dedicated product layer.',
    features: ['Marketing sites', 'Web applications', 'Mobile apps'],
  },
];

export const products = [
  {
    name: 'RelayIQ',
    eyebrow: 'ESSEM product',
    href: 'https://relayiq.app',
    description:
      'WhatsApp-first commerce for growing businesses: storefront, bookings, dine-in QR, and M-Pesa — with a free Starter plan to begin.',
    highlights: [
      'WhatsApp storefront and order flow',
      'Appointment bookings',
      'Dine-in table QR ordering',
      'M-Pesa payments',
    ],
  },
] as const;

export const audiences = [
  {
    title: 'SME owners',
    description: 'Owners who want less chaos in day-to-day operations and a clearer digital presence.',
  },
  {
    title: 'Retail & service businesses',
    description: 'Shops, cafés, salons, clinics, and service teams that sell and serve customers daily.',
  },
  {
    title: 'Teams going digital',
    description: 'Businesses ready to move off paper, WhatsApp-only ops, and disconnected tools.',
  },
  {
    title: 'Product-minded founders',
    description: 'Founders who need websites, apps, or productized systems like RelayIQ.',
  },
] as const;

export const images = {
  hero: '/images/redesign/hero-businesswoman-laptop.jpg',
  about: '/images/redesign/sme-nairobi-market.jpg',
  product: '/images/redesign/phone-mobile-business.jpg',
  audience: '/images/redesign/team-collaboration.jpg',
  digitize: '/images/redesign/digitize-woman-blazer-laptop.jpg',
  operations: '/images/redesign/operations-woman-office-laptop.jpg',
  cafe: '/images/redesign/cafe-laptop-work.jpg',
  caseStudy: '/images/redesign/team-collaboration.jpg',
} as const;

export const faqs = [
  {
    question: 'What does ESSEM actually do?',
    answer:
      'ESSEM helps businesses digitize, automate, and show up online — through automations, digitization, online presence, websites and apps. RelayIQ is one product under that mission.',
  },
  {
    question: 'Who is ESSEM for?',
    answer:
      'Growing businesses and SME teams across Kenya and East Africa that want practical systems and a stronger digital presence — not bloated enterprise theatre.',
  },
  {
    question: 'What is RelayIQ?',
    answer:
      'RelayIQ is an ESSEM product for WhatsApp-first selling and service: storefront, bookings, dine-in QR, and M-Pesa. Start free at relayiq.app, then talk to us if you need custom work around it.',
  },
  {
    question: 'Do you build custom websites and apps?',
    answer:
      'Yes. Websites and apps are part of how we deliver digitization and automation — especially when your operation needs a custom front end or mobile layer.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Contact us via the form, email, phone, or WhatsApp. We will understand what you need to digitize or automate, then outline clear next steps.',
  },
] as const;

// Compatibility exports for pages that still import older shapes
export const heroStats = [] as const;
export const clientLogos = [] as const;
export const partnerSectors = 'Growing businesses and SME teams across Kenya and East Africa' as const;
export const focusAreas = audiences.map((a) => ({ area: a.title, desc: a.description }));
export const industries = audiences.map((a) => ({
  title: a.title,
  description: a.description,
}));
export const featuredCaseStudy = {
  slug: 'coming-soon',
  title: 'Case studies coming soon',
  client: 'ESSEM',
  industry: 'General',
  duration: '—',
  summary: 'We are an early-stage company building in public. Real client stories will be published here as we deliver them.',
  challenge: '',
  solution: '',
  results: [] as ReadonlyArray<{ metric: string; label: string }>,
  testimonial: {
    quote: '',
    author: '',
    company: '',
  },
} as const;
export const caseStudies = [featuredCaseStudy] as const;
