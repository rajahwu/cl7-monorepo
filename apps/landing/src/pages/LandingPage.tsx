// apps/landing/src/pages/LandingPage.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import { editions } from '@clearline7/set-definitions'

const ClearlineLandingPage = () => {
  const brand = {
    blue: '#1E3A8A',
    gray: '#6B7280',
    teal: '#14B8A6',
    white: '#FFFFFF',
    offWhite: '#F9FAFB',
    darkGray: '#1F2937',
  }

  const styleSets = Object.values(editions).map((edition) => ({
    id: edition.slug,
    name: edition.name,
    desc: edition.tagline,
  }))

  return (
    <div
      style={{
        fontFamily: 'Inter, system-ui, sans-serif',
        color: brand.darkGray,
        background: brand.white,
      }}
    >
      {/* HERO SECTION */}
      <header
        style={{
          backgroundColor: brand.blue,
          color: brand.white,
          padding: '4rem 2rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-block',
              border: `2px solid ${brand.teal}`,
              padding: '10px',
              marginBottom: '2rem',
              transform: 'rotate(-2deg)',
            }}
          >
            <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700, letterSpacing: '2px' }}>
              CLEARLINE7
            </h3>
          </div>

          <h1
            style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}
          >
            One clear way to write.
            <br />
            <span style={{ color: brand.teal }}>Seven proven styles.</span>
            <br />
            Zero confusion.
          </h1>

          <p
            style={{
              fontSize: '1.25rem',
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto 3rem auto',
            }}
          >
            The governance standard for teams who need their documentation to look like it came from
            one competent mind.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button
              style={{
                backgroundColor: brand.teal,
                color: brand.blue,
                padding: '1rem 2rem',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
              }}
            >
              Get the Standard
            </button>
            <button
              style={{
                backgroundColor: 'transparent',
                color: brand.white,
                border: `1px solid ${brand.white}`,
                padding: '1rem 2rem',
                borderRadius: '4px',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
              }}
            >
              View Documentation
            </button>
          </div>
        </div>
      </header>

      {/* THE PROBLEM / SOLUTION */}
      <section style={{ padding: '4rem 2rem', backgroundColor: brand.offWhite }}>
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          <div>
            <h2 style={{ color: brand.blue, fontSize: '2rem', marginBottom: '1rem' }}>
              The Problem: Entropy
            </h2>
            <p style={{ lineHeight: 1.6, fontSize: '1.1rem', color: brand.gray }}>
              Without a system, every document drifts. Fonts change. Headings inconsistent. Tone
              wobbles between "buddy" and "bureaucrat."
            </p>
            <div
              style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: '#fff',
                borderLeft: '4px solid #EF4444',
                color: '#EF4444',
                fontStyle: 'italic',
              }}
            >
              "We kind of prefer if you would maybe format it like this..."
            </div>
          </div>
          <div>
            <h2 style={{ color: brand.blue, fontSize: '2rem', marginBottom: '1rem' }}>
              The Solution: Governance
            </h2>
            <p style={{ lineHeight: 1.6, fontSize: '1.1rem', color: brand.gray }}>
              Clearline7 enforces structure. It is not a suggestion. It is a programmatic standard
              for professional communication.
            </p>
            <div
              style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: '#fff',
                borderLeft: `4px solid ${brand.teal}`,
                color: brand.blue,
                fontWeight: 600,
              }}
            >
              "Use this format to ensure every memo is easy to review."
            </div>
          </div>
        </div>
      </section>

      {/* THE 7 SETS */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ color: brand.blue, fontSize: '2.5rem', marginBottom: '1rem' }}>
              The Seven Sets
            </h2>
            <p style={{ color: brand.gray }}>Select a calibrated edition based on your audience.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {styleSets.map((set) => (
              <Link
                key={set.id}
                to={`/editions/${set.id}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  padding: '2rem',
                  transition: 'transform 0.2s',
                  display: 'block',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '4px',
                    backgroundColor: brand.teal,
                    marginBottom: '1.5rem',
                  }}
                />
                <h3 style={{ fontSize: '1.5rem', color: brand.blue, marginBottom: '0.5rem' }}>
                  {set.name}
                </h3>
                <p style={{ color: brand.gray, lineHeight: 1.5 }}>{set.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: '#111827',
          color: brand.gray,
          padding: '4rem 2rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h4 style={{ color: brand.white, letterSpacing: '1px', marginBottom: '1rem' }}>
            CLEARLINE7
          </h4>
          <p style={{ fontSize: '0.9rem', marginBottom: '2rem' }}>
            Built on 30 years of systems thinking. Encoding expertise into programmatic standards.
          </p>
          <div style={{ fontSize: '0.8rem', opacity: 0.5 }}>
            © 2025 Clearline7 Systems. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ClearlineLandingPage
