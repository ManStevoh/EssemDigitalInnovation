import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { format } from 'date-fns';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { PageIntro } from '@/components/page-intro';
import { getAllPosts } from '@/lib/blog';
import { createPageMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = createPageMetadata({
  title: 'Insights',
  description:
    'Practical writing on digitization, automation, websites, apps, and digital operations for East African businesses.',
  path: '/blog',
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navigation />
      <main id="main-content">
        <PageIntro
          eyebrow="Insights"
          title="Notes from building digital systems."
          description={`Perspectives from the ${siteConfig.shortName} team on software, automation, and online presence for operators across East Africa.`}
          crumbs={[{ name: 'Insights', path: '/blog' }]}
        />

        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col rounded-xl border border-[#E8ECF2] bg-[#F4F6F8] p-6 transition-colors hover:border-[#CBD5E1] hover:bg-white"
                >
                  <time className="text-xs font-medium uppercase tracking-[0.16em] text-[#94A3B8]">
                    {format(new Date(post.date), 'dd MMM yyyy')}
                  </time>
                  <h2 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-[#0A0F1C]">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[#2563EB]">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[#64748B]">{post.description}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[#0A0F1C]"
                  >
                    Read article
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
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
