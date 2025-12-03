import { Link } from 'react-router-dom'
import type { EditionEntry as Edition } from '@clearline7/set-definitions'

interface EditionHeroProps {
  edition: Edition
}

export function EditionHero({ edition }: EditionHeroProps) {
  return (
    <section style={{ padding: '64px 0 40px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '24px',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>{edition.icon}</div>
          <h1
            style={{
              fontSize: '44px',
              lineHeight: 1.1,
              margin: '0 0 14px',
              color: edition.definition.colors.primary,
            }}
          >
            {edition.hero}
          </h1>
          <p
            style={{
              color: edition.definition.colors.muted,
              marginBottom: '14px',
              fontSize: '18px',
            }}
          >
            {edition.tagline}
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
            <button
              onClick={() =>
                document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })
              }
              style={{
                padding: '12px 24px',
                borderRadius: '10px',
                border: 'none',
                background: edition.definition.colors.primary,
                color: '#fff',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Get {edition.name}
            </button>
            <Link
              to="/"
              style={{
                padding: '12px 24px',
                borderRadius: '10px',
                border: `1px solid ${edition.definition.colors.border}`,
                background: edition.definition.colors.card,
                color: edition.definition.colors.text,
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                textDecoration: 'none',
              }}
            >
              Other Editions
            </Link>
          </div>
        </div>
        <div
          style={{
            background: edition.definition.colors.card,
            border: `2px solid ${edition.definition.colors.primary}`,
            borderRadius: '12px',
            padding: '20px',
            minHeight: '280px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            color: edition.definition.colors.muted,
          }}
        >
          {edition.name} Preview
        </div>
      </div>
    </section>
  )
}
