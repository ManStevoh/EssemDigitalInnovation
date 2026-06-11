export const siteConfig = {
  name: 'ESSEM Digital Innovations',
  shortName: 'ESSEM',
  tagline: 'Software, mobile apps, and digital growth for East African businesses',
  description:
    'Mombasa-based technology partner delivering custom software, mobile applications, ICT support, and digital services for businesses, schools, universities, research institutions, government agencies, NGOs, and security firms across Kenya and East Africa.',
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
    'To design and deliver innovative digital solutions that improve efficiency, enhance connectivity, empower businesses and communities, and drive sustainable impact through technology.',
  legalUpdated: {
    privacy: '2026-06-01',
    terms: '2026-06-01',
  },
  careersPostedDate: '2026-06-01',
} as const;

export const openRoles = [
  {
    title: 'Full-Stack Developer',
    type: 'Full-time · Mombasa',
    description:
      'Build web and mobile solutions for clients across East Africa. Experience with React, Node.js, or similar modern stacks preferred.',
  },
  {
    title: 'Mobile App Developer',
    type: 'Full-time · Mombasa',
    description:
      'Develop iOS and Android applications for business and startup clients. Cross-platform experience is a plus.',
  },
  {
    title: 'Digital Marketing Specialist',
    type: 'Full-time · Mombasa',
    description:
      'Plan and execute social media, content, and campaign work for SME and enterprise clients with clear reporting.',
  },
  {
    title: 'ICT Support & Solutions Associate',
    type: 'Full-time · Mombasa',
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
      'We strive to create meaningful value by driving business growth, empowering communities, and contributing to positive social and environmental change.',
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
      'We are committed to building environmentally responsible solutions and promoting practices that support a sustainable future.',
  },
  {
    icon: 'accessibility',
    title: 'Accessibility',
    description:
      'We design inclusive, user-centered technologies that are accessible, practical, and beneficial to diverse communities and industries.',
  },
  {
    icon: 'excellence',
    title: 'Excellence',
    description:
      'We are committed to delivering high-quality solutions, continuous learning, and exceptional experiences in everything we do.',
  },
] as const;

export const projectTypes = [
  'Custom Software Development',
  'Mobile App Development',
  'ICT Support & Infrastructure',
  'Digital Marketing & Social Media',
  'Website or Web Application',
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
  logo: '/brand/logo.png',
  icon: '/brand/favicon.png',
  favicon: '/favicon.png',
  appleIcon: '/apple-icon.png',
} as const;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#solutions', label: 'Solutions' },
  { href: '/#case-study', label: 'Work' },
  { href: '/#industries', label: 'Industries' },
  { href: '/blog', label: 'Blog' },
  { href: '/careers', label: 'Careers' },
  { href: '/#contact', label: 'Contact' },
] as const;

export const heroStats = [
  { value: 40, suffix: '+', label: 'Projects delivered' },
  { value: 16, suffix: '', label: 'Sectors served' },
  { value: 8, suffix: '+', label: 'Years in market' },
  { value: 98, suffix: '%', label: 'Client retention' },
] as const;

export const partnerSectors =
  'Schools, universities, research institutions, government agencies, NGOs, and enterprises' as const;

export const clientLogos = [
  { name: 'Coastal Logistics Group', initials: 'CLG' },
  { name: 'East Africa Finance', initials: 'EAF' },
  { name: 'Mombasa Learning Academy', initials: 'MLA' },
  { name: 'Coast Research Network', initials: 'CRN' },
  { name: 'Regional Development NGO', initials: 'RDN' },
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
    area: 'Schools & Learning Institutions',
    desc: 'Learning management systems, student information platforms, school websites, and digital tools that help educators administer, teach, and communicate effectively.',
  },
  {
    area: 'Universities & Research Institutions',
    desc: 'Research data systems, institutional portals, collaboration platforms, and custom software that supports academic work, reporting, and knowledge sharing.',
  },
  {
    area: 'Government Agencies',
    desc: 'Citizen service portals, permit and licensing systems, internal workflow tools, and secure platforms built for transparency and public accountability.',
  },
  {
    area: 'NGOs & Development Organizations',
    desc: 'Programme management systems, beneficiary tracking, donor reporting, field data collection, and digital presence for mission-driven organizations.',
  },
  {
    area: 'Business, Startups & Enterprise',
    desc: 'Custom software, mobile apps, ICT enablement, and digital marketing for companies scaling operations across East Africa.',
  },
  {
    area: 'Security & Field Operations',
    desc: 'Operational systems for security firms — scheduling, patrols, incidents, and client management for distributed field teams.',
  },
] as const;

export const industries = [
  {
    title: 'Schools & Learning Institutions',
    description:
      'School management systems, e-learning platforms, parent communication portals, and websites for primary, secondary, and vocational institutions.',
  },
  {
    title: 'Universities & Research Institutions',
    description:
      'Research databases, institutional portals, collaboration tools, and bespoke systems for academic departments and research programmes.',
  },
  {
    title: 'Government Agencies',
    description:
      'Citizen service platforms, permit and licensing workflows, document management, and secure systems for county and national agencies.',
  },
  {
    title: 'NGOs & Development',
    description:
      'Programme tracking, field reporting, donor dashboards, and digital tools for nonprofits and community development organizations.',
  },
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
    title: 'Finance',
    description: 'Payment interfaces, reporting systems, and secure client-facing financial platforms.',
  },
  {
    title: 'Healthcare',
    description: 'Clinic workflows, patient management, and secure health information systems.',
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
  hero: '/images/hero-team-east-africa.jpg',
  about: '/images/about-office-east-africa.jpg',
  caseStudy: '/images/case-study-logistics.jpg',
} as const;

export const faqs = [
  {
    question: 'What types of organizations do you work with?',
    answer:
      'We partner with schools, universities, research institutions, government agencies, NGOs, startups, enterprises, and security firms across Kenya and East Africa — from institutions going digital for the first time to organizations modernizing core systems.',
  },
  {
    question: 'Do you work with schools, government, and NGOs?',
    answer:
      'Yes. We build and support learning platforms, research systems, citizen service portals, programme management tools, and institutional websites — with an understanding of compliance, reporting, and budget realities in the public and nonprofit sectors.',
  },
  {
    question: 'Do you support startups that are just going online?',
    answer:
      'Yes. Our startup ICT services cover domain setup, hosting, business email, cloud tools, web presence, and ongoing technical guidance — so founders can focus on their business while we handle the technology foundation.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Timelines depend on scope. A marketing site or ICT setup may take 2–4 weeks. Custom software or mobile apps typically run 8–16 weeks after requirements are agreed. We provide a clear timeline before work begins.',
  },
  {
    question: 'Can you build both web and mobile applications?',
    answer:
      'Yes. We deliver web platforms, native and cross-platform mobile apps for iOS and Android, and integrated systems that connect both — including field tools for security and logistics teams.',
  },
  {
    question: 'Do you offer digital marketing and social media management?',
    answer:
      'We provide strategy, content planning, campaign execution, and social media management with reporting tied to your business goals — not vanity metrics alone.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Contact us via the form, email, phone, or WhatsApp. We will schedule a consultation to understand your needs, recommend the right services, and outline next steps with no obligation.',
  },
] as const;
