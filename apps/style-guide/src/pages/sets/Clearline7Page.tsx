import { SetDefinitionProvider } from '@clearline7/theme'
import { Clearline7 } from '@clearline7/set-definitions'
import { SpecimenSheet, H1, Paragraph } from '@clearline7/components'

export default function Clearline7Page() {
  return (
    <div>
      <H1>Clearline 7</H1>
      <Paragraph>The default, balanced style set for professional documents.</Paragraph>
      <SetDefinitionProvider setDefinition={Clearline7}>
        <SpecimenSheet title="Clearline 7 Specimen" />
      </SetDefinitionProvider>
    </div>
  )
}
