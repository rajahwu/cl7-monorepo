import { ReactNode, CSSProperties } from 'react'
import { useTheme } from '@clearline7/theme'

interface BlockquoteProps {
  children: ReactNode
  style?: CSSProperties
}

export function Blockquote({ children, style }: BlockquoteProps) {
  const theme = useTheme()

  const baseStyle: CSSProperties = {
    fontFamily: theme.typography.bodyFont,
    fontSize: theme.typography.bodySize,
    lineHeight: theme.typography.lineHeightNormal,
    color: theme.colors.muted,
    borderLeft: `4px solid ${theme.colors.accent}`,
    paddingLeft: theme.spacing.scale!['4'],
    marginLeft: '0',
    marginBottom: theme.spacing.paragraphAfter,
    fontStyle: 'italic',
    ...style,
  }

  return <blockquote style={baseStyle}>{children}</blockquote>
}
