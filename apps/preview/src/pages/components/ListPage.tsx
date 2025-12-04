import { H1, H2, Paragraph, Code, List, ListItem } from '@clearline7/components'

export default function ListPage() {
  return (
    <div>
      <H1>List Component</H1>
      <Paragraph>
        List components display ordered and unordered lists with consistent styling.
      </Paragraph>

      <H2>Unordered List</H2>
      <List>
        <ListItem>First item in the list</ListItem>
        <ListItem>Second item with more text</ListItem>
        <ListItem>Third item</ListItem>
      </List>

      <H2>Ordered List</H2>
      <List ordered>
        <ListItem>First step in the process</ListItem>
        <ListItem>Second step with details</ListItem>
        <ListItem>Final step to complete</ListItem>
      </List>

      <H2>Code Example</H2>
      <Code>{`import { List, ListItem } from '@clearline7/components'

<List>
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
</List>

<List ordered>
  <ListItem>Step 1</ListItem>
  <ListItem>Step 2</ListItem>
</List>`}</Code>
    </div>
  )
}
