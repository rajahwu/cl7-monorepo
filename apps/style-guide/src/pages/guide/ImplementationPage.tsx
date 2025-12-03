/**
 * 8.0 Implementation Guide
 * Part III: Implementation & Governance
 */

export default function ImplementationPage() {
  return (
    <article>
      <h1>Implementation Guide</h1>

      <section>
        <h2>Microsoft Word</h2>

        <h3>Using Templates</h3>
        <ol>
          <li>Download the appropriate .dotx file from the central repository</li>
          <li>Save to your Word Templates folder (or open directly)</li>
          <li>Create new document: File → New → Personal → [Template Name]</li>
          <li>All styles will be pre-configured—use the Styles pane to apply them</li>
        </ol>

        <h3>Setting Up Styles from Scratch</h3>
        <ol>
          <li>Start with "Normal" style—reset to template defaults first</li>
          <li>Define "Body Text" as your base paragraph style</li>
          <li>Build heading styles (H1–H6) based on Body Text</li>
          <li>Configure spacing, fonts, and colors per Style Set specification</li>
          <li>Save as .dotx template for reuse</li>
        </ol>
      </section>

      <section>
        <h2>Web / React Applications</h2>

        <h3>Installation</h3>
        <pre>
          <code>pnpm add @clearline7/set-definitions @clearline7/theme @clearline7/components</code>
        </pre>

        <h3>Basic Usage</h3>
        <pre>
          <code>{`import { SetDefinitionProvider } from '@clearline7/theme'
import { Clearline7 } from '@clearline7/set-definitions'
import { H1, Paragraph } from '@clearline7/components'

function App() {
  return (
    <SetDefinitionProvider setDefinition={Clearline7}>
      <H1>Document Title</H1>
      <Paragraph>Your content here.</Paragraph>
    </SetDefinitionProvider>
  )
}`}</code>
        </pre>

        <h3>Switching Style Sets</h3>
        <pre>
          <code>{`import { FederalFlow, TechDocs } from '@clearline7/set-definitions'

// Use FederalFlow for formal documents
<SetDefinitionProvider setDefinition={FederalFlow}>
  ...
</SetDefinitionProvider>

// Use TechDocs for technical documentation
<SetDefinitionProvider setDefinition={TechDocs}>
  ...
</SetDefinitionProvider>`}</code>
        </pre>
      </section>

      <section>
        <h2>CSS Variables</h2>
        <p>
          Each Style Set exports CSS custom properties via <code>toCSS()</code>:
        </p>
        <pre>
          <code>{`import { Clearline7 } from '@clearline7/set-definitions'

// Inject into document
const style = document.createElement('style')
style.textContent = Clearline7.toCSS()
document.head.appendChild(style)

// Use in CSS
.my-element {
  color: var(--color-primary);
  font-family: var(--font-bodyFont);
}`}</code>
        </pre>
      </section>
    </article>
  )
}
