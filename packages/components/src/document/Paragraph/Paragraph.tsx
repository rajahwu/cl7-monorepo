import { ReactNode, CSSProperties } from 'react'
import { useTheme } from '@clearline7/theme'

interface ParagraphProps {
  children?: ReactNode
  style?: CSSProperties
}

export function Paragraph({ children, style }: ParagraphProps) {
  const theme = useTheme()

  const baseStyle: CSSProperties = {
    fontFamily: theme.typography.bodyFont,
    fontSize: theme.typography.bodySize,
    lineHeight: theme.typography.lineHeightNormal,
    color: theme.colors.text,
    marginBottom: theme.spacing.paragraphAfter,
    ...style,
  }

  return <p style={baseStyle}>{children}</p>
}
