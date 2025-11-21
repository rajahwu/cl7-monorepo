import { ReactNode, CSSProperties } from 'react'
import { useTheme } from '@clearline7/theme'

export interface HeaderProps {
  children: ReactNode
  logo?: ReactNode
  style?: CSSProperties
}

export function Header({ children, logo, style }: HeaderProps) {
  const theme = useTheme()

  const baseStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${theme.spacing.scale['4']} ${theme.spacing.scale['6']}`,
    backgroundColor: theme.colors.background,
    borderBottom: `1px solid ${theme.colors.secondary}`,
    fontFamily: theme.typography.bodyFont,
    ...style,
  }

  return (
    <header style={baseStyle}>
      {logo && <div className="header-logo">{logo}</div>}
      <div className="header-content">{children}</div>
    </header>
  )
}
