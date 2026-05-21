'use client';

import { useState } from 'react';
import { GlassButton } from '../atoms/GlassButton';
import { Icons } from '../atoms/Icons';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section">
      <div className="section-head">
        <span className="eyebrow-red">Get in touch</span>
        <h2 className="section-title">Tell me what&rsquo;s broken. I&rsquo;ll tell you if I can fix it.</h2>
        <p className="section-sub">Free 30-minute discovery call. No deck, no pitch — just a screen share and an honest scope.</p>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-info-item">
            <div className="contact-info-icon">{Icons.mail}</div>
            <div>
              <div className="contact-info-label">Email</div>
              <div className="contact-info-val">hello@golabautomation.com</div>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">{Icons.phone}</div>
            <div>
              <div className="contact-info-label">Call / WhatsApp</div>
              <div className="contact-info-val">+1 (555) 010-2847</div>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">{Icons.globe}</div>
            <div>
              <div className="contact-info-label">Hours</div>
              <div className="contact-info-val">Mon–Fri · 9am–7pm PT</div>
            </div>
          </div>
          <div className="contact-info-item">
            <div className="contact-info-icon">{Icons.rocket}</div>
            <div>
              <div className="contact-info-label">Typical turnaround</div>
              <div className="contact-info-val">14 days, audit to live</div>
            </div>
          </div>
        </div>

        <form
          className="mac-card contact-form"
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
        >
          {submitted ? (
            <div style={{ display: 'grid', placeItems: 'center', padding: '40px 20px', textAlign: 'center', gap: 14 }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--brand-red)', display: 'grid', placeItems: 'center', color: '#fff', boxShadow: '0 8px 32px var(--brand-red-glow)' }}>
                {Icons.check}
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, letterSpacing: '-0.02em' }}>
                Got it. I&rsquo;ll reply within a day.
              </div>
              <div style={{ color: 'var(--fg-2)', fontSize: 14 }}>Usually faster. Check your inbox for the calendar link.</div>
            </div>
          ) : (
            <>
              <div className="field-row">
                <div className="field">
                  <label>Name</label>
                  <input type="text" placeholder="Your name" required />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input type="email" placeholder="you@agency.com" required />
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
                <textarea placeholder="What&apos;s broken, what&apos;s working, what you&apos;re trying to get to…" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8, flexWrap: 'wrap', gap: 12 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.10em' }}>I REPLY WITHIN 1 BUSINESS DAY</div>
                <GlassButton variant="primary" iconRight={Icons.arrow} type="submit">Send message</GlassButton>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
