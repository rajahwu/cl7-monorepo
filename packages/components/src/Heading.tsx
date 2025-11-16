import React from 'react'
import { ReactNode, CSSProperties } from 'react'
import { useTheme } from '@clearline7/theme'

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: ReactNode
  style?: CSSProperties
}

export function Heading({ level, children, style }: HeadingProps) {
  const theme = useTheme()
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements

  const baseStyle: CSSProperties = {
    fontFamily: theme.typography.headingFont,
    fontSize: theme.typography[`h${level}Size` as keyof typeof theme.typography],
    lineHeight: theme.typography.lineHeightTight,
    color: theme.colors.text,
    ...style,
  }

  return <Tag style={baseStyle}>{children}</Tag>
}

export const H1 = (props: Omit<HeadingProps, 'level'>) => <Heading level={1} {...props} />
export const H2 = (props: Omit<HeadingProps, 'level'>) => <Heading level={2} {...props} />
export const H3 = (props: Omit<HeadingProps, 'level'>) => <Heading level={3} {...props} />
