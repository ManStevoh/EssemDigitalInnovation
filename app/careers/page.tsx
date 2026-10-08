import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { JobPostingJsonLd } from '@/components/json-ld';
import { PageIntro } from '@/components/page-intro';
import { openRoles, siteConfig } from '@/lib/site';
import { createPageMetadata } from '@/lib/seo';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = createPageMetadata({
  title: 'Careers',
  description: `Join ${siteConfig.name}. Roles in software, apps, automations, and digital delivery in Mombasa, Kenya.`,
  path: '/careers',
});

export default function CareersPage() {
  const applyUrl = getWhatsAppUrl(
    `Hello ${siteConfig.shortName}, I would like to apply for a position at your company.`
  );

  return (
    <>
      <JobPostingJsonLd roles={[...openRoles]} />
      <Navigation />
      <main id="main-content">
        <PageIntro
          eyebrow="Careers"
          title="Build serious systems with us."
          description={`${siteConfig.name} is hiring operators and builders in Mombasa — people who care about craft, clarity, and shipping work that holds up in the real world.`}
          crumbs={[{ name: 'Careers', path: '/careers' }]}
        />

        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 inline-flex items-center gap-2 text-sm text-[#64748B]">
              <MapPin size={14} className="text-[#2563EB]" aria-hidden />
              {siteConfig.location}
            </div>

            <div className="space-y-4">
              {openRoles.map((role) => (
                <article
                  key={role.title}
                  className="rounded-md border border-[#DDE3EA] border-l-4 border-l-[#10B981] bg-white p-5 sm:p-7"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-[#0F172A]">
                        {role.title}
                      </h2>
                      <p className="mt-2 text-sm text-[#64748B]">{role.type}</p>
                      <p className="mt-4 max-w-2xl text-sm leading-6 text-[#475569]">
                        {role.description}
                      </p>
                    </div>
                    <Button
                      asChild
                      className="h-11 shrink-0 rounded-md bg-[#2563EB] px-5 text-sm font-semibold text-white hover:bg-[#1D4ED8]"
                    >
                      <Link href={applyUrl} target="_blank" rel="noopener noreferrer">
                        Apply
                        <ArrowUpRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
