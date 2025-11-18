import { ReactNode, CSSProperties } from 'react'
import { useTheme } from '@clearline7/theme'

interface CodeProps {
  children: ReactNode
  inline?: boolean
  style?: CSSProperties
}

export function Code({ children, inline = false, style }: CodeProps) {
  const theme = useTheme()

  const baseStyle: CSSProperties = {
    fontFamily: theme.typography.monoFont,
    fontSize: inline ? '0.9em' : theme.typography.bodySize,
    color: inline ? theme.colors.accent : theme.colors.text,
    backgroundColor: theme.colors.card,
    padding: inline ? '0.2em 0.4em' : theme.spacing.scale?.['4'] || '16px',
    borderRadius: theme.radius.input,
    display: inline ? 'inline' : 'block',
    marginBottom: inline ? '0' : theme.spacing.paragraphAfter,
    overflowX: inline ? 'visible' : 'auto',
    ...style,
  }

  const Tag = inline ? 'code' : 'pre'

  return <Tag style={baseStyle}>{children}</Tag>
}
