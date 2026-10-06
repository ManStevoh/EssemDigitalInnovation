import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Process } from '@/components/process';
import { createPageMetadata } from '@/lib/seo';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { relayiqPage } from '@/lib/services-content';
import { ProductJsonLd, PerPageFaqJsonLd } from '@/components/json-ld';
import * as B from '@/components/service-page-blocks';

const c = relayiqPage;

export const metadata = createPageMetadata({
  path: '/products/relayiq',
  title: c.seoTitle,
  description: c.seoDescription,
});

export default function Page() {
  const wa = getWhatsAppUrl(c.whatsappPrefill);
  const crumbs = [
    { name: 'Products', path: '/#products' },
    { name: 'RelayIQ', path: '/products/relayiq' },
  ];
  return (
    <>
      <Navigation />
      <main id="main-content">
        <B.ServiceHero
          content={c}
          crumbs={crumbs}
          primaryHref="https://relayiq.app"
          primaryLabel="Start free on RelayIQ"
          secondaryHref={wa}
          secondaryLabel="WhatsApp ESSEM for setup help"
        />
        <ProductJsonLd />
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
          disclaimer="Exact Growth pricing lives on relayiq.app — this page never hardcodes it."
        />
        <B.FaqList faqs={c.faqs} />
        <B.RelatedLinks items={c.related} />
        <B.FinalCta
          title="Open your shop on RelayIQ today — free."
          copy="Start free in minutes, or let ESSEM set it up for you this week."
          primaryHref="https://relayiq.app"
          primaryLabel="Start free on RelayIQ"
          secondaryHref={wa}
          secondaryLabel="WhatsApp ESSEM for setup help"
        />
      </main>
      <Footer />
    </>
  );
}
