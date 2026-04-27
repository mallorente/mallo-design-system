// ============================================================
// §05 · PLANTILLAS — piezas listas para publicar
// ============================================================

const TemplateFrame = ({ w, h, label, note, children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
      <span className="ml-mono" style={{ color: 'var(--ml-tomate)' }}>{label}</span>
      <span className="ml-mono" style={{ opacity: 0.55 }}>{w}×{h}</span>
    </div>
    <div style={{ width: w, height: h, overflow: 'hidden', border: '1.5px solid var(--ml-line)', position: 'relative' }}>{children}</div>
    {note && <span className="ml-mono" style={{ opacity: 0.55, textTransform: 'none', letterSpacing: 0 }}>{note}</span>}
  </div>
);

// ---------- Post cuadrado 1:1 ----------
const TplSquarePost = () => (
  <div style={{ width: '100%', height: '100%', background: 'var(--ml-marino)', color: 'var(--ml-crema)', padding: 28, position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: 0, right: 0, width: 150, height: 150, background: 'var(--ml-tomate)' }}/>
    <div style={{ position: 'absolute', top: 22, right: 22, fontFamily: 'var(--ml-display)', fontWeight: 700, fontSize: 18, lineHeight: 0.9, textAlign: 'right', color: 'var(--ml-crema)' }}>
      del<br/>huerto<br/><span style={{ color: 'var(--ml-sol)' }}>07</span>
    </div>
    <div className="ml-mono" style={{ position: 'relative', zIndex: 2 }}>mallorentec · nota 07</div>
    <div style={{ fontFamily: 'var(--ml-display)', fontWeight: 700, fontSize: 44, lineHeight: 0.9, letterSpacing: '-0.03em', marginTop: 24, position: 'relative', zIndex: 2 }}>
      buscar <span style={{ color: 'var(--ml-sol)' }}>insights</span><br/>es como<br/>buscar <span style={{ color: 'var(--ml-tomate)' }}>setas</span>.
    </div>
    <div style={{ marginTop: 16, fontSize: 13, lineHeight: 1.5, maxWidth: 280, opacity: 0.85, position: 'relative', zIndex: 2 }}>
      Paciencia, olfato, conocer el terreno. Y aceptar volver con la cesta vacía.
    </div>
    <div style={{ position: 'absolute', bottom: 60, right: 16 }}>
      <BrocoliC size={110} mood="happy" primary="var(--ml-tomate)" secondary="var(--ml-crema)" paper="var(--ml-marino)"/>
    </div>
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 28px', borderTop: '1.5px solid var(--ml-line)', display: 'flex', justifyContent: 'space-between' }}>
      <span className="ml-mono">in · mallorente</span>
      <span className="ml-mono" style={{ color: 'var(--ml-tomate)' }}>x · mallorentec</span>
    </div>
  </div>
);

// ---------- Quote post ----------
const TplQuote = () => (
  <div style={{ width: '100%', height: '100%', background: 'var(--ml-crema)', color: 'var(--ml-marino-ink)', padding: 32, position: 'relative', display: 'flex', flexDirection: 'column' }}>
    <div className="ml-mono" style={{ color: 'var(--ml-tomate)' }}>— frase del huerto</div>
    <div style={{ fontFamily: 'var(--ml-display)', fontWeight: 700, fontSize: 38, lineHeight: 1, letterSpacing: '-0.03em', marginTop: 'auto', marginBottom: 'auto' }}>
      "Lo que <span style={{ color: 'var(--ml-tomate)' }}>planto</span> hoy,<br/>lo <span style={{ color: 'var(--ml-tomate)' }}>cosecho</span> en trimestres."
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '2px solid var(--ml-marino-ink)', paddingTop: 12 }}>
      <div>
        <span className="ml-mono">— miguel ángel llorente</span>
      </div>
      <BrocoliC size={64} mood="wink" primary="var(--ml-tomate)" secondary="var(--ml-marino-ink)" paper="var(--ml-crema)"/>
    </div>
  </div>
);

// ---------- Banner LinkedIn ----------
const TplBanner = () => (
  <div style={{ width: '100%', height: '100%', background: 'var(--ml-marino)', color: 'var(--ml-crema)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
    <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '32%', background: 'var(--ml-tomate)' }}/>
    <div style={{ padding: '0 36px', position: 'relative', zIndex: 2 }}>
      <div className="ml-mono" style={{ marginBottom: 12 }}>miguel ángel llorente · PM</div>
      <div style={{ fontFamily: 'var(--ml-display)', fontWeight: 700, fontSize: 58, lineHeight: 0.85, letterSpacing: '-0.04em' }}>
        Del <span style={{ color: 'var(--ml-tomate)' }}>huerto</span><br/>al prod.
      </div>
      <div style={{ marginTop: 12, fontSize: 14, opacity: 0.85, maxWidth: 440 }}>
        Producto con raíces. IA, MCP, CLI y notas de campo.
      </div>
    </div>
    <div style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', zIndex: 3 }}>
      <BrocoliC size={160} mood="happy" primary="var(--ml-crema)" secondary="var(--ml-marino)" paper="var(--ml-tomate)"/>
    </div>
    <div style={{ position: 'absolute', bottom: 12, left: 36 }} className="ml-mono">
      in · mallorente  ·  x · mallorentec  ·  mallorente.dev
    </div>
  </div>
);

