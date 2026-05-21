import { PageShell } from '@/components/layout/PageShell';
import { Services } from '@/components/sections/Services';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { HighLevelSection } from '@/components/sections/HighLevelSection';
import { EnterpriseBand } from '@/components/sections/EnterpriseBand';
import { Contact } from '@/components/sections/Contact';

export const metadata = { title: 'Services — GoLab Automation' };

export default function ServicesPage() {
  return (
    <PageShell>
      <Services />
      <HowItWorks />
      <HighLevelSection />
      <EnterpriseBand />
      <Contact />
    </PageShell>
  );
}
