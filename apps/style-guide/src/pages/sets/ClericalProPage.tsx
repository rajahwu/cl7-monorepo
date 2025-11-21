import { SetDefinitionProvider } from '@clearline7/theme'
import { ClericalOfficePro } from '@clearline7/set-definitions'
import { SpecimenSheet, H1, Paragraph } from '@clearline7/components'

export default function ClericalProPage() {
  return (
    <div>
      <H1>Clerical Office Pro</H1>
      <Paragraph>Professional office document styling.</Paragraph>
      <SetDefinitionProvider setDefinition={ClericalOfficePro}>
        <SpecimenSheet title="Clerical Office Pro Specimen" />
      </SetDefinitionProvider>
    </div>
  )
}