// ---------- Avatar ----------
const TplAvatar = ({ bg = 'var(--ml-marino)' }) => (
  <div style={{ width: '100%', height: '100%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
    <BrocoliC size={160} mood="happy" primary="var(--ml-tomate)" secondary="var(--ml-crema)" paper={bg}/>
  </div>
);

// ---------- Infografía portada (reboot del layout original) ----------
const TplInfoCover = () => (
  <div style={{ width: '100%', height: '100%', background: 'var(--ml-marino)', color: 'var(--ml-crema)', padding: 28, display: 'flex', flexDirection: 'column' }}>
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <div style={{ width: 70, height: 70, background: 'var(--ml-crema)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <BrocoliC size={54} mood="happy" primary="var(--ml-tomate)" secondary="var(--ml-marino-ink)" paper="var(--ml-crema)"/>
      </div>
      <div>
        <div className="ml-mono" style={{ color: 'var(--ml-tomate)' }}>mallorentec · serie</div>
        <div style={{ fontFamily: 'var(--ml-display)', fontWeight: 700, fontSize: 18, letterSpacing: '-0.02em' }}>Del huerto al prod</div>
      </div>
    </div>
    <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
      <div>
        <div className="ml-mono" style={{ color: 'var(--ml-sol)' }}>— cap. 01</div>
        <div style={{ fontFamily: 'var(--ml-display)', fontWeight: 700, fontSize: 52, lineHeight: 0.9, letterSpacing: '-0.04em', marginTop: 10 }}>
          Tipos de<br/><span style={{ color: 'var(--ml-tomate)' }}>product<br/>roadmaps</span>.
        </div>
      </div>
    </div>
    <div style={{ borderTop: '1.5px solid var(--ml-line)', paddingTop: 10 }} className="ml-mono">
      <span>5 enfoques</span>  ·  <span style={{ color: 'var(--ml-tomate)' }}>scroll ↓</span>
    </div>
  </div>
);

// ---------- Firma email ----------
const TplSignature = () => (
  <div style={{ width: '100%', height: '100%', background: 'var(--ml-crema)', color: 'var(--ml-marino-ink)', padding: 20, display: 'flex', gap: 16, alignItems: 'center' }}>
    <BrocoliC size={72} mood="happy" primary="var(--ml-tomate)" secondary="var(--ml-marino-ink)" paper="var(--ml-crema)"/>
    <div style={{ borderLeft: '2px solid var(--ml-marino-ink)', paddingLeft: 16, flex: 1 }}>
      <div style={{ fontFamily: 'var(--ml-display)', fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em' }}>Miguel Ángel Llorente</div>
      <div className="ml-mono" style={{ marginTop: 4, color: 'var(--ml-tomate)' }}>product manager · ia · mcp</div>
      <div style={{ marginTop: 10, fontFamily: 'var(--ml-mono)', fontSize: 10, lineHeight: 1.7 }}>
        <div>in/mallorente · x/@mallorentec</div>
        <div>mallorente.dev</div>
      </div>
    </div>
  </div>
);

const TemplatesSection = () => (
  <Section id="templates" eyebrow="§05 · plantillas">
    <SectionHead n="05" kicker="plantillas" title="Piezas listas para publicar."
      blurb="Seis plantillas nucleares. Cada una hereda los tokens, usa el brócoli y mantiene la proporción 60/30/10." />

    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'flex-start' }}>
      <TemplateFrame w={360} h={360} label="Post · cuadrado" note="LinkedIn · Instagram"><TplSquarePost/></TemplateFrame>
      <TemplateFrame w={360} h={360} label="Cita" note="frases recurrentes del huerto"><TplQuote/></TemplateFrame>
      <TemplateFrame w={640} h={160} label="Banner LinkedIn" note="1584×396 export real"><TplBanner/></TemplateFrame>
      <TemplateFrame w={200} h={200} label="Avatar" note="perfil redes"><TplAvatar/></TemplateFrame>
      <TemplateFrame w={200} h={200} label="Avatar · claro" note="alterna fondos"><TplAvatar bg="var(--ml-crema)"/></TemplateFrame>
      <TemplateFrame w={300} h={420} label="Infografía · portada" note="serie vertical"><TplInfoCover/></TemplateFrame>
      <TemplateFrame w={440} h={140} label="Firma email" note="texto + brócoli"><TplSignature/></TemplateFrame>
    </div>
  </Section>
);

Object.assign(window, { TemplatesSection });
