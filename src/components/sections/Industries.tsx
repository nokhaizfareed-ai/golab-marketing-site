const industries = [
  { icon: 'H', name: 'Healthcare & Medspas', tag: 'HIPAA-aware flows' },
  { icon: 'S', name: 'Home Services', tag: 'HVAC · Roofing · Plumbing' },
  { icon: 'R', name: 'Real Estate', tag: 'Brokers · Property mgmt' },
  { icon: 'F', name: 'Financial Services', tag: 'Insurance · Mortgage' },
  { icon: 'B', name: 'B2B SaaS', tag: 'Demo-led growth' },
  { icon: 'C', name: 'Coaches & Creators', tag: 'Courses · Communities' },
  { icon: 'L', name: 'Legal & Professional', tag: 'Intake automation' },
  { icon: 'E', name: 'Solar & Energy', tag: 'Lead qualification' },
  { icon: 'M', name: 'E-commerce', tag: 'Abandoned cart · Reviews' },
  { icon: 'W', name: 'Fitness & Wellness', tag: 'Membership · Booking' },
  { icon: 'A', name: 'Marketing Agencies', tag: 'White-label GHL setup' },
  { icon: '+', name: 'Custom / Any Niche', tag: 'Discovery → build → ship' },
];

export function Industries() {
  return (
    <section className="section">
      <div className="section-head section-head-center">
        <span className="eyebrow-red">Built for every lead, every funnel</span>
        <h2 className="section-title">Industries we automate</h2>
        <p className="section-sub">From a single solo operator to multi-location enterprises — the playbook adapts, the engine doesn&rsquo;t.</p>
      </div>
      <div className="industries-grid">
        {industries.map((ind, i) => (
          <div key={i} className="mac-card industry-card">
            <div className="industry-icon">
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18 }}>{ind.icon}</span>
            </div>
            <div className="industry-title">{ind.name}</div>
            <div className="industry-meta">{ind.tag}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
