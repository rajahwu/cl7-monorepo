import { createContext, useContext, ReactNode } from 'react'
import { SetDefinition } from '@clearline7/set-definitions'

interface SetDefinitionContextType {
  setDefinition: SetDefinition
}

const SetDefinitionContext = createContext<SetDefinitionContextType | null>(null)

export function useSetDefinition() {
  const context = useContext(SetDefinitionContext)
  if (!context) {
    throw new Error('useSetDefinition must be used within SetDefinitionProvider')
  }
  return context.setDefinition
}

// Keep useTheme as alias for backward compatibility
export const useTheme = useSetDefinition

interface SetDefinitionProviderProps {
  setDefinition: SetDefinition
  children: ReactNode
}

export function SetDefinitionProvider({ setDefinition, children }: SetDefinitionProviderProps) {
  return (
    <SetDefinitionContext.Provider value={{ setDefinition }}>
      {children}
    </SetDefinitionContext.Provider>
  )
}

// Keep ThemeProvider as alias for backward compatibility
export const ThemeProvider = SetDefinitionProvider
