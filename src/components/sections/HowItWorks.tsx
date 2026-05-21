const steps = [
  {
    title: 'Discovery call',
    desc: 'You hop on a quick call. We listen to your goals, your stack, your bottlenecks — no pitch deck, no script. Just an honest read on what you actually need.',
  },
  {
    title: 'Pre-built or custom',
    desc: "If one of our existing snapshots covers what you need, we'll point you there — fastest path to live. If not, we scope a custom build with a fixed timeline and a written spec before any work starts.",
  },
  {
    title: 'Build & deliver',
    desc: 'Funnels, workflows, A2P registration, dashboards — built in a sandbox, reviewed live with you, then shipped into your account inside the agreed window.',
  },
  {
    title: 'Integrate the rest',
    desc: 'Using iClosed, Calendly, HubSpot, Salesforce, or anything else? We wire it all together — webhooks, native integrations, Zapier/Make where needed — so your whole stack speaks one language.',
  },
];

export function HowItWorks() {
  return (
    <section className="section">
      <div className="section-head">
        <span className="eyebrow-red">How we work with you</span>
        <h2 className="section-title">From first call to fully integrated stack.</h2>
        <p className="section-sub">A predictable four-step engagement. Same shape whether you&rsquo;re a solo operator buying a snapshot or an enterprise migrating a multi-platform stack.</p>
      </div>
      <div className="how-grid">
        {steps.map((s, i) => (
          <div key={i} className="mac-card how-step">
            <div className="how-step-title">{s.title}</div>
            <div className="how-step-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
