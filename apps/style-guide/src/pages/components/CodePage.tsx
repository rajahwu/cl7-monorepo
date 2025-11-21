import { H1, H2, Paragraph, Code } from '@clearline7/components'

export default function CodePage() {
  return (
    <div>
      <H1>Code Component</H1>
      <Paragraph>
        The Code component displays code snippets with syntax highlighting styling.
      </Paragraph>

      <H2>Inline Code</H2>
      <Paragraph>
        You can use <Code inline>inline code</Code> within sentences to highlight
        technical terms like <Code inline>function()</Code> or <Code inline>variableName</Code>.
      </Paragraph>

      <H2>Code Block</H2>
      <Code>
{`function example() {
  const message = "Hello, World!";
  console.log(message);
  return true;
}`}
      </Code>

      <H2>Usage Example</H2>
      <Code>{`import { Code } from '@clearline7/components'

// Inline code
<Code inline>variableName</Code>

// Code block
<Code>
  {codeString}
</Code>`}</Code>
    </div>
  )
}
