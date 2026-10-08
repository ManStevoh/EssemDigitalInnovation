import Link from 'next/link';
import { ArrowDownRight, ArrowRight, Check, MessageCircle } from 'lucide-react';
import { SeoBreadcrumbs } from '@/components/seo-breadcrumbs';
import type { Faq, Scenario, ServicePageContent } from '@/lib/services-content';
import { siteConfig } from '@/lib/site';

export type { Faq, Scenario, ServicePageContent };

type Crumb = { name: string; path: string };

function CtaLink({
  href,
  label,
  primary,
  external,
}: {
  href: string;
  label: string;
  primary: boolean;
  external?: boolean;
}) {
  const cls = primary
    ? 'inline-flex min-h-12 items-center gap-2 rounded-md bg-[#2563EB] px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]'
    : 'inline-flex min-h-12 items-center gap-2 rounded-md border border-[#CBD5E1] bg-white px-5 py-3 text-[15px] font-semibold text-[#0F172A] transition-colors hover:border-[#2563EB] hover:text-[#2563EB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]';
  if (external || href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {label}
        {primary ? <ArrowRight className="size-4" /> : <MessageCircle className="size-4" />}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {label}
      {primary ? <ArrowRight className="size-4" /> : <MessageCircle className="size-4" />}
    </Link>
  );
}

export function ServiceHero({
  content,
  crumbs,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  content: ServicePageContent;
  crumbs: Crumb[];
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}) {
  const scenario = content.scenarios[0];
  const isProduct = content.slug === 'relayiq';

  return (
    <header className="border-b border-[#E2E8F0] bg-[#F7F8FA]">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-6 sm:px-6 sm:pb-14 lg:px-8 lg:pb-16">
        <SeoBreadcrumbs items={crumbs} />
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(19rem,0.8fr)] lg:gap-16">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563EB]">
              {content.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.12] text-[#0F172A] sm:text-5xl">
              {content.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#475569] sm:text-lg sm:leading-8">
              {content.subhead}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CtaLink href={primaryHref} label={primaryLabel} primary />
              <CtaLink href={secondaryHref} label={secondaryLabel} primary={false} />
            </div>
            <p className="mt-4 max-w-xl text-xs leading-5 text-[#475569]">
              {isProduct
                ? 'Starter is free forever. No credit card. ESSEM setup help is available when you need it.'
                : 'Free consultation · Reply within 1 business day · Clear scope before we build.'}
            </p>
          </div>

          <aside
            aria-label={`Typical ${scenario.business} setup in ${scenario.town}`}
            className="rounded-lg bg-[#0F172A] p-5 text-white shadow-[0_18px_45px_rgba(15,23,42,0.14)] sm:p-7"
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6EE7B7]">
                  Typical setup
                </p>
                <p className="mt-2 text-lg font-semibold">{scenario.business}</p>
              </div>
              <span className="shrink-0 rounded-md border border-white/15 px-3 py-1.5 text-xs text-white/70">
                {scenario.town}
              </span>
            </div>
            <div className="pt-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
                Before
              </p>
              <p className="mt-2 text-sm leading-6 text-white/80">{scenario.before}</p>
              <ArrowDownRight aria-hidden className="my-3 size-5 text-[#6EE7B7]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
                With {isProduct ? 'RelayIQ' : 'a better system'}
              </p>
              <p className="mt-2 text-sm leading-6 text-white">{scenario.change}</p>
            </div>
            <div className="mt-5 border-t border-white/15 pt-4">
              <p className="text-sm font-semibold text-[#6EE7B7]">{scenario.figure}</p>
              <p className="mt-1 text-[11px] leading-5 text-white/50">
                Illustrative scenario, not a client case study.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </header>
  );
}

