import type { ReactNode } from 'react'

export interface CalloutProps {
  kind?: 'plant' | 'note' | 'harvest'
  title: string
  children: ReactNode
}

const palette = {
  plant:   { bg: 'var(--ml-sol)',      fg: 'var(--ml-marino-ink)', icon: '●' },
  note:    { bg: 'var(--ml-marino-2)', fg: 'var(--ml-crema)',      icon: '▸' },
  harvest: { bg: 'var(--ml-tomate)',   fg: 'var(--ml-crema)',      icon: '★' },
}

export function MLCallout({ kind = 'plant', title, children }: CalloutProps) {
  const p = palette[kind]
  return (
    <div style={{ background: p.bg, color: p.fg, padding: 20, borderLeft: `6px solid ${p.fg}` }}>
      <div style={{
        fontFamily: 'var(--ml-mono)',
        fontSize: 'var(--ml-fs-xs)',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        marginBottom: 8,
      }}>
        {p.icon} {title}
      </div>
      <div style={{ fontSize: 'var(--ml-fs-md)', lineHeight: 1.5 }}>{children}</div>
    </div>
  )
}
