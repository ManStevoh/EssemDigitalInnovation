import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { BreadcrumbJsonLd } from '@/components/json-ld';

export type BreadcrumbItem = { name: string; path: string };

type SeoBreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function SeoBreadcrumbs({ items }: SeoBreadcrumbsProps) {
  const trail = [{ name: 'Home', path: '/' }, ...items];

  return (
    <>
      <BreadcrumbJsonLd items={trail} />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1;
            return (
              <li key={item.path} className="inline-flex items-center gap-1.5">
                {index > 0 && <ChevronRight size={14} className="shrink-0 opacity-50" aria-hidden />}
                {isLast ? (
                  <span className="text-foreground font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
