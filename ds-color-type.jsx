// ============================================================
// §01 · COLOR
// ============================================================

const Swatch = ({ name, hex, usage, bg, fg, size = 'lg', ratio }) => (
  <div style={{
    background: bg,
    color: fg,
    padding: size === 'lg' ? '32px 24px' : '20px 18px',
    minHeight: size === 'lg' ? 260 : 170,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: '1.5px solid var(--ml-line)',
    position: 'relative',
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div style={{
        fontFamily: 'var(--ml-display)',
        fontWeight: 700,
        fontSize: size === 'lg' ? 40 : 24,
        letterSpacing: '-0.03em',
        lineHeight: 0.95,
      }}>{name}</div>
      {ratio && <div className="ml-mono" style={{ opacity: 0.7 }}>{ratio}</div>}
    </div>
    <div>
      <div className="ml-mono" style={{ opacity: 0.85, marginBottom: 6 }}>{hex}</div>
      {usage && <div style={{ fontSize: 'var(--ml-fs-sm)', opacity: 0.75, lineHeight: 1.4 }}>{usage}</div>}
    </div>
  </div>
);

const ColorSection = () => (
  <Section id="color" eyebrow="§01 · color">
    <SectionHead n="01" kicker="color" title="Azul marino, crema y el tomate que despierta."
      blurb="El azul marino es el fondo del huerto de noche. La crema es el papel. El tomate es la chispa que da vida. Sol y plum se usan con cuentagotas." />

    {/* Primaria */}
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 2, marginBottom: 2 }}>
      <Swatch name="Marino" hex="#2A3D66" usage="Fondo primario. Identidad. 60% del sistema." bg="var(--ml-marino)" fg="var(--ml-crema)" ratio="60%"/>
      <Swatch name="Crema" hex="#F1E9D2" usage="Foreground y papel." bg="var(--ml-crema)" fg="var(--ml-marino-ink)" ratio="30%"/>
      <Swatch name="Tomate" hex="#FF6A47" usage="Acento principal. CTAs, destacados." bg="var(--ml-tomate)" fg="var(--ml-crema)" ratio="10%"/>
    </div>

    {/* Secundaria */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 2 }}>
      <Swatch name="Sol" hex="#F5C842" usage="Acento cálido, resaltado" bg="var(--ml-sol)" fg="var(--ml-marino-ink)" size="sm"/>
      <Swatch name="Plum" hex="#7A3B6B" usage="Acento raro, uso limitado" bg="var(--ml-plum)" fg="var(--ml-crema)" size="sm"/>
      <Swatch name="Marino 2" hex="#3A5180" usage="Hover, variante clara" bg="var(--ml-marino-2)" fg="var(--ml-crema)" size="sm"/>
      <Swatch name="Tinta" hex="#0F1626" usage="Texto sobre crema" bg="var(--ml-marino-ink)" fg="var(--ml-crema)" size="sm"/>
    </div>

    {/* Reparto proporción */}
    <div style={{ marginTop: 48 }}>
      <div className="ml-mono" style={{ marginBottom: 12 }}>— reparto sugerido</div>
      <div style={{ display: 'flex', height: 48, border: '1.5px solid var(--ml-line)' }}>
        <div style={{ flex: 60, background: 'var(--ml-marino)', display: 'flex', alignItems: 'center', paddingLeft: 14 }}>
          <span className="ml-mono" style={{ color: 'var(--ml-crema)' }}>marino · 60%</span>
        </div>
        <div style={{ flex: 30, background: 'var(--ml-crema)', display: 'flex', alignItems: 'center', paddingLeft: 14 }}>
          <span className="ml-mono" style={{ color: 'var(--ml-marino-ink)' }}>crema · 30%</span>
        </div>
        <div style={{ flex: 10, background: 'var(--ml-tomate)', display: 'flex', alignItems: 'center', paddingLeft: 14 }}>
          <span className="ml-mono" style={{ color: 'var(--ml-crema)' }}>10%</span>
        </div>
      </div>
    </div>

    {/* Do / Don't */}
    <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <DoDontCard verdict="do" title="Azul manda, tomate acentúa">
        <div style={{ background: 'var(--ml-marino)', color: 'var(--ml-crema)', padding: 24, fontFamily: 'var(--ml-display)', fontSize: 28, fontWeight: 700, lineHeight: 0.95 }}>
          del <span style={{ color: 'var(--ml-tomate)' }}>huerto</span><br/>al prod.
        </div>
      </DoDontCard>
      <DoDontCard verdict="dont" title="No uses todos los acentos a la vez">
        <div style={{ background: 'var(--ml-marino)', color: 'var(--ml-crema)', padding: 24, fontFamily: 'var(--ml-display)', fontSize: 28, fontWeight: 700, lineHeight: 0.95 }}>
          <span style={{ color: 'var(--ml-tomate)' }}>del</span>{' '}
          <span style={{ color: 'var(--ml-sol)' }}>huerto</span><br/>
          <span style={{ color: 'var(--ml-plum)' }}>al</span>{' '}
          <span style={{ color: 'var(--ml-tomate)' }}>prod.</span>
        </div>
      </DoDontCard>
    </div>
  </Section>
);

const DoDontCard = ({ verdict, title, children }) => (
  <div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 22, height: 22,
        background: verdict === 'do' ? 'var(--ml-sol)' : 'var(--ml-tomate)',
        color: 'var(--ml-marino-ink)',
        fontFamily: 'var(--ml-mono)', fontSize: 11, fontWeight: 600,
      }}>{verdict === 'do' ? '✓' : '✗'}</span>
      <span className="ml-mono" style={{ color: verdict === 'do' ? 'var(--ml-sol)' : 'var(--ml-tomate)' }}>
        {verdict === 'do' ? 'sí — ' : 'no — '}{title}
      </span>
    </div>
    <div style={{ border: '1.5px solid var(--ml-line)' }}>{children}</div>
  </div>
);

