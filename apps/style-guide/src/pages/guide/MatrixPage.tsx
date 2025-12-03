/**
 * 3.0 Style Set Matrix
 * Part I: The Style System
 */

export default function MatrixPage() {
  const styleSets = [
    {
      name: 'Clearline7',
      purpose: 'Creative/tech marketing, professional documents',
      audience: 'Design teams, startups, modern enterprises',
      principle: 'Precision through flair',
      notes: 'Modern grids, offset paragraphs, Inter font family',
    },
    {
      name: 'Federal Flow',
      purpose: 'Formal reports, government documents',
      audience: 'Agencies, clerical roles, compliance teams',
      principle: 'Authority through consistency',
      notes: 'Aligns with Gregg & Tongue and Quill, serif typography',
    },
    {
      name: 'ClerkRoom Standard',
      purpose: 'Standard office communications',
      audience: 'General admin staff, office workers',
      principle: 'Efficiency through simplicity',
      notes: 'Simple headers, minimal color accents, Calibri default',
    },
    {
      name: 'Clerical Office Pro',
      purpose: 'Advanced administrative packages',
      audience: 'Office managers, executives, analysts',
      principle: 'Authority through refinement',
      notes: 'Enhanced tables, callouts, data visualizations',
    },
    {
      name: 'TechDocs & Code',
      purpose: 'Documentation, READMEs, technical writing',
      audience: 'Developers, IT writers, technical teams',
      principle: 'Transparency through structure',
      notes: 'Monospaced fonts, code block styling, Fira Code',
    },
    {
      name: 'Wiki & Guidelines',
      purpose: 'Intranet, collaborative documents',
      audience: 'Project teams, internal contributors',
      principle: 'Collaboration through readability',
      notes: 'Link styles, metadata tables, Verdana base',
    },
    {
      name: 'Blog, Posts & Comments',
      purpose: 'Public media, social content, web pages',
      audience: 'Content creators, social media, marketing',
      principle: 'Personality through clarity',
      notes: 'Georgia body, SF Pro headings, generous spacing',
    },
  ]

  return (
    <article>
      <h1>Style Set Matrix</h1>

      <p>
        Clearline7 provides seven opinionated Style Sets, each designed for specific contexts and
        audiences. Select the set that matches your document's purpose—then commit to its complete
        system.
      </p>

      <section>
        <h2>Overview</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #d1d5db', textAlign: 'left' }}>
              <th style={{ padding: '12px 8px' }}>Style Set</th>
              <th style={{ padding: '12px 8px' }}>Purpose</th>
              <th style={{ padding: '12px 8px' }}>Primary Audience</th>
              <th style={{ padding: '12px 8px' }}>Core Principle</th>
            </tr>
          </thead>
          <tbody>
            {styleSets.map((set) => (
              <tr key={set.name} style={{ borderBottom: '1px solid #e5e7eb' }}>
                <td style={{ padding: '12px 8px', fontWeight: 600 }}>{set.name}</td>
                <td style={{ padding: '12px 8px' }}>{set.purpose}</td>
                <td style={{ padding: '12px 8px' }}>{set.audience}</td>
                <td style={{ padding: '12px 8px', fontStyle: 'italic' }}>{set.principle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2>Selection Guidance</h2>
        <p>When choosing a Style Set, consider:</p>
        <ul>
          <li>
            <strong>Audience expectations</strong> — Government readers expect Federal Flow
            formality
          </li>
          <li>
            <strong>Document purpose</strong> — Technical docs need TechDocs clarity
          </li>
          <li>
            <strong>Brand alignment</strong> — Startups often prefer Clearline7's modern feel
          </li>
          <li>
            <strong>Compliance requirements</strong> — Some contexts mandate specific formatting
          </li>
        </ul>
        <p>
          Once selected, use the complete Style Set. Mixing elements from different sets breaks
          visual and verbal coherence.
        </p>
      </section>
    </article>
  )
}
