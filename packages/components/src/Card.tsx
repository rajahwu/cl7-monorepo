import { ReactNode, CSSProperties } from 'react'
import { useTheme } from '@clearline7/theme'

interface CardProps {
  children: ReactNode
  style?: CSSProperties
}

export function Card({ children, style }: CardProps) {
  const theme = useTheme()

  const baseStyle: CSSProperties = {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.card,
    padding: theme.spacing.scale?.['6'] || '24px',
    marginBottom: theme.spacing.paragraphAfter,
    boxShadow: theme.shadows.medium,
    border: `1px solid ${theme.colors.border}`,
    ...style,
  }

  return <div style={baseStyle}>{children}</div>
}
