import React, { ReactNode } from 'react'
import { SetDefinition } from '@clearline7/set-definitions'
import { SetDefinitionProvider } from '@clearline7/theme'
import './style.css'

export interface StandardDocTemplateProps {
  definition: SetDefinition
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}

export function StandardDocTemplate({
  definition,
  children,
  className = '',
  style = {},
}: StandardDocTemplateProps) {
  // Determine internal padding based on the definition's spacing
  // Note: In a real implementation, we might parse 'in', 'pt', 'px' to ensure validity.
  // For now, we assume the definition provides valid CSS strings.
  const pageStyle: React.CSSProperties = {
    ...style,
    paddingTop: definition.spacing.scale?.['12'] || '48px', // Fallback or specific mapping
    paddingBottom: definition.spacing.scale?.['12'] || '48px',
    paddingLeft: definition.spacing.scale?.['12'] || '48px',
    paddingRight: definition.spacing.scale?.['12'] || '48px',
  }

  return (
    <SetDefinitionProvider setDefinition={definition}>
      <div className={`cl7-document-page ${className}`} style={pageStyle}>
        {children}
      </div>
      {/* Inject dynamic styles for print media specifically from the definition */}
      <style dangerouslySetInnerHTML={{ __html: definition.getPrintStyles() }} />
    </SetDefinitionProvider>
  )
}
