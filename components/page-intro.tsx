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
    <header className="border-b border-[#DDE3EA] bg-[#F4F6F8]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SeoBreadcrumbs items={crumbs} />
        <p className="mt-6 border-l-4 border-[#10B981] pl-3 text-sm font-bold text-[#2563EB]">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-[#0F172A] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#475569] sm:text-lg">{description}</p>
      </div>
    </header>
  );
}
