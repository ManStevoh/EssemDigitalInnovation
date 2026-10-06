export type Faq = { q: string; a: string };
export type Scenario = {
  business: string;
  town: string;
  before: string;
  change: string;
  figure: string;
};
export type ServicePageContent = {
  slug: string;
  eyebrow: string;
  h1: string;
  subhead: string;
  whatsappPrefill: string;
  pains: [string, string, string, string];
  offers: { title: string; body: string }[];
  deliverables: string[];
  fitFor: string[];
  notFor: string[];
  processNote: string;
  scenarios: Scenario[];
  pricingBands: string[];
  timelines: string;
  faqs: Faq[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  related: { label: string; href: string }[];
};

export const servicePages: Record<string, ServicePageContent> = {
  automations: {
    slug: 'automations',
    eyebrow: 'Automations for Kenyan SMEs',
    h1: 'Stop losing 20+ hours a week to manual work.',
    subhead:
      'We connect your WhatsApp, M-Pesa, spreadsheets, and team into one smooth workflow — so orders, payments, follow-ups, and reports happen automatically, not from memory.',
    whatsappPrefill: 'Hi ESSEM, I want to automate ...',
    pains: [
      'Orders buried in WhatsApp chats — you miss messages, double-sell stock, and reply late.',
      'M-Pesa payments need manual matching — till messages, Excel, and memory don’t reconcile.',
      'Follow-ups depend on memory — quotes, invoices, and repeat customers slip away.',
      'Reports take weekends — sales, stock, and staff performance live in 3 different notebooks.',
    ],
    offers: [
      {
        title: 'WhatsApp-to-order workflows',
        body: 'Structured orders from chat, auto-confirmations, kitchen/shop alerts. Works standalone or with RelayIQ (relayiq.app).',
      },
      {
        title: 'M-Pesa reconciliation',
        body: 'Daraja / till integration, auto-matching payments to orders/invoices, daily summary on WhatsApp or email.',
      },
      {
        title: 'Follow-up & reminders',
        body: 'Quote follow-ups, payment reminders, appointment/booking reminders, review requests.',
      },
      {
        title: 'Team task routing',
        body: 'Assign, escalate, and track jobs across staff (shops, clinics, salons, field teams) with simple dashboards.',
      },
      {
        title: 'Tool integrations',
        body: 'Connect Google Sheets, Excel, POS, accounting, CRM, email, calendars into one flow.',
      },
      {
        title: 'Reporting on autopilot',
        body: 'Daily/weekly sales, stock alerts, staff activity sent where you already look.',
      },
    ],
    deliverables: [
      'Process map (1-page visual of before → after)',
      'Automation setup + integration credentials documented',
      'Staff training (1 session, Swahili/English, in-person in Mombasa or remote)',
      '30-day refinement window + handover doc',
      'Optional monthly care: monitoring, tweaks, new rules',
    ],
    fitFor: [
      'Retail shops doing 10+ repeat tasks/day in WhatsApp + Excel',
      'Cafés and restaurants taking orders in chats',
      'Salons and clinics chasing bookings and deposits',
      'Distributors and field teams coordinating on WhatsApp',
      'Schools and service teams with repeat follow-ups',
    ],
    notFor: [
      'Businesses with no repeat process yet',
      'Teams wanting a full custom ERP on day one (see Digitization)',
    ],
    processNote:
      'Tell us your challenge → Proposal + KES quote → Build + iterate with your real data → Launch + 30-day support.',
    scenarios: [
      {
        business: 'Retail shop',
        town: 'Mombasa',
        before: 'WhatsApp orders, manual stock check, M-Pesa SMS matching by hand',
        change: 'WhatsApp orders → stock check → M-Pesa STK push → rider assignment',
        figure: 'Saves ~2 hrs/day',
      },
      {
        business: 'Salon/clinic',
        town: 'Mombasa',
        before: 'Notebook bookings, no-shows, manual deposit follow-ups',
        change: 'Booking reminders with M-Pesa deposit confirming each slot',
        figure: 'Fewer no-shows',
      },
      {
        business: 'Distributor',
        town: 'Nairobi-remote',
        before: 'Field orders in chats retyped into stock sheets nightly',
        change: 'Field WhatsApp orders auto-enter stock sheet with daily route summary',
        figure: 'Same-day route visibility',
      },
    ],
    pricingBands: [
      'Small single workflow (e.g. payment reminders): Under KES 100,000',
      'Connected 2–3 tools (typical SME): KES 100,000 – 500,000',
      'Multi-branch / advanced: KES 500,000 – 1,000,000',
    ],
    timelines: 'Timelines: 1–3 weeks (single), 3–6 weeks (connected).',
    faqs: [
      {
        q: 'Do I need new software, or do you work with what I have?',
        a: 'We start with what you have — WhatsApp Business, M-Pesa till/paybill, Sheets/Excel, POS. We only add tools if they remove work. No rip-and-replace.',
      },
      {
        q: 'Do you use AI? Will it message my customers wrongly?',
        a: 'Only where it helps (drafting replies, summaries). Every customer-facing message uses templates you approve, with human review and opt-out. Nothing sends without your rules.',
      },
      {
        q: 'What happens if M-Pesa or WhatsApp goes down?',
        a: 'Flows queue and retry; you get a fallback alert (SMS/email). We build with Safaricom Daraja best practices and WhatsApp Business API limits in mind.',
      },
      {
        q: 'Who owns the automation?',
        a: 'You do. You own accounts, credentials, and configs. We hand over docs and admin access on final payment.',
      },
      {
        q: 'What does support cost after launch?',
        a: '30-day refinement included. After that, pay-as-you-change or a small monthly care plan for monitoring + tweaks. No lock-in.',
      },
      {
        q: 'Can you start small?',
        a: 'Yes — pick one painful workflow (e.g. payment matching). Prove value in weeks, then expand. Most clients start KES <100k.',
      },
    ],
    seoTitle: 'Business Process Automation Kenya | WhatsApp + M-Pesa Workflows — ESSEM',
    seoDescription:
      'Automate orders, M-Pesa reconciliation, reminders & reports. Practical WhatsApp-first automations for Kenyan SMEs. Mombasa-based. Get a free quote.',
    keywords: [
      'business automation Kenya',
      'WhatsApp automation Kenya',
      'M-Pesa integration',
      'SME workflow automation Mombasa',
    ],
    related: [
      { label: 'Digitization — move off paper', href: '/services/digitization' },
      { label: 'Insights for SME owners', href: '/blog' },
    ],
  },
  digitization: {
    slug: 'digitization',
    eyebrow: 'Digitization for growing businesses',
    h1: 'Move off paper, notebooks, and scattered Excel — without confusing your staff.',
    subhead:
      'We replace registers, files, and memory with simple digital systems for sales, stock, records, and team work — built for mid-range Android, low data, and staff who are not “tech people.”',
    whatsappPrefill: 'Hi ESSEM, I want to digitize ...',
    pains: [
      'Stock disappears and nobody knows why — book vs. shelf never match.',
      'Customer / patient / student records live in 4 books — search takes 20 minutes.',
      'Staff do the same job 3 different ways — no clear steps, no accountability.',
      'You can’t answer “how did we do this week?” without a full day of counting.',
    ],
    offers: [
      {
        title: 'Sales & stock systems',
        body: 'Products, purchases, sales, low-stock alerts, multi-shop view. M-Pesa sales auto-captured.',
      },
      {
        title: 'Records management',
        body: 'Customers, patients, students, members, jobs: searchable profiles, history, documents/photos.',
      },
      {
        title: 'Staff workflows',
        body: 'Attendance, tasks, approvals, cash handover, shift notes. Simple roles: owner / manager / staff.',
      },
      {
        title: 'Field & service ops',
        body: 'Job cards, visits, deliveries, proof-of-work photos + signature, WhatsApp status updates.',
      },
      {
        title: 'Finance-lite',
        body: 'Invoices, receipts, expenses, debtor lists, daily close. Hands off cleanly to your accountant (Excel/PDF export).',
      },
      {
        title: 'Dashboards owners actually open',
        body: 'Today’s sales, top items, pending payments, staff activity — on phone.',
      },
    ],
    deliverables: [
      'Ops audit (half-day: we watch how you work in Mombasa or over video)',
      'System setup + data migration from books/Excel (we clean and import opening stock/records)',
      'Roles + permissions + printed 1-page SOP for staff',
      'Training + 30-day hypercare (we fix confusion fast)',
      'Handover: admin logins, export guide, backup routine',
    ],
    fitFor: [
      'Shops and mini-marts still on stock books',
      'Cafés, salons, clinics with 3–50 staff',
      'Schools, SACCOs and chamas with member records on paper',
      'Logistics and service teams tracking jobs by memory',
    ],
    notFor: [
      'Enterprises needing SAP/ERP compliance on day one — we’ll say so and scope a phased path instead',
    ],
    processNote:
      'Walk us through a busy day → Proposal + phased KES quote (Phase 1 = one shop/department live) → Build + staff trial → Go-live week with daily check-ins.',
    scenarios: [
      {
        business: 'Mini-mart (2 branches)',
        town: 'Mombasa',
        before: 'Separate stock books per branch, M-Pesa sales untracked',
        change: 'Shared stock + M-Pesa sales log; owner sees both shops on phone with weekly variance report',
        figure: 'Both branches visible daily',
      },
      {
        business: 'Clinic',
        town: 'Mombasa',
        before: 'Paper patient files, visit history lost, receipts by hand',
        change: 'Patient files + visit history + M-Pesa receipts; file found in seconds',
        figure: 'Seconds to find a file',
      },
      {
        business: 'School',
        town: 'Mombasa',
        before: 'Fee books, M-Pesa SMS unmatched, arrears unclear',
        change: 'Fees via M-Pesa matched to student; arrears list in one tap; parent WhatsApp receipts',
        figure: 'Arrears list in one tap',
      },
    ],
    pricingBands: [
      'Single-shop starter (stock + sales): Under KES 100,000 – 250,000',
      'Typical multi-user ops system: KES 100,000 – 500,000',
      'Multi-branch / custom workflows: KES 500,000 – 1,000,000',
    ],
    timelines: 'Timelines: 2–4 weeks starter, 4–8 weeks standard. Data migration and training included.',
    faqs: [
      {
        q: 'My staff are not tech-savvy. Will they manage?',
        a: 'Yes — that’s the design brief. Big buttons, Swahili/English labels, works on affordable Android, offline-tolerant. We train on your real tasks, plus a 1-page cheat sheet.',
      },
      {
        q: 'What happens to my old books and Excel files?',
        a: 'We clean and import them (stock list, customer list, balances). Paper stays as backup for the first month, then you archive it. Nothing is deleted without your sign-off.',
      },
      {
        q: 'Does it work without internet?',
        a: 'Core capture works on low/offline connections and syncs when back. We design for 3G/4G and low data — no heavy downloads for staff phones.',
      },
      {
        q: 'Can my accountant / auditor still work with this?',
        a: 'Yes. One-tap Excel/PDF exports for sales, expenses, debtors, stock. We align categories with what Kenyan accountants expect (VAT-ready summaries where relevant).',
      },
      {
        q: 'Who owns my data?',
        a: 'You do — full export anytime (CSV/Excel). We set you as account owner and document backups.',
      },
      {
        q: 'Can we start with one branch/department?',
        a: 'Recommended. Pilot in 1 shop or 1 workflow, prove it for 2–4 weeks, then roll out. Lower risk, faster buy-in.',
      },
    ],
    seoTitle: 'Business Digitization Kenya | Move Off Paper to Simple Systems — ESSEM',
    seoDescription:
      'Replace notebooks & scattered Excel with staff-ready stock, sales, and records systems. Built for Kenyan SMEs, M-Pesa-ready. Free consultation in Mombasa & remote.',
    keywords: [
      'digitization Kenya',
      'digitize business Kenya',
      'stock management system Kenya',
      'SME operations system Mombasa',
    ],
    related: [
      { label: 'Automations — connect your tools', href: '/services/automations' },
      { label: 'Insights for SME owners', href: '/blog' },
    ],
  },
  'online-presence': {
    slug: 'online-presence',
    eyebrow: 'Online presence that brings enquiries',
    h1: 'Customers check you online first. Look credible and be easy to contact.',
    subhead:
      'We build your Google profile, social foundations, and WhatsApp-first lead path — so a stranger in Mombasa or Nairobi can find you, trust you, and message you in under a minute.',
    whatsappPrefill: 'Hi ESSEM, I want to improve my online presence ...',
    pains: [
      'You’re invisible on Google Maps — competitors with reviews get the call.',
      'Your Instagram/Facebook is silent for months — customers assume you closed.',
      'People ask “do you have a website?” and you send a long WhatsApp text.',
      'Enquiries come but don’t convert — no clear prices, location, hours, or next step.',
    ],
    offers: [
      {
        title: 'Brand positioning in plain language',
        body: 'Who you serve, what you do, why you: 1-line bio, services list, KES price cues where appropriate.',
      },
      {
        title: 'Google Business Profile',
        body: 'Setup/claim, categories, hours, Mwembe Tayari/Mombasa map pin, photos, reviews playbook, WhatsApp call button.',
      },
      {
        title: 'Social foundations',
        body: 'Facebook + Instagram (+ LinkedIn/TikTok if relevant): profile kit, highlights, pinned posts, content calendar starter (12 posts), reply templates.',
      },
      {
        title: 'Lead pathways',
        body: 'Click-to-WhatsApp buttons, quote form that actually gets answered, call tracking, M-Pesa deposit cues for bookings.',
      },
      {
        title: 'Reputation engine',
        body: 'Review request flow (WhatsApp after sale/visit), response templates, how to handle a bad review. No fake reviews — ever.',
      },
      {
        title: 'Content foundations',
        body: '4–8 core pages/posts answering real buyer questions (“price of X in Mombasa”, “how to book”), SEO basics in Kenyan English.',
      },
    ],
    deliverables: [
      'Presence audit (Google, Maps, socials, directories)',
      'Profile + content kit (logos, bios, photos guide, 12 starter posts/captions)',
      'Google Maps + WhatsApp funnel live and tested on Android',
      '1-page enquiry playbook (who replies, in how many minutes, what script)',
      '30-day content + review checklist',
    ],
    fitFor: [
      'SMEs and retail/service teams living on word-of-mouth',
      'Clinics, salons and cafés losing the online comparison',
      'Founders whose socials look closed or outdated',
    ],
    notFor: [
      'Brands wanting daily full-service social management forever — we set foundations + train, then offer retainer only if needed',
    ],
    processNote:
      'Send your current Google/social links → Audit findings + 30-day KES fixed-price plan → Profiles live in week 1 → Review-flow training + monthly check option.',
    scenarios: [
      {
        business: 'Salon',
        town: 'Mombasa',
        before: 'Silent Instagram, no Maps listing, bookings lost in DMs',
        change: 'Google Maps + Instagram before/afters + WhatsApp booking link',
        figure: 'Bookings without DM chaos',
      },
      {
        business: 'Café',
        town: 'Mombasa',
        before: 'Wrong hours/location online, no order path',
        change: 'Menu + location + hours correct everywhere; QR → WhatsApp order',
        figure: 'Fewer missed orders',
      },
      {
        business: 'Fundi/service team',
        town: 'Nairobi-remote',
        before: 'No proof posts, no reviews, vague quote requests',
        change: 'Facebook proof posts + Google reviews → quote requests with photos on WhatsApp',
        figure: 'Clearer qualified enquiries',
      },
    ],
    pricingBands: [
      'Foundations (Google + social cleanup + WhatsApp funnel): Under KES 100,000',
      'Standard (above + content kit + review engine): KES 100,000 – 500,000',
      'Plus website tie-in: see Websites and apps (bundle available)',
    ],
    timelines: 'Timelines: 1–2 weeks foundations, 3–4 weeks standard.',
    faqs: [
      {
        q: 'I already have Instagram. Why am I not getting customers?',
        a: 'Usually three gaps: you’re not findable (Google Maps), not credible (no recent proof/reviews), not contactable (no 1-tap WhatsApp/quote path). We fix all three, not just post more.',
      },
      {
        q: 'Do I need a website too?',
        a: 'Not always on day one. A correct Google profile + WhatsApp funnel beats a dead website. If comparison shoppers need prices/portfolios, we recommend a lean one-pager (see Websites and apps).',
      },
      {
        q: 'Will you post for me every day?',
        a: 'We set up a system you can sustain (12 starter posts + calendar + templates) and train you/staff. Monthly posting help is optional — we don’t lock you into a retainer you don’t need.',
      },
      {
        q: 'How do reviews actually help?',
        a: 'In Kenya, Maps reviews + WhatsApp proof decide calls. We install a 30-second post-sale review request and reply templates. No fake reviews — ever.',
      },
      {
        q: 'What if I get a bad review?',
        a: 'You’ll have a calm reply template and escalation path. Fast, polite, offline resolution beats deletion. We coach you through the first one.',
      },
      {
        q: 'How do I know it’s working?',
        a: 'Calls/WhatsApp taps, direction requests, quote forms — tracked monthly in plain numbers. No vanity likes reports.',
      },
    ],
    seoTitle: 'Online Presence for Kenyan SMEs | Google, Social & WhatsApp — ESSEM',
    seoDescription:
      'Get found on Google Maps, look credible on social, turn clicks into WhatsApp enquiries. Practical online presence setups for Kenyan businesses.',
    keywords: [
      'online presence Kenya',
      'Google Business Profile Kenya',
      'social media setup Mombasa',
      'WhatsApp business setup Kenya',
    ],
    related: [
      { label: 'Websites and apps — when you need more', href: '/services/websites-and-apps' },
      { label: 'Insights for SME owners', href: '/blog' },
    ],
  },
  'websites-and-apps': {
    slug: 'websites-and-apps',
    eyebrow: 'Websites & mobile apps',
    h1: 'A fast website or app that turns visitors into paying customers.',
    subhead:
      'Mobile-first, M-Pesa-ready, SEO-ready builds for Kenyan buyers on mid-range Android and 3G/4G — from one-page marketing sites to bookings, portals, and cross-platform apps.',
    whatsappPrefill: 'Hi ESSEM, I need a website/app for ...',
    pains: [
      'Your current site is slow, outdated, or not on Google — customers bounce before contacting.',
      'You take orders/bookings in DMs — no prices, calendar, or payment link.',
      'Off-the-shelf tools charge monthly in dollars and still don’t do M-Pesa + WhatsApp right.',
      'You need a portal/app for clients/staff — but don’t want a 12-month enterprise project.',
    ],
    offers: [
      {
        title: 'Marketing sites (1–10 pages)',
        body: 'Services, pricing cues in KES, proof, FAQs, WhatsApp/call CTAs, contact form that notifies instantly.',
      },
      {
        title: 'Business websites with bookings & payments',
        body: 'Calendars, quote flows, M-Pesa STK / till / paybill via Daraja, receipts on WhatsApp/email.',
      },
      {
        title: 'Web applications / portals',
        body: 'Client logins, job tracking, school/clinic records front end, staff dashboards, document uploads, exports.',
      },
      {
        title: 'Cross-platform mobile apps',
        body: 'One codebase for Android + iOS; Play Store + App Store release handled.',
      },
      {
        title: 'E-commerce-lite',
        body: 'Catalog, WhatsApp checkout or full M-Pesa checkout, delivery zones (Mombasa/Nairobi/East Africa), order dashboard. Heavy shop? We recommend RelayIQ first if it fits.',
      },
      {
        title: 'Care & growth',
        body: 'Hosting, SSL, backups, analytics (GA4), speed/SEO tuning, small iterations monthly.',
      },
    ],
    deliverables: [
      'Sitemap + wireframe approval before code',
      'Live staging link with weekly demos',
      'Launch: domain, SSL, analytics, backups, training video/doc',
      '30-day bug-fix window + handover (logins, runbook, export guide)',
    ],
    fitFor: [
      'SMEs needing credibility + enquiries',
      'Teams needing bookings, payments or client portals',
      'Founders testing an MVP (start lean, expand)',
    ],
    notFor: [
      '“Facebook in 2 weeks” ideas — we decline those',
      'Apps needing gambling/cryptocurrency work — we decline those',
      'Jobs where RelayIQ or a no-code tool fits better — we say so',
    ],
    processNote:
      'Send examples you like + your content → Proposal with pages/features, timeline, KES fixed/milestone price → Design → staging → feedback loops → Go-live + training + 30-day fixes.',
    scenarios: [
      {
        business: 'Service business',
        town: 'Mombasa',
        before: 'No prices, no calendar, enquiries only in DMs',
        change: '5-page site + WhatsApp quote form + Google Maps proof',
        figure: 'Typical pattern: more enquiries',
      },
      {
        business: 'Restaurant/café',
        town: 'Mombasa',
        before: 'Paper menu, table queues, cash-only confusion at peak',
        change: 'Menu + table QR + M-Pesa checkout (often RelayIQ + custom site combo)',
        figure: 'Faster table turnover',
      },
      {
        business: 'School/clinic',
        town: 'Nairobi-remote',
        before: 'Fee/record queries by phone and notebook',
        change: 'Portal for fees/records + parent/patient WhatsApp notifications',
        figure: 'Fewer front-desk queues',
      },
    ],
    pricingBands: [
      'One-pager / starter site: Under KES 100,000',
      'Standard business site (5–10 pages + SEO + WhatsApp funnel): KES 100,000 – 500,000',
      'Bookings/payments/portal: KES 500,000 – 1,000,000',
      'Cross-platform app/MVP: KES 1,000,000 – 3,000,000 (phased)',
    ],
    timelines: 'Timelines: 2–3 weeks one-pager, 4–8 weeks standard, 8–16 weeks portal/app MVP.',
    faqs: [
      {
        q: 'How long does a website/app take?',
        a: 'One-pager 2–3 weeks, standard site 4–8 weeks, portal/app MVP 8–16 weeks — if content/feedback is on time. We give a dated plan in the proposal.',
      },
      {
        q: 'Do I own the code and domain?',
        a: 'Yes, 100% on final payment — code, designs, domain in your account, full docs. No hostage situations.',
      },
      {
        q: 'Will my site work with M-Pesa and WhatsApp?',
        a: 'Yes — M-Pesa Daraja (STK push/till reconciliation) and click-to-WhatsApp with prefilled messages are our default rails, tested on Kenyan networks.',
      },
      {
        q: 'Will I rank on Google?',
        a: 'We ship SEO-ready (speed, metadata, sitemap, Search Console). Rankings depend on content/competition — we give a starter content plan and honest expectations, not #1 promises.',
      },
      {
        q: 'Can you redesign my bad site instead of starting over?',
        a: 'Often yes. We audit (speed, mobile, enquiry path) and recommend fix vs. rebuild with costs for both.',
      },
      {
        q: 'What happens after launch?',
        a: '30-day bug fixes included. Then optional care (updates, backups, small changes, uptime watch). You can also self-manage — we hand over everything.',
      },
    ],
    seoTitle: 'Web Design & App Development Kenya | M-Pesa-Ready — ESSEM',
    seoDescription:
      'Mobile-first websites, booking/payment sites, portals & cross-platform apps for Kenyan SMEs. M-Pesa + WhatsApp built in. Mombasa-based, KES pricing. Free quote.',
    keywords: [
      'web design Kenya',
      'app development Kenya',
      'website price Kenya',
      'M-Pesa website integration',
      'business website Mombasa',
    ],
    related: [
      { label: 'Online presence — get found first', href: '/services/online-presence' },
      { label: 'Insights for SME owners', href: '/blog' },
    ],
  },
};

export const relayiqPage: ServicePageContent = {
  slug: 'relayiq',
  eyebrow: 'ESSEM product · WhatsApp + M-Pesa',
  h1: 'Turn WhatsApp chats into M-Pesa-paid orders, bookings, and tables.',
  subhead:
    'RelayIQ gives your shop, café, salon, or clinic a storefront, booking calendar, and dine-in QR — all running through WhatsApp with M-Pesa built in. Starter is free forever (20 products, 5 tables). No credit card.',
  whatsappPrefill: 'Hi ESSEM, I want help setting up RelayIQ for ...',
  pains: [
    'Customers ask “price? menu? available?” 50 times a day — you retype the same answers.',
    'Orders in DMs get lost, wrong, or unpaid — no till link, no receipt trail.',
    'Bookings live in a notebook — no-shows, double-books, no deposits.',
    'Dine-in is chaotic at peak — waiters re-take orders, kitchen misses items, bills disputed.',
  ],
  offers: [
    {
      title: 'WhatsApp storefront + order flow',
      body: 'Shareable catalog link (20 products on Starter): photos, KES prices, variants, order via WhatsApp in structured format, auto-confirmation, shop/kitchen alert.',
    },
    {
      title: 'Appointment bookings',
      body: 'Services, staff, time slots, customer self-books, WhatsApp confirmation + reminders, M-Pesa deposit option to cut no-shows. For salons, barbers, clinics, fundis, consultants.',
    },
    {
      title: 'Dine-in table QR ordering',
      body: 'Per-table QR (5 tables on Starter): guests scan, browse menu, send to kitchen, bill per table, pay via M-Pesa. No app download for guests.',
    },
    {
      title: 'M-Pesa payments',
      body: 'Daraja-backed STK push / till / paybill linkage, payment matched to order/booking/table, receipt on WhatsApp, daily sales summary.',
    },
  ],
  deliverables: [
    'Starter (free forever): storefront + WhatsApp orders, bookings, table QR; 20 products, 5 tables; no credit card',
    'Growth (paid, only when you outgrow Starter): more products/tables/branches, reports, staff roles — priced on relayiq.app',
    'ESSEM setup help: catalog, tables, M-Pesa linkage, staff training, printed QR cards — fixed KES quote',
  ],
  fitFor: [
    'Retail shops and mini-marts taking repeat WhatsApp orders',
    'Cafés and restaurants with tables + lunch-rush pain',
    'Salons, barbers and clinics taking bookings',
    'Tutors, coaches and small distributors selling on chat',
  ],
  notFor: [
    'Businesses needing full ERP/inventory/manufacturing on day one (see Digitization)',
    'Multi-warehouse enterprises or native iOS/Android apps on day one (see Websites and apps)',
  ],
  processNote:
    'Open relayiq.app and claim Starter (minutes, no card) → Add products/tables/slots → Link WhatsApp + M-Pesa, print QR, share link → Upgrade or ask ESSEM for custom work when you outgrow Starter.',
  scenarios: [
    {
      business: 'Fast-food spot',
      town: 'Mombasa',
      before: 'Lunch queues, re-taken orders, disputed bills',
      change: 'Lunch QR orders → kitchen screen → M-Pesa at table',
      figure: 'Shorter peak queues',
    },
    {
      business: 'Salon',
      town: 'Mombasa',
      before: 'Notebook bookings, no-shows, walk-in gaps',
      change: 'Bookings with M-Pesa deposit → reminders; walk-ins fill gaps from live calendar',
      figure: 'Fewer no-shows',
    },
    {
      business: 'Mini-mart',
      town: 'Mombasa',
      before: 'Price-list photos retyped daily, rider dispatch by call',
      change: '20 best-sellers online → WhatsApp orders → rider dispatch → till reconciled nightly',
      figure: 'Nightly reconciliation',
    },
    {
      business: 'Clinic',
      town: 'Nairobi-remote',
      before: 'Visit bookings in notebooks, reminder calls by staff',
      change: 'Visit bookings + reminders + receipts',
      figure: 'Less reception juggling',
    },
  ],
  pricingBands: [
    'Starter — free forever: 20 products, 5 tables, no credit card',
    'Growth — paid, only when you outgrow Starter: see live pricing on relayiq.app',
    'ESSEM setup help (single outlet): Under KES 100,000 via free quote',
  ],
  timelines: 'Start in minutes on relayiq.app; ESSEM setup help typically within 1 week.',
  faqs: [
    {
      q: 'Is Starter really free? What’s the catch?',
      a: 'Free forever for 20 products + 5 tables, no credit card — per relayiq.app. You pay only when you need more capacity/features (Growth) or want ESSEM to set it up for you. Your customer list stays yours.',
    },
    {
      q: 'Do my customers need to install an app?',
      a: 'No. Customers use WhatsApp + a web link/QR they already understand. No downloads, no accounts. Staff manage from phone or laptop.',
    },
    {
      q: 'How do M-Pesa payments work?',
      a: 'Orders/bookings trigger M-Pesa payment (STK/till per your setup) and get matched automatically; both sides get confirmation. Exact configuration depends on till vs. paybill — setup help covers this.',
    },
    {
      q: 'What if I have more than 20 products or 5 tables?',
      a: 'That’s the Growth trigger — upgrade on relayiq.app for higher limits + branches + reports. Or ask ESSEM whether to split catalogs or go custom.',
    },
    {
      q: 'Who owns my shop data?',
      a: 'You do — products, orders, customers exportable. ESSEM/RelayIQ never sells your customer list. Documented in RelayIQ terms + ESSEM privacy page.',
    },
    {
      q: 'Can ESSEM customize RelayIQ for me?',
      a: 'Yes — catalog build, QR print, staff training, M-Pesa linkage, plus custom automations/websites around it. Message us; if RelayIQ alone suffices we’ll tell you and save your money.',
    },
  ],
  seoTitle: 'RelayIQ — WhatsApp Storefront, Bookings & Dine-in QR with M-Pesa | ESSEM Product',
  seoDescription:
    'Free WhatsApp storefront, appointment bookings, table QR + M-Pesa for Kenyan SMEs. 20 products + 5 tables free forever. Built in Mombasa. Start free or get setup help.',
  keywords: [
    'WhatsApp storefront Kenya',
    'booking system Kenya salon clinic',
    'restaurant QR ordering Kenya',
    'M-Pesa ecommerce Kenya',
    'RelayIQ',
  ],
  related: [
    { label: 'Open RelayIQ (live app)', href: 'https://relayiq.app' },
    { label: 'Automations — custom workflows around RelayIQ', href: '/services/automations' },
  ],
};
