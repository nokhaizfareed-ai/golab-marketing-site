import { PageShell } from '@/components/layout/PageShell';
import { Products } from '@/components/sections/Products';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';

export const metadata = { title: 'Products — GoLab Automation' };

export default function ProductsPage() {
  return (
    <PageShell>
      <Products />
      <Testimonials />
      <Contact />
    </PageShell>
  );
}
