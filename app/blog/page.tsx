import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on software development, AI, and digital transformation in East Africa from ESSEM Digital Innovations.',
};

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="pt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <BookOpen className="text-primary" size={28} />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Insights coming soon</h1>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            We&apos;re preparing articles on software development, AI adoption, and digital transformation
            for East African businesses. Check back soon — or reach out if there&apos;s a topic you&apos;d like us to cover.
          </p>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Suggest a topic
            <ArrowRight size={16} />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