// ============================================================
// §02 · TIPOGRAFÍA
// ============================================================
const TypeSection = () => (
  <Section id="type" eyebrow="§02 · tipografía">
    <SectionHead n="02" kicker="tipografía" title="Una display geométrica, un cuerpo neutro, un mono para código."
      blurb="Space Grotesk en 700 da carácter sin caer en el serif editorial. Inter 400/500 respira en cuerpo. JetBrains Mono firma, etiqueta y habla de CLI." />

    {/* Display */}
    <div style={{ padding: '24px 0', borderBottom: '1.5px solid var(--ml-line)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 32, alignItems: 'end' }}>
        <div>
          <div className="ml-mono" style={{ color: 'var(--ml-tomate)', marginBottom: 8 }}>— display</div>
          <div style={{ fontFamily: 'var(--ml-display)', fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em' }}>Space Grotesk · 700</div>
          <div className="ml-mono" style={{ opacity: 0.6, marginTop: 6 }}>titulares · display · marca</div>
        </div>
        <div style={{ fontFamily: 'var(--ml-display)', fontWeight: 700, fontSize: 'clamp(48px, 8vw, 120px)', lineHeight: 0.85, letterSpacing: '-0.04em' }}>
          Abc<span style={{ color: 'var(--ml-tomate)' }}>012</span>
        </div>
      </div>
    </div>

    {/* Body */}
    <div style={{ padding: '24px 0', borderBottom: '1.5px solid var(--ml-line)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 32, alignItems: 'end' }}>
        <div>
          <div className="ml-mono" style={{ color: 'var(--ml-tomate)', marginBottom: 8 }}>— cuerpo</div>
          <div style={{ fontFamily: 'var(--ml-body)', fontSize: 22, fontWeight: 500 }}>Inter · 400/500</div>
          <div className="ml-mono" style={{ opacity: 0.6, marginTop: 6 }}>texto corrido · ui</div>
        </div>
        <div style={{ fontFamily: 'var(--ml-body)', fontSize: 34, lineHeight: 1.35, fontWeight: 400 }}>
          Lo que planto hoy, lo cosecho en trimestres. Producto con raíces.
        </div>
      </div>
    </div>

    {/* Mono */}
    <div style={{ padding: '24px 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 32, alignItems: 'end' }}>
        <div>
          <div className="ml-mono" style={{ color: 'var(--ml-tomate)', marginBottom: 8 }}>— mono</div>
          <div style={{ fontFamily: 'var(--ml-mono)', fontSize: 22 }}>JetBrains Mono</div>
          <div className="ml-mono" style={{ opacity: 0.6, marginTop: 6 }}>etiquetas · cli · código</div>
        </div>
        <div style={{ fontFamily: 'var(--ml-mono)', fontSize: 22 }}>
          <span style={{ opacity: 0.5 }}>$</span> mallorente <span style={{ color: 'var(--ml-tomate)' }}>--hire</span>
        </div>
      </div>
    </div>

    {/* Escala */}
    <div style={{ marginTop: 64 }}>
      <div className="ml-mono" style={{ marginBottom: 24 }}>— escala tipográfica</div>
      <div style={{ border: '1.5px solid var(--ml-line)' }}>
        {[
          ['Hero', 120, 'var(--ml-display)', 700, 'Huerto'],
          ['4xl', 80, 'var(--ml-display)', 700, 'Cosecha'],
          ['3xl', 56, 'var(--ml-display)', 700, 'Prototipo'],
          ['2xl', 40, 'var(--ml-display)', 700, 'Feature'],
          ['xl', 28, 'var(--ml-display)', 600, 'Subtítulo'],
          ['lg', 22, 'var(--ml-body)', 500, 'Intro larga'],
          ['md', 18, 'var(--ml-body)', 400, 'Cuerpo destacado'],
          ['base', 15, 'var(--ml-body)', 400, 'Cuerpo base'],
          ['sm', 13, 'var(--ml-body)', 400, 'Texto auxiliar'],
          ['xs', 11, 'var(--ml-mono)', 400, 'ETIQUETA · 0.14EM'],
        ].map(([n, sz, fam, wt, sample], i, arr) => (
          <div key={n} style={{
            display: 'grid', gridTemplateColumns: '100px 80px 140px 1fr', gap: 16,
            padding: '14px 20px', alignItems: 'baseline',
            borderBottom: i < arr.length - 1 ? '1px solid var(--ml-line)' : 'none',
          }}>
            <span className="ml-mono" style={{ color: 'var(--ml-tomate)' }}>{n}</span>
            <span className="ml-mono" style={{ opacity: 0.6 }}>{sz}px</span>
            <span className="ml-mono" style={{ opacity: 0.6 }}>{fam.includes('display') ? 'space gk' : fam.includes('mono') ? 'jet mono' : 'inter'}</span>
            <span style={{ fontFamily: fam, fontWeight: wt, fontSize: sz, lineHeight: 1.1, letterSpacing: fam.includes('display') ? '-0.03em' : fam.includes('mono') ? '0.14em' : '-0.01em', textTransform: fam.includes('mono') && n === 'xs' ? 'uppercase' : 'none' }}>{sample}</span>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

Object.assign(window, { ColorSection, TypeSection, DoDontCard, Swatch });
