/**
 * 7.0 Template & File Management
 * Part III: Implementation & Governance
 */

export default function TemplatesPage() {
  return (
    <article>
      <h1>Template & File Management</h1>

      <section>
        <h2>Master Template Files</h2>
        <p>
          Each Style Set includes a Microsoft Word template (.dotx) that pre-configures all styles,
          fonts, colors, and spacing according to specification.
        </p>

        <h3>Available Templates</h3>
        <ul>
          <li>
            <code>Clearline7.dotx</code>
          </li>
          <li>
            <code>FederalFlow.dotx</code>
          </li>
          <li>
            <code>ClerkRoomStandard.dotx</code>
          </li>
          <li>
            <code>ClericalOfficePro.dotx</code>
          </li>
          <li>
            <code>TechDocs.dotx</code>
          </li>
          <li>
            <code>WikiGuidelines.dotx</code>
          </li>
          <li>
            <code>BlogPosts.dotx</code>
          </li>
        </ul>
      </section>

      <section>
        <h2>File Naming Conventions</h2>
        <ul>
          <li>
            Use PascalCase for Style Set names: <code>FederalFlow</code>, not{' '}
            <code>federal-flow</code>
          </li>
          <li>
            Template files: <code>[StyleSetName].dotx</code>
          </li>
          <li>
            Document files: <code>[ProjectName]_[Description]_[Version].docx</code>
          </li>
          <li>
            Exports: <code>[StyleSetName]_[Date]_[Format].pdf</code>
          </li>
        </ul>
      </section>

      <section>
        <h2>Storage & Access</h2>
        <p>Template files should be stored in a central, version-controlled location:</p>
        <ul>
          <li>
            <strong>Notion</strong> — Link to .dotx files in a Templates database
          </li>
          <li>
            <strong>Google Drive</strong> — Shared folder with view-only access for users
          </li>
          <li>
            <strong>SharePoint</strong> — Enterprise template library
          </li>
        </ul>
        <p>
          Never store templates in local user folders. Always pull from the central source to ensure
          version consistency.
        </p>
      </section>

      <section>
        <h2>Version Control</h2>
        <ul>
          <li>
            Tag template versions with semantic versioning: <code>v1.0.0</code>
          </li>
          <li>Maintain changelog in README or Notion page</li>
          <li>Archive previous versions, don't delete</li>
          <li>Announce updates through team channels</li>
        </ul>
      </section>

      <section>
        <h2>Export Formats</h2>
        <ul>
          <li>
            <strong>PDF</strong> — Final distribution, print-ready
          </li>
          <li>
            <strong>DOCX</strong> — Editable collaboration
          </li>
          <li>
            <strong>HTML</strong> — Web publishing (via generator)
          </li>
          <li>
            <strong>Markdown</strong> — Developer documentation
          </li>
        </ul>
      </section>
    </article>
  )
}
