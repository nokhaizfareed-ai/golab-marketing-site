import { PageShell } from '@/components/layout/PageShell';
import { Blog } from '@/components/sections/Blog';

export const metadata = { title: 'Blog — GoLab Automation' };

export default function BlogPage() {
  return (
    <PageShell>
      <Blog />
    </PageShell>
  );
}
