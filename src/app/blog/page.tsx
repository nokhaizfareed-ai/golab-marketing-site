import { PageShell } from '@/components/layout/PageShell';
import { getPublishedPosts } from '@/lib/blog';
import { BlogPageClient } from './BlogPageClient';

export const metadata = {
  title: 'Blog — GoLab Automation',
  description: 'Patterns, anti-patterns, and the integrations we keep reaching for. Posts from inside 200+ GHL builds.',
  openGraph: {
    title: 'Blog — GoLab Automation',
    description: 'Patterns, anti-patterns, and the integrations we keep reaching for. Posts from inside 200+ GHL builds.',
    type: 'website',
  },
};

// No force-dynamic — pages are cached and revalidated on-demand via /api/revalidate
export default async function BlogPage() {
  const posts = await getPublishedPosts();
  return (
    <PageShell>
      <section className="section">
        <div className="section-head">
          <span className="eyebrow-red">Field notes</span>
          <h1 className="section-title">From the inside of 200+ GHL builds.</h1>
          <p className="section-sub">Posts we write between client work — patterns, anti-patterns, and the integrations we keep reaching for.</p>
        </div>
        <BlogPageClient posts={posts} />
      </section>
    </PageShell>
  );
}
