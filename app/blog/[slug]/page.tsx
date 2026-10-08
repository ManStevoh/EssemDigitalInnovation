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
import { BlogSocialShare } from '@/components/blog-social-share';
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
      <main id="main-content" className="">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <SeoBreadcrumbs
            items={[
              { name: 'Blog', path: '/blog' },
              { name: post.title, path: `/blog/${post.slug}` },
            ]}
          />

          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-sm border-l-2 border-[#10B981] bg-[#EFF6FF] px-3 py-1 text-xs font-semibold text-[#2563EB]">
              {post.category}
            </span>
            <time dateTime={post.date} className="text-sm text-muted-foreground">
              {format(new Date(post.date), 'd MMMM yyyy')}
            </time>
          </div>

          <h1 className="mb-4 text-3xl font-bold leading-tight text-[#0F172A] sm:text-4xl">{post.title}</h1>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">{post.description}</p>
          <p className="text-sm text-muted-foreground mb-10 pb-10 border-b border-border/40">
            By {post.author}
          </p>

          <MarkdownContent content={post.content} />

          <BlogSocialShare slug={post.slug} title={post.title} />

          <section className="mt-16 rounded-md border border-[#DDE3EA] border-l-4 border-l-[#10B981] bg-[#F4F6F8] p-6 sm:p-8">
            <h2 className="mb-3 text-xl font-bold text-[#0F172A]">Ready to take the next step?</h2>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Whether you need custom software, mobile apps, ICT support, or digital marketing,{' '}
              {siteConfig.shortName} can help. Tell us about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="rounded-md bg-[#2563EB] text-white hover:bg-[#1D4ED8]">
                <Link href="/#contact">
                  Discuss your project
                  <ArrowRight size={16} />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-md border-[#2563EB] text-[#2563EB] hover:bg-[#EFF6FF]">
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
