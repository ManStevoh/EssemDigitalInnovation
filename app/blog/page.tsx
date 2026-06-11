import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SeoBreadcrumbs } from '@/components/seo-breadcrumbs';
import { getAllPosts } from '@/lib/blog';
import { createPageMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import { brandHoverClasses } from '@/lib/brand-guide';

export const metadata: Metadata = createPageMetadata({
  title: 'Insights & Blog',
  description:
    'Practical insights on software development, mobile apps, ICT infrastructure, and digital marketing for East African businesses and institutions.',
  path: '/blog',
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navigation />
      <main id="main-content" className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <SeoBreadcrumbs items={[{ name: 'Blog', path: '/blog' }]} />

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Insights & Blog</h1>
          <p className="text-lg text-foreground/70 mb-12 max-w-2xl">
            Practical perspectives on software, mobile development, startup ICT, and digital growth
            from the {siteConfig.shortName} team in Mombasa.
          </p>

          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-xl border border-border/60 bg-background p-6 sm:p-8 hover:border-primary/30 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {post.category}
                  </span>
                  <time dateTime={post.date} className="text-xs text-muted-foreground">
                    {format(new Date(post.date), 'd MMMM yyyy')}
                  </time>
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2">
                  <Link href={`/blog/${post.slug}`} className={brandHoverClasses.link}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-foreground/70 mb-4 leading-relaxed">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className={`inline-flex items-center gap-2 text-sm font-medium text-primary ${brandHoverClasses.link}`}
                >
                  Read article
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
