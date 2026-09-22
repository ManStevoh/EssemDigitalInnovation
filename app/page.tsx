import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { ClientLogos } from '@/components/client-logos';
import { About } from '@/components/about';
import { Solutions } from '@/components/solutions';
import { Products } from '@/components/products';
import { Industries } from '@/components/industries';
import { Faq } from '@/components/faq';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { FaqPageJsonLd } from '@/components/json-ld';

export default function Page() {
  return (
    <>
      <FaqPageJsonLd />
      <Navigation />
      <main id="main-content">
        <Hero />
        <ClientLogos />
        <About />
        <Solutions />
        <Products />
        <Industries />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
