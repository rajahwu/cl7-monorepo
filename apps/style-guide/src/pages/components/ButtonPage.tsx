import { H1, H2, Paragraph, Code, Button } from '@clearline7/components'

export default function ButtonPage() {
  return (
    <div>
      <H1>Button Component</H1>
      <Paragraph>
        The Button component provides styled buttons with variants and sizes.
      </Paragraph>

      <H2>Variants</H2>
      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
      </div>

      <H2>Sizes</H2>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px' }}>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>

      <H2>Code Example</H2>
      <Code>{`import { Button } from '@clearline7/components'

<Button variant="primary" size="md">
  Click me
</Button>`}</Code>
    </div>
  )
}
