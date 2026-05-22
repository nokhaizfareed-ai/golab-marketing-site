'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { BlogPost, getCategories } from '@/lib/blog';

interface Props { posts: BlogPost[] }

export function BlogPageClient({ posts }: Props) {
  const [activeCat, setActiveCat] = useState('All');
  const [query, setQuery] = useState('');

  const cats = useMemo(() => ['All', ...getCategories(posts)], [posts]);

  const filtered = useMemo(() => {
    return posts.filter(p => {
      const catMatch = activeCat === 'All' || p.cat === activeCat;
      const q = query.trim().toLowerCase();
      const textMatch = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
      return catMatch && textMatch;
    });
  }, [posts, activeCat, query]);

  const featured = filtered[0] ?? null;
  const rest = filtered.slice(1);

  return (
    <>
      {/* Filter bar */}
      <div className="blog-filter-bar">
        <div className="blog-filter-tabs">
          {cats.map(c => (
            <button
              key={c}
              className={`blog-filter-tab${activeCat === c ? ' active' : ''}`}
              onClick={() => setActiveCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="blog-search-wrap">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            className="blog-search"
            type="search"
            placeholder="Search posts…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'var(--fg-3)', fontSize: 14, padding: '60px 0' }}>
          No posts match your search.
        </p>
      ) : (
        <>
          {/* Featured post */}
          {featured && (
            <Link href={`/blog/${featured.slug}`} className="blog-featured mac-card" style={{ textDecoration: 'none' }}>
              <div className="blog-featured-thumb" style={{ background: `linear-gradient(135deg, ${featured.accent}30, var(--bg-elev) 60%)` }}>
                <div className="blog-grid-bg" />
                {featured.images?.[0] ? (
                  <img src={featured.images[0]} alt={featured.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
                ) : (
                  <div className="blog-featured-icon" style={{ background: `${featured.accent}22`, border: `1px solid ${featured.accent}44`, color: featured.accent }}>✦</div>
                )}
                <div className="blog-featured-badge">Featured</div>
              </div>
              <div className="blog-featured-body">
                <div className="blog-meta">
                  <span className="blog-cat">{featured.cat}</span>
                  <span className="blog-date">{featured.date}</span>
                  {featured.readTime && <span className="blog-read-time">{featured.readTime} min read</span>}
                </div>
                <div className="blog-featured-title">{featured.title}</div>
                <div className="blog-featured-excerpt">{featured.excerpt}</div>
                <span className="blog-read-link">Read post →</span>
              </div>
            </Link>
          )}

          {/* Post grid */}
          {rest.length > 0 && (
            <div className="blog-grid" style={{ marginTop: 40 }}>
              {rest.map((p, i) => (
                <Link key={p.id ?? i} href={`/blog/${p.slug}`} className="mac-card blog-card" style={{ textDecoration: 'none' }}>
                  <div className="blog-thumb" style={{ background: `linear-gradient(135deg, ${p.accent}30, var(--bg-elev) 70%)` }}>
                    <div className="blog-grid-bg" />
                    {p.images?.[0] ? (
                      <img src={p.images[0]} alt={p.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
                    ) : (
                      <div style={{ position: 'absolute', bottom: 20, left: 20, width: 48, height: 48, borderRadius: 12, background: 'var(--glass-bg)', backdropFilter: 'blur(14px)', border: '1px solid var(--glass-border)', display: 'grid', placeItems: 'center', color: p.accent, fontSize: 22 }}>✦</div>
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
          )}
        </>
      )}
    </>
  );
}
