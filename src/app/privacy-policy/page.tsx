import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';

export const metadata: Metadata = {
  title: 'Privacy Policy — GoLab Automation',
  description: 'How GoLab Automation collects, uses, and protects your information.',
};

export default function PrivacyPolicyPage() {
  const updated = 'May 22, 2026';

  return (
    <PageShell>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '60px 24px 100px' }}>
        <div style={{ marginBottom: 48 }}>
          <span className="eyebrow-red" style={{ display: 'block', marginBottom: 12 }}>Legal</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,5vw,44px)', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--fg-1)', marginBottom: 12 }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: 14, color: 'var(--fg-3)', fontFamily: 'var(--font-mono)' }}>Last updated: {updated}</p>
        </div>

        <div className="blog-prose" style={{ color: 'var(--fg-2)' }}>

          <p>GoLab Automation (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates golabautomation.com. This Privacy Policy explains how we collect, use, and protect information when you visit our website.</p>

          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Usage data</strong> — pages visited, time spent, browser type, device type, and referring URL, collected automatically through analytics tools.</li>
            <li><strong>Contact information</strong> — name and email address when you submit a contact form or sign up for updates.</li>
            <li><strong>Cookies</strong> — small data files stored on your device. See the Cookies section below for details.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To operate and improve our website and content</li>
            <li>To respond to your enquiries and provide support</li>
            <li>To measure website traffic and audience behavior via analytics</li>
            <li>To serve relevant advertisements through Google AdSense</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2>Cookies</h2>
          <p>We use cookies for the following purposes:</p>
          <ul>
            <li><strong>Essential cookies</strong> — required for the site to function correctly.</li>
            <li><strong>Analytics cookies</strong> — help us understand how visitors use our site (e.g. Google Analytics).</li>
            <li><strong>Advertising cookies</strong> — used by Google AdSense to display personalised advertisements based on your interests and browsing history. Google uses cookies such as the DoubleClick cookie to serve ads.</li>
          </ul>
          <p>You can control cookies through your browser settings. Opting out of advertising cookies does not remove ads — it makes them less personalised. Visit <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-red-soft)' }}>Google Ad Settings</a> to manage your preferences.</p>

          <h2>Google AdSense</h2>
          <p>We use Google AdSense to display advertisements. Google AdSense uses cookies and web beacons to collect data and serve ads based on your visits to this and other websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the internet.</p>
          <p>Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to our website or other websites. Users may opt out of personalised advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-red-soft)' }}>Google Ad Settings</a>.</p>
          <p>For more information on how Google uses data when you use our site, visit <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-red-soft)' }}>Google&apos;s Privacy &amp; Terms</a>.</p>

          <h2>Third-Party Services</h2>
          <p>Our website may use the following third-party services, each with their own privacy policies:</p>
          <ul>
            <li><strong>Google Analytics</strong> — website traffic analysis</li>
            <li><strong>Google AdSense</strong> — advertising</li>
            <li><strong>Vercel</strong> — website hosting and edge delivery</li>
          </ul>

          <h2>Data Sharing</h2>
          <p>We do not sell your personal information. We may share data with:</p>
          <ul>
            <li>Service providers who help us operate our website (e.g. hosting, analytics)</li>
            <li>Advertising partners (e.g. Google) for the purpose of displaying relevant ads</li>
            <li>Authorities when required by law</li>
          </ul>

          <h2>Data Retention</h2>
          <p>Contact form submissions are retained for up to 2 years. Analytics data is retained according to the retention settings of the respective analytics platform. You may request deletion of your data at any time by contacting us.</p>

          <h2>Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Object to or restrict certain processing</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>To exercise any of these rights, contact us at <a href="mailto:fareed@nonstopautomation.com" style={{ color: 'var(--brand-red-soft)' }}>fareed@nonstopautomation.com</a>.</p>

          <h2>Children&apos;s Privacy</h2>
          <p>Our website is not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will promptly delete it.</p>

          <h2>Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of our site after changes constitutes acceptance of the updated policy.</p>

          <h2>Contact</h2>
          <p>If you have questions about this Privacy Policy, contact us at:</p>
          <p>
            <strong>GoLab Automation</strong><br />
            <a href="mailto:fareed@nonstopautomation.com" style={{ color: 'var(--brand-red-soft)' }}>fareed@nonstopautomation.com</a><br />
            <a href="https://golabautomation.com" style={{ color: 'var(--brand-red-soft)' }}>golabautomation.com</a>
          </p>
        </div>

        <div style={{ marginTop: 60, paddingTop: 32, borderTop: '1px solid var(--hairline)' }}>
          <Link href="/" className="btn-outline-red">← Back to home</Link>
        </div>
      </div>
    </PageShell>
  );
}
