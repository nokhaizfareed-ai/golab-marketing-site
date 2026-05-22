import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PageShell } from '@/components/layout/PageShell';
import { getPostBySlug, getPublishedPosts } from '@/lib/blog';
import { ImageCarousel } from './ImageCarousel';

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: 'Post not found — GoLab Automation' };
  return {
    title: `${post.title} — GoLab Automation`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: new Date(post.createdAt).toISOString(),
      modifiedTime: new Date(post.updatedAt).toISOString(),
      tags: [post.cat],
      ...(post.images?.[0] ? { images: [{ url: post.images[0], alt: post.title }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      ...(post.images?.[0] ? { images: [post.images[0]] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: new Date(post.createdAt).toISOString(),
    dateModified: new Date(post.updatedAt).toISOString(),
    author: { '@type': 'Organization', name: 'GoLab Automation', url: 'https://golabautomation.com' },
    publisher: { '@type': 'Organization', name: 'GoLab Automation', url: 'https://golabautomation.com' },
    articleSection: post.cat,
    wordCount: post.content ? post.content.trim().split(/\s+/).length : undefined,
    ...(post.images?.[0] ? { image: post.images[0] } : {}),
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="blog-post-page">
        {/* Header */}
        <div className="blog-post-header" style={{ '--accent': post.accent } as React.CSSProperties}>
          <div className="blog-post-header-bg" style={{ background: `linear-gradient(160deg, ${post.accent}25 0%, transparent 60%)` }} />
          <div className="blog-post-header-inner">
            <Link href="/blog" className="blog-back-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
              All posts
            </Link>
            <div className="blog-meta" style={{ marginTop: 20 }}>
              <span className="blog-cat">{post.cat}</span>
              <span className="blog-date">{post.date}</span>
              {post.readTime && <span className="blog-read-time">{post.readTime} min read</span>}
            </div>
            <h1 className="blog-post-title">{post.title}</h1>
            <p className="blog-post-excerpt">{post.excerpt}</p>
          </div>
        </div>

        {/* Image carousel */}
        {post.images && post.images.length > 0 && (
          <div className="blog-post-body">
            <ImageCarousel images={post.images} title={post.title} />
          </div>
        )}

        {/* Markdown content */}
        {post.content ? (
          <div className="blog-post-body">
            <div className="blog-prose">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        ) : (
          <div className="blog-post-body">
            <p style={{ color: 'var(--fg-3)', fontStyle: 'italic' }}>Full article coming soon.</p>
          </div>
        )}

        {/* Footer */}
        <div className="blog-post-footer">
          <Link href="/blog" className="btn-outline-red">← Back to all posts</Link>
        </div>
      </article>
    </PageShell>
  );
}
