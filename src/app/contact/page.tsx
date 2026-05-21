import { PageShell } from '@/components/layout/PageShell';
import { Contact } from '@/components/sections/Contact';

export const metadata = { title: 'Contact — GoLab Automation' };

export default function ContactPage() {
  return (
    <PageShell>
      <Contact />
    </PageShell>
  );
}
