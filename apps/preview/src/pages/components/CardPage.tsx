import { H1, H2, Paragraph, Code, Card } from '@clearline7/components'

export default function CardPage() {
  return (
    <div>
      <H1>Card Component</H1>
      <Paragraph>
        The Card component provides a container with background, padding, and shadow.
      </Paragraph>

      <H2>Basic Card</H2>
      <Card>
        <H2>Card Title</H2>
        <Paragraph>
          This content is wrapped in a Card component, which provides visual separation from the
          surrounding content.
        </Paragraph>
      </Card>

      <H2>Code Example</H2>
      <Code>{`import { Card } from '@clearline7/components'

<Card>
  <h2>Card Title</h2>
  <p>Card content here...</p>
</Card>`}</Code>
    </div>
  )
}
