import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { ClientLogos } from '@/components/client-logos';
import { About } from '@/components/about';
import { Solutions } from '@/components/solutions';
import { CaseStudy } from '@/components/case-study';
import { Industries } from '@/components/industries';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Page() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <ClientLogos />
        <About />
        <Solutions />
        <CaseStudy />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
