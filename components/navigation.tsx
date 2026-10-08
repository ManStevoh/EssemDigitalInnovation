'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { productsMenu, quoteHref, servicesMenu, workHref } from '@/lib/site';

function Dropdown({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: readonly { href: string; label: string; desc: string }[];
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
        className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#475569] transition-colors hover:text-[#2563EB]"
      >
        {label}
        <ChevronDown
          className={`size-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3">
          <div className="overflow-hidden rounded-md border border-[#DDE3EA] bg-white shadow-lg shadow-[#0F172A]/10">
            {items.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
                className="block border-l-2 border-transparent px-5 py-3.5 transition-colors hover:border-[#2563EB] hover:bg-[#F4F6F8]"
              >
                <span className="block text-sm font-semibold text-[#0F172A]">
                  {item.label}
                </span>
                <span className="mt-0.5 block text-xs leading-5 text-[#64748B]">
                  {item.desc}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const toggleMobileSection = (label: string) =>
    setMobileExpanded((prev) => (prev === label ? null : label));

  const mobileGroups = [
    { label: 'Services', items: servicesMenu },
    { label: 'Products', items: productsMenu },
  ] as const;

  return (
    <nav className="sticky top-0 z-50 border-b border-[#DDE3EA] bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo variant="full" />

        {/* Desktop — Chacha order: Services ▾ · Products ▾ · Work · Blog · Contact + Get quote */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          <Dropdown label="Services" items={servicesMenu} />
          <Dropdown label="Products" items={productsMenu} />
          <Link
            href={workHref}
            className="text-[13px] font-semibold text-[#475569] transition-colors hover:text-[#2563EB]"
          >
            Work
          </Link>
          <Link
            href="/blog"
            className="text-[13px] font-semibold text-[#475569] transition-colors hover:text-[#2563EB]"
          >
            Blog
          </Link>
          <Link
            href="/#contact"
            className="text-[13px] font-semibold text-[#475569] transition-colors hover:text-[#2563EB]"
          >
            Contact
          </Link>
        </div>

        <div className="hidden lg:block">
          <Button
            asChild
            size="sm"
            className="h-10 rounded-md bg-[#2563EB] px-5 text-[13px] font-semibold text-white hover:bg-[#1D4ED8]"
          >
            <Link href={quoteHref}>
              Get quote
              <ArrowRight className="size-3.5" />
            </Link>
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-[#0F172A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[#DDE3EA] px-4 py-4 lg:hidden">
          {mobileGroups.map((group) => (
            <div key={group.label} className="border-b border-[#E2E8F0] last:border-0">
              <button
                onClick={() => toggleMobileSection(group.label)}
                aria-expanded={mobileExpanded === group.label}
                className="flex w-full items-center justify-between py-3 text-sm font-semibold text-[#0F172A]"
              >
                {group.label}
                <ChevronDown
                  className={`size-4 transition-transform ${mobileExpanded === group.label ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileExpanded === group.label && (
                <div className="pb-2 pl-3">
                  {group.items.map((item) => (
                    <Link
                      key={item.href + item.label}
                      href={item.href}
                      className="block border-l-2 border-transparent py-2 pl-3 text-sm text-[#475569] hover:border-[#10B981] hover:text-[#2563EB]"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href={workHref}
            className="block py-3 text-sm font-semibold text-[#475569] hover:text-[#2563EB]"
            onClick={() => setIsOpen(false)}
          >
            Work
          </Link>
          <Link
            href="/blog"
            className="block py-3 text-sm font-semibold text-[#475569] hover:text-[#2563EB]"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/#contact"
            className="block py-3 text-sm font-semibold text-[#475569] hover:text-[#2563EB]"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Button
            asChild
            className="mt-3 w-full rounded-md bg-[#2563EB] text-white hover:bg-[#1D4ED8]"
          >
            <Link href={quoteHref} onClick={() => setIsOpen(false)}>
              Get quote
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
