// ============================================================
// §06 · KIT CLI — mockups de terminal
// §07 · VOZ — copy, tagline, do/don't
// §08 · USO — licencia, contacto
// ============================================================

const TerminalMock = ({ children, bar = 'mallorente.dev' }) => (
  <div style={{ background: 'var(--ml-marino-ink)', border: '1.5px solid var(--ml-line)', fontFamily: 'var(--ml-mono)' }}>
    <div style={{ display: 'flex', alignItems: 'center', padding: '10px 14px', borderBottom: '1px solid var(--ml-line)', color: 'var(--ml-fg-dim)', fontSize: 11 }}>
      <div style={{ display: 'flex', gap: 6, marginRight: 14 }}>
        <span style={{ width: 10, height: 10, background: 'var(--ml-tomate)', display: 'inline-block', borderRadius: '50%' }}/>
        <span style={{ width: 10, height: 10, background: 'var(--ml-sol)', display: 'inline-block', borderRadius: '50%' }}/>
        <span style={{ width: 10, height: 10, background: 'var(--ml-marino-2)', display: 'inline-block', borderRadius: '50%' }}/>
      </div>
      <span>{bar}</span>
    </div>
    <div style={{ padding: '20px 22px', color: 'var(--ml-crema)', fontSize: 13, lineHeight: 1.8 }}>
      {children}
    </div>
  </div>
);

