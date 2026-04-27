import type { ReactNode, ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'sol'
  icon?: ReactNode
  children: ReactNode
}

const base: React.CSSProperties = {
  fontFamily: 'var(--ml-display)',
  fontWeight: 600,
  fontSize: 15,
  padding: '12px 20px',
  border: '1.5px solid',
  cursor: 'pointer',
  letterSpacing: '-0.01em',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  transition: 'all var(--ml-dur) var(--ml-ease)',
  borderRadius: 0,
}

const variants: Record<NonNullable<ButtonProps['variant']>, React.CSSProperties> = {
  primary: { background: 'var(--ml-tomate)', color: 'var(--ml-crema)', borderColor: 'var(--ml-tomate)' },
  secondary: { background: 'transparent', color: 'var(--ml-crema)', borderColor: 'var(--ml-crema)' },
  ghost: { background: 'transparent', color: 'var(--ml-tomate)', borderColor: 'transparent' },
  sol: { background: 'var(--ml-sol)', color: 'var(--ml-marino-ink)', borderColor: 'var(--ml-sol)' },
}

export function MLButton({ variant = 'primary', icon, children, style, ...rest }: ButtonProps) {
  return (
    <button style={{ ...base, ...variants[variant], ...style }} {...rest}>
      {icon}
      <span>{children}</span>
    </button>
  )
}
