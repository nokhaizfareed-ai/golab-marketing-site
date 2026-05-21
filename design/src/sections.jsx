/* =========================================================================
   Page Sections — Services, Products, Testimonials, Blog, Contact, About,
                   Footer, Nav, Logo Marquee
   ========================================================================= */

/* ============================== NAV ============================== */
function Nav({ page, setPage, theme, setTheme }) {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About' },
    { id: 'team', label: 'Team' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="nav-brand" onClick={() => setPage('home')}>
          <img src={theme === 'light' ? 'assets/golab-wordmark-color.png' : 'assets/golab-wordmark-white.png'} alt="GoLab Automation"/>
        </a>
        <div className="nav-links">
          {links.map(l => (
            <a key={l.id} className={`nav-link ${page === l.id ? 'active' : ''}`} onClick={() => setPage(l.id)}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <ThemeSwitch theme={theme} onChange={setTheme}/>
          <GlassButton variant="primary" size="sm" iconRight={I.arrowSm} onClick={() => setPage('contact')}>Book a quick discovery call</GlassButton>
        </div>
      </div>
    </nav>
  );
}

/* ============================== LOGO MARQUEE ============================== */
function LogoMarquee() {
  const items = [
    { src: 'assets/logos/highlevel.png', alt: 'HighLevel', h: 32 },
    { src: 'assets/logos/leadconnector.png', alt: 'LeadConnector', h: 28 },
    { src: 'assets/logos/zapier.png', alt: 'Zapier', h: 28 },
    { src: 'assets/logos/make.png', alt: 'Make', h: 28 },
    { src: 'assets/logos/n8n.png', alt: 'n8n', h: 40 },
    { src: 'assets/logos/twilio.png', alt: 'Twilio', h: 40 },
    { src: 'assets/logos/monday.png', alt: 'monday.com', h: 40 },
    { src: 'assets/logos/salesforce.png', alt: 'Salesforce', h: 32 },
    { src: 'assets/logos/zoho.png', alt: 'Zoho', h: 40 },
    { text: 'HubSpot' },
    { text: 'Mailgun' },
    { text: 'ClickFunnels' },
  ];
  return (
    <div style={{marginTop: 16}}>
      <div style={{textAlign:'center', marginBottom: 24}}>
        <span className="eyebrow">Trusted across the stack — and the platforms we integrate</span>
      </div>
      <div className="marquee-wrap">
        <div className="marquee">
          {[...items, ...items].map((x, i) => (
            <div key={i} className="logo-chip lg">
              {x.src ? <img src={x.src} alt={x.alt} style={{height: x.h}}/> : <span className="logo-text">{x.text}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================== INDUSTRIES ============================== */
function Industries() {
  const industries = [
    { icon: '🏥', name: 'Healthcare & Medspas', tag: 'HIPAA-aware flows' },
    { icon: '🏠', name: 'Home Services', tag: 'HVAC · Roofing · Plumbing' },
    { icon: '🏢', name: 'Real Estate', tag: 'Brokers · Property mgmt' },
    { icon: '💰', name: 'Financial Services', tag: 'Insurance · Mortgage' },
    { icon: '🚀', name: 'B2B SaaS', tag: 'Demo-led growth' },
    { icon: '🎓', name: 'Coaches & Creators', tag: 'Courses · Communities' },
    { icon: '⚖️', name: 'Legal & Professional', tag: 'Intake automation' },
    { icon: '☀️', name: 'Solar & Energy', tag: 'Lead qualification' },
    { icon: '🛍️', name: 'E-commerce', tag: 'Abandoned cart · Reviews' },
    { icon: '💪', name: 'Fitness & Wellness', tag: 'Membership · Booking' },
    { icon: '🎯', name: 'Marketing Agencies', tag: 'White-label GHL setup' },
    { icon: '🔧', name: 'Custom / Any Niche', tag: 'Discovery → build → ship' },
  ];
  // we'll render the emoji as colored letter chips for design consistency (no emoji policy ish)
  const icons = [
    'H','S','R','F','B','C','L','E','M','W','A','+',
  ];
  return (
    <section className="section" data-screen-label="02 Industries">
      <div className="section-head section-head-center">
        <span className="eyebrow-red">Built for every lead, every funnel</span>
        <h2 className="section-title">Industries we automate</h2>
        <p className="section-sub">From a single solo operator to multi-location enterprises — the playbook adapts, the engine doesn't.</p>
      </div>
      <div className="industries-grid">
        {industries.map((ind, i) => (
          <div key={i} className="mac-card industry-card">
            <div className="industry-icon">
              <span style={{fontFamily:'var(--font-display)', fontWeight:700, fontSize:18}}>{icons[i]}</span>
            </div>
            <div className="industry-title">{ind.name}</div>
            <div className="industry-meta">{ind.tag}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================== ENTERPRISE BAND ============================== */
function EnterpriseBand() {
  return (
    <section className="enterprise-band" data-screen-label="Enterprise band">
      <div>
        <span className="eyebrow-red">Built for scale</span>
        <h2 className="section-title" style={{fontSize:'clamp(28px, 3.6vw, 44px)', marginTop:14, marginBottom: 14}}>
          From your first 100 leads to your hundred-thousandth.
        </h2>
        <p className="section-sub">SLA-backed delivery, dedicated specialists for A2P/DNS, integration engineering, and white-label support for agencies running their own GHL practice. We staff up the way enterprise expects.</p>
        <div style={{display:'flex', gap:12, flexWrap:'wrap', marginTop: 24}}>
          <GlassButton variant="primary" iconRight={I.arrow}>Talk to enterprise</GlassButton>
          <GlassButton icon={I.workflow}>Download capability deck</GlassButton>
        </div>
      </div>
      <div className="enterprise-stats">
        <div className="enterprise-stat">
          <div className="enterprise-stat-num">200+</div>
          <div className="enterprise-stat-label">funnels & automations shipped</div>
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

/* ============================== HOW IT WORKS ============================== */
function HowItWorks() {
  const steps = [
    { title: 'Discovery call', desc: 'You hop on a quick call. We listen to your goals, your stack, your bottlenecks — no pitch deck, no script. Just an honest read on what you actually need.' },
    { title: 'Pre-built or custom', desc: 'If one of our existing snapshots covers what you need, we&rsquo;ll point you there — fastest path to live. If not, we scope a custom build with a fixed timeline and a written spec before any work starts.' },
    { title: 'Build & deliver', desc: 'Funnels, workflows, A2P registration, dashboards — built in a sandbox, reviewed live with you, then shipped into your account inside the agreed window.' },
    { title: 'Integrate the rest', desc: 'Using iClosed, Calendly, HubSpot, Salesforce, or anything else? We wire it all together — webhooks, native integrations, Zapier/Make where needed — so your whole stack speaks one language.' },
  ];
  return (
    <section className="section" data-screen-label="04 How it works">
      <div className="section-head">
        <span className="eyebrow-red">How we work with you</span>
        <h2 className="section-title">From first call to fully integrated stack.</h2>
        <p className="section-sub">A predictable four-step engagement. Same shape whether you&rsquo;re a solo operator buying a snapshot or an enterprise migrating a multi-platform stack.</p>
      </div>
      <div className="how-grid">
        {steps.map((s, i) => (
          <div key={i} className="mac-card how-step">
            <div className="how-step-title">{s.title}</div>
            <div className="how-step-desc" dangerouslySetInnerHTML={{__html: s.desc}}></div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================== TEAM ============================== */
function Team() {
  const team = [
    { name: 'Nokhaiz Fareed Awan', role: 'CEO & Founder', tint: 'rgba(232,26,45,0.30)', chip: 'Strategy' },
    { name: 'Hassaan Mehdi', role: 'COO', tint: 'rgba(109,91,254,0.30)', chip: 'Operations' },
    { name: 'Anees Ur Rehman', role: 'CTO', tint: 'rgba(77,208,255,0.28)', chip: 'Engineering' },
    { name: 'Salahuddin', role: 'Head of HR', tint: 'rgba(252,163,17,0.28)', chip: 'People' },
    { name: 'Arslan Rana', role: 'HR Co-Head', tint: 'rgba(252,163,17,0.24)', chip: 'People' },
    { name: 'Ayesha Khalid', role: 'Sales', tint: 'rgba(255,107,53,0.28)', chip: 'Sales' },
    { name: 'Rahima Niazi', role: 'Sales', tint: 'rgba(255,138,79,0.30)', chip: 'Sales' },
    { name: 'Hamza Irshad', role: 'A2P & DNS Specialist', tint: 'rgba(74,222,128,0.28)', chip: 'Compliance' },
    { name: 'Talha Ismail', role: 'Integration Expert', tint: 'rgba(232,26,45,0.28)', chip: 'Integrations' },
    { name: 'Ahmad Faraz', role: 'Integration & Dev Expert', tint: 'rgba(109,91,254,0.28)', chip: 'Engineering' },
    { name: 'Zain Ali', role: 'Automation Consultation Specialist', tint: 'rgba(74,222,128,0.24)', chip: 'Automation' },
    { name: 'Gull Sher Fareed', role: 'Team Lead', tint: 'rgba(255,201,61,0.30)', chip: 'Delivery' },
  ];
  const initials = (n) => n.split(' ').slice(0,2).map(s => s[0]).join('');
  return (
    <section className="section" data-screen-label="07 Team">
      <div className="section-head section-head-center">
        <span className="eyebrow-red">The people behind the build</span>
        <h2 className="section-title">Twelve specialists. One pipeline you can trust.</h2>
        <p className="section-sub">Not a freelance marketplace. A real team — engineering, sales, compliance, ops — under one roof.</p>
      </div>
      <div className="team-grid">
        {team.map((m, i) => (
          <div key={i} className="mac-card team-card">
            <div className="team-photo" style={{'--team-tint': m.tint}}>
              <div className="grid-bg"></div>
              <span className="team-initials">{initials(m.name)}</span>
              <div className="team-role-chip">
                <span className="chip" style={{padding:'4px 10px', fontSize:9}}>{m.chip}</span>
              </div>
            </div>
            <div className="team-body">
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.role.toUpperCase()}</div>
              <div className="team-social">
                <a aria-label="LinkedIn"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.77c1.4-2.59 7-2.78 7 2.48V19z"/></svg></a>
                <a aria-label="Email"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Industries, EnterpriseBand, HowItWorks, Team });

/* ============================== HERO ============================== */
function Hero({ layout }) {
  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="chip chip-red"><span className="pulse-dot" style={{background:'#FF3D4F'}}></span> Enterprise GoHighLevel · Automation · Integration partner</span>
          <h1 className="hero-headline">
            Revenue infrastructure for teams that <span className="accent">run on automation.</span>
          </h1>
          <p className="hero-sub">
            We build the funnels, workflows, and integrations that turn HighLevel into a true revenue platform — connected to Salesforce, HubSpot, Zoho, Twilio, Mailgun, and the rest of your stack. From solo operators to multi-location enterprises.
          </p>
          <div className="hero-ctas">
            <GlassButton variant="primary" size="lg" iconRight={I.arrow}>Book a quick discovery call</GlassButton>
            <GlassButton size="lg" icon={I.workflow}>See live workflows</GlassButton>
          </div>
          <div className="hero-meta">
            <div className="hero-meta-stat">
              <span className="hero-meta-stat-num">200+</span>
              <span className="hero-meta-stat-label">funnels shipped</span>
            </div>
            <div className="hero-meta-stat">
              <span className="hero-meta-stat-num">10</span>
              <span className="hero-meta-stat-label">specialist team</span>
            </div>
            <div className="hero-meta-stat">
              <span className="hero-meta-stat-num">99.7%</span>
              <span className="hero-meta-stat-label">workflow uptime</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          {layout === 'workflow' && <WorkflowCard3D/>}
          {layout === 'dashboard' && <DashboardCard3D/>}
          {layout === 'orbit' && <OrbitCard3D/>}
        </div>
      </div>
    </section>
  );
}

/* ============================== SERVICES ============================== */
function Services({ heading = true }) {
  const services = [
    { icon: I.funnel, title: 'GHL funnels & landing pages', desc: 'High-converting sales funnels, opt-in pages, and websites built natively in GoHighLevel — designed for the click, the call, the close.', tags: ['Funnels', 'Landing pages', 'Conversion'] },
    { icon: I.workflow, title: 'Automation workflows', desc: 'End-to-end automation: lead capture, qualification, routing, nurture, booking, review requests, recovery. Set once, runs forever.', tags: ['GHL', 'Zapier', 'Make', 'n8n'] },
    { icon: I.mail, title: 'Email + SMS infrastructure', desc: 'Domain auth, warm-up, deliverability tuning, A2P 10DLC, and the workflow templates that keep your sender reputation clean.', tags: ['Email', 'SMS', 'Deliverability'] },
    { icon: I.phone, title: 'Phone, IVR & call routing', desc: 'Twilio numbers, smart IVRs, missed-call text-back, call recording and the AI receptionist if you want it.', tags: ['Twilio', 'IVR', 'Missed-call'] },
    { icon: I.layers, title: 'Integrations & glue code', desc: 'When GHL can\'t do it, I bridge it. Zapier, Make, Pabbly, n8n, webhooks, custom scripts. Whatever connects A to B.', tags: ['Zapier', 'Make', 'Pabbly', 'Webhooks'] },
    { icon: I.star, title: 'Review management', desc: 'Trigger Google + Facebook review requests from the right moment in the customer journey. Recovery flow for the 3-star ones.', tags: ['Google reviews', 'Reputation'] },
    { icon: I.rocket, title: 'Onboarding & migration', desc: 'White-glove onboarding for new GHL accounts — from sub-account setup to migrating from ClickFunnels, Kajabi, WordPress.', tags: ['Onboarding', 'Migration', 'Setup'] },
    { icon: I.bot, title: 'AI agents & receptionists', desc: 'Conversational AI receptionists, lead qualifiers, and appointment setters wired into your GHL pipeline.', tags: ['AI', 'Conversational'] },
    { icon: I.spark, title: 'Audits & A/B testing', desc: 'Funnel audits, ad campaign audits, and disciplined A/B testing — find what converts, kill what doesn\'t.', tags: ['Audit', 'A/B test', 'CRO'] },
  ];
  return (
    <section className="section" data-screen-label="02 Services">
      {heading && (
        <div className="section-head">
          <span className="eyebrow-red">What I do</span>
          <h2 className="section-title">Everything between your ad spend and your bank account.</h2>
          <p className="section-sub">Pick a service or pick all of them. I'm the same person either way.</p>
        </div>
      )}
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="mac-card service-card">
            <div className="service-icon">{s.icon}</div>
            <div className="service-title">{s.title}</div>
            <div className="service-desc">{s.desc}</div>
            <div className="service-tags">
              {s.tags.map(t => <span key={t} className="service-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================== PRODUCTS ============================== */
function ProductThumb({ niche, accent }) {
  return (
    <div className="product-thumb" style={{background: `linear-gradient(135deg, ${accent}22, transparent 70%), var(--bg-elev)`}}>
      <div style={{display:'grid', placeItems:'center', gap: 14}}>
        <div style={{width:56, height:56, borderRadius:16, background:'var(--glass-bg)', border:'1px solid var(--glass-border)', backdropFilter:'blur(14px)', display:'grid', placeItems:'center', color: accent}}>
          {I.layers}
        </div>
        <div style={{fontFamily:'var(--font-mono)', fontSize: 11, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--fg-3)'}}>{niche} · snapshot</div>
      </div>
    </div>
  );
}
function Products({ heading = true }) {
  const products = [
    { title: 'Home Services Pro Snapshot', niche: 'HVAC · Plumbing · Roofing', accent: '#FF3D4F', price: '$497', desc: 'Lead-capture funnel, instant SMS booking, missed-call text-back, review request flow, and dispatch handoff — all pre-wired for home service trades.', tag: 'Best seller' },
    { title: 'Med-Spa Booking Engine', niche: 'Med-spa · Aesthetics', accent: '#FF8A4F', price: '$597', desc: 'Treatment menu funnel, deposit-required booking, no-show recovery, and birthday/anniversary win-back campaigns. Stripe + GHL native.', tag: 'New' },
    { title: 'Solar Lead Concierge', niche: 'Solar · Roofing', accent: '#FFB84F', price: '$697', desc: 'Pre-qualifier with bill-photo upload, auto-assignment by zip, drip nurture for slow leads, and closer dashboard.', tag: null },
    { title: 'Real Estate Listing Funnel', niche: 'Realtors · Brokerages', accent: '#6D5BFE', price: '$397', desc: 'Listing pages, valuation request flow, IDX integration scaffolding, and seller nurture sequences.', tag: null },
    { title: 'Local Restaurant Stack', niche: 'Restaurants · Cafes', accent: '#4FD0FF', price: '$297', desc: 'Loyalty signup funnel, birthday club, reservation requests, and Google review collection from POS triggers.', tag: null },
    { title: 'Custom Niche Build', niche: 'Any service business', accent: '#FF3D4F', price: 'From $1,500', desc: 'Don\'t see your niche? I\'ll build it. Discovery → spec → build → handoff in 14 days, with a snapshot you own forever.', tag: 'Custom' },
  ];
  return (
    <section className="section" data-screen-label="03 Products">
      {heading && (
        <div className="section-head">
          <span className="eyebrow-red">Snapshots & templates</span>
          <h2 className="section-title">Niche-specific automation, ready to clone.</h2>
          <p className="section-sub">Pre-built GHL snapshots for home services and other verticals. Import into your sub-account, customize the copy, ship in a week.</p>
        </div>
      )}
      <div className="products-grid">
        {products.map((p, i) => (
          <div key={i} className="mac-card product-card">
            <ProductThumb niche={p.niche} accent={p.accent}/>
            <div className="product-body">
              <div style={{display:'flex', alignItems:'center', gap:8}}>
                <div style={{fontFamily:'var(--font-display)', fontSize: 20, fontWeight: 600, letterSpacing:'-0.015em'}}>{p.title}</div>
                {p.tag && <span className="chip chip-red" style={{padding:'3px 8px', fontSize:9}}>{p.tag}</span>}
              </div>
              <div className="product-niche">{p.niche}</div>
              <div style={{fontSize:14, color:'var(--fg-2)', lineHeight: 1.55, marginTop: 6}}>{p.desc}</div>
              <div className="product-meta">
                <div className="product-price">{p.price}</div>
                <GlassButton size="sm" iconRight={I.arrowSm}>See snapshot</GlassButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================== TESTIMONIALS ============================== */
function Testimonials() {
  const items = [
    { quote: 'Nokhaiz rebuilt our intake flow in 9 days and we stopped losing leads to voicemail overnight. Bookings up 31% same month.', name: 'Marcus Reid', role: 'Owner, ApexAir HVAC', avatar: 'linear-gradient(135deg, #FF6B35, #B8131F)' },
    { quote: 'I came in with a tangled GHL account and three half-broken Zapier zaps. He untangled it, killed the duplicate work, and now I actually trust my pipeline.', name: 'Priya Shah', role: 'Founder, Sunrise Med-spa', avatar: 'linear-gradient(135deg, #6D5BFE, #4435E6)' },
    { quote: 'The snapshot saved me about three weeks. I cloned it, swapped the copy, and was running ads the same week. Worth 10× what I paid.', name: 'Daniel Cortez', role: 'Owner, BrightSolar', avatar: 'linear-gradient(135deg, #FFC93D, #FCA311)' },
  ];
  return (
    <section className="section" data-screen-label="04 Testimonials">
      <div className="section-head section-head-center">
        <span className="eyebrow-red">Receipts</span>
        <h2 className="section-title">Agencies and operators I&rsquo;ve unstuck.</h2>
      </div>
      <div className="testi-grid">
        {items.map((t, i) => (
          <div key={i} className="mac-card testi-card">
            <div className="testi-stars">{[0,1,2,3,4].map(j => <span key={j}>{I.star}</span>)}</div>
            <div className="testi-quote">&ldquo;{t.quote}&rdquo;</div>
            <div className="testi-author">
              <div className="testi-avatar" style={{background: t.avatar}}>{t.name[0]}</div>
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

/* ============================== BLOG ============================== */
function Blog({ heading = true }) {
  const posts = [
    { cat: 'Automation', date: 'Nov 12, 2026', title: 'Why your GHL workflows fire twice — and how to fix it', excerpt: 'The most common cause of duplicate triggers is also the easiest to miss. A 4-minute audit can save you hundreds of misfired SMS.', accent: '#FF3D4F' },
    { cat: 'GoHighLevel', date: 'Nov 04, 2026', title: 'A2P 10DLC for agencies: a survival guide', excerpt: 'Registration timelines, message throughput, and the seven mistakes that get your campaign rejected. Bookmark this one.', accent: '#6D5BFE' },
    { cat: 'Integrations', date: 'Oct 28, 2026', title: 'When to use Zapier vs Make vs n8n (real talk)', excerpt: 'Cost, speed, debuggability, and edge cases. A decision tree based on 200+ builds — not vendor marketing.', accent: '#4FD0FF' },
  ];
  return (
    <section className="section" data-screen-label="05 Blog">
      {heading && (
        <div className="section-head">
          <span className="eyebrow-red">Field notes</span>
          <h2 className="section-title">From the inside of 200+ GHL builds.</h2>
          <p className="section-sub">Posts I write between client work — patterns, anti-patterns, and the integrations I keep reaching for.</p>
        </div>
      )}
      <div className="blog-grid">
        {posts.map((p, i) => (
          <div key={i} className="mac-card blog-card">
            <div className="blog-thumb" style={{background: `linear-gradient(135deg, ${p.accent}30, var(--bg-elev) 70%)`}}>
              <div style={{position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
              <div style={{position:'absolute', bottom: 20, left: 20, width:48, height:48, borderRadius:12, background: 'var(--glass-bg)', backdropFilter:'blur(14px)', border:'1px solid var(--glass-border)', display:'grid', placeItems:'center', color: p.accent}}>
                {I.spark}
              </div>
            </div>
            <div className="blog-body">
              <div className="blog-meta">
                <span className="blog-cat">{p.cat}</span>
                <span className="blog-date">{p.date}</span>
              </div>
              <div className="blog-title">{p.title}</div>
              <div className="blog-excerpt">{p.excerpt}</div>
              <a style={{display:'inline-flex', alignItems:'center', gap:6, marginTop: 10, fontSize: 13, color:'var(--brand-red-soft)', fontWeight: 500, cursor:'pointer'}}>Read post {I.arrowSm}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================== ABOUT ============================== */
function About() {
  return (
    <section className="section" data-screen-label="06 About">
      <div className="about-grid">
        <div>
          <span className="eyebrow-red">About</span>
          <h2 className="section-title" style={{marginTop: 14}}>Hi, I&rsquo;m Nokhaiz. I fix the mess agencies inherit.</h2>
          <p style={{fontSize: 16, color:'var(--fg-2)', lineHeight: 1.65, marginTop: 18, textWrap:'pretty'}}>
            Four years deep into GoHighLevel, 200+ funnels shipped, and a stubborn belief that automation should be boring — predictable, debuggable, and quietly running while you sleep.
          </p>
          <p style={{fontSize: 16, color:'var(--fg-2)', lineHeight: 1.65, marginTop: 14, textWrap:'pretty'}}>
            I work with GHL agencies and home-service operators who are tired of duct-taping six tools together. I take what you have, untangle it, and replace it with something you can actually explain to your team.
          </p>
          <div className="about-stats">
            <div className="mac-card about-stat">
              <div className="about-stat-num">200+</div>
              <div className="about-stat-label">funnels & automations shipped</div>
            </div>
            <div className="mac-card about-stat">
              <div className="about-stat-num">20–30×</div>
              <div className="about-stat-label">avg client growth multiple</div>
            </div>
            <div className="mac-card about-stat">
              <div className="about-stat-num">4+ yr</div>
              <div className="about-stat-label">in funnels & automation</div>
            </div>
            <div className="mac-card about-stat">
              <div className="about-stat-num">100+</div>
              <div className="about-stat-label">GHL accounts touched</div>
            </div>
          </div>
        </div>
        <div className="about-portrait">
          <div className="about-portrait-grid"></div>
          <img className="about-portrait-mono" src="assets/golab-monogram-red.png" alt="GoLab monogram"/>
          <div style={{position:'absolute', bottom: 28, left: 28, right: 28}}>
            <div className="chip chip-red" style={{marginBottom: 12}}><span className="pulse-dot" style={{background:'#FF3D4F'}}></span> available for new work</div>
            <div style={{fontFamily:'var(--font-display)', fontSize: 22, fontWeight: 600, letterSpacing:'-0.02em'}}>Nokhaiz Fareed</div>
            <div style={{fontFamily:'var(--font-mono)', fontSize: 12, color:'var(--fg-3)', marginTop: 4, letterSpacing:'0.06em'}}>FOUNDER · GOLAB AUTOMATION</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== CONTACT ============================== */
function Contact() {
  const [submitted, setSubmitted] = React.useState(false);
  return (
    <section className="section" data-screen-label="07 Contact">
      <div className="section-head">
        <span className="eyebrow-red">Get in touch</span>
        <h2 className="section-title">Tell me what's broken. I'll tell you if I can fix it.</h2>
        <p className="section-sub">Free 30-minute discovery call. No deck, no pitch — just a screen share and an honest scope.</p>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-info-item">
            <div className="contact-info-icon">{I.mail}</div>
            <div>
              <div className="contact-info-label">Email</div>
              <div className="contact-info-val">hello@golabautomation.com</div>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">{I.phone}</div>
            <div>
              <div className="contact-info-label">Call / WhatsApp</div>
              <div className="contact-info-val">+1 (555) 010-2847</div>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">{I.globe}</div>
            <div>
              <div className="contact-info-label">Hours</div>
              <div className="contact-info-val">Mon–Fri · 9am–7pm PT</div>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">{I.rocket}</div>
            <div>
              <div className="contact-info-label">Typical turnaround</div>
              <div className="contact-info-val">14 days, audit to live</div>
            </div>
          </div>
        </div>
        <form className="mac-card contact-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          {submitted ? (
            <div style={{display:'grid', placeItems:'center', padding: '40px 20px', textAlign:'center', gap: 14}}>
              <div style={{width:56, height:56, borderRadius:'50%', background:'var(--brand-red)', display:'grid', placeItems:'center', color:'#fff', boxShadow:'0 8px 32px var(--brand-red-glow)'}}>{I.check}</div>
              <div style={{fontFamily:'var(--font-display)', fontSize: 24, fontWeight: 600, letterSpacing:'-0.02em'}}>Got it. I'll reply within a day.</div>
              <div style={{color:'var(--fg-2)', fontSize: 14}}>Usually faster. Check your inbox for the calendar link.</div>
            </div>
          ) : (
            <>
              <div className="field-row">
                <div className="field">
                  <label>Name</label>
                  <input type="text" placeholder="Your name" required/>
                </div>
                <div className="field">
                  <label>Email</label>
                  <input type="email" placeholder="you@agency.com" required/>
                </div>
              </div>
              <div className="field">
                <label>What do you need help with?</label>
                <select defaultValue="">
                  <option value="" disabled>Pick one…</option>
                  <option>GHL funnel / landing page build</option>
                  <option>Automation workflows</option>
                  <option>Integration (Zapier / Make / n8n)</option>
                  <option>Snapshot purchase / customization</option>
                  <option>Onboarding / migration</option>
                  <option>Audit only</option>
                  <option>Something else</option>
                </select>
              </div>
              <div className="field">
                <label>Tell me about it</label>
                <textarea placeholder="What's broken, what's working, what you're trying to get to…"></textarea>
              </div>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:8, flexWrap:'wrap', gap:12}}>
                <div style={{fontFamily:'var(--font-mono)', fontSize: 11, color:'var(--fg-3)', letterSpacing:'0.10em'}}>I REPLY WITHIN 1 BUSINESS DAY</div>
                <GlassButton variant="primary" iconRight={I.arrow}>Send message</GlassButton>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

/* ============================== FOOTER ============================== */
function Footer({ variant }) {
  return (
    <footer className="footer" data-footer={variant} data-screen-label="08 Footer">
      <div className="footer-grid-bg"></div>
      <div className="footer-inner">
        <div className="footer-cta">
          <div className="footer-cta-title">Stop watching the queue. Run it.</div>
          <GlassButton size="lg" iconRight={I.arrow}>Book a quick discovery call</GlassButton>
        </div>

        <div className="footer-top">
          <div className="footer-brand">
            <img src="assets/golab-wordmark-white.png" alt="GoLab Automation" style={{filter:'none'}}/>
            <p className="footer-tag">GoHighLevel funnels, automations, and integration glue for agencies and home-service operators who are done duct-taping their stack.</p>
            <div style={{display:'flex', gap:8, marginTop: 18}}>
              <span className="chip" style={{background:'rgba(255,255,255,0.18)', border:'1px solid rgba(255,255,255,0.25)', color:'#fff'}}>GHL certified</span>
              <span className="chip" style={{background:'rgba(255,255,255,0.18)', border:'1px solid rgba(255,255,255,0.25)', color:'#fff'}}>Make partner</span>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Services</div>
            <a className="footer-link">GHL funnels</a>
            <a className="footer-link">Automation</a>
            <a className="footer-link">Integrations</a>
            <a className="footer-link">Audits</a>
          </div>
          <div>
            <div className="footer-col-title">Products</div>
            <a className="footer-link">Home services snapshot</a>
            <a className="footer-link">Med-spa engine</a>
            <a className="footer-link">Solar concierge</a>
            <a className="footer-link">Custom builds</a>
          </div>
          <div>
            <div className="footer-col-title">Company</div>
            <a className="footer-link">About</a>
            <a className="footer-link">Blog</a>
            <a className="footer-link">Case studies</a>
            <a className="footer-link">Contact</a>
          </div>
          <div>
            <div className="footer-col-title">Resources</div>
            <a className="footer-link">GHL A2P guide</a>
            <a className="footer-link">Workflow library</a>
            <a className="footer-link">Newsletter</a>
            <a className="footer-link">Office hours</a>
          </div>
        </div>

        {variant === 'wordmark' && (
          <div className="footer-bigmark">GOLAB</div>
        )}

        <div className="footer-bottom">
          <div>© 2026 GOLAB AUTOMATION · ALL RIGHTS RESERVED</div>
          <div className="footer-social">
            <a aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.77c1.4-2.59 7-2.78 7 2.48V19z"/></svg></a>
            <a aria-label="Twitter"><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            <a aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
            <a aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, LogoMarquee, Hero, Services, Products, Testimonials, Blog, About, Contact, Footer });