const CLISection = () => (
  <Section id="cli" eyebrow="§06 · kit cli">
    <SectionHead n="06" kicker="kit cli" title="La marca también vive en terminal."
      blurb="npx mallorente es un CV-CLI. mcp serve es el servidor MCP para LLMs. skills.md es contexto portable para agentes. Todo con los mismos tokens." />

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      {/* CV CLI */}
      <div>
        <div className="ml-mono" style={{ marginBottom: 14, color: 'var(--ml-tomate)' }}>— npx mallorente</div>
        <TerminalMock>
          <div><span style={{ color: 'var(--ml-sol)' }}>~</span> <span style={{ opacity: 0.6 }}>$</span> npx mallorente</div>
          <div style={{ color: 'var(--ml-tomate)', marginTop: 6 }}>🥦 bienvenido al huerto</div>
          <div style={{ marginTop: 8, opacity: 0.6 }}>comandos:</div>
          <div>  <span style={{ color: 'var(--ml-sol)' }}>cv</span>        ver mi currículum</div>
          <div>  <span style={{ color: 'var(--ml-sol)' }}>stack</span>     tecnologías que uso</div>
          <div>  <span style={{ color: 'var(--ml-sol)' }}>ideas</span>     posts y notas</div>
          <div>  <span style={{ color: 'var(--ml-sol)' }}>hire</span>      hablemos</div>
          <div style={{ marginTop: 10 }}><span style={{ color: 'var(--ml-sol)' }}>~</span> $ <span style={{ background: 'var(--ml-sol)', color: 'var(--ml-marino-ink)', padding: '0 3px' }}>_</span></div>
        </TerminalMock>
      </div>

      {/* MCP */}
      <div>
        <div className="ml-mono" style={{ marginBottom: 14, color: 'var(--ml-tomate)' }}>— mcp serve</div>
        <TerminalMock bar="mallorente · mcp">
          <div><span style={{ color: 'var(--ml-sol)' }}>~</span> <span style={{ opacity: 0.6 }}>$</span> mallorente mcp serve</div>
          <div style={{ marginTop: 6, opacity: 0.6 }}>booting server...</div>
          <div style={{ color: 'var(--ml-tomate)' }}>✓ skills.md cargado</div>
          <div style={{ color: 'var(--ml-tomate)' }}>✓ 14 herramientas expuestas</div>
          <div style={{ marginTop: 6 }}>listening on <span style={{ color: 'var(--ml-sol)' }}>stdio</span></div>
          <div style={{ marginTop: 10, opacity: 0.6 }}>clients:</div>
          <div>  claude desktop · cursor · zed</div>
        </TerminalMock>
      </div>
    </div>

    {/* Commands reference */}
    <div style={{ marginTop: 48 }}>
      <div className="ml-mono" style={{ marginBottom: 14 }}>— referencia de comandos</div>
      <div style={{ border: '1.5px solid var(--ml-line)' }}>
        {[
          ['cv', 'imprime tu currículum en ascii', 'npx mallorente cv'],
          ['stack', 'lista tu stack actual', 'npx mallorente stack'],
          ['ideas', 'últimas 10 notas publicadas', 'npx mallorente ideas'],
          ['hire', 'cómo contactarte + calendly', 'npx mallorente hire'],
          ['mcp serve', 'levanta servidor MCP', 'mallorente mcp serve'],
          ['skills', 'exporta skills.md', 'mallorente skills > skills.md'],
        ].map(([cmd, desc, ex], i, a) => (
          <div key={cmd} style={{
            display: 'grid', gridTemplateColumns: '180px 1fr 280px', gap: 16,
            padding: '14px 20px', alignItems: 'center',
            borderBottom: i < a.length - 1 ? '1px solid var(--ml-line)' : 'none',
          }}>
            <span style={{ fontFamily: 'var(--ml-mono)', color: 'var(--ml-tomate)' }}>{cmd}</span>
            <span style={{ opacity: 0.85 }}>{desc}</span>
            <span style={{ fontFamily: 'var(--ml-mono)', fontSize: 11, opacity: 0.55 }}>{ex}</span>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

// ============================================================
// §07 · VOZ
// ============================================================
const VoiceSection = () => (
  <Section id="voice" eyebrow="§07 · voz">
    <SectionHead n="07" kicker="voz" title="Cómo habla Mallorentec."
      blurb="Didáctica pero opinada. Técnica sin ser fría. Con raíces. Español principalmente, inglés cuando toca. Nada de gurú motivacional." />

    {/* Tagline */}
    <div style={{ background: 'var(--ml-tomate)', color: 'var(--ml-crema)', padding: '48px 40px', marginBottom: 48, position: 'relative', overflow: 'hidden' }}>
      <div className="ml-mono" style={{ marginBottom: 16 }}>— tagline</div>
      <div style={{ fontFamily: 'var(--ml-display)', fontWeight: 700, fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 0.92, letterSpacing: '-0.04em' }}>
        Lo que planto hoy,<br/>lo cosecho en trimestres.
      </div>
      <div style={{ position: 'absolute', right: 40, top: 40 }}>
        <BrocoliC size={110} mood="wink" primary="var(--ml-crema)" secondary="var(--ml-marino-ink)" paper="var(--ml-tomate)"/>
      </div>
    </div>

    {/* Atributos vs antónimos */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 48 }}>
      <div>
        <div className="ml-mono" style={{ color: 'var(--ml-sol)', marginBottom: 16 }}>— sí es</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {['Didáctica', 'Opinada', 'Técnica', 'Con raíces', 'Bilingüe', 'Concreta', 'Honesta'].map(a => (
            <div key={a} style={{ padding: '14px 18px', background: 'var(--ml-marino-2)', fontFamily: 'var(--ml-display)', fontWeight: 600, fontSize: 18, letterSpacing: '-0.02em' }}>
              {a}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="ml-mono" style={{ color: 'var(--ml-tomate)', marginBottom: 16 }}>— NO es</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {['Gurú motivacional', 'Corporativo frío', 'Infantil', 'Clickbait', 'Vacía', 'Grandilocuente', 'Genérica'].map(a => (
            <div key={a} style={{ padding: '14px 18px', border: '1.5px solid var(--ml-tomate)', color: 'var(--ml-tomate)', fontFamily: 'var(--ml-display)', fontWeight: 600, fontSize: 18, letterSpacing: '-0.02em', textDecoration: 'line-through' }}>
              {a}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Frases ejemplo */}
    <div className="ml-mono" style={{ marginBottom: 14 }}>— frases patrón</div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      {[
        'Lo que planto hoy, lo cosecho en trimestres.',
        'Un MCP vale más que mil diapositivas.',
        'Buscar insights es como buscar setas.',
        'Producto con raíces.',
        'Del huerto al prod.',
        'Del PRD a la cosecha.',
      ].map((f, i) => (
        <div key={i} style={{ padding: 20, border: '1.5px solid var(--ml-line)', fontFamily: 'var(--ml-display)', fontWeight: 600, fontSize: 20, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
          "{f}"
        </div>
      ))}
    </div>
  </Section>
);

// ============================================================
// §08 · USO
// ============================================================
const UsageSection = () => (
  <Section id="usage" eyebrow="§08 · uso">
    <SectionHead n="08" kicker="uso" title="Cómo aplicarlo."
      blurb="Checklist rápida antes de publicar. Si una pieza cumple los 6 puntos, ya lleva la voz de Mallorentec." />

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, marginBottom: 64 }}>
      {[
        ['01', 'Fondo marino o crema', 'No inventes fondos nuevos.'],
        ['02', 'Tomate ≤ 10% del área', 'Es acento, no protagonista.'],
        ['03', 'Display = Space Grotesk 700', 'Sin serifs editoriales.'],
        ['04', 'Etiquetas en mono UPPERCASE', 'Con letter-spacing 0.14em.'],
        ['05', 'Brócoli visible mínimo 48px', 'Si no se ve la cara, quítalo.'],
        ['06', 'Una frase, una idea', 'Sin filler ni "impactful insights".'],
      ].map(([n, title, note]) => (
        <div key={n} style={{ padding: '28px 24px', background: 'var(--ml-marino-2)', display: 'flex', gap: 20 }}>
          <span style={{ fontFamily: 'var(--ml-display)', fontWeight: 700, fontSize: 40, color: 'var(--ml-tomate)', lineHeight: 1 }}>{n}</span>
          <div>
            <div style={{ fontFamily: 'var(--ml-display)', fontWeight: 600, fontSize: 20, letterSpacing: '-0.02em', marginBottom: 4 }}>{title}</div>
            <div style={{ fontSize: 14, color: 'var(--ml-fg-dim)' }}>{note}</div>
          </div>
        </div>
      ))}
    </div>

    {/* Contact footer */}
    <div style={{ background: 'var(--ml-crema)', color: 'var(--ml-marino-ink)', padding: 48, display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48, alignItems: 'center' }}>
      <div>
        <div className="ml-mono" style={{ color: 'var(--ml-tomate)', marginBottom: 14 }}>— fin del libro</div>
        <div style={{ fontFamily: 'var(--ml-display)', fontWeight: 700, fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 0.9, letterSpacing: '-0.04em' }}>
          Plantado por<br/><span style={{ color: 'var(--ml-tomate)' }}>Miguel Ángel Llorente</span>.
        </div>
        <div style={{ marginTop: 20, fontFamily: 'var(--ml-mono)', fontSize: 12, lineHeight: 1.8 }}>
          in · mallorente<br/>
          x · mallorentec<br/>
          mallorente.dev
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <BrocoliC size={180} mood="wink" primary="var(--ml-tomate)" secondary="var(--ml-marino-ink)" paper="var(--ml-crema)"/>
      </div>
    </div>
  </Section>
);

Object.assign(window, { CLISection, VoiceSection, UsageSection });
