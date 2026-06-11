export const siteConfig = {
  name: 'ESSEM Digital Innovations',
  shortName: 'ESSEM',
  tagline: 'Software, mobile apps, and digital growth for East African businesses',
  description:
    'Mombasa-based technology partner delivering custom software, mobile applications, startup ICT support, digital marketing, and industry-specific systems for businesses, startups, and security firms across Kenya and East Africa.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://essemdigital.com',
  email: 'contact@essemdigital.com',
  phone: '+254 (41) 222-0000',
  location: 'Mombasa, Kenya',
  address: {
    streetAddress: 'Nyali Road',
    addressLocality: 'Mombasa',
    addressRegion: 'Coast',
    addressCountry: 'KE',
  },
  social: {
    linkedin: 'https://linkedin.com/company/essemdigital',
    facebook: 'https://facebook.com/essemdigital',
    x: 'https://x.com/essemdigital',
    github: 'https://github.com/essemdigital',
  },
  brandTagline: 'Building a Connected World',
} as const;

export const brand = {
  logo: '/brand/logo.png',
  icon: '/brand/favicon.png',
  favicon: '/favicon.png',
  appleIcon: '/apple-icon.png',
} as const;

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#case-study', label: 'Work' },
  { href: '#industries', label: 'Industries' },
  { href: '#contact', label: 'Contact' },
] as const;

export const heroStats = [
  { value: 40, suffix: '+', label: 'Projects delivered' },
  { value: 14, suffix: '', label: 'Industries served' },
  { value: 8, suffix: '+', label: 'Years in market' },
  { value: 98, suffix: '%', label: 'Client retention' },
] as const;

export const clientLogos = [
  { name: 'Coastal Logistics Group', initials: 'CLG' },
  { name: 'East Africa Finance', initials: 'EAF' },
  { name: 'Mombasa Health Network', initials: 'MHN' },
  { name: 'Kenya EdTech Initiative', initials: 'KEI' },
  { name: 'Regional Manufacturing Co.', initials: 'RMC' },
] as const;

export type SolutionIcon =
  | 'code'
  | 'smartphone'
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
    icon: 'code',
    title: 'Custom Software Development',
    description:
      'Purpose-built web applications aligned to your operations — from internal dashboards and client portals to industry-specific platforms that replace manual processes.',
    features: ['Requirements-led delivery', 'Secure, scalable architecture', 'Post-launch support'],
  },
  {
    icon: 'smartphone',
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications for established businesses and startups — customer apps, field tools, and products designed for reliable performance on iOS and Android.',
    features: ['iOS & Android delivery', 'Offline-ready field apps', 'App store deployment'],
  },
  {
    icon: 'cpu',
    title: 'AI & Intelligent Automation',
    description:
      'Applied AI that solves operational problems: automated customer support, document processing, workflow triggers, and reporting that reduces manual workload without adding complexity.',
    features: ['Process automation', 'Data-driven insights', 'System integrations'],
  },
  {
    icon: 'rocket',
    title: 'Startup ICT & Digital Enablement',
    description:
      'Hands-on technology support for startups establishing their digital foundation — going online, setting up business systems, and building the IT infrastructure needed to operate and grow with confidence.',
    features: ['Web presence & hosting', 'Business email & cloud tools', 'Ongoing ICT advisory'],
  },
  {
    icon: 'layers',
    title: 'Enterprise Platforms',
    description:
      'Integrated business systems that connect teams, approvals, data, and reporting — giving leadership clear visibility and staff a single place to work.',
    features: ['Role-based access control', 'Workflow automation', 'Executive dashboards'],
  },
  {
    icon: 'megaphone',
    title: 'Digital Marketing & Social Media',
    description:
      'Structured marketing execution that supports revenue goals — brand positioning, content calendars, paid campaigns, and social media management with measurable reporting.',
    features: ['Social media management', 'Campaign strategy & execution', 'Performance analytics'],
  },
  {
    icon: 'cloud',
    title: 'Cloud & SaaS Products',
    description:
      'Cloud-native products built to scale — multi-tenant platforms, subscription models, and API-first systems designed for growth across East African markets.',
    features: ['Cloud deployment', 'Subscription-ready billing', 'API integrations'],
  },
  {
    icon: 'shield',
    title: 'Security Industry Systems',
    description:
      'Operational software for private security firms — guard scheduling, patrol tracking, incident reporting, client billing, and compliance documentation in one connected system.',
    features: ['Patrol & incident tracking', 'Client & contract management', 'Field staff mobile access'],
  },
];

