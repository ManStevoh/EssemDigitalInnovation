import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { PageIntro } from '@/components/page-intro';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Work',
  description:
    'ESSEM case studies will be published here as we complete real client engagements. No invented proof.',
  path: '/case-studies',
});

export default function CaseStudiesPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <PageIntro
          eyebrow="Work"
          title="Proof will be earned in public."
          description="We do not publish invented logos, fake metrics, or fictional case studies. As real engagements complete, detailed work stories will live here."
          crumbs={[{ name: 'Work', path: '/case-studies' }]}
        />

        <section className="bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-md border border-[#DDE3EA] border-l-4 border-l-[#10B981] bg-[#F4F6F8] px-6 py-10 sm:px-10 sm:py-12">
              <p className="text-sm font-bold text-[#2563EB]">
                Work in progress
              </p>
              <h2 className="mt-4 max-w-xl text-2xl font-bold text-[#0F172A] sm:text-3xl">
                Want to be among the first documented engagements?
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-6 text-[#475569]">
                If you need digitization, automation, a website, an app, or RelayIQ, let’s talk.
              </p>
              <Button
                asChild
                className="mt-8 h-12 rounded-md bg-[#2563EB] px-7 text-sm font-semibold text-white hover:bg-[#1D4ED8]"
              >
                <Link href="/#contact">
                  Start a project
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
