import { SetDefinitionProvider } from '@clearline7/theme'
import { FederalFlow } from '@clearline7/set-definitions'
import { SpecimenSheet, H1, Paragraph } from '@clearline7/components'

export default function FederalFlowPage() {
  return (
    <div>
      <H1>Federal Flow</H1>
      <Paragraph>Government and federal document styling.</Paragraph>
      <SetDefinitionProvider setDefinition={FederalFlow}>
        <SpecimenSheet title="Federal Flow Specimen" />
      </SetDefinitionProvider>
    </div>
  )
}
