'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeSwitch } from '../atoms/ThemeSwitch';
import { GlassButton } from '../atoms/GlassButton';
import { Icons } from '../atoms/Icons';
import { useTheme } from '../atoms/ThemeProvider';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Nav() {
  const pathname = usePathname();
  const { theme } = useTheme();

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-brand">
          <Image
            src={theme === 'light' ? '/assets/golab-wordmark-color.png' : '/assets/golab-wordmark-white.png'}
            alt="GoLab Automation"
            width={140}
            height={30}
            style={{ height: 30, width: 'auto' }}
            priority
          />
        </Link>
        <div className="nav-links">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link ${pathname === l.href ? 'active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <ThemeSwitch />
          <GlassButton variant="primary" size="sm" iconRight={Icons.arrowSm} href="/contact">
            Book a quick discovery call
          </GlassButton>
        </div>
      </div>
    </nav>
  );
}
