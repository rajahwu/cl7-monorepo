import { ReactNode, CSSProperties } from 'react'
import { useTheme } from '@clearline7/theme'

interface ListProps {
  children: ReactNode
  ordered?: boolean
  style?: CSSProperties
}

export function List({ children, ordered = false, style }: ListProps) {
  const theme = useTheme()
  const Tag = ordered ? 'ol' : 'ul'

  const baseStyle: CSSProperties = {
    fontFamily: theme.typography.bodyFont,
    fontSize: theme.typography.bodySize,
    lineHeight: theme.typography.lineHeightNormal,
    color: theme.colors.text,
    paddingLeft: theme.spacing.bulletIndent,
    marginBottom: theme.spacing.paragraphAfter,
    ...style,
  }

  return <Tag style={baseStyle}>{children}</Tag>
}

export function ListItem({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  const theme = useTheme()

  const baseStyle: CSSProperties = {
    marginBottom: '0.5em',
    color: theme.colors.text,
    ...style,
  }

  return <li style={baseStyle}>{children}</li>
}
