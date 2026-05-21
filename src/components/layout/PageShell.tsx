import { ThemeProvider } from '../atoms/ThemeProvider';
import { Nav } from './Nav';
import { FooterV2 } from './FooterV2';
import { AmbientStage } from './AmbientStage';
import { ReactNode } from 'react';

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <AmbientStage />
      <Nav />
      <main style={{ position: 'relative', zIndex: 1 }}>{children}</main>
      <FooterV2 />
    </ThemeProvider>
  );
}
