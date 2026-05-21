import { Icons } from '../atoms/Icons';

const items = [
  {
    quote: 'Nokhaiz rebuilt our intake flow in 9 days and we stopped losing leads to voicemail overnight. Bookings up 31% same month.',
    name: 'Marcus Reid',
    role: 'Owner, ApexAir HVAC',
    avatar: 'linear-gradient(135deg, #FF6B35, #B8131F)',
  },
  {
    quote: "I came in with a tangled GHL account and three half-broken Zapier zaps. He untangled it, killed the duplicate work, and now I actually trust my pipeline.",
    name: 'Priya Shah',
    role: 'Founder, Sunrise Med-spa',
    avatar: 'linear-gradient(135deg, #6D5BFE, #4435E6)',
  },
  {
    quote: 'The snapshot saved me about three weeks. I cloned it, swapped the copy, and was running ads the same week. Worth 10× what I paid.',
    name: 'Daniel Cortez',
    role: 'Owner, BrightSolar',
    avatar: 'linear-gradient(135deg, #FFC93D, #FCA311)',
  },
];

export function Testimonials() {
  return (
    <section className="section">
      <div className="section-head section-head-center">
        <span className="eyebrow-red">Receipts</span>
        <h2 className="section-title">Agencies and operators we&rsquo;ve unstuck.</h2>
      </div>
      <div className="testi-grid">
        {items.map((t, i) => (
          <div key={i} className="mac-card testi-card">
            <div className="testi-stars">
              {[0, 1, 2, 3, 4].map((j) => <span key={j}>{Icons.star}</span>)}
            </div>
            <div className="testi-quote">&ldquo;{t.quote}&rdquo;</div>
            <div className="testi-author">
              <div className="testi-avatar" style={{ background: t.avatar }}>{t.name[0]}</div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
