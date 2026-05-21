import { Icons } from '../atoms/Icons';

const team = [
  { name: 'Nokhaiz Fareed Awan', role: 'CEO & Founder', tint: 'rgba(232,26,45,0.30)', chip: 'Strategy' },
  { name: 'Hassaan Mehdi', role: 'COO', tint: 'rgba(109,91,254,0.30)', chip: 'Operations' },
  { name: 'Anees Ur Rehman', role: 'CTO', tint: 'rgba(77,208,255,0.28)', chip: 'Engineering' },
  { name: 'Salahuddin', role: 'Head of HR', tint: 'rgba(252,163,17,0.28)', chip: 'People' },
  { name: 'Arslan Rana', role: 'HR Co-Head', tint: 'rgba(252,163,17,0.24)', chip: 'People' },
  { name: 'Ayesha Khalid', role: 'Sales', tint: 'rgba(255,107,53,0.28)', chip: 'Sales' },
  { name: 'Rahima Niazi', role: 'Sales', tint: 'rgba(255,138,79,0.30)', chip: 'Sales' },
  { name: 'Hamza Irshad', role: 'A2P & DNS Specialist', tint: 'rgba(74,222,128,0.28)', chip: 'Compliance' },
  { name: 'Talha Ismail', role: 'Integration Expert', tint: 'rgba(232,26,45,0.28)', chip: 'Integrations' },
  { name: 'Ahmad Faraz', role: 'Integration & Dev Expert', tint: 'rgba(109,91,254,0.28)', chip: 'Engineering' },
  { name: 'Zain Ali', role: 'Automation Consultation Specialist', tint: 'rgba(74,222,128,0.24)', chip: 'Automation' },
  { name: 'Gull Sher Fareed', role: 'Team Lead', tint: 'rgba(255,201,61,0.30)', chip: 'Delivery' },
];

function initials(name: string) {
  return name.split(' ').slice(0, 2).map((s) => s[0]).join('');
}

export function Team() {
  return (
    <section className="section">
      <div className="section-head section-head-center">
        <span className="eyebrow-red">The people behind the build</span>
        <h2 className="section-title">Twelve specialists. One pipeline you can trust.</h2>
        <p className="section-sub">Not a freelance marketplace. A real team — engineering, sales, compliance, ops — under one roof.</p>
      </div>
      <div className="team-grid">
        {team.map((m, i) => (
          <div key={i} className="mac-card team-card">
            <div className="team-photo" style={{ '--team-tint': m.tint } as React.CSSProperties}>
              <div className="grid-bg" />
              <span className="team-initials">{initials(m.name)}</span>
              <div className="team-role-chip">
                <span className="chip" style={{ padding: '4px 10px', fontSize: 9 }}>{m.chip}</span>
              </div>
            </div>
            <div className="team-body">
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.role.toUpperCase()}</div>
              <div className="team-social">
                <a aria-label="LinkedIn" href="#">{Icons.linkedin}</a>
                <a aria-label="Email" href="#">{Icons.mail}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
