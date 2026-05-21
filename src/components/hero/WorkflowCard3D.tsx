'use client';

import { useRef, useEffect, useState, ReactNode } from 'react';

function PlatformBadge({ grad, children }: { grad: string; children: ReactNode }) {
  return (
    <div
      style={{
        width: 22, height: 22, borderRadius: 6,
        background: grad,
        display: 'grid', placeItems: 'center',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35), 0 2px 6px rgba(0,0,0,0.35)',
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

const PB = {
  Form: (
    <PlatformBadge grad="linear-gradient(135deg, #FFD93D, #FCA311)">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" /><line x1="7" y1="9" x2="17" y2="9" /><line x1="7" y1="13" x2="17" y2="13" /><line x1="7" y1="17" x2="12" y2="17" />
      </svg>
    </PlatformBadge>
  ),
  HubSpot: (
    <PlatformBadge grad="linear-gradient(135deg, #FF8C5A, #FF5C35)">
      <span style={{ color: '#fff', fontWeight: 800, fontSize: 10, fontFamily: 'var(--font-display)' }}>H</span>
    </PlatformBadge>
  ),
  CallSling: (
    <PlatformBadge grad="linear-gradient(135deg, #4FD0FF, #2078E8)">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
      </svg>
    </PlatformBadge>
  ),
  GHL: (
    <PlatformBadge grad="linear-gradient(135deg, #FCD64A, #4ED36A)">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path d="M4 22 L4 8 L8 4 L8 22 Z" fill="#FCD64A" />
        <path d="M10 22 L10 12 L14 8 L14 22 Z" fill="#3784FF" />
        <path d="M16 22 L16 6 L20 2 L20 22 Z" fill="#3DCC5D" />
      </svg>
    </PlatformBadge>
  ),
  Zapier: (
    <PlatformBadge grad="linear-gradient(135deg, #FF8C5A, #FF4A1C)">
      <span style={{ color: '#fff', fontWeight: 800, fontSize: 10, fontFamily: 'var(--font-display)' }}>Z</span>
    </PlatformBadge>
  ),
  Make: (
    <PlatformBadge grad="linear-gradient(135deg, #6D5BFE, #4435E6)">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="#fff">
        <circle cx="6" cy="12" r="3" /><circle cx="18" cy="12" r="3" /><circle cx="12" cy="6" r="2" /><circle cx="12" cy="18" r="2" />
      </svg>
    </PlatformBadge>
  ),
  Sheets: (
    <PlatformBadge grad="linear-gradient(135deg, #5DD681, #1BAB4F)">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="#fff">
        <path d="M5 3h10l4 4v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" opacity="0.95" />
      </svg>
    </PlatformBadge>
  ),
  Airtable: (
    <PlatformBadge grad="linear-gradient(135deg, #FFC857, #F5A623)">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="#fff">
        <path d="M3 7 L12 3 L21 7 L12 11 Z M3 9 L11 12.5 L11 21 L3 17.5 Z M13 12.5 L21 9 L21 17.5 L13 21 Z" />
      </svg>
    </PlatformBadge>
  ),
};

const NODES = [
  { id: 'form',       x: 15, y: 10, badge: PB.Form,     label: 'Form',             tag: 'trigger' },
  { id: 'hubspot',    x: 50, y: 10, badge: PB.HubSpot,  label: 'HubSpot',          tag: 'crm' },
  { id: 'callsling',  x: 85, y: 10, badge: PB.CallSling,label: 'CallSling',        tag: 'call' },
  { id: 'zapier',     x: 28, y: 27, badge: PB.Zapier,   label: 'Zapier',           tag: 'via' },
  { id: 'make',       x: 72, y: 27, badge: PB.Make,     label: 'Make',             tag: 'via' },
  { id: 'ghl-trigger',x: 50, y: 42, badge: PB.GHL,      label: 'GHL Workflow',     tag: 'trigger', highlight: true },
  { id: 'assign',     x: 12, y: 60, label: 'Assign user',   tag: 'action' },
  { id: 'opp',        x: 35, y: 60, label: 'Update opp.',   tag: 'action' },
  { id: 'source',     x: 58, y: 60, label: 'Set source',    tag: 'action' },
  { id: 'value',      x: 82, y: 60, label: 'Lead value',    tag: 'action' },
  { id: 'dashboard',  x: 50, y: 78, label: 'Update dashboard', tag: 'action', wide: true },
  { id: 'webhook',    x: 50, y: 90, label: 'Webhook fired', tag: 'output', glow: true },
  { id: 'sheets',     x: 16, y: 96, badge: PB.Sheets,   label: 'Sheets',           tag: 'sync' },
  { id: 'airtable',   x: 84, y: 96, badge: PB.Airtable, label: 'Airtable',         tag: 'sync' },
] as const;

type NodeId = typeof NODES[number]['id'];

const EDGES: [NodeId, NodeId, { straight?: boolean }?][] = [
  ['form',       'zapier'],
  ['hubspot',    'ghl-trigger', { straight: true }],
  ['callsling',  'make'],
  ['zapier',     'ghl-trigger'],
  ['make',       'ghl-trigger'],
  ['ghl-trigger','assign'],
  ['assign',     'opp',      { straight: true }],
  ['opp',        'source',   { straight: true }],
  ['source',     'value',    { straight: true }],
  ['value',      'dashboard'],
  ['dashboard',  'webhook',  { straight: true }],
  ['webhook',    'sheets'],
  ['webhook',    'airtable'],
];

const ACTIVE_SEQ: NodeId[] = ['ghl-trigger', 'assign', 'opp', 'source', 'value', 'dashboard', 'webhook'];

function buildPath(a: { x: number; y: number }, b: { x: number; y: number }, opts: { straight?: boolean } = {}) {
  if (opts.straight) return `M${a.x},${a.y} L${b.x},${b.y}`;
  const my = (a.y + b.y) / 2;
  return `M${a.x},${a.y} C${a.x},${my} ${b.x},${my} ${b.x},${b.y}`;
}

export function WorkflowCard3D() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<NodeId | null>(null);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setActiveNode(ACTIVE_SEQ[i % ACTIVE_SEQ.length]);
      i++;
    }, 1100);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (!wrap || !card) return;
    let raf: number, tx = 0, ty = 0, cx = 0, cy = 0, h = 0, ht = 0;
    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      tx = Math.max(-1, Math.min(1, ((e.clientX - r.left - r.width / 2) / r.width) * 2)) * 3;
      ty = -Math.max(-1, Math.min(1, ((e.clientY - r.top - r.height / 2) / r.height) * 2)) * 3;
    };
    const onEnter = () => { ht = 1; };
    const onLeave = () => { tx = 0; ty = 0; ht = 0; };
    const tick = () => {
      cx += (tx - cx) * 0.06; cy += (ty - cy) * 0.06; h += (ht - h) * 0.08;
      card.style.transform = `perspective(1600px) rotateY(${cx}deg) rotateX(${cy}deg) scale(${1 + h * 0.01})`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    wrap.addEventListener('mousemove', onMove);
    wrap.addEventListener('mouseenter', onEnter);
    wrap.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      wrap.removeEventListener('mousemove', onMove);
      wrap.removeEventListener('mouseenter', onEnter);
      wrap.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  const byId = Object.fromEntries(NODES.map((n) => [n.id, n])) as Record<NodeId, typeof NODES[number]>;

  return (
    <div ref={wrapRef} className="hero-3d-wrap" style={{ minHeight: 520 }}>
      <div ref={cardRef} className="hero-3d-card mac-card wfm-card">
        <div className="mac-card-header">
          <span className="mac-dot r" />
          <span className="mac-dot y" />
          <span className="mac-dot g" />
          <span className="mac-card-title">workflow.ghl</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6, marginLeft: 'auto' }}>
            <span className="pulse-dot" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)' }}>running</span>
          </span>
        </div>

        <div className="wfm-canvas">
          {/* Edges layer */}
          <svg className="wfm-edges" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <filter id="wfm-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.2" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            {EDGES.map(([aId, bId, opts], i) => {
              const a = byId[aId];
              const b = byId[bId];
              return (
                <g key={i} className="wfm-edge">
                  <path
                    d={buildPath(a, b, opts)}
                    fill="none" stroke="transparent" strokeWidth="2.5"
                    vectorEffect="non-scaling-stroke"
                    style={{ pointerEvents: 'stroke' }}
                  />
                  <path
                    className="wfm-edge-line"
                    d={buildPath(a, b, opts)}
                    fill="none" stroke="rgba(232,26,45,0.45)" strokeWidth="1"
                    strokeLinecap="round" vectorEffect="non-scaling-stroke"
                  />
                </g>
              );
            })}
          </svg>

          {/* Nodes layer */}
          {NODES.map((n) => (
            <div
              key={n.id}
              className={[
                'wfm-node',
                n.tag ? `wfm-${n.tag}` : '',
                activeNode === n.id ? 'is-active' : '',
                (n as { wide?: boolean }).wide ? 'is-wide' : '',
                (n as { glow?: boolean }).glow ? 'is-glow' : '',
                (n as { highlight?: boolean }).highlight ? 'is-highlight' : '',
              ].filter(Boolean).join(' ')}
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              {(n as { badge?: ReactNode }).badge && (
                <span className="wfm-node-badge">{(n as { badge?: ReactNode }).badge}</span>
              )}
              <span className="wfm-node-label">{n.label}</span>
            </div>
          ))}
        </div>

        {/* Footer stats */}
        <div className="wfm-foot">
          <div className="wfm-foot-stat"><span className="wfm-num">2,847</span><span className="wfm-lbl">routed</span></div>
          <div className="wfm-foot-stat"><span className="wfm-num">12s</span><span className="wfm-lbl">latency</span></div>
          <div className="wfm-foot-stat"><span className="wfm-num">99.7%</span><span className="wfm-lbl">uptime</span></div>
        </div>

        {/* Floating chips */}
        <div className="wf-float wf-float-tl">
          <div className="chip chip-red">
            <span className="pulse-dot" style={{ background: '#FF3D4F' }} />
            form submitted
          </div>
        </div>
        <div className="wf-float wf-float-br">
          <div className="chip">+47% conversion</div>
        </div>
      </div>
    </div>
  );
}
