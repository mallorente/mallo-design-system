// ============================================================
// Mallorentec Design System — módulos de sección
// Cada Section devuelve una porción de la página.
// Orden: Cover, Color, Type, Mascot, Icon, Components, Templates, CLI, Voice
// ============================================================

const Section = ({ id, eyebrow, children, bg, fg, style }) => (
  <section id={id} style={{
    background: bg || 'transparent',
    color: fg || 'inherit',
    padding: '96px 64px',
    borderTop: '1.5px solid var(--ml-line)',
    position: 'relative',
    ...style,
  }}>
    {eyebrow && <div className="ml-mono" style={{ opacity: 0.7, marginBottom: 32 }}>{eyebrow}</div>}
    <div style={{ maxWidth: 'var(--ml-container)', margin: '0 auto' }}>
      {children}
    </div>
  </section>
);

const SectionHead = ({ n, title, kicker, blurb }) => (
  <div style={{ marginBottom: 64, display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'end' }}>
    <div>
      <div className="ml-mono" style={{ color: 'var(--ml-tomate)', marginBottom: 12 }}>§{n} · {kicker}</div>
      <h2 className="ml-display" style={{ fontSize: 'var(--ml-fs-3xl)', margin: 0 }}>{title}</h2>
    </div>
    {blurb && <p style={{ fontSize: 'var(--ml-fs-md)', lineHeight: 1.5, color: 'var(--ml-fg-dim)', margin: 0, maxWidth: 520 }}>{blurb}</p>}
  </div>
);

// ═══════════════════════════════════════════════════════════════
// COVER
// ═══════════════════════════════════════════════════════════════
const CoverSection = () => (
  <section style={{
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    padding: '48px 64px',
    position: 'relative',
    overflow: 'hidden',
  }}>
    {/* Top bar */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className="ml-mono">mallorentec · design system</div>
      <div className="ml-mono" style={{ color: 'var(--ml-tomate)' }}>v1.0 · abril 2026</div>
    </div>

    {/* Hero */}
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'center', marginTop: 48 }}>
      <div>
        <div className="ml-eyebrow" style={{ marginBottom: 32, color: 'var(--ml-tomate)' }}>— libro de marca · manual de uso</div>
        <h1 style={{
          fontFamily: 'var(--ml-display)',
          fontWeight: 700,
          fontSize: 'clamp(68px, 9vw, 148px)',
          lineHeight: 0.82,
          letterSpacing: '-0.045em',
          margin: 0,
        }}>
          Del<br/><span style={{ color: 'var(--ml-tomate)' }}>huerto</span><br/>al prod.
        </h1>
        <p style={{ marginTop: 32, maxWidth: 480, fontSize: 'var(--ml-fs-md)', lineHeight: 1.5, color: 'var(--ml-fg-dim)' }}>
          Sistema visual de Miguel Ángel Llorente. Color, tipografía, mascota y piezas listas para publicar en LinkedIn, X, slides, newsletter y terminal.
        </p>
        <div style={{ marginTop: 40, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <MLTag>Product Management</MLTag>
          <MLTag>IA · MCP</MLTag>
          <MLTag>CLI</MLTag>
          <MLTag tone="accent">Riso · botánico-pop</MLTag>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        {/* círculo sol detrás */}
        <div style={{ position: 'absolute', width: 340, height: 340, borderRadius: '50%', background: 'var(--ml-sol)', opacity: 0.18 }}/>
        <div style={{ position: 'relative' }}>
          <BrocoliC size={320} mood="happy" primary="var(--ml-tomate)" secondary="var(--ml-crema)" paper="var(--ml-bg)"/>
        </div>
      </div>
    </div>

    {/* Footer / index */}
    <div style={{ marginTop: 48, borderTop: '1.5px solid var(--ml-line)', paddingTop: 24, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
      {[
        ['01', 'Color', '#color'],
        ['02', 'Tipografía', '#type'],
        ['03', 'Brócoli', '#mascot'],
        ['04', 'Componentes', '#components'],
        ['05', 'Plantillas', '#templates'],
        ['06', 'Kit CLI', '#cli'],
        ['07', 'Voz', '#voice'],
        ['08', 'Uso', '#usage'],
      ].map(([n, label, href]) => (
        <a key={n} href={href} style={{
          color: 'var(--ml-crema)', textDecoration: 'none',
          padding: '12px 0',
          borderBottom: '1px solid var(--ml-line)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontFamily: 'var(--ml-display)', fontSize: 'var(--ml-fs-md)', fontWeight: 500,
          transition: 'color var(--ml-dur) var(--ml-ease)',
        }}
        onMouseOver={e => e.currentTarget.style.color = 'var(--ml-tomate)'}
        onMouseOut={e => e.currentTarget.style.color = 'var(--ml-crema)'}>
          <span>{label}</span>
          <span className="ml-mono" style={{ opacity: 0.6 }}>§{n}</span>
        </a>
      ))}
    </div>
  </section>
);

// Reusable tag pill
const MLTag = ({ children, tone = 'default' }) => (
  <span style={{
    fontFamily: 'var(--ml-mono)',
    fontSize: 10,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    padding: '8px 12px',
    border: `1.5px solid ${tone === 'accent' ? 'var(--ml-tomate)' : 'var(--ml-line)'}`,
    color: tone === 'accent' ? 'var(--ml-tomate)' : 'var(--ml-crema)',
    background: tone === 'accent-solid' ? 'var(--ml-tomate)' : 'transparent',
    display: 'inline-block',
  }}>{children}</span>
);

Object.assign(window, { Section, SectionHead, CoverSection, MLTag });
