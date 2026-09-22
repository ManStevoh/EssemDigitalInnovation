'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { navLinks } from '@/lib/site';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#E7EAF0] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo variant="full" />

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium tracking-wide text-[#475569] transition-colors hover:text-[#0B1220]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            asChild
            size="sm"
            className="h-10 rounded-md bg-[#0B1220] px-4 text-[13px] font-medium text-white hover:bg-[#111827]"
          >
            <Link href="/#contact">Talk to us</Link>
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-[#0B1220] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[#E7EAF0] px-4 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2.5 text-sm font-medium text-[#475569]"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="mt-3 w-full rounded-md bg-[#0B1220] text-white">
            <Link href="/#contact" onClick={() => setIsOpen(false)}>
              Talk to us
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
