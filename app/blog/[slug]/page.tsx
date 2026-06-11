import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { MarkdownContent } from '@/components/markdown-content';
import { BlogPostingJsonLd } from '@/components/json-ld';
import { SeoBreadcrumbs } from '@/components/seo-breadcrumbs';
import { getAllSlugs, getPostBySlug } from '@/lib/blog';
import { createPageMetadata } from '@/lib/seo';

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
        </article>
      </main>
      <Footer />
    </>
  );
}
