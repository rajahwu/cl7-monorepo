import { SetDefinitionProvider } from '@clearline7/theme'
import { TechDocs } from '@clearline7/set-definitions'
import { SpecimenSheet, H1, Paragraph } from '@clearline7/components'

export default function TechDocsPage() {
  return (
    <div>
      <H1>TechDocs</H1>
      <Paragraph>Technical documentation styling.</Paragraph>
      <SetDefinitionProvider setDefinition={TechDocs}>
        <SpecimenSheet title="TechDocs Specimen" />
      </SetDefinitionProvider>
    </div>
  )
}
