import Image from 'next/image';

export function About() {
  return (
    <section className="section">
      <div className="about-grid">
        <div>
          <span className="eyebrow-red">About</span>
          <h2 className="section-title" style={{ marginTop: 14 }}>
            Hi, we&rsquo;re GoLab. We fix the mess agencies inherit.
          </h2>
          <p style={{ fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.65, marginTop: 18 }}>
            Four years deep into GoHighLevel, 200+ funnels shipped, and a stubborn belief that automation should be boring — predictable, debuggable, and quietly running while you sleep.
          </p>
          <p style={{ fontSize: 16, color: 'var(--fg-2)', lineHeight: 1.65, marginTop: 14 }}>
            We work with GHL agencies and home-service operators who are tired of duct-taping six tools together. We take what you have, untangle it, and replace it with something you can actually explain to your team.
          </p>
          <div className="about-stats">
            <div className="mac-card about-stat">
              <div className="about-stat-num">200+</div>
              <div className="about-stat-label">funnels &amp; automations shipped</div>
            </div>
            <div className="mac-card about-stat">
              <div className="about-stat-num">20–30×</div>
              <div className="about-stat-label">avg client growth multiple</div>
            </div>
            <div className="mac-card about-stat">
              <div className="about-stat-num">4+ yr</div>
              <div className="about-stat-label">in funnels &amp; automation</div>
            </div>
            <div className="mac-card about-stat">
              <div className="about-stat-num">100+</div>
              <div className="about-stat-label">GHL accounts touched</div>
            </div>
          </div>
        </div>
        <div className="about-portrait">
          <div className="about-portrait-grid" />
          <Image
            className="about-portrait-mono"
            src="/assets/golab-monogram-red.png"
            alt="GoLab monogram"
            width={200}
            height={200}
          />
          <div style={{ position: 'absolute', bottom: 28, left: 28, right: 28 }}>
            <div className="chip chip-red" style={{ marginBottom: 12 }}>
              <span className="pulse-dot" style={{ background: '#FF3D4F' }} />
              available for new work
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em' }}>GoLab Automation</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-3)', marginTop: 4, letterSpacing: '0.06em' }}>GOLAB AUTOMATION · EST. 2021</div>
          </div>
        </div>
      </div>
    </section>
  );
}
