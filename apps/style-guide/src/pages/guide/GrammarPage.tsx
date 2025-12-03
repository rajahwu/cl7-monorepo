/**
 * 5.0 Grammar & Mechanics
 * Part II: The Core Guide
 */

export default function GrammarPage() {
  return (
    <article>
      <h1>Grammar & Mechanics</h1>

      <section>
        <h2>The Oxford Comma</h2>
        <p>
          <strong>We use the Oxford comma.</strong> Always include a comma before the final item in
          a series.
        </p>
        <ul>
          <li>✓ "Colors, typography, and spacing"</li>
          <li>✗ "Colors, typography and spacing"</li>
        </ul>
      </section>

      <section>
        <h2>Voice</h2>
        <h3>Active Voice (Preferred)</h3>
        <p>The subject performs the action.</p>
        <ul>
          <li>✓ "The system validates input before processing."</li>
          <li>✓ "Users select a Style Set from the dropdown."</li>
        </ul>

        <h3>Passive Voice (Use Sparingly)</h3>
        <p>Acceptable when the actor is unknown or less important than the action.</p>
        <ul>
          <li>✓ "The document was approved by the committee." (emphasis on document)</li>
          <li>✓ "Errors are logged automatically." (system behavior)</li>
        </ul>
      </section>

      <section>
        <h2>Capitalization</h2>
        <ul>
          <li>
            <strong>Sentence case</strong> for headings: "Writing style guidelines"
          </li>
          <li>
            <strong>Title case</strong> for proper nouns and product names: "Clearline7", "Federal
            Flow"
          </li>
          <li>
            <strong>Lowercase</strong> for generic terms: "style set", "document template"
          </li>
        </ul>
      </section>

      <section>
        <h2>Numbers</h2>
        <ul>
          <li>Spell out one through nine</li>
          <li>Use numerals for 10 and above</li>
          <li>Always use numerals for measurements, percentages, and technical specs</li>
          <li>Use numerals in tables regardless of value</li>
        </ul>
      </section>

      <section>
        <h2>Punctuation</h2>
        <h3>Em Dashes (—)</h3>
        <p>Use for emphasis or to set off parenthetical information. No spaces around em dashes.</p>
        <ul>
          <li>✓ "The system—designed for clarity—handles all formatting."</li>
        </ul>

        <h3>En Dashes (–)</h3>
        <p>Use for ranges.</p>
        <ul>
          <li>✓ "Pages 10–15", "2020–2024"</li>
        </ul>

        <h3>Hyphens (-)</h3>
        <p>Use for compound modifiers before nouns.</p>
        <ul>
          <li>✓ "user-friendly interface", "well-designed system"</li>
        </ul>
      </section>

      <section>
        <h2>Preferred Terminology</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #d1d5db', textAlign: 'left' }}>
              <th style={{ padding: '8px' }}>Use</th>
              <th style={{ padding: '8px' }}>Avoid</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: '8px' }}>Style Set</td>
              <td style={{ padding: '8px' }}>theme, skin, template</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: '8px' }}>document</td>
              <td style={{ padding: '8px' }}>doc (in formal contexts)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: '8px' }}>configure</td>
              <td style={{ padding: '8px' }}>setup (as verb)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: '8px' }}>select</td>
              <td style={{ padding: '8px' }}>pick, choose (in UI contexts)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: '8px' }}>ensure</td>
              <td style={{ padding: '8px' }}>make sure</td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  )
}
