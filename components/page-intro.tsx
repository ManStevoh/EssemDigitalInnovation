import { SeoBreadcrumbs } from '@/components/seo-breadcrumbs';

type Crumb = { name: string; path: string };

export function PageIntro({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  description: string;
  crumbs: Crumb[];
}) {
  return (
    <header className="border-b border-[#E8ECF2] bg-[#F4F6F8]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SeoBreadcrumbs items={crumbs} />
        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2563EB]">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-[#0A0F1C] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg">{description}</p>
      </div>
    </header>
  );
}
