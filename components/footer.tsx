import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { CookieSettingsLink } from '@/components/cookie-settings-link';
import { Logo } from '@/components/logo';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { siteConfig, solutions } from '@/lib/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', href: siteConfig.social.linkedin, icon: Linkedin },
    { name: 'Facebook', href: siteConfig.social.facebook, icon: Facebook },
    { name: 'Instagram', href: siteConfig.social.instagram, icon: Instagram },
  ];

  return (
    <footer className="border-t border-[#E8ECF2] bg-[#0A0F1C] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo variant="full" imageClassName="h-12 max-w-[240px] brightness-0 invert" />
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

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {solutions.map((item) => (
                <li key={item.title}>
                  <Link href="/#solutions" className="text-sm text-white/70 hover:text-white">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: 'About', href: '/#about' },
                { label: 'Products', href: '/#products' },
                { label: 'Work', href: '/case-studies' },
                { label: 'Blog', href: '/blog' },
                { label: 'Careers', href: '/careers' },
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

          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Contact</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
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
            <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-medium text-white">Stay informed</p>
              <p className="mt-1 text-xs text-white/55">Occasional updates on products and delivery.</p>
              <div className="mt-4">
                <NewsletterSignup />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p>Mombasa · East Africa</p>
        </div>
      </div>
    </footer>
  );
}
