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
      <main id="main-content" className="min-h-[60vh] flex items-center justify-center px-4 py-24">
        <div className="text-center max-w-md">
          <p className="text-sm font-medium text-primary mb-2">404</p>
          <h1 className="text-3xl font-bold tracking-tight mb-3">Page not found</h1>
          <p className="text-muted-foreground mb-8">
            The page you are looking for does not exist or may have been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link href="/">Back to home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/#contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
