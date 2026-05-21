/* =========================================================================
   HighLevel-dedicated section + redesigned Footer
   ========================================================================= */

/* ============================== HIGHLEVEL SECTION ============================== */
function HighLevelSection() {
  const capabilities = [
    { label: 'Sub-account setup', desc: 'White-glove account spin-up, custom domains, A2P 10DLC registration done right.' },
    { label: 'Snapshot library', desc: 'Niche-specific snapshots you can clone and ship in days, not months.' },
    { label: 'Workflow engineering', desc: 'Complex multi-branch workflows with proper error handling and notifications.' },
    { label: 'Custom dashboards', desc: 'Tag-based segmentation, opportunity reporting, and exec-level KPI views.' },
    { label: 'Pipeline architecture', desc: 'Stages, automations, and rotting rules designed for your sales motion.' },
    { label: 'White-label deployment', desc: 'Reseller setup, agency branding, and client onboarding flows.' },
  ];
  return (
    <section className="section" data-screen-label="03 HighLevel">
      <div className="hl-section mac-card">
        <div className="hl-bg-glow"></div>
        <div className="hl-grid">
          <div className="hl-left">
            <div className="hl-logo-frame">
              <img src="assets/logos/highlevel.png" alt="HighLevel" className="hl-logo"/>
              <span className="chip chip-red" style={{marginTop: 18}}><span className="pulse-dot" style={{background:'#FF3D4F'}}></span> Certified specialists</span>
            </div>
            <span className="eyebrow-red" style={{marginTop: 28, display:'block'}}>Our core platform</span>
            <h2 className="section-title" style={{fontSize:'clamp(28px, 3.6vw, 48px)', marginTop: 12}}>
              We don&rsquo;t just use HighLevel.<br/>We <span style={{color:'var(--brand-red-soft)'}}>engineer it.</span>
            </h2>
            <p className="section-sub" style={{marginTop: 16}}>
              Four years deep into GHL — from sub-account setup and A2P 10DLC registration to the gnarliest workflow chains and white-label reseller deployments. If it lives in HighLevel, we&rsquo;ve probably broken and rebuilt it twice.
            </p>
            <div style={{display:'flex', gap: 10, flexWrap:'wrap', marginTop: 24}}>
              <GlassButton variant="primary" iconRight={I.arrow}>Get a GHL audit</GlassButton>
              <GlassButton icon={I.layers}>Browse snapshots</GlassButton>
            </div>
          </div>

          <div className="hl-right">
            <div className="hl-cap-grid">
              {capabilities.map((c, i) => (
                <div key={i} className="hl-cap">
                  <div className="hl-cap-num">{String(i+1).padStart(2,'0')}</div>
                  <div className="hl-cap-label">{c.label}</div>
                  <div className="hl-cap-desc">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* metrics strip */}
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

/* ============================== FOOTER v2 (redesigned) ============================== */
function FooterV2() {
  const cols = [
    {
      title: 'Services',
      links: ['GHL funnels & landing pages', 'Automation workflows', 'Integrations', 'A2P & DNS setup', 'Pipeline architecture', 'Audits & A/B testing'],
    },
    {
      title: 'Products',
      links: ['Home services snapshot', 'Med-spa booking engine', 'Solar lead concierge', 'Real estate funnel', 'Restaurant stack', 'Custom niche builds'],
    },
    {
      title: 'Company',
      links: ['About', 'Team', 'Careers', 'Case studies', 'Blog', 'Contact'],
    },
    {
      title: 'Resources',
      links: ['GHL A2P guide', 'Workflow library', 'Integration playbook', 'Office hours', 'Status', 'Changelog'],
    },
  ];
  return (
    <footer className="footer-v2" data-screen-label="11 Footer">
      <div className="footer-v2-inner">
        {/* Top band: subscribe + brand */}
        <div className="footer-v2-top">
          <div className="footer-v2-brand-block">
            <img src="assets/golab-wordmark-white.png" alt="GoLab Automation" className="footer-v2-wordmark"/>
            <p className="footer-v2-tag">
              Revenue infrastructure for teams that run on automation. GoHighLevel funnels, integrations, and the engineering that holds it together.
            </p>
            <div className="footer-v2-chips">
              <span className="chip" style={{background:'rgba(255,255,255,0.10)', border:'1px solid rgba(255,255,255,0.20)', color:'#fff'}}>HighLevel partner</span>
              <span className="chip" style={{background:'rgba(255,255,255,0.10)', border:'1px solid rgba(255,255,255,0.20)', color:'#fff'}}>Make certified</span>
              <span className="chip" style={{background:'rgba(255,255,255,0.10)', border:'1px solid rgba(255,255,255,0.20)', color:'#fff'}}>SOC2 in progress</span>
            </div>
          </div>
          <div className="footer-v2-subscribe-block">
            <div className="footer-v2-eyebrow">SUBSCRIBE</div>
            <div className="footer-v2-sub-title">Field notes from 200+ GHL builds.</div>
            <div className="footer-v2-sub-desc">Monthly. Real lessons, no fluff, no &ldquo;10 ways to grow your agency&rdquo;.</div>
            <form className="footer-v2-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="you@agency.com" required/>
              <button type="submit">
                Subscribe
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </form>
          </div>
        </div>

        {/* Link columns */}
        <div className="footer-v2-cols">
          {cols.map((col, i) => (
            <div key={i} className="footer-v2-col">
              <div className="footer-v2-col-title">{col.title}</div>
              <ul>
                {col.links.map((l, j) => (
                  <li key={j}>
                    <a className="footer-v2-link">
                      <span className="footer-v2-link-text">{l}</span>
                      <svg className="footer-v2-link-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 L17 7 M9 7 H17 V15"/></svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Big animated wordmark — removed per request */}

        {/* Bottom bar */}
        <div className="footer-v2-bottom">
          <div className="footer-v2-bottom-left">
            <span>© 2026 GoLab Automation</span>
            <span className="footer-v2-dot"></span>
            <span>All rights reserved</span>
          </div>
          <div className="footer-v2-bottom-mid">
            <a className="footer-v2-small-link">Privacy</a>
            <a className="footer-v2-small-link">Terms</a>
            <a className="footer-v2-small-link">Cookies</a>
            <a className="footer-v2-small-link">Status</a>
          </div>
          <div className="footer-v2-bottom-right">
            <div className="footer-v2-live">
              <span className="pulse-dot" style={{background:'#4ade80'}}></span>
              <span style={{fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.12em'}}>OFFICE OPEN · 9–7 PT</span>
            </div>
            <div className="footer-v2-social">
              <a aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.77c1.4-2.59 7-2.78 7 2.48V19z"/></svg></a>
              <a aria-label="X"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
              <a aria-label="YouTube"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
              <a aria-label="Instagram"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { HighLevelSection, FooterV2 });
