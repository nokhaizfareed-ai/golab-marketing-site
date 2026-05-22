import { PageShell } from '@/components/layout/PageShell';
import { Hero } from '@/components/sections/Hero';
import { LogoMarquee } from '@/components/sections/LogoMarquee';
import { HighLevelSection } from '@/components/sections/HighLevelSection';
import { Industries } from '@/components/sections/Industries';
import { Services } from '@/components/sections/Services';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { EnterpriseBand } from '@/components/sections/EnterpriseBand';
import { Products } from '@/components/sections/Products';
import { Testimonials } from '@/components/sections/Testimonials';
import { Team } from '@/components/sections/Team';
import { Blog } from '@/components/sections/Blog';
import { Contact } from '@/components/sections/Contact';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <LogoMarquee />
      <HighLevelSection />
      <Industries />
      <Services />
      <HowItWorks />
      <EnterpriseBand />
      <Products />
      <Testimonials />
      <Team />
      <Blog />
      <Contact />
    </PageShell>
  );
}
