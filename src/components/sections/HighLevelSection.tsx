import Image from 'next/image';
import { GlassButton } from '../atoms/GlassButton';
import { Icons } from '../atoms/Icons';

const capabilities = [
  { label: 'Sub-account setup', desc: 'White-glove account spin-up, custom domains, A2P 10DLC registration done right.' },
  { label: 'Snapshot library', desc: 'Niche-specific snapshots you can clone and ship in days, not months.' },
  { label: 'Workflow engineering', desc: 'Complex multi-branch workflows with proper error handling and notifications.' },
  { label: 'Custom dashboards', desc: 'Tag-based segmentation, opportunity reporting, and exec-level KPI views.' },
  { label: 'Pipeline architecture', desc: 'Stages, automations, and rotting rules designed for your sales motion.' },
  { label: 'White-label deployment', desc: 'Reseller setup, agency branding, and client onboarding flows.' },
];

export function HighLevelSection() {
  return (
    <section className="section">
      <div className="hl-section mac-card">
        <div className="hl-bg-glow" />
        <div className="hl-grid">
          <div className="hl-left">
            <div className="hl-logo-frame">
              <Image
                src="/assets/logos/highlevel.png"
                alt="HighLevel"
                width={160}
                height={48}
                className="hl-logo"
                style={{ height: 48, width: 'auto' }}
              />
              <span className="chip chip-red" style={{ marginTop: 18 }}>
                <span className="pulse-dot" style={{ background: '#FF3D4F' }} />
                Certified specialists
              </span>
            </div>
            <span className="eyebrow-red" style={{ marginTop: 28, display: 'block' }}>Our core platform</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.6vw, 48px)', marginTop: 12 }}>
              We don&rsquo;t just use HighLevel.<br />We <span style={{ color: 'var(--brand-red-soft)' }}>engineer it.</span>
            </h2>
            <p className="section-sub" style={{ marginTop: 16 }}>
              Four years deep into GHL — from sub-account setup and A2P 10DLC registration to the gnarliest workflow chains and white-label reseller deployments. If it lives in HighLevel, we&rsquo;ve probably broken and rebuilt it twice.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 24 }}>
              <GlassButton variant="primary" iconRight={Icons.arrow} href="/contact">Get a GHL audit</GlassButton>
              <GlassButton icon={Icons.layers} href="/products">Browse snapshots</GlassButton>
            </div>
          </div>

          <div className="hl-right">
            <div className="hl-cap-grid">
              {capabilities.map((c, i) => (
                <div key={i} className="hl-cap">
                  <div className="hl-cap-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="hl-cap-label">{c.label}</div>
                  <div className="hl-cap-desc">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hl-metrics">
          <div className="hl-metric">
            <div className="hl-metric-num">200+</div>
            <div className="hl-metric-label">GHL accounts deployed</div>
          </div>
          <div className="hl-metric">
            <div className="hl-metric-num">4+ yrs</div>
            <div className="hl-metric-label">building on HighLevel</div>
          </div>
          <div className="hl-metric">
            <div className="hl-metric-num">A2P</div>
            <div className="hl-metric-label">10DLC compliance dialed</div>
          </div>
          <div className="hl-metric">
            <div className="hl-metric-num">14d</div>
            <div className="hl-metric-label">avg sub-account turnaround</div>
          </div>
        </div>
      </div>
    </section>
  );
}
