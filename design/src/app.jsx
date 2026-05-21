/* =========================================================================
   App — main entry. Routes pages, hosts tweaks, manages theme.
   ========================================================================= */
const { useState, useEffect } = React;

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "heroLayout": "workflow",
  "footerVariant": "default",
  "bgAmbient": "grid",
  "btnGlow": "#E81A2D",
  "btnSize": "normal"
}/*EDITMODE-END*/;

function App() {
  const [page, setPage] = useState('home');
  const [t, setTweak] = useTweaks(DEFAULTS);

  // Sync theme + bg to <html>
  useEffect(() => {
    document.documentElement.dataset.theme = t.theme;
    document.documentElement.dataset.bg = t.bgAmbient;
    document.documentElement.dataset.footer = t.footerVariant;
  }, [t.theme, t.bgAmbient, t.footerVariant]);

  // Scroll-reveal observer
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [page]);

  // Scroll to top on page change
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [page]);

  // Cursor-tracked btn glow (set CSS var on root)
  useEffect(() => {
    document.documentElement.style.setProperty('--brand-red', t.btnGlow);
  }, [t.btnGlow]);

  return (
    <>
      {/* Ambient stage — fixed behind everything */}
      <div className="ambient-stage">
        <div className="ambient-grid"></div>
        <div className="ambient-glow g1"></div>
        <div className="ambient-glow g2"></div>
      </div>

      <Nav page={page} setPage={setPage} theme={t.theme} setTheme={(v) => setTweak('theme', v)}/>

      <main>
        {page === 'home' && (
          <>
            <Hero layout={t.heroLayout}/>
            <LogoMarquee/>
            <HighLevelSection/>
            <Industries/>
            <Services/>
            <HowItWorks/>
            <EnterpriseBand/>
            <Products/>
            <Testimonials/>
            <Team/>
            <Blog/>
            <Contact/>
          </>
        )}
        {page === 'services' && (
          <>
            <Services heading={true}/>
            <HowItWorks/>
            <HighLevelSection/>
            <EnterpriseBand/>
            <Contact/>
          </>
        )}
        {page === 'products' && (
          <>
            <Products heading={true}/>
            <Testimonials/>
            <Contact/>
          </>
        )}
        {page === 'about' && (
          <>
            <About/>
            <Team/>
            <Testimonials/>
          </>
        )}
        {page === 'team' && (
          <>
            <Team/>
            <Contact/>
          </>
        )}
        {page === 'blog' && <Blog heading={true}/>}
        {page === 'contact' && <Contact/>}
      </main>

      <FooterV2/>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Theme">
          <TweakRadio
            label="Mode"
            value={t.theme}
            onChange={(v) => setTweak('theme', v)}
            options={[{value:'dark', label:'Dark'}, {value:'light', label:'Light'}]}
          />
        </TweakSection>

        <TweakSection title="Hero">
          <TweakSelect
            label="Hero layout"
            value={t.heroLayout}
            onChange={(v) => setTweak('heroLayout', v)}
            options={[
              {value:'workflow', label:'3D workflow card (GHL → Make → Lead)'},
              {value:'dashboard', label:'Glass dashboard with stats'},
              {value:'orbit', label:'Orbit — glass orb + satellites'},
            ]}
          />
        </TweakSection>

        <TweakSection title="Background ambient">
          <TweakRadio
            label="Ambient"
            value={t.bgAmbient}
            onChange={(v) => setTweak('bgAmbient', v)}
            options={[{value:'grid', label:'Grid + glow'}, {value:'none', label:'Glow only'}]}
          />
        </TweakSection>

        <TweakSection title="Button glow color">
          <TweakColor
            label="Accent color"
            value={t.btnGlow}
            onChange={(v) => setTweak('btnGlow', v)}
            options={['#E81A2D', '#FF3D4F', '#B8131F', '#FF6B35', '#6D5BFE']}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
