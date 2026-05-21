'use client';

import { useRef, useCallback, ReactNode } from 'react';

interface GlassButtonProps {
  children: ReactNode;
  variant?: 'primary';
  size?: 'sm' | 'lg';
  icon?: ReactNode;
  iconRight?: ReactNode;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit';
  className?: string;
}

export function GlassButton({
  children,
  variant,
  size,
  icon,
  iconRight,
  onClick,
  href,
  type = 'button',
  className = '',
}: GlassButtonProps) {
  const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);

  const handleMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  }, []);

  const cls = `btn-glass${variant ? ` btn-${variant}` : ''}${size ? ` btn-${size}` : ''} ${className}`;

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={cls}
        href={href}
        onMouseMove={handleMove}
        onClick={onClick}
      >
        {icon && icon}
        <span>{children}</span>
        {iconRight && iconRight}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      className={cls}
      onMouseMove={handleMove}
      onClick={onClick}
    >
      {icon && icon}
      <span>{children}</span>
      {iconRight && iconRight}
    </button>
  );
}
