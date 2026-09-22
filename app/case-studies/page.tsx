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

        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[#E8ECF2] bg-[#F4F6F8] px-8 py-14 text-center sm:px-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2563EB]">
                Coming soon
              </p>
              <h2 className="mx-auto mt-4 max-w-xl text-2xl font-semibold tracking-[-0.03em] text-[#0A0F1C] sm:text-3xl">
                Want to be among the first documented engagements?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[#64748B]">
                If you need digitization, automation, a website, an app, or RelayIQ, let’s talk.
              </p>
              <Button
                asChild
                className="mt-8 h-12 rounded-full bg-[#0A0F1C] px-7 text-sm text-white hover:bg-black"
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
