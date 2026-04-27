// =================================================================
// BRÓCOLI — mascota principal de Miguel Ángel (pelo rizado)
// 3 estilos visuales distintos, uno por dirección de marca
// =================================================================

// --- Estilo A: Editorial/Orgánico — trazo a mano, cálido
const BrocoliA = ({ size = 120, mood = 'happy', stroke = '#1a1a1a', fill = '#faf6ee' }) => (
  <svg viewBox="0 0 120 140" width={size} height={size * 140/120} style={{ display: 'block' }}>
    {/* tallo */}
    <path d="M48 82 Q46 116 52 126 L68 126 Q74 116 72 82 Z" fill={fill} stroke={stroke} strokeWidth="2.5" strokeLinejoin="round"/>
    <line x1="54" y1="95" x2="54" y2="118" stroke={stroke} strokeWidth="1.2" opacity="0.5"/>
    <line x1="60" y1="97" x2="60" y2="120" stroke={stroke} strokeWidth="1.2" opacity="0.5"/>
    <line x1="66" y1="95" x2="66" y2="118" stroke={stroke} strokeWidth="1.2" opacity="0.5"/>
    {/* corona de rizos — múltiples círculos solapados */}
    <g fill={fill} stroke={stroke} strokeWidth="2.5" strokeLinejoin="round">
      <circle cx="30" cy="54" r="16"/>
      <circle cx="50" cy="38" r="18"/>
      <circle cx="72" cy="36" r="17"/>
      <circle cx="92" cy="52" r="16"/>
      <circle cx="42" cy="62" r="15"/>
      <circle cx="62" cy="58" r="16"/>
      <circle cx="82" cy="62" r="15"/>
      <circle cx="58" cy="74" r="14"/>
    </g>
    {/* ojos */}
    {mood === 'happy' && (<>
      <circle cx="50" cy="68" r="2.8" fill={stroke}/>
      <circle cx="70" cy="68" r="2.8" fill={stroke}/>
      <path d="M56 78 Q60 81 64 78" stroke={stroke} strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    </>)}
    {mood === 'wink' && (<>
      <circle cx="50" cy="68" r="2.8" fill={stroke}/>
      <path d="M66 68 Q70 65 74 68" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M56 78 Q60 81 64 78" stroke={stroke} strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    </>)}
    {mood === 'think' && (<>
      <path d="M46 68 Q50 65 54 68" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M66 68 Q70 65 74 68" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M56 78 L64 78" stroke={stroke} strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    </>)}
  </svg>
);

// --- Estilo B: Geométrico/Tech — pixel-like, estricto
const BrocoliB = ({ size = 120, mood = 'happy', fg = '#00d48a', bg = '#0a0a0a' }) => (
  <svg viewBox="0 0 120 140" width={size} height={size * 140/120} style={{ display: 'block' }}>
    {/* tallo — rectángulo */}
    <rect x="48" y="82" width="24" height="44" fill={fg}/>
    {/* corona — grid de cuadrados, vibe pixel */}
    <g fill={fg}>
      <rect x="20" y="44" width="16" height="16"/>
      <rect x="36" y="28" width="16" height="16"/>
      <rect x="52" y="20" width="16" height="16"/>
      <rect x="68" y="28" width="16" height="16"/>
      <rect x="84" y="44" width="16" height="16"/>
      <rect x="28" y="60" width="16" height="16"/>
      <rect x="44" y="44" width="16" height="16"/>
      <rect x="60" y="36" width="16" height="16"/>
      <rect x="76" y="60" width="16" height="16"/>
      <rect x="36" y="68" width="48" height="16"/>
    </g>
    {/* ojos */}
    {mood === 'happy' && (<>
      <rect x="48" y="54" width="4" height="4" fill={bg}/>
      <rect x="68" y="54" width="4" height="4" fill={bg}/>
      <rect x="54" y="68" width="12" height="2" fill={bg}/>
    </>)}
    {mood === 'wink' && (<>
      <rect x="48" y="54" width="4" height="4" fill={bg}/>
      <rect x="66" y="56" width="8" height="2" fill={bg}/>
      <rect x="54" y="68" width="12" height="2" fill={bg}/>
    </>)}
    {mood === 'think' && (<>
      <rect x="46" y="56" width="8" height="2" fill={bg}/>
      <rect x="66" y="56" width="8" height="2" fill={bg}/>
      <rect x="58" y="68" width="6" height="2" fill={bg}/>
    </>)}
  </svg>
);

// --- Estilo C: Risograph/Huerto — brócoli rediseñado, más aire
// Silueta de nube con 5 lóbulos grandes (no florecitas apelotonadas).
// La cara vive en un "panel" limpio dentro de la corona.
const BrocoliC = ({ size = 120, mood = 'happy', primary = '#e85a4f', secondary = '#2d5f3f', paper = '#f4ecd8' }) => {
  const uid = React.useId ? React.useId() : `b${Math.random().toString(36).slice(2,8)}`;
  // silueta de corona en forma de nube con 5 lóbulos — cada uno amplio, sin solaparse
  const crownPath = "M15 70 Q14 55 24 48 Q26 32 44 30 Q52 18 64 22 Q78 18 88 30 Q104 32 106 50 Q116 58 112 72 Q110 86 96 88 L24 88 Q10 86 15 70 Z";
  // tallo más finito y elegante
  const stalkPath = "M50 86 Q49 110 53 122 Q55 126 60 126 Q65 126 67 122 Q71 110 70 86 Z";
  return (
    <svg viewBox="0 0 120 140" width={size} height={size * 140/120} style={{ display: 'block' }}>
      {/* sombra offset riso — solo silueta, sin detalles */}
      <g transform="translate(2.5,3)" opacity="0.9">
        <path d={stalkPath} fill={primary}/>
        <path d={crownPath} fill={primary}/>
      </g>
      {/* tallo */}
      <path d={stalkPath} fill={secondary}/>
      {/* corona */}
      <path d={crownPath} fill={secondary}/>
      {/* dos arcos sutiles que sugieren textura — NO florecillas */}
      <path d="M30 58 Q40 52 52 58" stroke={paper} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.35"/>
      <path d="M70 58 Q82 52 92 60" stroke={paper} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.35"/>
      {/* cara — centrada, estilo cute */}
      {mood === 'happy' && (<g>
        <circle cx="50" cy="66" r="3.2" fill={paper}/>
        <circle cx="70" cy="66" r="3.2" fill={paper}/>
        {/* brillito cute en los ojos */}
        <circle cx="51" cy="64.8" r="0.9" fill={secondary}/>
        <circle cx="71" cy="64.8" r="0.9" fill={secondary}/>
        {/* sonrisa suave */}
        <path d="M55 75 Q60 78.5 65 75" stroke={paper} strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        {/* mejillas rosadas sutiles */}
        <circle cx="44" cy="72" r="2.6" fill={primary} opacity="0.35"/>
        <circle cx="76" cy="72" r="2.6" fill={primary} opacity="0.35"/>
      </g>)}
      {mood === 'wink' && (<g>
        <circle cx="50" cy="66" r="3.2" fill={paper}/>
        <circle cx="51" cy="64.8" r="0.9" fill={secondary}/>
        {/* cejita pequeñita sobre el ojo guiñado */}
        <path d="M67 64 Q70 62.2 73 64" stroke={paper} strokeWidth="1.6" fill="none" strokeLinecap="round"/>
        <path d="M55 75 Q60 78.5 65 75" stroke={paper} strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        <circle cx="44" cy="72" r="2.6" fill={primary} opacity="0.35"/>
        <circle cx="76" cy="72" r="2.6" fill={primary} opacity="0.35"/>
      </g>)}
      {mood === 'think' && (<g>
        {/* cejitas pequeñitas y asimétricas */}
        <path d="M47 62 Q50 60.8 53 62" stroke={paper} strokeWidth="1.4" fill="none" strokeLinecap="round"/>
        <path d="M67 62 Q70 60.8 73 62" stroke={paper} strokeWidth="1.4" fill="none" strokeLinecap="round"/>
        <circle cx="50" cy="67" r="2.8" fill={paper}/>
        <circle cx="70" cy="67" r="2.8" fill={paper}/>
        <circle cx="51" cy="65.9" r="0.8" fill={secondary}/>
        <circle cx="71" cy="65.9" r="0.8" fill={secondary}/>
        {/* boquita pequeña */}
        <circle cx="60" cy="77" r="1.3" fill={paper}/>
      </g>)}
    </svg>
  );
};

Object.assign(window, { BrocoliA, BrocoliB, BrocoliC });
