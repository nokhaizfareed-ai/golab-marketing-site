import { Icons } from '../atoms/Icons';

const services = [
  { icon: Icons.funnel, title: 'GHL funnels & landing pages', desc: 'High-converting sales funnels, opt-in pages, and websites built natively in GoHighLevel — designed for the click, the call, the close.', tags: ['Funnels', 'Landing pages', 'Conversion'] },
  { icon: Icons.workflow, title: 'Automation workflows', desc: 'End-to-end automation: lead capture, qualification, routing, nurture, booking, review requests, recovery. Set once, runs forever.', tags: ['GHL', 'Zapier', 'Make', 'n8n'] },
  { icon: Icons.mail, title: 'Email + SMS infrastructure', desc: 'Domain auth, warm-up, deliverability tuning, A2P 10DLC, and the workflow templates that keep your sender reputation clean.', tags: ['Email', 'SMS', 'Deliverability'] },
  { icon: Icons.phone, title: 'Phone, IVR & call routing', desc: 'Twilio numbers, smart IVRs, missed-call text-back, call recording and the AI receptionist if you want it.', tags: ['Twilio', 'IVR', 'Missed-call'] },
  { icon: Icons.layers, title: 'Integrations & glue code', desc: "When GHL can't do it, I bridge it. Zapier, Make, Pabbly, n8n, webhooks, custom scripts. Whatever connects A to B.", tags: ['Zapier', 'Make', 'Pabbly', 'Webhooks'] },
  { icon: Icons.star, title: 'Review management', desc: 'Trigger Google + Facebook review requests from the right moment in the customer journey. Recovery flow for the 3-star ones.', tags: ['Google reviews', 'Reputation'] },
  { icon: Icons.rocket, title: 'Onboarding & migration', desc: 'White-glove onboarding for new GHL accounts — from sub-account setup to migrating from ClickFunnels, Kajabi, WordPress.', tags: ['Onboarding', 'Migration', 'Setup'] },
  { icon: Icons.bot, title: 'AI agents & receptionists', desc: 'Conversational AI receptionists, lead qualifiers, and appointment setters wired into your GHL pipeline.', tags: ['AI', 'Conversational'] },
  { icon: Icons.spark, title: 'Audits & A/B testing', desc: "Funnel audits, ad campaign audits, and disciplined A/B testing — find what converts, kill what doesn't.", tags: ['Audit', 'A/B test', 'CRO'] },
];

interface ServicesProps {
  heading?: boolean;
}

export function Services({ heading = true }: ServicesProps) {
  return (
    <section className="section">
      {heading && (
        <div className="section-head">
          <span className="eyebrow-red">What we do</span>
          <h2 className="section-title">Everything between your ad spend and your bank account.</h2>
          <p className="section-sub">Pick a service or pick all of them. We&rsquo;re the same team either way.</p>
        </div>
      )}
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="mac-card service-card">
            <div className="service-icon">{s.icon}</div>
            <div className="service-title">{s.title}</div>
            <div className="service-desc">{s.desc}</div>
            <div className="service-tags">
              {s.tags.map((t) => <span key={t} className="service-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
