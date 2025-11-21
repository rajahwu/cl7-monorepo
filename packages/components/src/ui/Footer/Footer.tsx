import { ReactNode, CSSProperties } from 'react'
import { useTheme } from '@clearline7/theme'

export interface FooterProps {
  children: ReactNode
  style?: CSSProperties
}

export function Footer({ children, style }: FooterProps) {
  const theme = useTheme()

  const baseStyle: CSSProperties = {
    padding: `${theme.spacing.scale!['6']} ${theme.spacing.scale!['6']}`,
    backgroundColor: theme.colors.bg,
    borderTop: `1px solid ${theme.colors.secondary}`,
    fontFamily: theme.typography.bodyFont,
    fontSize: theme.typography.bodySize,
    color: theme.colors.text,
    ...style,
  }

  return (
    <footer style={baseStyle}>
      {children}
    </footer>
  )
}
