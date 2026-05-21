import { PageShell } from '@/components/layout/PageShell';
import { About } from '@/components/sections/About';
import { Team } from '@/components/sections/Team';
import { Testimonials } from '@/components/sections/Testimonials';

export const metadata = { title: 'About — GoLab Automation' };

export default function AboutPage() {
  return (
    <PageShell>
      <About />
      <Team />
      <Testimonials />
    </PageShell>
  );
}
