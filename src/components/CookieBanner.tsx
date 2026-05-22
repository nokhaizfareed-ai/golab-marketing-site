'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookie_consent')) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem('cookie_consent', 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
      zIndex: 9999, width: 'min(640px, calc(100vw - 32px))',
      background: 'var(--glass-bg)', backdropFilter: 'blur(20px) saturate(160%)',
      border: '1px solid var(--glass-border)', borderRadius: 'var(--r-lg)',
      padding: '20px 24px', boxShadow: '0 8px 40px rgba(0,0,0,0.35)',
      display: 'flex', flexDirection: 'column', gap: 14,
    }}>
      <div>
        <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg-1)', marginBottom: 6 }}>
          We use cookies
        </p>
        <p style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.55 }}>
          We and our partners (including Google) use cookies to analyse site traffic and serve relevant ads.
          By clicking <strong>Accept</strong> you consent to this.{' '}
          <Link href="/privacy-policy" style={{ color: 'var(--brand-red-soft)', textDecoration: 'underline' }}>
            Privacy Policy
          </Link>
        </p>
      </div>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
        <button onClick={decline} className="btn-glass btn-sm" style={{ fontSize: 13 }}>
          Decline
        </button>
        <button onClick={accept} className="btn-glass btn-primary btn-sm" style={{ fontSize: 13 }}>
          Accept all
        </button>
      </div>
    </div>
  );
}
