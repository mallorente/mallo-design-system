import type { ReactNode } from 'react'

export interface TagProps {
  children: ReactNode
  tone?: 'default' | 'accent' | 'accent-solid'
}

export function MLTag({ children, tone = 'default' }: TagProps) {
  return (
    <span style={{
      fontFamily: 'var(--ml-mono)',
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      padding: '8px 12px',
      border: `1.5px solid ${tone === 'accent' || tone === 'accent-solid' ? 'var(--ml-tomate)' : 'var(--ml-line)'}`,
      color: tone === 'accent' ? 'var(--ml-tomate)' : tone === 'accent-solid' ? 'var(--ml-crema)' : 'var(--ml-crema)',
      background: tone === 'accent-solid' ? 'var(--ml-tomate)' : 'transparent',
      display: 'inline-block',
    }}>
      {children}
    </span>
  )
}
