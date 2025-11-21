import { ReactNode, ButtonHTMLAttributes } from 'react'
import { useTheme } from '@clearline7/theme'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  style,
  ...props
}: ButtonProps) {
  const theme = useTheme()

  const sizeStyles = {
    sm: { padding: `${theme.spacing.scale['1']} ${theme.spacing.scale['2']}`, fontSize: '14px' },
    md: { padding: `${theme.spacing.scale['2']} ${theme.spacing.scale['4']}`, fontSize: '16px' },
    lg: { padding: `${theme.spacing.scale['3']} ${theme.spacing.scale['6']}`, fontSize: '18px' },
  }

  const variantStyles = {
    primary: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.background,
      border: 'none',
    },
    secondary: {
      backgroundColor: theme.colors.secondary,
      color: theme.colors.background,
      border: 'none',
    },
    outline: {
      backgroundColor: 'transparent',
      color: theme.colors.primary,
      border: `2px solid ${theme.colors.primary}`,
    },
  }

  const baseStyle = {
    fontFamily: theme.typography.bodyFont,
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...style,
  }

  return (
    <button style={baseStyle} {...props}>
      {children}
    </button>
  )
}
