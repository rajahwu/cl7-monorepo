import { SetDefinitionProvider } from '@clearline7/theme'
import { WikiGuidelines } from '@clearline7/set-definitions'
import { SpecimenSheet, H1, Paragraph } from '@clearline7/components'

export default function WikiGuidelinesPage() {
  return (
    <div>
      <H1>Wiki Guidelines</H1>
      <Paragraph>Wiki and knowledge base document styling.</Paragraph>
      <SetDefinitionProvider setDefinition={WikiGuidelines}>
        <SpecimenSheet title="Wiki Guidelines Specimen" />
      </SetDefinitionProvider>
    </div>
  )
}
