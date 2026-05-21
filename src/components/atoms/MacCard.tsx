import { ReactNode, CSSProperties } from 'react';

interface MacCardProps {
  title?: string;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export function MacCard({ title, children, style, className = '' }: MacCardProps) {
  return (
    <div className={`mac-card ${className}`} style={style}>
      <div className="mac-card-header">
        <span className="mac-dot r" />
        <span className="mac-dot y" />
        <span className="mac-dot g" />
        {title && <span className="mac-card-title">{title}</span>}
      </div>
      <div style={{ padding: '24px' }}>{children}</div>
    </div>
  );
}
