import { useSetDefinition } from '@clearline7/theme'

export function TypographySpecimen() {
  const definition = useSetDefinition()
  const { typography } = definition

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '2rem' }}>Typography</h1>

      <section style={{ marginBottom: '3rem' }}>
        <h2
          style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '1.5rem' }}
        >
          Font Families
        </h2>

        <div style={{ marginBottom: '2rem' }}>
          <h3
            style={{
              color: '#666',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Body Font
          </h3>
          <p style={{ fontFamily: typography.bodyFont, fontSize: '24px', margin: '1rem 0' }}>
            {typography.bodyFont}, {typography.bodyFallback}
          </p>
          <p style={{ fontFamily: typography.bodyFont, fontSize: '16px', lineHeight: 1.5 }}>
            The quick brown fox jumps over the lazy dog. 0123456789
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3
            style={{
              color: '#666',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Heading Font
          </h3>
          <p style={{ fontFamily: typography.headingFont, fontSize: '24px', margin: '1rem 0' }}>
            {typography.headingFont}
          </p>
          <p style={{ fontFamily: typography.headingFont, fontSize: '16px' }}>
            The quick brown fox jumps over the lazy dog. 0123456789
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3
            style={{
              color: '#666',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Monospace Font
          </h3>
          <p style={{ fontFamily: typography.monoFont, fontSize: '24px', margin: '1rem 0' }}>
            {typography.monoFont}
          </p>
          <p style={{ fontFamily: typography.monoFont, fontSize: '16px' }}>
            const code = "The quick brown fox";
          </p>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2
          style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '1.5rem' }}
        >
          Headings
        </h2>

        {[1, 2, 3, 4, 5, 6].map((level) => {
          const sizeKey = `h${level}Size` as keyof typeof typography
          return (
            <div
              key={level}
              style={{
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'baseline',
                gap: '2rem',
              }}
            >
              <span style={{ color: '#999', width: '40px', fontSize: '14px' }}>H{level}</span>
              <div
                style={{
                  fontFamily: typography.headingFont,
                  fontSize: typography[sizeKey],
                  lineHeight: typography.lineHeightTight,
                }}
              >
                Heading Level {level}
              </div>
            </div>
          )
        })}
      </section>

      <section>
        <h2
          style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '1.5rem' }}
        >
          Body Text
        </h2>
        <div
          style={{
            fontFamily: typography.bodyFont,
            fontSize: typography.bodySize,
            lineHeight: typography.lineHeightNormal,
            maxWidth: '65ch',
          }}
        >
          <p style={{ marginBottom: '1rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
    </div>
  )
}
