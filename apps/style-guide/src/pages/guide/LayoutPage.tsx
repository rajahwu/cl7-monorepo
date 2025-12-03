/**
 * 6.0 Document Layout Rules
 * Part II: The Core Guide
 */

export default function LayoutPage() {
  return (
    <article>
      <h1>Document Layout Rules</h1>

      <section>
        <h2>Paragraph Alignment</h2>
        <p>
          <strong>Left-aligned text only.</strong> Never use full justification—it creates uneven
          word spacing that reduces readability.
        </p>
      </section>

      <section>
        <h2>Paragraph Spacing</h2>
        <p>
          Clearline7 uses <strong>space-between paragraphs</strong>, not first-line indentation.
          This modern approach improves scannability and works better across digital and print
          media.
        </p>

        <h3>By Style Set</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #d1d5db', textAlign: 'left' }}>
              <th style={{ padding: '8px' }}>Style Set</th>
              <th style={{ padding: '8px' }}>Paragraph Style</th>
              <th style={{ padding: '8px' }}>Rationale</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: '8px' }}>Clearline7</td>
              <td style={{ padding: '8px' }}>Offset (no indent), 12pt before/after</td>
              <td style={{ padding: '8px' }}>Modern, scannable layout</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: '8px' }}>Federal Flow</td>
              <td style={{ padding: '8px' }}>First-line indent (0.25"), 6pt spacing</td>
              <td style={{ padding: '8px' }}>Government report standard</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: '8px' }}>ClerkRoom Standard</td>
              <td style={{ padding: '8px' }}>Offset, 6pt after</td>
              <td style={{ padding: '8px' }}>Fast office communications</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: '8px' }}>TechDocs</td>
              <td style={{ padding: '8px' }}>Offset, 8pt before/after</td>
              <td style={{ padding: '8px' }}>Separates prose from code</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Heading Hierarchy</h2>
        <ul>
          <li>
            <strong>H1</strong> — Document title only. One per document.
          </li>
          <li>
            <strong>H2</strong> — Major sections
          </li>
          <li>
            <strong>H3</strong> — Subsections within H2
          </li>
          <li>
            <strong>H4–H6</strong> — Further nesting as needed
          </li>
        </ul>
        <p>Never skip heading levels (e.g., H1 → H3).</p>
      </section>

      <section>
        <h2>Lists</h2>
        <h3>Bulleted Lists</h3>
        <ul>
          <li>Use for unordered items where sequence doesn't matter</li>
          <li>Maintain parallel structure across items</li>
          <li>Keep items concise—expand in following paragraphs if needed</li>
        </ul>

        <h3>Numbered Lists</h3>
        <ul>
          <li>Use for sequential steps or ranked items</li>
          <li>Each item should be a complete action or concept</li>
          <li>Limit to 7±2 items; break longer lists into sections</li>
        </ul>
      </section>

      <section>
        <h2>Tables</h2>
        <ul>
          <li>Header row always bold with bottom border</li>
          <li>Align text left, numbers right</li>
          <li>Use subtle row borders (1px, light gray)</li>
          <li>Avoid merged cells when possible</li>
        </ul>
      </section>

      <section>
        <h2>Block Quotes</h2>
        <ul>
          <li>Indent from left margin</li>
          <li>Apply left border accent (varies by Style Set)</li>
          <li>Use for quotations of 40+ words or emphasized callouts</li>
        </ul>
      </section>
    </article>
  )
}
