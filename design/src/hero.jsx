/* =========================================================================
   Hero — Floating 3D workflow card with animated nodes
   New flow: Form + HubSpot + CallSling → (Zapier/Make) → GHL Workflow
              (assign user → update opp → set source → lead value → dashboard)
              → Webhook → Google Sheets + Airtable
   ========================================================================= */

const { useState: useStateH, useEffect: useEffectH, useRef: useRefH } = React;

/* Small platform badge factory */
const platformBadge = (label, grad, content) => (
  <div style={{
    width: 36, height: 36, borderRadius: 10,
    background: grad,
    display: 'grid', placeItems: 'center',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35), 0 4px 12px rgba(0,0,0,0.35)',
    flexShrink: 0,
  }}>
    {content}
  </div>
);

const PB = {
  Form: platformBadge('Form', 'linear-gradient(135deg, #FFD93D, #FCA311)',
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="9" x2="17" y2="9"/><line x1="7" y1="13" x2="17" y2="13"/><line x1="7" y1="17" x2="12" y2="17"/></svg>
  ),
  HubSpot: platformBadge('HubSpot', 'linear-gradient(135deg, #FF8C5A, #FF5C35)',
    <span style={{color:'#fff', fontWeight:800, fontSize:13, fontFamily:'var(--font-display)'}}>H</span>
  ),
  CallSling: platformBadge('CallSling', 'linear-gradient(135deg, #4FD0FF, #2078E8)',
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z"/></svg>
  ),
  GHL: platformBadge('GHL', 'linear-gradient(135deg, #FCD64A, #4ED36A)',
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M4 22 L4 8 L8 4 L8 22 Z" fill="#FCD64A"/>
      <path d="M10 22 L10 12 L14 8 L14 22 Z" fill="#3784FF"/>
      <path d="M16 22 L16 6 L20 2 L20 22 Z" fill="#3DCC5D"/>
    </svg>
  ),
  Zapier: platformBadge('Zapier', 'linear-gradient(135deg, #FF8C5A, #FF4A1C)',
    <span style={{color:'#fff', fontWeight:800, fontSize:13, fontFamily:'var(--font-display)'}}>Z</span>
  ),
  Make: platformBadge('Make', 'linear-gradient(135deg, #6D5BFE, #4435E6)',
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><circle cx="6" cy="12" r="3"/><circle cx="18" cy="12" r="3"/><circle cx="12" cy="6" r="2"/><circle cx="12" cy="18" r="2"/></svg>
  ),
  Sheets: platformBadge('Sheets', 'linear-gradient(135deg, #5DD681, #1BAB4F)',
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M5 3h10l4 4v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" opacity="0.95"/><path d="M8 11h8M8 14h8M8 17h5" stroke="#1BAB4F" strokeWidth="1.5"/></svg>
  ),
  Airtable: platformBadge('Airtable', 'linear-gradient(135deg, #FFC857, #F5A623)',
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M3 7 L12 3 L21 7 L12 11 Z M3 9 L11 12.5 L11 21 L3 17.5 Z M13 12.5 L21 9 L21 17.5 L13 21 Z"/></svg>
  ),
  Dashboard: platformBadge('Dashboard', 'linear-gradient(135deg, #FF8A4F, #E81A2D)',
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="8" height="10" rx="1"/><rect x="13" y="3" width="8" height="6" rx="1"/><rect x="13" y="11" width="8" height="10" rx="1"/><rect x="3" y="15" width="8" height="6" rx="1"/></svg>
  ),
};

/* =========================================================================
   WorkflowCard3D — compact mac-window node mesh
   Triggers + actions wired together with overlapping curves.
   ========================================================================= */
