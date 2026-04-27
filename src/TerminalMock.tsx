import type { ReactNode } from 'react'

export interface TerminalMockProps {
  children: ReactNode
  bar?: string
}

export function TerminalMock({ children, bar = 'mallorente.dev' }: TerminalMockProps) {
  return (
    <div style={{ background: 'var(--ml-marino-ink)', border: '1.5px solid var(--ml-line)', fontFamily: 'var(--ml-mono)' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px 14px',
        borderBottom: '1px solid var(--ml-line)',
        color: 'var(--ml-fg-dim)',
        fontSize: 11,
      }}>
        <div style={{ display: 'flex', gap: 6, marginRight: 14 }}>
          <span style={{ width: 10, height: 10, background: 'var(--ml-tomate)', display: 'inline-block', borderRadius: '50%' }} />
          <span style={{ width: 10, height: 10, background: 'var(--ml-sol)', display: 'inline-block', borderRadius: '50%' }} />
          <span style={{ width: 10, height: 10, background: 'var(--ml-marino-2)', display: 'inline-block', borderRadius: '50%' }} />
        </div>
        <span>{bar}</span>
      </div>
      <div style={{ padding: '20px 22px', color: 'var(--ml-crema)', fontSize: 13, lineHeight: 1.8 }}>
        {children}
      </div>
    </div>
  )
}