export const focusAreas = [
  {
    area: 'Business & Enterprise',
    desc: 'Custom software, mobile apps, and platforms for organizations that need reliable systems supporting daily operations and long-term growth.',
  },
  {
    area: 'Startups & New Ventures',
    desc: 'Practical ICT partnership — from going online and setting up core tools to building your first product with a team that understands lean budgets and fast timelines.',
  },
  {
    area: 'Growth & Visibility',
    desc: 'Digital marketing and social media management with clear strategy, consistent execution, and reporting tied to business outcomes.',
  },
  {
    area: 'Security & Field Operations',
    desc: 'Industry-specific systems for security companies — scheduling, patrols, incidents, and client management built for teams working on the ground.',
  },
] as const;

export const industries = [
  {
    title: 'Startups & Scale-ups',
    description:
      'ICT setup, MVP development, and digital infrastructure for founders who need a capable technology partner from day one.',
  },
  {
    title: 'Security & Private Safety',
    description:
      'Guard management, patrol systems, incident logs, and client reporting for security firms operating across sites and contracts.',
  },
  {
    title: 'Education',
    description: 'Learning platforms, student records, and digital tools for schools and training providers.',
  },
  {
    title: 'Finance',
    description: 'Payment interfaces, reporting systems, and secure client-facing financial platforms.',
  },
  {
    title: 'Healthcare',
    description: 'Clinic workflows, patient management, and secure health information systems.',
  },
  {
    title: 'Government & Public Sector',
    description: 'Citizen-facing portals, permit systems, and transparent service delivery platforms.',
  },
  {
    title: 'Logistics & Transport',
    description: 'Fleet tracking, shipment visibility, and warehouse operations software.',
  },
  {
    title: 'SMEs & Growing Business',
    description: 'Affordable, practical digital tools that help established small businesses modernize without enterprise overhead.',
  },
] as const;

export const featuredCaseStudy = {
  slug: 'coastal-logistics-platform',
  title: 'Digitizing port logistics for East African trade',
  client: 'Coastal Logistics Group',
  industry: 'Logistics',
  duration: '6 months',
  summary:
    'A unified operations platform replacing spreadsheets and phone calls with real-time shipment tracking across Mombasa port corridors.',
  challenge:
    'Coastal Logistics managed 200+ daily shipments using disconnected spreadsheets, WhatsApp groups, and manual status updates. Delays were common and clients had no visibility into their cargo.',
  solution:
    'ESSEM designed and built a web platform with driver mobile views, automated status notifications, and a client portal — integrated with existing accounting tools.',
  results: [
    { metric: '45%', label: 'Faster status updates' },
    { metric: '30%', label: 'Reduction in support calls' },
    { metric: '3x', label: 'Client portal adoption' },
    { metric: '6 mo', label: 'Time to launch' },
  ],
  testimonial: {
    quote:
      'We went from chasing updates on WhatsApp to giving clients a live dashboard. ESSEM understood our operations on the ground in Mombasa.',
    author: 'Operations Director',
    company: 'Coastal Logistics Group',
  },
} as const;

export const caseStudies = [featuredCaseStudy] as const;

export const images = {
  hero: '/images/hero-team.jpg',
  about: '/images/about-office.jpg',
  caseStudy: '/images/case-study-logistics.jpg',
} as const;