function WorkflowCard3D() {
  const wrapRef = useRefH(null);
  const cardRef = useRefH(null);
  const [activeNode, setActiveNode] = useStateH(null);

  // cycle "active" node — highlights each step in sequence
  useEffectH(() => {
    const seq = ['ghl-trigger', 'assign', 'opp', 'source', 'value', 'dashboard', 'webhook'];
    let i = 0;
    const id = setInterval(() => {
      setActiveNode(seq[i % seq.length]);
      i++;
    }, 1100);
    return () => clearInterval(id);
  }, []);

  // mouse-tilt — subtle, smooth
  useEffectH(() => {
    const wrap = wrapRef.current, card = cardRef.current;
    if (!wrap || !card) return;
    let raf, tx=0, ty=0, cx=0, cy=0, h=0, ht=0;
    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      tx = Math.max(-1, Math.min(1, ((e.clientX - r.left - r.width/2) / r.width) * 2)) * 3;
      ty = -Math.max(-1, Math.min(1, ((e.clientY - r.top - r.height/2) / r.height) * 2)) * 3;
    };
    const onEnter = () => { ht = 1; };
    const onLeave = () => { tx = 0; ty = 0; ht = 0; };
    const tick = () => {
      cx += (tx-cx)*0.06; cy += (ty-cy)*0.06; h += (ht-h)*0.08;
      card.style.transform = `perspective(1600px) rotateY(${cx}deg) rotateX(${cy}deg) scale(${1 + h*0.01})`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    wrap.addEventListener('mousemove', onMove);
    wrap.addEventListener('mouseenter', onEnter);
    wrap.addEventListener('mouseleave', onLeave);
    return () => { cancelAnimationFrame(raf); wrap.removeEventListener('mousemove', onMove); wrap.removeEventListener('mouseenter', onEnter); wrap.removeEventListener('mouseleave', onLeave); };
  }, []);

  // node positions in canvas % (0–100) — laid out so connecting lines never cross another node
  const nodes = [
    // inputs (top row)
    { id: 'form', x: 15, y: 10, badge: PB.Form, label: 'Form', tag: 'trigger' },
    { id: 'hubspot', x: 50, y: 10, badge: PB.HubSpot, label: 'HubSpot', tag: 'crm' },
    { id: 'callsling', x: 85, y: 10, badge: PB.CallSling, label: 'CallSling', tag: 'call' },

    // bridge: integration tools
    { id: 'zapier', x: 28, y: 27, badge: PB.Zapier, label: 'Zapier', tag: 'via' },
    { id: 'make', x: 72, y: 27, badge: PB.Make, label: 'Make', tag: 'via' },

    // GHL workflow (center)
    { id: 'ghl-trigger', x: 50, y: 42, badge: PB.GHL, label: 'GHL Workflow', tag: 'trigger', highlight: true },

    // actions — single horizontal chain at y=60
    { id: 'assign', x: 12, y: 60, label: 'Assign user', tag: 'action' },
    { id: 'opp', x: 35, y: 60, label: 'Update opp.', tag: 'action' },
    { id: 'source', x: 58, y: 60, label: 'Set source', tag: 'action' },
    { id: 'value', x: 82, y: 60, label: 'Lead value', tag: 'action' },
    { id: 'dashboard', x: 50, y: 78, label: 'Update dashboard', tag: 'action', wide: true },

    // webhook
    { id: 'webhook', x: 50, y: 90, label: 'Webhook fired', tag: 'output', glow: true },

    // outputs
    { id: 'sheets', x: 16, y: 96, badge: PB.Sheets, label: 'Sheets', tag: 'sync' },
    { id: 'airtable', x: 84, y: 96, badge: PB.Airtable, label: 'Airtable', tag: 'sync' },
  ];

  // connections — sequential chain through actions (no overlap with intermediate nodes)
  const edges = [
    // inputs → integration tools / ghl
    ['form', 'zapier'],
    ['hubspot', 'ghl-trigger', { straight: true }],
    ['callsling', 'make'],

    // integration tools → ghl
    ['zapier', 'ghl-trigger'],
    ['make', 'ghl-trigger'],

    // ghl → first action, then chain through
    ['ghl-trigger', 'assign'],
    ['assign', 'opp', { straight: true }],
    ['opp', 'source', { straight: true }],
    ['source', 'value', { straight: true }],
    ['value', 'dashboard'],

    // dashboard → webhook → outputs
    ['dashboard', 'webhook', { straight: true }],
    ['webhook', 'sheets'],
    ['webhook', 'airtable'],
  ];

  // resolve node by id
  const byId = Object.fromEntries(nodes.map(n => [n.id, n]));

  // build SVG path string (curve from A to B)
  const buildPath = (a, b, opts={}) => {
    const x1 = a.x, y1 = a.y, x2 = b.x, y2 = b.y;
    if (opts.straight) return `M${x1},${y1} L${x2},${y2}`;
    // s-curve via mid Y
    const my = (y1 + y2) / 2;
    return `M${x1},${y1} C${x1},${my} ${x2},${my} ${x2},${y2}`;
  };

  return (
    <div ref={wrapRef} className="hero-3d-wrap" style={{minHeight: 520}}>
      <div ref={cardRef} className="hero-3d-card mac-card wfm-card">
        <div className="mac-card-header">
          <span className="mac-dot r"></span>
          <span className="mac-dot y"></span>
          <span className="mac-dot g"></span>
          <span className="mac-card-title">workflow.ghl</span>
          <span style={{display:'flex', alignItems:'center', gap:6, marginLeft:'auto'}}>
            <span className="pulse-dot"></span>
            <span style={{fontFamily:'var(--font-mono)', fontSize: 11, color:'var(--fg-3)'}}>running</span>
          </span>
        </div>

        <div className="wfm-canvas">
          {/* Connecting lines layer — static, hover-highlight */}
          <svg className="wfm-edges" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <filter id="wfm-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.2" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            {edges.map((e, i) => {
              const a = byId[e[0]], b = byId[e[1]];
              const opts = e[2] || {};
              return (
                <g key={i} className="wfm-edge">
                  {/* invisible wide hit-target so hover is forgiving */}
                  <path
                    d={buildPath(a, b, opts)}
                    fill="none"
                    stroke="transparent"
                    strokeWidth="2.5"
                    vectorEffect="non-scaling-stroke"
                    style={{pointerEvents: 'stroke'}}
                  />
                  {/* visible line */}
                  <path
                    className="wfm-edge-line"
                    d={buildPath(a, b, opts)}
                    fill="none"
                    stroke="rgba(232,26,45,0.45)"
                    strokeWidth="1"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </g>
              );
            })}
          </svg>

          {/* Nodes layer */}
          {nodes.map(n => (
            <div
              key={n.id}
              className={`wfm-node ${n.tag ? `wfm-${n.tag}` : ''} ${activeNode === n.id ? 'is-active' : ''} ${n.wide ? 'is-wide' : ''} ${n.glow ? 'is-glow' : ''} ${n.highlight ? 'is-highlight' : ''}`}
              style={{ left: `${n.x}%`, top: `${n.y}%` }}>
              {n.badge && <span className="wfm-node-badge">{n.badge}</span>}
              <span className="wfm-node-label">{n.label}</span>
            </div>
          ))}
        </div>

        {/* compact footer */}
        <div className="wfm-foot">
          <div className="wfm-foot-stat"><span className="wfm-num">2,847</span><span className="wfm-lbl">routed</span></div>
          <div className="wfm-foot-stat"><span className="wfm-num">12s</span><span className="wfm-lbl">latency</span></div>
          <div className="wfm-foot-stat"><span className="wfm-num">99.7%</span><span className="wfm-lbl">uptime</span></div>
        </div>

        {/* Floating chips */}
        <div className="wf-float wf-float-tl">
          <div className="chip chip-red"><span className="pulse-dot" style={{background:'#FF3D4F'}}></span> form submitted</div>
        </div>
        <div className="wf-float wf-float-br">
          <div className="chip">+47% conversion</div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   Variant 2: Glass dashboard with stats
   ========================================================================= */
function DashboardCard3D() {
  const wrapRef = useRefH(null);
  const cardRef = useRefH(null);
  useEffectH(() => {
    const wrap = wrapRef.current, card = cardRef.current;
    if (!wrap || !card) return;
    let raf, tx=0, ty=0, cx=0, cy=0, h=0, ht=0;
    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      tx = Math.max(-1, Math.min(1, ((e.clientX - r.left - r.width / 2) / r.width) * 2)) * 3.5;
      ty = -Math.max(-1, Math.min(1, ((e.clientY - r.top - r.height / 2) / r.height) * 2)) * 3.5;
    };
    const onEnter = () => { ht = 1; };
    const onLeave = () => { tx = 0; ty = 0; ht = 0; };
    const tick = () => {
      cx += (tx - cx) * 0.06; cy += (ty - cy) * 0.06; h += (ht - h) * 0.08;
      const sc = 1 + h * 0.012;
      card.style.transform = `perspective(1600px) rotateY(${cx}deg) rotateX(${cy}deg) scale(${sc})`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    wrap.addEventListener('mousemove', onMove);
    wrap.addEventListener('mouseenter', onEnter);
    wrap.addEventListener('mouseleave', onLeave);
    return () => { cancelAnimationFrame(raf); wrap.removeEventListener('mousemove', onMove); wrap.removeEventListener('mouseenter', onEnter); wrap.removeEventListener('mouseleave', onLeave); };
  }, []);

  const bars = [40, 55, 38, 72, 48, 80, 65, 92, 70, 88, 95, 100];

  return (
    <div ref={wrapRef} className="hero-3d-wrap">
      <div ref={cardRef} className="hero-3d-card mac-card">
        <div className="mac-card-header">
          <span className="mac-dot r"></span>
          <span className="mac-dot y"></span>
          <span className="mac-dot g"></span>
          <span className="mac-card-title">dashboard.golab</span>
        </div>
        <div style={{padding: 28}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom: 18}}>
            <div>
              <div className="eyebrow" style={{marginBottom:6}}>Pipeline value</div>
              <div style={{fontFamily:'var(--font-display)', fontSize: 44, fontWeight:700, letterSpacing:'-0.03em'}}>$284,710</div>
              <div style={{display:'flex', gap:8, alignItems:'center', marginTop:6}}>
                <span className="chip chip-red">▲ 47.2%</span>
                <span className="subtle" style={{fontSize:13}}>vs last 30d</span>
              </div>
            </div>
            <div className="chip"><span className="pulse-dot"></span> live</div>
          </div>
          <div style={{display:'flex', alignItems:'flex-end', gap: 8, height: 130, marginTop: 28}}>
            {bars.map((h, i) => (
              <div key={i} style={{
                flex: 1,
                height: `${h}%`,
                background: i >= 9 ? 'linear-gradient(180deg, #FF3D4F, #B8131F)' : 'rgba(255,255,255,0.10)',
                borderRadius: 6,
                boxShadow: i >= 9 ? '0 4px 16px var(--brand-red-glow)' : undefined
              }}/>
            ))}
          </div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap: 16, marginTop: 28, paddingTop: 20, borderTop: '1px solid var(--hairline)'}}>
            <div><div className="eyebrow" style={{fontSize:10}}>Booked</div><div style={{fontFamily:'var(--font-display)', fontSize:22, fontWeight:700}}>312</div></div>
            <div><div className="eyebrow" style={{fontSize:10}}>Showed</div><div style={{fontFamily:'var(--font-display)', fontSize:22, fontWeight:700}}>284</div></div>
            <div><div className="eyebrow" style={{fontSize:10}}>Closed</div><div style={{fontFamily:'var(--font-display)', fontSize:22, fontWeight:700, color:'var(--brand-red-soft)'}}>97</div></div>
          </div>
        </div>
        <div className="wf-float wf-float-tl"><div className="chip chip-red"><span className="pulse-dot" style={{background:'#FF3D4F'}}></span> automation triggered</div></div>
        <div className="wf-float wf-float-br"><div className="chip">Saved 14h this week</div></div>
      </div>
    </div>
  );
}

