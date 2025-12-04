import { useSetDefinition } from '@clearline7/theme'

export function ColorSpecimen() {
  const definition = useSetDefinition()
  const { colors } = definition

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '2rem' }}>Color Palette</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '2rem',
        }}
      >
        {Object.entries(colors).map(([name, value]) => (
          <div
            key={name}
            style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}
          >
            <div
              style={{
                height: '120px',
                backgroundColor: value,
                borderBottom: '1px solid #ddd',
              }}
            />
            <div style={{ padding: '1rem' }}>
              <div
                style={{ fontWeight: 'bold', marginBottom: '0.5rem', textTransform: 'capitalize' }}
              >
                {name}
              </div>
              <code style={{ backgroundColor: '#f5f5f5', padding: '4px 8px', borderRadius: '4px' }}>
                {value}
              </code>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
