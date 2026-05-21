'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (t: Theme) => void;
}>({ theme: 'light', setTheme: () => {} });

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  storageKey = 'theme',
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey) as Theme | null;
    if (saved === 'light' || saved === 'dark') setThemeState(saved);
  }, [storageKey]);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem(storageKey, t);
    document.documentElement.setAttribute('data-theme', t);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-bg', 'grid');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