/* =========================================================================
   Variant 3: Orbit
   ========================================================================= */
function OrbitCard3D() {
  return (
    <div className="hero-orbit-wrap">
      <div className="orbit-center">
        <div className="orbit-core">
          <img src="assets/golab-monogram-red.png" alt="GoLab" style={{width:64, height:64, filter:'drop-shadow(0 4px 16px var(--brand-red-glow))'}}/>
        </div>
        <div className="orbit-ring r1"></div>
        <div className="orbit-ring r2"></div>
        <div className="orbit-ring r3"></div>

        {[
          { angle: 0, badge: PB.GHL, label: 'GHL' },
          { angle: 60, badge: PB.HubSpot, label: 'HubSpot' },
          { angle: 120, badge: PB.Zapier, label: 'Zapier' },
          { angle: 180, badge: PB.Make, label: 'Make' },
          { angle: 240, badge: PB.Sheets, label: 'Sheets' },
          { angle: 300, badge: PB.Airtable, label: 'Airtable' },
        ].map((s, i) => (
          <div key={i} className="orbit-sat" style={{ '--ang': `${s.angle}deg`, '--delay': `${i * -3}s` }}>
            <div className="orbit-sat-inner">{s.badge}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

window.WorkflowCard3D = WorkflowCard3D;
window.DashboardCard3D = DashboardCard3D;
window.OrbitCard3D = OrbitCard3D;
