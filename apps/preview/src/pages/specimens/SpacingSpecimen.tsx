import { useSetDefinition } from '@clearline7/theme'

export function SpacingSpecimen() {
  const definition = useSetDefinition()
  const { spacing } = definition

  const scale = spacing.scale || {}

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '2rem' }}>Spacing & Layout</h1>

      <section style={{ marginBottom: '3rem' }}>
        <h2
          style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '1.5rem' }}
        >
          Spacing Scale
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {Object.entries(scale).map(([key, value]) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '60px', color: '#666' }}>{key}</div>
              <div style={{ width: '80px', fontFamily: 'monospace' }}>{value}</div>
              <div
                style={{
                  width: value,
                  height: '24px',
                  backgroundColor: definition.colors.primary,
                  opacity: 0.5,
                  borderRadius: '4px',
                }}
              />
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2
          style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '1.5rem' }}
        >
          Paragraph Spacing
        </h2>
        <div
          style={{
            border: `1px solid ${definition.colors.border}`,
            padding: '2rem',
            backgroundColor: definition.colors.bg,
          }}
        >
          <p style={{ marginBottom: spacing.paragraphAfter, marginTop: spacing.paragraphBefore }}>
            First paragraph. The space below this block is defined by <code>paragraphAfter</code> (
            {spacing.paragraphAfter}).
          </p>
          <div
            style={{
              height: spacing.paragraphAfter,
              background: 'rgba(255,0,0,0.1)',
              width: '100%',
            }}
          />
          <p style={{ marginBottom: spacing.paragraphAfter, marginTop: spacing.paragraphBefore }}>
            Second paragraph. The space above this block is defined by <code>paragraphBefore</code>{' '}
            ({spacing.paragraphBefore || '0'}).
          </p>
        </div>
      </section>

      <section>
        <h2
          style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '1.5rem' }}
        >
          Indentation
        </h2>
        <div
          style={{
            border: `1px solid ${definition.colors.border}`,
            padding: '2rem',
            backgroundColor: definition.colors.bg,
          }}
        >
          <div>Bullet Indent ({spacing.bulletIndent}):</div>
          <ul style={{ paddingLeft: spacing.bulletIndent, margin: '1rem 0' }}>
            <li>List item 1</li>
            <li>List item 2</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