export function Pains({ items }: { items: string[] }) {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563EB]">
          Sound familiar?
        </p>
        <h2 className="mt-3 max-w-2xl text-2xl font-bold text-[#0F172A] sm:text-3xl">
          The challenges we remove
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((pain) => (
            <article
              key={pain}
              className="border-l-2 border-[#2563EB] bg-[#F7F8FA] px-5 py-5"
            >
              <p className="text-sm font-medium leading-6 text-[#334155]">{pain}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OfferList({ items }: { items: { title: string; body: string }[] }) {
  return (
    <section className="border-y border-[#E2E8F0] bg-[#F7F8FA] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563EB]">
          What we do
        </p>
        <h2 className="mt-3 max-w-2xl text-2xl font-bold text-[#0F172A] sm:text-3xl">
          What you get
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((offer, index) => (
            <article
              key={offer.title}
              className="border-t-2 border-[#10B981] bg-white p-5 sm:p-6"
            >
              <p className="text-xs font-bold tabular-nums text-[#2563EB]">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 text-base font-bold text-[#0F172A]">{offer.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#475569]">{offer.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Deliverables({ items }: { items: string[] }) {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563EB]">
          Deliverables
        </p>
        <h2 className="mt-3 max-w-2xl text-2xl font-bold text-[#0F172A] sm:text-3xl">
          What you actually get
        </h2>
        <ul className="mt-6 grid gap-x-10 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 border-b border-[#E2E8F0] py-4 text-sm leading-6 text-[#334155]">
              <Check className="mt-1 size-4 shrink-0 text-[#059669]" strokeWidth={2.5} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FitTable({ for_: forItems, notFor }: { for_: string[]; notFor: string[] }) {
  return (
    <section className="border-y border-[#E2E8F0] bg-[#F7F8FA] py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px overflow-hidden border border-[#E2E8F0] bg-[#E2E8F0] px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="bg-[#EFF6FF] p-6 sm:p-8">
          <p className="text-sm font-bold text-[#2563EB]">A good fit</p>
          <h2 className="mt-2 text-xl font-bold text-[#0F172A]">Built for teams who…</h2>
          <ul className="mt-4 space-y-2.5">
            {forItems.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-[#334155]">
                <Check className="mt-1 size-4 shrink-0 text-[#059669]" strokeWidth={2.5} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 sm:p-8">
          <p className="text-sm font-bold text-[#64748B]">Worth knowing</p>
          <h2 className="mt-2 text-xl font-bold text-[#0F172A]">May not be right if…</h2>
          <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm leading-6 text-[#475569]">
            {notFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function ProcessNote({ note }: { note: string }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-2 sm:px-6 lg:px-8">
        <p className="text-sm leading-6 text-[#64748B]">{note}</p>
      </div>
    </div>
  );
}

export function PricingBands({
  bands,
  timelines,
  disclaimer,
}: {
  bands: string[];
  timelines: string;
  disclaimer: string;
}) {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold text-[#2563EB]">
          Pricing
        </p>
        <h2 className="mt-3 max-w-2xl text-2xl font-bold text-[#0F172A] sm:text-3xl">
          Pricing guidance in KES
        </h2>
        <ul className="mt-8 grid gap-3 md:grid-cols-3">
          {bands.map((band, index) => (
            <li key={band} className="border-t-[3px] border-[#10B981] bg-[#F4F6F8] p-5 sm:p-6">
              <p className="text-sm font-semibold leading-6 text-[#0F172A]">{band}</p>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm leading-6 text-[#334155]">{timelines}</p>
        <p className="mt-1 text-sm leading-6 text-[#64748B]">{disclaimer}</p>
      </div>
    </section>
  );
}

export function Scenarios({ items }: { items: Scenario[] }) {
  return (
    <section className="border-y border-[#E2E8F0] bg-[#F7F8FA] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold text-[#2563EB]">
          Example scenarios
        </p>
        <h2 className="mt-3 max-w-2xl text-2xl font-bold text-[#0F172A] sm:text-3xl">
          See the change, step by step
        </h2>
        <p className="mt-2 text-sm leading-6 text-[#64748B]">
          Typical setups for illustration. These are not client case studies.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <article
              key={`${s.business}-${s.town}`}
              className="border border-[#E2E8F0] bg-white p-5 sm:p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-bold text-[#0F172A]">{s.business}</h3>
                <span className="text-xs text-[#64748B]">{s.town}</span>
              </div>
              <div className="mt-5 border-l border-[#CBD5E1] pl-4">
                <p className="text-xs font-bold text-[#64748B]">Before</p>
                <p className="mt-1 text-sm leading-6 text-[#475569]">{s.before}</p>
                <ArrowDownRight aria-hidden className="my-2 size-4 text-[#2563EB]" />
                <p className="text-xs font-bold text-[#2563EB]">After</p>
                <p className="mt-1 text-sm leading-6 text-[#0F172A]">{s.change}</p>
              </div>
              <p className="mt-5 border-t border-[#E2E8F0] pt-4 text-sm font-bold text-[#047857]">{s.figure}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold text-[#2563EB]">Questions</p>
        <h2 className="mt-3 max-w-2xl text-2xl font-bold text-[#0F172A] sm:text-3xl">
          Common questions
        </h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-md border border-[#DDE3EA] bg-[#F4F6F8] px-5 py-4"
            >
              <summary className="cursor-pointer text-sm font-semibold text-[#0F172A]">
                {faq.q}
              </summary>
              <p className="mt-2 text-sm leading-6 text-[#475569]">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RelatedLinks({ items }: { items: { label: string; href: string }[] }) {
  return (
    <section className="bg-white pb-12 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-semibold text-[#0F172A]">Keep exploring</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {items.map((item) => {
            const external = item.href.startsWith('http');
            const cls =
              'inline-flex min-h-11 items-center gap-1 rounded-md border border-[#CBD5E1] px-4 py-2.5 text-sm font-semibold text-[#2563EB] hover:border-[#2563EB] hover:bg-[#EFF6FF]';
            return (
              <li key={item.href}>
                {external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} className={cls}>
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function FinalCta({
  title,
  copy,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  copy: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}) {
  const primaryExternal = primaryHref.startsWith('http');
  const secondaryExternal = secondaryHref.startsWith('http');
  return (
    <section className="border-t-4 border-[#10B981] bg-[#0F172A]">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold text-[#6EE7B7]">
            ESSEM Digital Innovations · Building a Connected World
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-white/65">{copy}</p>
          <p className="mt-3 text-sm leading-6 text-white/55">
            We reply within 1 business day with 3 things: what we understood, what we propose,
            what it costs to start. From {siteConfig.location} · {siteConfig.phone}.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {primaryExternal ? (
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-[#2563EB] px-7 text-[15px] font-semibold text-white hover:bg-[#1D4ED8]"
            >
              {primaryLabel}
              <ArrowRight className="size-4" />
            </a>
          ) : (
            <Link
              href={primaryHref}
              className="inline-flex h-12 items-center gap-2 rounded-md bg-[#2563EB] px-7 text-[15px] font-semibold text-white hover:bg-[#1D4ED8]"
            >
              {primaryLabel}
              <ArrowRight className="size-4" />
            </Link>
          )}
          {secondaryExternal ? (
            <a
              href={secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-md border border-white/30 px-7 text-[15px] font-semibold text-white hover:border-white hover:bg-white/5"
            >
              <MessageCircle className="size-4" />
              {secondaryLabel}
            </a>
          ) : (
            <Link
              href={secondaryHref}
              className="inline-flex h-12 items-center gap-2 rounded-md border border-white/30 px-7 text-[15px] font-semibold text-white hover:border-white hover:bg-white/5"
            >
              <MessageCircle className="size-4" />
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
