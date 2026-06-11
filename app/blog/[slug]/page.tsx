import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { MarkdownContent } from '@/components/markdown-content';
import { BlogPostingJsonLd } from '@/components/json-ld';
import { SeoBreadcrumbs } from '@/components/seo-breadcrumbs';
import { Button } from '@/components/ui/button';
import { getAllSlugs, getPostBySlug } from '@/lib/blog';
import { createPageMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import { getWhatsAppUrl } from '@/lib/whatsapp';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return createPageMetadata({ title: 'Article not found', path: `/blog/${slug}`, noIndex: true });

  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    ogType: 'article',
    publishedTime: post.date,
    modifiedTime: post.updated ?? post.date,
    authors: [post.author],
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const contactUrl = getWhatsAppUrl(
    `Hello ${siteConfig.shortName}, I read your article "${post.title}" and would like to discuss how you can help.`
  );

  return (
    <>
      <BlogPostingJsonLd post={post} />
      <Navigation />
      <main id="main-content" className="pt-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <SeoBreadcrumbs
            items={[
              { name: 'Blog', path: '/blog' },
              { name: post.title, path: `/blog/${post.slug}` },
            ]}
          />

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {post.category}
            </span>
            <time dateTime={post.date} className="text-sm text-muted-foreground">
              {format(new Date(post.date), 'd MMMM yyyy')}
            </time>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">{post.description}</p>
          <p className="text-sm text-muted-foreground mb-10 pb-10 border-b border-border/40">
            By {post.author}
          </p>

          <MarkdownContent content={post.content} />

          <section className="mt-16 rounded-xl border border-border/60 bg-muted/30 p-8 sm:p-10">
            <h2 className="text-xl font-semibold mb-3">Ready to take the next step?</h2>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Whether you need custom software, mobile apps, ICT support, or digital marketing,{' '}
              {siteConfig.shortName} can help. Tell us about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/#contact">
                  Discuss your project
                  <ArrowRight size={16} />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary/30 text-primary">
                <a href={contactUrl} target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
