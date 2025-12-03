import { H1, H2, Paragraph, Code } from '@clearline7/components'

export default function ParagraphPage() {
  return (
    <div>
      <H1>Paragraph Component</H1>
      <Paragraph>The Paragraph component provides consistent body text styling.</Paragraph>

      <H2>Basic Usage</H2>
      <Paragraph>
        This is a paragraph with default styling. It demonstrates the body font, size, line height,
        and spacing applied by the current style set.
      </Paragraph>
      <Paragraph>
        Multiple paragraphs show proper spacing and maintain consistent typography throughout the
        document.
      </Paragraph>

      <H2>Code Example</H2>
      <Code>{`import { Paragraph } from '@clearline7/components'

<Paragraph>
  Your paragraph text here...
</Paragraph>`}</Code>
    </div>
  )
}
