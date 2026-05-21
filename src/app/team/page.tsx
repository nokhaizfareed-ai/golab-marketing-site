import { PageShell } from '@/components/layout/PageShell';
import { Team } from '@/components/sections/Team';
import { Contact } from '@/components/sections/Contact';

export const metadata = { title: 'Team — GoLab Automation' };

export default function TeamPage() {
  return (
    <PageShell>
      <Team />
      <Contact />
    </PageShell>
  );
}
