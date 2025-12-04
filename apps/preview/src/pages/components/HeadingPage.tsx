import { H1, H2, H3, Paragraph, Code } from '@clearline7/components'

export default function HeadingPage() {
  return (
    <div>
      <H1>Heading Component</H1>
      <Paragraph>
        Heading components provide consistent typography for titles and section headers.
      </Paragraph>

      <H2>Heading Levels</H2>
      <H1>Heading Level 1</H1>
      <H2>Heading Level 2</H2>
      <H3>Heading Level 3</H3>

      <H2>Code Example</H2>
      <Code>{`import { H1, H2, H3 } from '@clearline7/components'

<H1>Main Title</H1>
<H2>Section Title</H2>
<H3>Subsection Title</H3>`}</Code>
    </div>
  )
}
