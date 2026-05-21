import Image from 'next/image';

type LogoItem =
  | { src: string; alt: string; h: number; text?: never }
  | { text: string; src?: never; alt?: never; h?: never };

const items: LogoItem[] = [
  { src: '/assets/logos/highlevel.png', alt: 'HighLevel', h: 32 },
  { src: '/assets/logos/leadconnector.png', alt: 'LeadConnector', h: 28 },
  { src: '/assets/logos/zapier.png', alt: 'Zapier', h: 28 },
  { src: '/assets/logos/make.png', alt: 'Make', h: 28 },
  { src: '/assets/logos/n8n.png', alt: 'n8n', h: 40 },
  { src: '/assets/logos/twilio.png', alt: 'Twilio', h: 40 },
  { src: '/assets/logos/monday.png', alt: 'monday.com', h: 40 },
  { src: '/assets/logos/salesforce.png', alt: 'Salesforce', h: 32 },
  { src: '/assets/logos/zoho.png', alt: 'Zoho', h: 40 },
  { text: 'HubSpot' },
  { text: 'Mailgun' },
  { text: 'ClickFunnels' },
];

export function LogoMarquee() {
  const doubled = [...items, ...items];
  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <span className="eyebrow">Trusted across the stack — and the platforms we integrate</span>
      </div>
      <div className="marquee-wrap">
        <div className="marquee">
          {doubled.map((x, i) => (
            <div key={i} className="logo-chip lg">
              {x.src != null ? (
                <Image
                  src={x.src}
                  alt={x.alt ?? ''}
                  width={130}
                  height={x.h ?? 40}
                  style={{ height: x.h ?? 40, width: 'auto', objectFit: 'contain' }}
                />
              ) : (
                <span className="logo-text">{x.text}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
