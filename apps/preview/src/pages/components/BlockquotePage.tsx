import { Blockquote, H1, H2, Paragraph, Code } from '@clearline7/components'

export default function BlockquotePage() {
  return (
    <div>
      <H1>Blockquote Component</H1>
      <Paragraph>The Blockquote component displays quoted text with appropriate styling.</Paragraph>

      <H2>Basic Usage</H2>
      <Blockquote>
        This is a basic blockquote example. It displays text in a styled container that visually
        distinguishes it as quoted content.
      </Blockquote>

      <H2>Long Quote</H2>
      <Blockquote>
        Design is not just what it looks like and feels like. Design is how it works. The details
        are not the details. They make the design. Simplicity is the ultimate sophistication.
      </Blockquote>

      <H2>Code Example</H2>
      <Code>{`import { Blockquote } from '@clearline7/components'

<Blockquote>
  Your quoted text here...
</Blockquote>`}</Code>
    </div>
  )
}
