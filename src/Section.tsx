import type { ReactNode, CSSProperties } from 'react'

export interface SectionProps {
  id?: string
  eyebrow?: string
  children: ReactNode
  bg?: string
  fg?: string
  style?: CSSProperties
}

export function Section({ id, eyebrow, children, bg, fg, style }: SectionProps) {
  return (
    <section
      id={id}
      style={{
        background: bg ?? 'transparent',
        color: fg ?? 'inherit',
        padding: '96px 64px',
        borderTop: '1.5px solid var(--ml-line)',
        position: 'relative',
        ...style,
      }}
    >
      {eyebrow && (
        <div style={{
          fontFamily: 'var(--ml-mono)',
          fontSize: 'var(--ml-fs-xs)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          opacity: 0.7,
          marginBottom: 32,
        }}>
          {eyebrow}
        </div>
      )}
      <div style={{ maxWidth: 'var(--ml-container)', margin: '0 auto' }}>
        {children}
      </div>
    </section>
  )
}

export interface SectionHeadProps {
  n: string
  title: string
  kicker: string
  blurb?: string
}

export function SectionHead({ n, title, kicker, blurb }: SectionHeadProps) {
  return (
    <div style={{ marginBottom: 64, display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'end' }}>
      <div>
        <div style={{
          fontFamily: 'var(--ml-mono)',
          fontSize: 'var(--ml-fs-xs)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--ml-tomate)',
          marginBottom: 12,
        }}>
          §{n} · {kicker}
        </div>
        <h2 style={{
          fontFamily: 'var(--ml-display)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 0.92,
          fontSize: 'var(--ml-fs-3xl)',
          margin: 0,
        }}>
          {title}
        </h2>
      </div>
      {blurb && (
        <p style={{ fontSize: 'var(--ml-fs-md)', lineHeight: 1.5, color: 'var(--ml-fg-dim)', margin: 0, maxWidth: 520 }}>
          {blurb}
        </p>
      )}
    </div>
  )
}
