import { useSetDefinition } from '@clearline7/theme'
import {
  StandardDocTemplate,
  H1,
  H2,
  H3,
  Paragraph,
  List,
  ListItem,
  Blockquote,
  Code,
  Card,
} from '@clearline7/components'

export function DocumentPreview() {
  const definition = useSetDefinition()

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '2rem',
        backgroundColor: '#f0f2f5',
      }}
    >
      <StandardDocTemplate definition={definition}>
        <H1>Document Preview</H1>
        <Paragraph>
          This is a live preview of a standard document rendered with the selected style set. The{' '}
          <code>StandardDocTemplate</code> component ensures that margins, typography, and print
          styles are applied correctly.
        </Paragraph>

        <H2>Executive Summary</H2>
        <Paragraph>
          Clearline7 provides a unified governance layer for all documentation. Whether you are
          writing a federal report, a technical API guide, or an internal memo, the underlying
          structure remains semantic and consistent.
        </Paragraph>

        <H3>Key Objectives</H3>
        <List>
          <ListItem>Eliminate ad-hoc formatting decisions.</ListItem>
          <ListItem>Ensure brand consistency across all departments.</ListItem>
          <ListItem>Streamline the transition from draft to publication.</ListItem>
        </List>

        <Blockquote>
          "Governance is not about restriction; it is about freedom from low-level decision making."
        </Blockquote>

        <H2>Technical Implementation</H2>
        <Paragraph>
          The system uses a shared set of definitions that drive both the web preview and the
          document generators.
        </Paragraph>

        <Code>
          {`// Example Set Definition Usage
import { useSetDefinition } from '@clearline7/theme';

function MyComponent() {
  const { colors, typography } = useSetDefinition();
  return <div style={{ color: colors.primary }}>Hello</div>;
}`}
        </Code>

        <Card>
          <H3>System Status</H3>
          <Paragraph>
            All systems are operational. The generator pipeline is active and ready for export.
          </Paragraph>
        </Card>
      </StandardDocTemplate>
    </div>
  )
}
