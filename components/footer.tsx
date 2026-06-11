import Link from 'next/link';
import { CookieSettingsLink } from '@/components/cookie-settings-link';
import { Logo } from '@/components/logo';
import { siteConfig, solutions } from '@/lib/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4 md:col-span-1">
            <Logo variant="wordmark" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              {siteConfig.brandTagline}. Based in {siteConfig.location}.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Solutions</h4>
            <ul className="space-y-2">
              {solutions.slice(0, 6).map((item) => (
                <li key={item.title}>
                  <Link href="/#solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '/#about' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'Blog', href: '/blog' },
                { label: 'Careers', href: '/careers' },
                { label: 'Contact', href: '/#contact' },
                { label: 'Privacy', href: '/privacy' },
                { label: 'Terms', href: '/terms' },
                { label: 'Cookie settings', href: '#', isCookieSettings: true },
              ].map((item) => (
                <li key={item.label}>
                  {'isCookieSettings' in item && item.isCookieSettings ? (
                    <CookieSettingsLink className="text-sm text-muted-foreground hover:text-foreground transition-colors" />
                  ) : (
                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`} className="hover:text-foreground transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.{' '}
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            {' · '}
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            {' · '}
            <CookieSettingsLink className="hover:text-foreground transition-colors" />
          </p>
          <div className="flex gap-6">
            {[
              { label: 'LinkedIn', href: siteConfig.social.linkedin },
              { label: 'Facebook', href: siteConfig.social.facebook },
              { label: 'Instagram', href: siteConfig.social.instagram },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
