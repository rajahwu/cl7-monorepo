import { SetDefinitionProvider } from '@clearline7/theme'
import { ClerkRoomStandard } from '@clearline7/set-definitions'
import { SpecimenSheet, H1, Paragraph } from '@clearline7/components'

export default function ClerkRoomPage() {
  return (
    <div>
      <H1>ClerkRoom Standard</H1>
      <Paragraph>Standard styling for clerk room documents.</Paragraph>
      <SetDefinitionProvider setDefinition={ClerkRoomStandard}>
        <SpecimenSheet title="ClerkRoom Standard Specimen" />
      </SetDefinitionProvider>
    </div>
  )
}
