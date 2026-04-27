// ============================================================
// §04 · COMPONENTES — botones, tags, callouts, cards
// ============================================================

const MLButton = ({ variant = 'primary', children, icon }) => {
  const base = {
    fontFamily: 'var(--ml-display)', fontWeight: 600, fontSize: 15,
    padding: '12px 20px',
    border: '1.5px solid',
    cursor: 'pointer',
    letterSpacing: '-0.01em',
    display: 'inline-flex', alignItems: 'center', gap: 10,
    transition: 'all var(--ml-dur) var(--ml-ease)',
  };
  const variants = {
    primary: { background: 'var(--ml-tomate)', color: 'var(--ml-crema)', borderColor: 'var(--ml-tomate)' },
    secondary: { background: 'transparent', color: 'var(--ml-crema)', borderColor: 'var(--ml-crema)' },
    ghost: { background: 'transparent', color: 'var(--ml-tomate)', borderColor: 'transparent' },
    sol: { background: 'var(--ml-sol)', color: 'var(--ml-marino-ink)', borderColor: 'var(--ml-sol)' },
  };
  return <button style={{ ...base, ...variants[variant] }}>{icon}<span>{children}</span></button>;
};

const MLCallout = ({ kind = 'plant', title, children }) => {
  const palette = {
    plant: { bg: 'var(--ml-sol)', fg: 'var(--ml-marino-ink)', icon: '●' },
    note:  { bg: 'var(--ml-marino-2)', fg: 'var(--ml-crema)', icon: '▸' },
    harvest: { bg: 'var(--ml-tomate)', fg: 'var(--ml-crema)', icon: '★' },
  }[kind];
  return (
    <div style={{ background: palette.bg, color: palette.fg, padding: 20, borderLeft: `6px solid ${palette.fg}` }}>
      <div className="ml-mono" style={{ marginBottom: 8 }}>{palette.icon} {title}</div>
      <div style={{ fontSize: 'var(--ml-fs-md)', lineHeight: 1.5 }}>{children}</div>
    </div>
  );
};

const ComponentsSection = () => (
  <Section id="components" eyebrow="§04 · componentes">
    <SectionHead n="04" kicker="componentes" title="Botones, tags, callouts. La vajilla del huerto."
      blurb="Piezas mínimas para componer cualquier plantilla. Sin sombras, sin degradados, sin radios grandes. Lo que sobra, fuera." />

    {/* Buttons */}
    <div className="ml-mono" style={{ marginBottom: 24 }}>— botones</div>
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', padding: 32, border: '1.5px solid var(--ml-line)', marginBottom: 48 }}>
      <MLButton variant="primary">Plantar idea</MLButton>
      <MLButton variant="secondary">Ver cosecha</MLButton>
      <MLButton variant="sol">Hablemos →</MLButton>
      <MLButton variant="ghost">cancelar</MLButton>
    </div>

    {/* Tags */}
    <div className="ml-mono" style={{ marginBottom: 24 }}>— tags</div>
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', padding: 32, border: '1.5px solid var(--ml-line)', marginBottom: 48 }}>
      <MLTag>Product</MLTag>
      <MLTag>OKR</MLTag>
      <MLTag>Roadmap</MLTag>
      <MLTag tone="accent">MCP</MLTag>
      <MLTag tone="accent">CLI</MLTag>
    </div>

    {/* Callouts */}
    <div className="ml-mono" style={{ marginBottom: 24 }}>— callouts</div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 48 }}>
      <MLCallout kind="plant" title="plantar"> Idea en fase temprana, aún sin validación. </MLCallout>
      <MLCallout kind="note" title="nota"> Observación de campo, contexto relevante. </MLCallout>
      <MLCallout kind="harvest" title="cosechar"> Aprendizaje listo para compartir. </MLCallout>
    </div>

    {/* Cards */}
    <div className="ml-mono" style={{ marginBottom: 24 }}>— card editorial</div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      <article style={{ background: 'var(--ml-crema)', color: 'var(--ml-marino-ink)', padding: 32, border: '1.5px solid var(--ml-line)' }}>
        <div className="ml-mono" style={{ color: 'var(--ml-tomate)', marginBottom: 14 }}>post · 014</div>
        <h3 style={{ fontFamily: 'var(--ml-display)', fontWeight: 700, fontSize: 32, lineHeight: 0.95, letterSpacing: '-0.03em', margin: 0, marginBottom: 14 }}>
          un <span style={{ color: 'var(--ml-tomate)' }}>MCP</span><br/>vale más que mil<br/>diapositivas.
        </h3>
        <p style={{ fontSize: 14, lineHeight: 1.5, margin: 0, marginBottom: 20, opacity: 0.75 }}>
          Dale al LLM contexto real. Permite probar tu idea en vivo. No hay que explicar la arquitectura.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1.5px solid var(--ml-marino-ink)', paddingTop: 12 }}>
          <span className="ml-mono" style={{ color: 'var(--ml-marino-ink)' }}>@mallorentec</span>
          <span className="ml-mono" style={{ color: 'var(--ml-tomate)' }}>5 min lectura →</span>
        </div>
      </article>

      <article style={{ background: 'var(--ml-marino-2)', color: 'var(--ml-crema)', padding: 32, border: '1.5px solid var(--ml-line)' }}>
        <div className="ml-mono" style={{ color: 'var(--ml-sol)', marginBottom: 14 }}>tip · 007</div>
        <h3 style={{ fontFamily: 'var(--ml-display)', fontWeight: 700, fontSize: 32, lineHeight: 0.95, letterSpacing: '-0.03em', margin: 0, marginBottom: 14 }}>
          buscar insights<br/>es como <span style={{ color: 'var(--ml-sol)' }}>buscar setas</span>.
        </h3>
        <p style={{ fontSize: 14, lineHeight: 1.5, margin: 0, marginBottom: 20, opacity: 0.8 }}>
          Paciencia, olfato, conocer el terreno. Y aceptar volver con la cesta vacía.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1.5px solid var(--ml-line)', paddingTop: 12 }}>
          <span className="ml-mono">@mallorente</span>
          <span className="ml-mono" style={{ color: 'var(--ml-sol)' }}>leer nota →</span>
        </div>
      </article>
    </div>
  </Section>
);

Object.assign(window, { ComponentsSection, MLButton, MLCallout });
