import { GlassButton } from '../atoms/GlassButton';
import { Icons } from '../atoms/Icons';

const products = [
  { title: 'Home Services Pro Snapshot', niche: 'HVAC · Plumbing · Roofing', accent: '#FF3D4F', price: '$497', desc: 'Lead-capture funnel, instant SMS booking, missed-call text-back, review request flow, and dispatch handoff — all pre-wired for home service trades.', tag: 'Best seller' },
  { title: 'Med-Spa Booking Engine', niche: 'Med-spa · Aesthetics', accent: '#FF8A4F', price: '$597', desc: 'Treatment menu funnel, deposit-required booking, no-show recovery, and birthday/anniversary win-back campaigns. Stripe + GHL native.', tag: 'New' },
  { title: 'Solar Lead Concierge', niche: 'Solar · Roofing', accent: '#FFB84F', price: '$697', desc: 'Pre-qualifier with bill-photo upload, auto-assignment by zip, drip nurture for slow leads, and closer dashboard.', tag: null },
  { title: 'Real Estate Listing Funnel', niche: 'Realtors · Brokerages', accent: '#6D5BFE', price: '$397', desc: 'Listing pages, valuation request flow, IDX integration scaffolding, and seller nurture sequences.', tag: null },
  { title: 'Local Restaurant Stack', niche: 'Restaurants · Cafes', accent: '#4FD0FF', price: '$297', desc: 'Loyalty signup funnel, birthday club, reservation requests, and Google review collection from POS triggers.', tag: null },
  { title: 'Custom Niche Build', niche: 'Any service business', accent: '#FF3D4F', price: 'From $1,500', desc: "Don't see your niche? We'll build it. Discovery → spec → build → handoff in 14 days, with a snapshot you own forever.", tag: 'Custom' },
];

function ProductThumb({ niche, accent }: { niche: string; accent: string }) {
  return (
    <div
      className="product-thumb"
      style={{ background: `linear-gradient(135deg, ${accent}22, transparent 70%), var(--bg-elev)` }}
    >
      <div style={{ display: 'grid', placeItems: 'center', gap: 14 }}>
        <div style={{
          width: 56, height: 56, borderRadius: 16,
          background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
          backdropFilter: 'blur(14px)', display: 'grid', placeItems: 'center', color: accent,
        }}>
          {Icons.layers}
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>
          {niche} · snapshot
        </div>
      </div>
    </div>
  );
}

interface ProductsProps {
  heading?: boolean;
}

export function Products({ heading = true }: ProductsProps) {
  return (
    <section className="section">
      {heading && (
        <div className="section-head">
          <span className="eyebrow-red">Snapshots &amp; templates</span>
          <h2 className="section-title">Niche-specific automation, ready to clone.</h2>
          <p className="section-sub">Pre-built GHL snapshots for home services and other verticals. Import into your sub-account, customize the copy, ship in a week.</p>
        </div>
      )}
      <div className="products-grid">
        {products.map((p, i) => (
          <div key={i} className="mac-card product-card">
            <ProductThumb niche={p.niche} accent={p.accent} />
            <div className="product-body">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, letterSpacing: '-0.015em' }}>{p.title}</div>
                {p.tag && <span className="chip chip-red" style={{ padding: '3px 8px', fontSize: 9 }}>{p.tag}</span>}
              </div>
              <div className="product-niche">{p.niche}</div>
              <div style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.55, marginTop: 6 }}>{p.desc}</div>
              <div className="product-meta">
                <div className="product-price">{p.price}</div>
                <GlassButton size="sm" iconRight={Icons.arrowSm} href="/contact">See snapshot</GlassButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
