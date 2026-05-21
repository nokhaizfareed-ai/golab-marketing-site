import { GlassButton } from '../atoms/GlassButton';
import { Icons } from '../atoms/Icons';

export function EnterpriseBand() {
  return (
    <section className="enterprise-band" style={{ margin: '64px auto', padding: '64px' }}>
      <div>
        <span className="eyebrow-red">Built for scale</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', marginTop: 14, marginBottom: 14 }}>
          From your first 100 leads to your hundred-thousandth.
        </h2>
        <p className="section-sub">SLA-backed delivery, dedicated specialists for A2P/DNS, integration engineering, and white-label support for agencies running their own GHL practice. We staff up the way enterprise expects.</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
          <GlassButton variant="primary" iconRight={Icons.arrow} href="/contact">Talk to enterprise</GlassButton>
          <GlassButton icon={Icons.workflow} href="/services">Download capability deck</GlassButton>
        </div>
      </div>
      <div className="enterprise-stats">
        <div className="enterprise-stat">
          <div className="enterprise-stat-num">200+</div>
          <div className="enterprise-stat-label">funnels &amp; automations shipped</div>
        </div>
        <div className="enterprise-stat">
          <div className="enterprise-stat-num">99.7%</div>
          <div className="enterprise-stat-label">workflow uptime</div>
        </div>
        <div className="enterprise-stat">
          <div className="enterprise-stat-num">14d</div>
          <div className="enterprise-stat-label">avg audit-to-live</div>
        </div>
        <div className="enterprise-stat">
          <div className="enterprise-stat-num">10</div>
          <div className="enterprise-stat-label">specialists on the bench</div>
        </div>
      </div>
    </section>
  );
}
