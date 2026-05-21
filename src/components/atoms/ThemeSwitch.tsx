'use client';

import { useTheme } from './ThemeProvider';

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      role="switch"
      aria-checked={isLight}
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      className="theme-switch"
      aria-label="Toggle theme"
    >
      {/* moon icon */}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#aab' }}>
        <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
      </svg>
      {/* sun icon */}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#f4c64a' }}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
      <span className="ts-thumb" />
    </button>
  );
}
