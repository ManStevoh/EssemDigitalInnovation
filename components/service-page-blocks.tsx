import Link from 'next/link';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import { PageIntro } from '@/components/page-intro';
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
    ? 'inline-flex h-12 items-center gap-2 rounded-full bg-[#2563EB] px-7 text-[15px] font-medium text-white hover:bg-[#1D4ED8]'
    : 'inline-flex h-12 items-center gap-2 rounded-full border border-[#E7EAF0] bg-white px-7 text-[15px] font-medium text-[#0F172A] hover:border-[#2563EB] hover:text-[#2563EB]';
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
  return (
    <div>
      <PageIntro
        eyebrow={content.eyebrow}
        title={content.h1}
        description={content.subhead}
        crumbs={crumbs}
      />
      <div className="border-b border-[#E8ECF2] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <CtaLink href={primaryHref} label={primaryLabel} primary />
            <CtaLink href={secondaryHref} label={secondaryLabel} primary={false} />
          </div>
          <p className="mt-3 text-xs leading-5 text-[#64748B]">
            Free consultation · 1-day reply · Clear scope, no theatre
          </p>
        </div>
      </div>
    </div>
  );
}

export function Pains({ items }: { items: string[] }) {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2563EB]">
          Sound familiar?
        </p>
        <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-[-0.03em] text-[#0F172A] sm:text-3xl">
          The challenges we remove
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((pain) => (
            <article
              key={pain}
              className="rounded-xl border border-[#E7EAF0] bg-[#F1F5F9] p-6"
            >
              <p className="text-sm leading-6 text-[#334155]">{pain}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OfferList({ items }: { items: { title: string; body: string }[] }) {
  return (
    <section className="border-y border-[#E7EAF0] bg-[#F1F5F9] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2563EB]">
          What we do
        </p>
        <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-[-0.03em] text-[#0F172A] sm:text-3xl">
          What you get
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((offer) => (
            <article
              key={offer.title}
              className="rounded-xl border border-[#E7EAF0] bg-white p-6"
            >
              <h3 className="text-base font-semibold text-[#0F172A]">{offer.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#64748B]">{offer.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Deliverables({ items }: { items: string[] }) {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2563EB]">
          Deliverables
        </p>
        <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-[-0.03em] text-[#0F172A] sm:text-3xl">
          What you actually get
        </h2>
        <ul className="mt-8 space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#334155]">
              <Check className="mt-1 size-4 shrink-0 text-[#10B981]" strokeWidth={2.25} />
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
    <section className="border-y border-[#E7EAF0] bg-[#F1F5F9] py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="rounded-xl border border-[#E7EAF0] bg-white p-6">
          <h2 className="text-lg font-semibold text-[#0F172A]">Who this is for</h2>
          <ul className="mt-4 space-y-2.5">
            {forItems.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-[#334155]">
                <Check className="mt-1 size-4 shrink-0 text-[#10B981]" strokeWidth={2.25} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-[#E7EAF0] bg-white p-6">
          <h2 className="text-lg font-semibold text-[#0F172A]">Who this is not for</h2>
          <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm leading-6 text-[#64748B]">
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
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2563EB]">
          Pricing
        </p>
        <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-[-0.03em] text-[#0F172A] sm:text-3xl">
          Pricing guidance in KES
        </h2>
        <ul className="mt-8 space-y-3">
          {bands.map((band) => (
            <li
              key={band}
              className="rounded-xl border border-[#E7EAF0] bg-[#F1F5F9] px-5 py-4 text-sm leading-6 text-[#0F172A]"
            >
              {band}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-6 text-[#64748B]">{timelines}</p>
        <p className="mt-1 text-sm leading-6 text-[#64748B]">{disclaimer}</p>
      </div>
    </section>
  );
}

export function Scenarios({ items }: { items: Scenario[] }) {
  return (
    <section className="border-y border-[#E7EAF0] bg-[#F1F5F9] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2563EB]">
          Example scenarios
        </p>
        <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-[-0.03em] text-[#0F172A] sm:text-3xl">
          Typical setups
        </h2>
        <p className="mt-2 text-xs text-[#64748B]">
          Typical setup — real case studies coming soon
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <article
              key={`${s.business}-${s.town}`}
              className="rounded-xl border border-[#E7EAF0] bg-white p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
                {s.business} · {s.town}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#64748B]">
                <span className="font-medium text-[#0F172A]">Before: </span>
                {s.before}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#64748B]">
                <span className="font-medium text-[#0F172A]">Change: </span>
                {s.change}
              </p>
              <p className="mt-2 text-sm font-medium leading-6 text-[#10B981]">{s.figure}</p>
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
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2563EB]">FAQ</p>
        <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-[-0.03em] text-[#0F172A] sm:text-3xl">
          Common questions
        </h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-[#E7EAF0] bg-[#F1F5F9] px-5 py-4"
            >
              <summary className="cursor-pointer text-sm font-semibold text-[#0F172A]">
                {faq.q}
              </summary>
              <p className="mt-2 text-sm leading-6 text-[#64748B]">{faq.a}</p>
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
              'inline-flex items-center gap-1 rounded-full border border-[#E7EAF0] px-5 py-2.5 text-sm font-medium text-[#2563EB] hover:border-[#2563EB]';
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
    <section className="bg-[#0F172A]">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6EE7B7]">
            ESSEM Digital Innovations · Building a Connected World
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
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
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-[15px] font-medium text-[#0F172A] hover:bg-[#F1F5F9]"
            >
              {primaryLabel}
              <ArrowRight className="size-4" />
            </a>
          ) : (
            <Link
              href={primaryHref}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-[15px] font-medium text-[#0F172A] hover:bg-[#F1F5F9]"
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
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-7 text-[15px] font-medium text-white/85 hover:border-white/50 hover:text-white"
            >
              <MessageCircle className="size-4" />
              {secondaryLabel}
            </a>
          ) : (
            <Link
              href={secondaryHref}
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-7 text-[15px] font-medium text-white/85 hover:border-white/50 hover:text-white"
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
