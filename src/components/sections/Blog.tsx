import { Icons } from '../atoms/Icons';

const posts = [
  { cat: 'Automation', date: 'Nov 12, 2026', title: 'Why your GHL workflows fire twice — and how to fix it', excerpt: 'The most common cause of duplicate triggers is also the easiest to miss. A 4-minute audit can save you hundreds of misfired SMS.', accent: '#FF3D4F' },
  { cat: 'GoHighLevel', date: 'Nov 04, 2026', title: 'A2P 10DLC for agencies: a survival guide', excerpt: 'Registration timelines, message throughput, and the seven mistakes that get your campaign rejected. Bookmark this one.', accent: '#6D5BFE' },
  { cat: 'Integrations', date: 'Oct 28, 2026', title: 'When to use Zapier vs Make vs n8n (real talk)', excerpt: 'Cost, speed, debuggability, and edge cases. A decision tree based on 200+ builds — not vendor marketing.', accent: '#4FD0FF' },
];

interface BlogProps {
  heading?: boolean;
}

export function Blog({ heading = true }: BlogProps) {
  return (
    <section className="section">
      {heading && (
        <div className="section-head">
          <span className="eyebrow-red">Field notes</span>
          <h2 className="section-title">From the inside of 200+ GHL builds.</h2>
          <p className="section-sub">Posts we write between client work — patterns, anti-patterns, and the integrations we keep reaching for.</p>
        </div>
      )}
      <div className="blog-grid">
        {posts.map((p, i) => (
          <div key={i} className="mac-card blog-card">
            <div className="blog-thumb" style={{ background: `linear-gradient(135deg, ${p.accent}30, var(--bg-elev) 70%)` }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
              <div style={{ position: 'absolute', bottom: 20, left: 20, width: 48, height: 48, borderRadius: 12, background: 'var(--glass-bg)', backdropFilter: 'blur(14px)', border: '1px solid var(--glass-border)', display: 'grid', placeItems: 'center', color: p.accent }}>
                {Icons.spark}
              </div>
            </div>
            <div className="blog-body">
              <div className="blog-meta">
                <span className="blog-cat">{p.cat}</span>
                <span className="blog-date">{p.date}</span>
              </div>
              <div className="blog-title">{p.title}</div>
              <div className="blog-excerpt">{p.excerpt}</div>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 10, fontSize: 13, color: 'var(--brand-red-soft)', fontWeight: 500 }}>
                Read post {Icons.arrowSm}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
