import { GlassButton } from '../atoms/GlassButton';
import { Icons } from '../atoms/Icons';
import { WorkflowCard3D } from '../hero/WorkflowCard3D';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="chip chip-red">
            <span className="pulse-dot" style={{ background: '#FF3D4F' }} />
            Enterprise GoHighLevel · Automation · Integration partner
          </span>
          <h1 className="hero-headline">
            Revenue infrastructure for teams that{' '}
            <span className="accent">run on automation.</span>
          </h1>
          <p className="hero-sub">
            We build the funnels, workflows, and integrations that turn HighLevel into a true revenue platform — connected to Salesforce, HubSpot, Zoho, Twilio, Mailgun, and the rest of your stack. From solo operators to multi-location enterprises.
          </p>
          <div className="hero-ctas">
            <GlassButton variant="primary" size="lg" iconRight={Icons.arrow} href="/contact">
              Book a quick discovery call
            </GlassButton>
            <GlassButton size="lg" icon={Icons.workflow} href="/services">
              See live workflows
            </GlassButton>
          </div>
          <div className="hero-meta">
            <div className="hero-meta-stat">
              <span className="hero-meta-stat-num">200+</span>
              <span className="hero-meta-stat-label">funnels shipped</span>
            </div>
            <div className="hero-meta-stat">
              <span className="hero-meta-stat-num">10</span>
              <span className="hero-meta-stat-label">specialist team</span>
            </div>
            <div className="hero-meta-stat">
              <span className="hero-meta-stat-num">99.7%</span>
              <span className="hero-meta-stat-label">workflow uptime</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <WorkflowCard3D />
        </div>
      </div>
    </section>
  );
}
