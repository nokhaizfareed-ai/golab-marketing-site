'use client';

import Image from 'next/image';
import { Icons } from '../atoms/Icons';

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

export function FooterV2() {
  return (
    <footer className="footer-v2">
      <div className="footer-v2-inner">
        {/* Top: brand + subscribe */}
        <div className="footer-v2-top">
          <div className="footer-v2-brand-block">
            <Image
              src="/assets/golab-wordmark-white.png"
              alt="GoLab Automation"
              width={180}
              height={44}
              className="footer-v2-wordmark"
            />
            <p className="footer-v2-tag">
              Revenue infrastructure for teams that run on automation. GoHighLevel funnels, integrations, and the engineering that holds it together.
            </p>
            <div className="footer-v2-chips">
              <span className="chip" style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.20)', color: '#fff' }}>HighLevel partner</span>
              <span className="chip" style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.20)', color: '#fff' }}>Make certified</span>
              <span className="chip" style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.20)', color: '#fff' }}>SOC2 in progress</span>
            </div>
          </div>

          <div className="footer-v2-subscribe-block">
            <div className="footer-v2-eyebrow">SUBSCRIBE</div>
            <div className="footer-v2-sub-title">Field notes from 200+ GHL builds.</div>
            <div className="footer-v2-sub-desc">Monthly. Real lessons, no fluff, no &ldquo;10 ways to grow your agency&rdquo;.</div>
            <form className="footer-v2-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="you@agency.com" required />
              <button type="submit">
                Subscribe
                {Icons.arrowSm}
              </button>
            </form>
          </div>
        </div>

        {/* Link columns */}
        <div className="footer-v2-cols">
          {cols.map((col) => (
            <div key={col.title} className="footer-v2-col">
              <div className="footer-v2-col-title">{col.title}</div>
              <ul>
                {col.links.map((l) => (
                  <li key={l}>
                    <a className="footer-v2-link" href="#">
                      <span className="footer-v2-link-text">{l}</span>
                      <svg className="footer-v2-link-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17 L17 7 M9 7 H17 V15" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer-v2-bottom">
          <div className="footer-v2-bottom-left">
            <span>© 2026 GoLab Automation</span>
            <span className="footer-v2-dot" />
            <span>All rights reserved</span>
          </div>
          <div className="footer-v2-bottom-mid">
            <a className="footer-v2-small-link" href="#">Privacy</a>
            <a className="footer-v2-small-link" href="#">Terms</a>
            <a className="footer-v2-small-link" href="#">Cookies</a>
            <a className="footer-v2-small-link" href="#">Status</a>
          </div>
          <div className="footer-v2-bottom-right">
            <div className="footer-v2-live">
              <span className="pulse-dot" style={{ background: '#4ade80' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em' }}>OFFICE OPEN · 9–7 PT</span>
            </div>
            <div className="footer-v2-social">
              <a aria-label="LinkedIn" href="#">{Icons.linkedin}</a>
              <a aria-label="X" href="#">{Icons.twitter}</a>
              <a aria-label="YouTube" href="#">{Icons.youtube}</a>
              <a aria-label="Instagram" href="#">{Icons.instagram}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
