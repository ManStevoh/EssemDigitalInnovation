import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Page not found',
  description: 'The page you are looking for does not exist or may have been moved.',
  path: '/404',
  noIndex: true,
});

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="flex min-h-[70vh] items-center justify-center bg-[#F4F6F8] px-4 py-20">
        <div className="max-w-md text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2563EB]">404</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#0A0F1C]">
            This page does not exist.
          </h1>
          <p className="mt-4 text-sm leading-6 text-[#64748B]">
            The link may be broken, or the page may have moved.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild className="h-11 rounded-full bg-[#0A0F1C] text-white hover:bg-black">
              <Link href="/">Back to home</Link>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-full border-[#E8ECF2]">
              <Link href="/#contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
