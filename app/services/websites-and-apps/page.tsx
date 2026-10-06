import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Process } from '@/components/process';
import { createPageMetadata } from '@/lib/seo';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { servicePages } from '@/lib/services-content';
import { ServiceJsonLd, PerPageFaqJsonLd } from '@/components/json-ld';
import * as B from '@/components/service-page-blocks';

const c = servicePages['websites-and-apps'];

export const metadata = createPageMetadata({
  path: '/services/websites-and-apps',
  title: c.seoTitle,
  description: c.seoDescription,
});

export default function Page() {
  const wa = getWhatsAppUrl(c.whatsappPrefill);
  const crumbs = [
    { name: 'Services', path: '/#solutions' },
    { name: 'Websites and Apps', path: '/services/websites-and-apps' },
  ];
  return (
    <>
      <Navigation />
      <main id="main-content">
        <B.ServiceHero
          content={c}
          crumbs={crumbs}
          primaryHref="/#contact"
          primaryLabel="Get a free quote"
          secondaryHref={wa}
          secondaryLabel="WhatsApp us"
        />
        <ServiceJsonLd content={c} />
        <PerPageFaqJsonLd faqs={c.faqs} />
        <B.Pains items={c.pains} />
        <B.OfferList items={c.offers} />
        <B.Deliverables items={c.deliverables} />
        <B.FitTable for_={c.fitFor} notFor={c.notFor} />
        <Process />
        <B.ProcessNote note={c.processNote} />
        <B.Scenarios items={c.scenarios} />
        <B.PricingBands
          bands={c.pricingBands}
          timelines={c.timelines}
          disclaimer="Final quote after free scoping."
        />
        <B.FaqList faqs={c.faqs} />
        <B.RelatedLinks items={c.related} />
        <B.FinalCta
          title="Let's build the site or app your customers deserve."
          copy="Free consultation — send your current site (or an example you like) and what you want customers to do. We'll recommend the smallest build worth paying for."
          primaryHref="/#contact"
          primaryLabel="Get a free quote"
          secondaryHref={wa}
          secondaryLabel="Chat on WhatsApp"
        />
      </main>
      <Footer />
    </>
  );
}
