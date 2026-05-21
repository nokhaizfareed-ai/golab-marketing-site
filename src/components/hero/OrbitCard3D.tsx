'use client';

import React from 'react';

/* Small platform badge factory */
const platformBadge = (label: string, grad: string, content: React.ReactNode) => (
  <div
    style={{
      width: 36,
      height: 36,
      borderRadius: 10,
      background: grad,
      display: 'grid',
      placeItems: 'center',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35), 0 4px 12px rgba(0,0,0,0.35)',
      flexShrink: 0,
    }}
    title={label}
  >
    {content}
  </div>
);

const PB = {
  HubSpot: platformBadge(
    'HubSpot',
    'linear-gradient(135deg, #FF8C5A, #FF5C35)',
    <span className="text-white font-extrabold text-[13px] font-display">H</span>
  ),
  GHL: platformBadge(
    'GHL',
    'linear-gradient(135deg, #FCD64A, #4ED36A)',
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M4 22 L4 8 L8 4 L8 22 Z" fill="#FCD64A" />
      <path d="M10 22 L10 12 L14 8 L14 22 Z" fill="#3784FF" />
      <path d="M16 22 L16 6 L20 2 L20 22 Z" fill="#3DCC5D" />
    </svg>
  ),
  Zapier: platformBadge(
    'Zapier',
    'linear-gradient(135deg, #FF8C5A, #FF4A1C)',
    <span className="text-white font-extrabold text-[13px] font-display">Z</span>
  ),
  Make: platformBadge(
    'Make',
    'linear-gradient(135deg, #6D5BFE, #4435E6)',
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="12" r="3" />
      <circle cx="12" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
    </svg>
  ),
  Sheets: platformBadge(
    'Sheets',
    'linear-gradient(135deg, #5DD681, #1BAB4F)',
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
      <path d="M5 3h10l4 4v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" opacity="0.95" />
      <path d="M8 11h8M8 14h8M8 17h5" stroke="#1BAB4F" strokeWidth="1.5" />
    </svg>
  ),
  Airtable: platformBadge(
    'Airtable',
    'linear-gradient(135deg, #FFC857, #F5A623)',
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
      <path d="M3 7 L12 3 L21 7 L12 11 Z M3 9 L11 12.5 L11 21 L3 17.5 Z M13 12.5 L21 9 L21 17.5 L13 21 Z" />
    </svg>
  ),
};

export const OrbitCard3D: React.FC = () => {
  const satellites = [
    { angle: 0, badge: PB.GHL, label: 'GHL' },
    { angle: 60, badge: PB.HubSpot, label: 'HubSpot' },
    { angle: 120, badge: PB.Zapier, label: 'Zapier' },
    { angle: 180, badge: PB.Make, label: 'Make' },
    { angle: 240, badge: PB.Sheets, label: 'Sheets' },
    { angle: 300, badge: PB.Airtable, label: 'Airtable' },
  ];

  return (
    <div className="hero-orbit-wrap select-none">
      <div className="orbit-center">
        {/* Concentric rotating orbit rings */}
        <div className="orbit-ring r1"></div>
        <div className="orbit-ring r2"></div>
        <div className="orbit-ring r3"></div>

        {/* Central visual core monogram */}
        <div className="orbit-core flex items-center justify-center shadow-lg">
          <img
            src="/assets/golab-monogram-red.png"
            alt="GoLab Logo"
            className="w-16 h-16 object-contain pointer-events-none drop-shadow-[0_4px_16px_var(--brand-red-glow)]"
          />
        </div>

        {/* Orbit satellites */}
        {satellites.map((sat, i) => (
          <div
            key={i}
            className="orbit-sat"
            style={
              {
                '--ang': `${sat.angle}deg`,
                '--delay': `${i * -3}s`,
              } as React.CSSProperties
            }
          >
            <div className="orbit-sat-inner shrink-0">{sat.badge}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrbitCard3D;
