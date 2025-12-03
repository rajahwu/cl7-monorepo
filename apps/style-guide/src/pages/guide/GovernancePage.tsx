/**
 * 9.0 Governance & Maintenance
 * Part III: Implementation & Governance
 */

export default function GovernancePage() {
  return (
    <article>
      <h1>Governance & Maintenance</h1>

      <section>
        <h2>Living Document Philosophy</h2>
        <p>
          This style guide is a living document. It evolves as our understanding deepens, as
          technology changes, and as user needs shift. However, changes are deliberate—not reactive.
        </p>
      </section>

      <section>
        <h2>Ownership</h2>
        <p>
          The Clearline7 style system is maintained by the Design Systems team. All changes to Style
          Set specifications, token values, or component behavior require review and approval.
        </p>

        <h3>Roles</h3>
        <ul>
          <li>
            <strong>Maintainers</strong> — Approve changes, release versions
          </li>
          <li>
            <strong>Contributors</strong> — Propose changes via pull request
          </li>
          <li>
            <strong>Users</strong> — Report issues, request features
          </li>
        </ul>
      </section>

      <section>
        <h2>Change Process</h2>
        <ol>
          <li>
            <strong>Propose</strong> — Open an issue or discussion describing the change
          </li>
          <li>
            <strong>Review</strong> — Maintainers assess impact on existing documents
          </li>
          <li>
            <strong>Implement</strong> — Update code, templates, and documentation
          </li>
          <li>
            <strong>Release</strong> — Version bump with changelog entry
          </li>
          <li>
            <strong>Announce</strong> — Notify users through appropriate channels
          </li>
        </ol>
      </section>

      <section>
        <h2>Version History</h2>
        <p>
          All Style Set changes are tracked in the monorepo's CHANGELOG.md. Template updates are
          versioned separately in the Templates repository.
        </p>
        <p>
          <strong>Current Version:</strong> 0.1.0 (Version Zero)
        </p>
      </section>

      <section>
        <h2>Feedback & Support</h2>
        <ul>
          <li>
            <strong>Issues</strong> — GitHub repository issue tracker
          </li>
          <li>
            <strong>Questions</strong> — Team Slack channel #clearline7
          </li>
          <li>
            <strong>Requests</strong> — Feature request template in repo
          </li>
        </ul>
      </section>

      <section>
        <h2>Regular Audits</h2>
        <p>Quarterly reviews assess:</p>
        <ul>
          <li>Token consistency across Style Sets</li>
          <li>Component coverage and quality</li>
          <li>Documentation accuracy</li>
          <li>User feedback trends</li>
        </ul>
      </section>
    </article>
  )
}
