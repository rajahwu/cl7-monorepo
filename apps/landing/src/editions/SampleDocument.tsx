import { Heading, Paragraph, List, ListItem, Card, Code, H1, H2 } from '@clearline7/components'

export function SampleDocument() {
  return (
    <>
      <H1>Document Title</H1>
      <Paragraph>
        This is a sample document demonstrating the active style set. The typography, spacing, and
        colors are all driven by the Set Definition.
      </Paragraph>

      <H2>Key Features</H2>
      <List>
        <ListItem>Consistent typography scale</ListItem>
        <ListItem>Semantic HTML structure</ListItem>
        <ListItem>Print-ready layouts</ListItem>
      </List>

      <Card>
        <Heading level={3}>Information Card</Heading>
        <Paragraph>
          Cards are useful for calling out specific information or creating visual separation within
          the document flow.
        </Paragraph>
      </Card>

      <Paragraph>
        Here is a code snippet example if the set supports technical documentation:
      </Paragraph>

      <Code>
        {`function hello() {
  console.log("Hello, World!");
}`}
      </Code>
    </>
  )
}
