import { H1, H2, Paragraph, Code, Footer } from '@clearline7/components'

export default function FooterPage() {
  return (
    <div>
      <H1>Footer Component</H1>
      <Paragraph>
        The Footer component provides a container for page footers.
      </Paragraph>

      <H2>Basic Footer</H2>
      <Footer>
        <p>Copyright 2025 Your Company</p>
      </Footer>

      <H2>Code Example</H2>
      <Code>{`import { Footer } from '@clearline7/components'

<Footer>
  <p>Copyright 2025</p>
</Footer>`}</Code>
    </div>
  )
}
