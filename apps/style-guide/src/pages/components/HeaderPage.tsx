import { H1, H2, Paragraph, Code, Header } from '@clearline7/components'

export default function HeaderPage() {
  return (
    <div>
      <H1>Header Component</H1>
      <Paragraph>
        The Header component provides a container for app headers with logo and navigation.
      </Paragraph>

      <H2>Basic Header</H2>
      <Header logo={<span style={{ fontWeight: 'bold' }}>Logo</span>}>
        Navigation content
      </Header>

      <H2>Code Example</H2>
      <Code>{`import { Header } from '@clearline7/components'

<Header logo={<img src="/logo.png" alt="Logo" />}>
  <nav>Navigation items</nav>
</Header>`}</Code>
    </div>
  )
}
