// ============================================================
// §03 · MASCOTA — familia del brócoli
// ============================================================

const MascotSection = () => (
  <Section id="mascot" eyebrow="§03 · brócoli">
    <SectionHead n="03" kicker="mascota" title="El brócoli rizado de Mallorentec."
      blurb="Una mascota con cara y actitud. Nace del dibujo original y se rediseña con más aire, cara cute y tres estados emocionales." />

    {/* HERO mascot */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', marginBottom: 64 }}>
      <div style={{ background: 'var(--ml-crema)', padding: 48, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 420 }}>
        <BrocoliC size={280} mood="happy" primary="var(--ml-tomate)" secondary="var(--ml-marino-ink)" paper="var(--ml-crema)"/>
      </div>
      <div>
        <h3 className="ml-display" style={{ fontSize: 'var(--ml-fs-2xl)', margin: 0, marginBottom: 16 }}>
          Silueta de nube,<br/>cara <span style={{ color: 'var(--ml-tomate)' }}>cute</span>.
        </h3>
        <p style={{ fontSize: 'var(--ml-fs-md)', lineHeight: 1.55, color: 'var(--ml-fg-dim)', marginBottom: 24 }}>
          Cinco lóbulos grandes con aire entre ellos. Ojos redondos con brillito, mejillas rosadas sutiles, sonrisa suave. Se lee desde 48px (avatar) hasta 300px (hero).
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontFamily: 'var(--ml-mono)', fontSize: 11 }}>
          {[
            ['anatomy', 'corona + tallo + cara'],
            ['moods', '3: happy · wink · think'],
            ['mínimo', '48px legible'],
            ['colores', 'primary · secondary · paper'],
          ].map(([k, v]) => (
            <div key={k} style={{ padding: '10px 12px', border: '1.5px solid var(--ml-line)' }}>
              <div style={{ color: 'var(--ml-tomate)' }}>{k}</div>
              <div style={{ textTransform: 'none', letterSpacing: 0, marginTop: 4, opacity: 0.8 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* MOODS */}
    <div className="ml-mono" style={{ marginBottom: 24 }}>— tres estados</div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, marginBottom: 64 }}>
      {[
        ['happy', 'feliz · default'],
        ['wink', 'guiño · complicidad'],
        ['think', 'pensando · duda'],
      ].map(([m, label]) => (
        <div key={m} style={{ background: 'var(--ml-marino-2)', padding: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, border: '1.5px solid var(--ml-line)' }}>
          <BrocoliC size={160} mood={m} primary="var(--ml-tomate)" secondary="var(--ml-crema)" paper="var(--ml-marino-2)"/>
          <div className="ml-mono" style={{ color: 'var(--ml-tomate)' }}>{label}</div>
        </div>
      ))}
    </div>

    {/* COLOR COMBOS */}
    <div className="ml-mono" style={{ marginBottom: 24 }}>— combinaciones de color válidas</div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, marginBottom: 64 }}>
      {[
        { bg: 'var(--ml-marino)', p: 'var(--ml-tomate)', s: 'var(--ml-crema)', label: 'marino base' },
        { bg: 'var(--ml-crema)', p: 'var(--ml-tomate)', s: 'var(--ml-marino-ink)', label: 'crema' },
        { bg: 'var(--ml-tomate)', p: 'var(--ml-sol)', s: 'var(--ml-crema)', label: 'tomate' },
        { bg: 'var(--ml-sol)', p: 'var(--ml-tomate)', s: 'var(--ml-marino-ink)', label: 'sol' },
      ].map((c, i) => (
        <div key={i} style={{ background: c.bg, padding: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, border: '1.5px solid var(--ml-line)' }}>
          <BrocoliC size={120} mood="happy" primary={c.p} secondary={c.s} paper={c.bg}/>
          <div className="ml-mono" style={{ color: c.s, opacity: 0.8 }}>{c.label}</div>
        </div>
      ))}
    </div>

    {/* SCALE */}
    <div className="ml-mono" style={{ marginBottom: 24 }}>— escalabilidad</div>
    <div style={{ border: '1.5px solid var(--ml-line)', padding: '40px 32px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', gap: 16, marginBottom: 64 }}>
      {[48, 64, 96, 140, 200].map(sz => (
        <div key={sz} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <BrocoliC size={sz} mood="happy" primary="var(--ml-tomate)" secondary="var(--ml-crema)" paper="var(--ml-marino)"/>
          <div className="ml-mono" style={{ opacity: 0.6 }}>{sz}px</div>
        </div>
      ))}
    </div>

    {/* DO / DON'T */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32 }}>
      <DoDontCard verdict="do" title="Colores del sistema">
        <div style={{ background: 'var(--ml-marino)', padding: 32, display: 'flex', justifyContent: 'center' }}>
          <BrocoliC size={100} mood="happy" primary="var(--ml-tomate)" secondary="var(--ml-crema)" paper="var(--ml-marino)"/>
        </div>
      </DoDontCard>
      <DoDontCard verdict="dont" title="Colores inventados">
        <div style={{ background: '#5a3ea1', padding: 32, display: 'flex', justifyContent: 'center' }}>
          <BrocoliC size={100} mood="happy" primary="#00ffaa" secondary="#ff00ff" paper="#5a3ea1"/>
        </div>
      </DoDontCard>
      <DoDontCard verdict="dont" title="Deformar la silueta">
        <div style={{ background: 'var(--ml-marino)', padding: 32, display: 'flex', justifyContent: 'center' }}>
          <div style={{ transform: 'scaleY(0.6) scaleX(1.3)' }}>
            <BrocoliC size={100} mood="happy" primary="var(--ml-tomate)" secondary="var(--ml-crema)" paper="var(--ml-marino)"/>
          </div>
        </div>
      </DoDontCard>
    </div>
  </Section>
);

Object.assign(window, { MascotSection });
