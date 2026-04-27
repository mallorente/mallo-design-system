import { useId } from 'react'

export interface BrocoliProps {
  size?: number
  mood?: 'happy' | 'wink' | 'think'
  primary?: string
  secondary?: string
  paper?: string
}

const crownPath = "M15 70 Q14 55 24 48 Q26 32 44 30 Q52 18 64 22 Q78 18 88 30 Q104 32 106 50 Q116 58 112 72 Q110 86 96 88 L24 88 Q10 86 15 70 Z"
const stalkPath = "M50 86 Q49 110 53 122 Q55 126 60 126 Q65 126 67 122 Q71 110 70 86 Z"

export function BrocoliC({
  size = 120,
  mood = 'happy',
  primary = '#e85a4f',
  secondary = '#2d5f3f',
  paper = '#f4ecd8',
}: BrocoliProps) {
  useId() // keeps hook count stable across renders
  return (
    <svg viewBox="0 0 120 140" width={size} height={size * 140 / 120} style={{ display: 'block' }}>
      <g transform="translate(2.5,3)" opacity="0.9">
        <path d={stalkPath} fill={primary} />
        <path d={crownPath} fill={primary} />
      </g>
      <path d={stalkPath} fill={secondary} />
      <path d={crownPath} fill={secondary} />
      <path d="M30 58 Q40 52 52 58" stroke={paper} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.35" />
      <path d="M70 58 Q82 52 92 60" stroke={paper} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.35" />

      {mood === 'happy' && (
        <g>
          <circle cx="50" cy="66" r="3.2" fill={paper} />
          <circle cx="70" cy="66" r="3.2" fill={paper} />
          <circle cx="51" cy="64.8" r="0.9" fill={secondary} />
          <circle cx="71" cy="64.8" r="0.9" fill={secondary} />
          <path d="M55 75 Q60 78.5 65 75" stroke={paper} strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <circle cx="44" cy="72" r="2.6" fill={primary} opacity="0.35" />
          <circle cx="76" cy="72" r="2.6" fill={primary} opacity="0.35" />
        </g>
      )}
      {mood === 'wink' && (
        <g>
          <circle cx="50" cy="66" r="3.2" fill={paper} />
          <circle cx="51" cy="64.8" r="0.9" fill={secondary} />
          <path d="M67 64 Q70 62.2 73 64" stroke={paper} strokeWidth="1.6" fill="none" strokeLinecap="round" />
          <path d="M55 75 Q60 78.5 65 75" stroke={paper} strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <circle cx="44" cy="72" r="2.6" fill={primary} opacity="0.35" />
          <circle cx="76" cy="72" r="2.6" fill={primary} opacity="0.35" />
        </g>
      )}
      {mood === 'think' && (
        <g>
          <path d="M47 62 Q50 60.8 53 62" stroke={paper} strokeWidth="1.4" fill="none" strokeLinecap="round" />
          <path d="M67 62 Q70 60.8 73 62" stroke={paper} strokeWidth="1.4" fill="none" strokeLinecap="round" />
          <circle cx="50" cy="67" r="2.8" fill={paper} />
          <circle cx="70" cy="67" r="2.8" fill={paper} />
          <circle cx="51" cy="65.9" r="0.8" fill={secondary} />
          <circle cx="71" cy="65.9" r="0.8" fill={secondary} />
          <circle cx="60" cy="77" r="1.3" fill={paper} />
        </g>
      )}
    </svg>
  )
}
