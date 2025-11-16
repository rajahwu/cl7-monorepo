import { useEffect } from 'react'
import { SetDefinition } from '@clearline7/set-definitions'

export function useSetDefinitionCSS(setDefinition: SetDefinition) {
  useEffect(() => {
    const styleId = 'set-definition-styles'
    let styleElement = document.getElementById(styleId) as HTMLStyleElement

    if (!styleElement) {
      styleElement = document.createElement('style')
      styleElement.id = styleId
      document.head.appendChild(styleElement)
    }

    styleElement.textContent = setDefinition.toCSS()

    return () => {
      // Keep styles on unmount for now
    }
  }, [setDefinition])
}
