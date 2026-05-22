import Link from 'next/link';
import { getPublishedPosts } from '@/lib/blog';

interface BlogProps {
  heading?: boolean;
}

export async function Blog({ heading = true }: BlogProps) {
  const posts = (await getPublishedPosts()).slice(0, 3);

  return (
    <section className="section">
      {heading && (
        <div className="section-head">
          <span className="eyebrow-red">Field notes</span>
          <h2 className="section-title">From the inside of 200+ GHL builds.</h2>
          <p className="section-sub">Posts we write between client work — patterns, anti-patterns, and the integrations we keep reaching for.</p>
        </div>
      )}
      {posts.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'var(--fg-3)', fontSize: 14, padding: '40px 0' }}>
          No posts yet — check back soon.
        </p>
      ) : (
        <>
          <div className="blog-grid">
            {posts.map((p, i) => (
              <Link key={p.id ?? i} href={`/blog/${p.slug}`} className="mac-card blog-card" style={{ textDecoration: 'none' }}>
                <div className="blog-thumb" style={{ background: `linear-gradient(135deg, ${p.accent}30, var(--bg-elev) 70%)` }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                  {p.images?.[0] ? (
                    <img src={p.images[0]} alt={p.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
                  ) : (
                    <div style={{ position: 'absolute', bottom: 20, left: 20, width: 48, height: 48, borderRadius: 12, background: 'var(--glass-bg)', backdropFilter: 'blur(14px)', border: '1px solid var(--glass-border)', display: 'grid', placeItems: 'center', color: p.accent, fontSize: 22 }}>
                      ✦
                    </div>
                  )}
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span className="blog-cat">{p.cat}</span>
                    <span className="blog-date">{p.date}</span>
                    {p.readTime && <span className="blog-read-time">{p.readTime} min read</span>}
                  </div>
                  <div className="blog-title">{p.title}</div>
                  <div className="blog-excerpt">{p.excerpt}</div>
                  <span className="blog-read-link">Read post →</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/blog" className="btn-outline-red">View all posts</Link>
          </div>
        </>
      )}
    </section>
  );
}
