import { createContext, useContext, ReactNode } from 'react'
import { SetDefinition } from '@clearline7/set-definitions'

interface ThemeContextType {
  setDefinition: SetDefinition
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context.setDefinition
}

interface ThemeProviderProps {
  setDefinition: SetDefinition
  children: ReactNode
}

export function ThemeProvider({ setDefinition, children }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={{ setDefinition }}>
      {children}
    </ThemeContext.Provider>
  )
}
