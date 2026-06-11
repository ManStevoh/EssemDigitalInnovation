'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { navLinks } from '@/lib/site';
import { brandHoverClasses } from '@/lib/brand-guide';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-16 py-2 gap-4">
          <Logo variant="full" />

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium text-foreground/70 ${brandHoverClasses.link}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block shrink-0">
            <Button asChild size="sm" className={`bg-primary text-primary-foreground ${brandHoverClasses.button}`}>
              <Link href="/#contact">Contact us</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md shrink-0 text-foreground"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border/40">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 text-sm font-medium text-foreground/70 ${brandHoverClasses.link}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 pt-4">
              <Button asChild className={`w-full bg-primary text-primary-foreground ${brandHoverClasses.button}`}>
                <Link href="/#contact" onClick={() => setIsOpen(false)}>
                  Contact us
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
