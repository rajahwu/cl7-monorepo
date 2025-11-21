import { ReactNode, CSSProperties } from 'react'
import { useTheme } from '@clearline7/theme'

export interface NavigationProps {
  children: ReactNode
  orientation?: 'horizontal' | 'vertical'
  style?: CSSProperties
}

export interface NavItemProps {
  children: ReactNode
  active?: boolean
  style?: CSSProperties
}

export function Navigation({ children, orientation = 'horizontal', style }: NavigationProps) {
  const theme = useTheme()

  const baseStyle: CSSProperties = {
    display: 'flex',
    flexDirection: orientation === 'horizontal' ? 'row' : 'column',
    gap: theme.spacing.scale['4'],
    listStyle: 'none',
    margin: 0,
    padding: 0,
    fontFamily: theme.typography.bodyFont,
    ...style,
  }

  return (
    <nav>
      <ul style={baseStyle}>{children}</ul>
    </nav>
  )
}

export function NavItem({ children, active = false, style }: NavItemProps) {
  const theme = useTheme()

  const baseStyle: CSSProperties = {
    color: active ? theme.colors.primary : theme.colors.text,
    fontWeight: active ? 'bold' : 'normal',
    cursor: 'pointer',
    ...style,
  }

  return <li style={baseStyle}>{children}</li>
}
