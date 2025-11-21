import { H1, H2, H3 } from '../../document/Heading'
import { Paragraph } from '../../document/Paragraph'
import { List, ListItem } from '../../document/List'
import { Blockquote } from '../../document/Blockquote'
import { Code } from '../../document/Code'
import { Card } from '../../document/Card'

export interface SpecimenSheetProps {
  title?: string
}

export function SpecimenSheet({ title = 'Component Specimen Sheet' }: SpecimenSheetProps) {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <H1>{title}</H1>
      <Paragraph>
        This page displays all available components with their default styling.
      </Paragraph>

      <Card>
        <H2>Typography Components</H2>

        <H3>Headings</H3>
        <H1>Heading Level 1</H1>
        <H2>Heading Level 2</H2>
        <H3>Heading Level 3</H3>

        <H3>Body Text</H3>
        <Paragraph>
          This is a paragraph with default styling. It demonstrates the body font,
          size, line height, and spacing applied by the current style set.
        </Paragraph>
        <Paragraph>
          Multiple paragraphs show proper spacing and maintain consistent typography
          throughout the document.
        </Paragraph>
      </Card>

      <Card>
        <H2>Lists</H2>

        <H3>Unordered List</H3>
        <List>
          <ListItem>First item in the list</ListItem>
          <ListItem>Second item with more text to show wrapping behavior</ListItem>
          <ListItem>Third item</ListItem>
        </List>

        <H3>Ordered List</H3>
        <List ordered>
          <ListItem>First step in the process</ListItem>
          <ListItem>Second step with detailed instructions</ListItem>
          <ListItem>Final step to complete</ListItem>
        </List>
      </Card>

      <Card>
        <H2>Blockquotes</H2>
        <Blockquote>
          This is a blockquote. It's typically used for citations, important notes,
          or to highlight quoted text from other sources.
        </Blockquote>
      </Card>

      <Card>
        <H2>Code</H2>

        <H3>Inline Code</H3>
        <Paragraph>
          You can use <Code inline>inline code</Code> within sentences to highlight
          technical terms like <Code inline>function()</Code> or <Code inline>variableName</Code>.
        </Paragraph>

        <H3>Code Block</H3>
        <Code>
{`function example() {
  const message = "Hello, World!";
  console.log(message);
  return true;
}`}
        </Code>
      </Card>

      <Card>
        <H2>Card Component</H2>
        <Paragraph>
          This entire section is wrapped in a Card component, which provides
          background color, padding, border radius, and shadow effects based on
          the current style set.
        </Paragraph>
      </Card>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <H3>Style Information</H3>
        <Paragraph>
          All components above automatically adapt to the active style set.
          Switch between different style sets to see how the same components
          render with different typography, colors, and spacing.
        </Paragraph>
      </div>
    </div>
  )
}
