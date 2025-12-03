import { Check } from 'lucide-react'
import type { EditionEntry as Edition } from '@clearline7/set-definitions'

interface EditionFeaturesProps {
  edition: Edition
}

export function EditionFeatures({ edition }: EditionFeaturesProps) {
  return (
    <section id="features" style={{ padding: '50px 0' }}>
      <h2
        style={{ fontSize: '32px', marginBottom: '24px', color: edition.definition.colors.primary }}
      >
        Built for {edition.name.split(' ')[0]}
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px' }}>
        {edition.features.map((feat, i) => (
          <div
            key={i}
            style={{
              background: edition.definition.colors.card,
              border: `1px solid ${edition.definition.colors.border}`,
              borderRadius: '12px',
              padding: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <Check
                size={20}
                style={{
                  color: edition.definition.colors.success,
                  marginTop: '2px',
                  flexShrink: 0,
                }}
              />
              <p style={{ margin: 0, color: edition.definition.colors.muted }}>{feat}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
