import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { CookieSettingsLink } from '@/components/cookie-settings-link';
import { Logo } from '@/components/logo';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { siteConfig, solutions } from '@/lib/site';
import { getWhatsAppUrl } from '@/lib/whatsapp';

const serviceRoutes = [
  '/services/automations',
  '/services/digitization',
  '/services/online-presence',
  '/services/websites-and-apps',
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', href: siteConfig.social.linkedin, icon: Linkedin },
    { name: 'Facebook', href: siteConfig.social.facebook, icon: Facebook },
    { name: 'Instagram', href: siteConfig.social.instagram, icon: Instagram },
  ];

  return (
    <footer className="border-t-4 border-[#10B981] bg-[#0F172A] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <span className="inline-flex bg-white p-2">
              <Logo variant="full" imageClassName="h-12 max-w-[260px]" />
            </span>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
              {siteConfig.brandTagline}. Digital systems, automations, and online presence for
              serious operators across East Africa.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#6EE7B7]">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {solutions.map((item, index) => (
                <li key={item.title}>
                  <Link
                    href={serviceRoutes[index] ?? '/#solutions'}
                    className="text-sm text-white/70 hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#6EE7B7]">Products</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/products/relayiq" className="text-sm text-white/70 hover:text-white">
                  RelayIQ
                </Link>
              </li>
              <li>
                <Link
                  href="/services/websites-and-apps"
                  className="text-sm text-white/70 hover:text-white"
                >
                  Custom websites & apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services/automations"
                  className="text-sm text-white/70 hover:text-white"
                >
                  Automations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#6EE7B7]">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: 'About', href: '/#about' },
                { label: 'Our work', href: '/case-studies' },
                { label: 'Blog', href: '/blog' },
                { label: 'Careers', href: '/careers' },
                { label: 'Contact', href: '/#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#6EE7B7]">Resources</h4>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: 'Blog', href: '/blog' },
                { label: 'FAQs', href: '/#faq' },
                { label: 'Privacy', href: '/privacy' },
                { label: 'Terms', href: '/terms' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <CookieSettingsLink className="text-sm text-white/70 hover:text-white" />
              </li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1 lg:col-span-2">
            <h4 className="text-xs font-bold text-[#6EE7B7]">Get in touch</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>Mon–Sat, 8am–6pm EAT</li>
              <li>
                <a
                  href={getWhatsAppUrl('Hello ESSEM! I found your website and would like to discuss a project.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-y border-white/15 py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-white">Stay connected</p>
              <p className="mt-1 text-xs text-white/55">
                Get updates on new projects, tech tips, and company news.
              </p>
            </div>
            <div className="w-full max-w-sm">
              <NewsletterSignup />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved. Mwembe Tayari, Mombasa —
            Serving Kenya & East Africa (incl. Nairobi-remote).
          </p>
          <p>Mombasa · East Africa</p>
        </div>
      </div>
    </footer>
  );
}
