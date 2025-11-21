import { H1, H2, Paragraph, Code, Navigation as Nav, NavItem } from '@clearline7/components'

export default function NavigationPage() {
  return (
    <div>
      <H1>Navigation Component</H1>
      <Paragraph>
        The Navigation component provides styled navigation with horizontal and vertical layouts.
      </Paragraph>

      <H2>Horizontal Navigation</H2>
      <Nav orientation="horizontal">
        <NavItem active>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
      </Nav>

      <H2>Vertical Navigation</H2>
      <Nav orientation="vertical">
        <NavItem active>Dashboard</NavItem>
        <NavItem>Settings</NavItem>
        <NavItem>Profile</NavItem>
      </Nav>

      <H2>Code Example</H2>
      <Code>{`import { Navigation, NavItem } from '@clearline7/components'

<Navigation orientation="horizontal">
  <NavItem active>Home</NavItem>
  <NavItem>About</NavItem>
</Navigation>`}</Code>
    </div>
  )
}
