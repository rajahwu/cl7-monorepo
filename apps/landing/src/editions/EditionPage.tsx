// apps/landing/src/editions/EditionPage.tsx
import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { editions } from '@clearline7/set-definitions'
import { EditionHero } from './EditionHero'
import { EditionFeatures } from './EditionFeatures'

export function EditionPage() {
  const { editionSlug } = useParams<{ editionSlug: string }>()

  // Find the edition that matches the slug
  const edition = Object.values(editions).find((e) => e.slug === editionSlug)

  const [formData, setFormData] = useState({ name: '', email: '', role: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', role: '' })
  }

  if (!edition) {
    return (
      <div style={{ padding: '80px 20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Edition not found</h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          The edition "{editionSlug}" does not exist.
        </p>
        <Link
          to="/"
          style={{
            padding: '10px 20px',
            background: '#1E3A8A',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: 600,
          }}
        >
          Return Home
        </Link>
      </div>
    )
  }

  return (
    <div
      style={{
        background: edition.definition.colors.bg,
        color: edition.definition.colors.text,
        minHeight: '100vh',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      {/* Header */}
      <header
        style={{
          borderBottom: `1px solid ${edition.definition.colors.border}`,
          background: edition.definition.colors.bg,
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '18px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: edition.definition.colors.text,
              fontWeight: 700,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              textDecoration: 'none',
            }}
          >
            <span
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '4px',
                background: edition.definition.colors.primary,
              }}
            />
            Clearline 7
          </Link>
          <nav style={{ display: 'flex', gap: '24px' }}>
            <a
              href="#features"
              style={{
                color: edition.definition.colors.muted,
                textDecoration: 'none',
                fontSize: '14px',
              }}
            >
              Features
            </a>
            <a
              href="#pricing"
              style={{
                color: edition.definition.colors.muted,
                textDecoration: 'none',
                fontSize: '14px',
              }}
            >
              Pricing
            </a>
            <Link
              to="/"
              style={{
                color: edition.definition.colors.muted,
                background: 'none',
                border: 'none',
                fontSize: '14px',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              All Editions
            </Link>
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        <EditionHero edition={edition} />
        <EditionFeatures edition={edition} />

        {/* Pricing */}
        <section id="pricing" style={{ padding: '50px 0' }}>
          <h2
            style={{
              fontSize: '32px',
              marginBottom: '24px',
              color: edition.definition.colors.primary,
            }}
          >
            Simple Pricing
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            <div
              style={{
                background: edition.definition.colors.card,
                border: `1px solid ${edition.definition.colors.border}`,
                borderRadius: '12px',
                padding: '24px',
              }}
            >
              <h3 style={{ color: edition.definition.colors.primary, margin: 0 }}>Starter</h3>
              <div
                style={{
                  fontSize: '36px',
                  fontWeight: 700,
                  color: edition.definition.colors.primary,
                  margin: '12px 0',
                }}
              >
                $39
              </div>
              <p style={{ color: edition.definition.colors.muted, marginBottom: '18px' }}>
                {edition.name} Quick Style Set
              </p>
              <button
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  border: `1px solid ${edition.definition.colors.primary}`,
                  background: edition.definition.colors.primary,
                  color: '#fff',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Get Started
              </button>
            </div>
            <div
              style={{
                background: edition.definition.colors.card,
                border: `2px solid ${edition.definition.colors.primary}`,
                borderRadius: '12px',
                padding: '24px',
              }}
            >
              <h3 style={{ color: edition.definition.colors.primary, margin: 0 }}>Pro Bundle</h3>
              <div
                style={{
                  fontSize: '36px',
                  fontWeight: 700,
                  color: edition.definition.colors.primary,
                  margin: '12px 0',
                }}
              >
                $149
              </div>
              <p style={{ color: edition.definition.colors.muted, marginBottom: '18px' }}>
                All 7 editions + Notion library
              </p>
              <button
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  border: 'none',
                  background: edition.definition.colors.primary,
                  color: '#fff',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Get Pro Bundle
              </button>
            </div>
          </div>
        </section>

        {/* Form */}
        <section id="form" style={{ padding: '50px 0 100px 0' }}>
          <h2
            style={{
              fontSize: '32px',
              marginBottom: '24px',
              color: edition.definition.colors.primary,
            }}
          >
            Try {edition.name}
          </h2>
          <div
            style={{
              maxWidth: '500px',
              background: edition.definition.colors.card,
              border: `1px solid ${edition.definition.colors.border}`,
              borderRadius: '12px',
              padding: '24px',
            }}
          >
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '16px' }}>
                <label
                  style={{
                    display: 'block',
                    fontWeight: 600,
                    marginBottom: '6px',
                    color: edition.definition.colors.text,
                  }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: `1px solid ${edition.definition.colors.border}`,
                    fontSize: '14px',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label
                  style={{
                    display: 'block',
                    fontWeight: 600,
                    marginBottom: '6px',
                    color: edition.definition.colors.text,
                  }}
                >
                  Work Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: `1px solid ${edition.definition.colors.border}`,
                    fontSize: '14px',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label
                  style={{
                    display: 'block',
                    fontWeight: 600,
                    marginBottom: '6px',
                    color: edition.definition.colors.text,
                  }}
                >
                  Role
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: `1px solid ${edition.definition.colors.border}`,
                    fontSize: '14px',
                    boxSizing: 'border-box',
                  }}
                >
                  <option value="">Select your role</option>
                  <option>Admin / Ops</option>
                  <option>Paralegal / Clerk</option>
                  <option>Technical Writer</option>
                  <option>Engineer / Dev</option>
                </select>
              </div>
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  border: 'none',
                  background: edition.definition.colors.primary,
                  color: '#fff',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '16px',
                }}
              >
                Send me the template
              </button>
              {submitted && (
                <p
                  style={{
                    marginTop: '12px',
                    color: edition.definition.colors.success,
                    fontWeight: 600,
                  }}
                >
                  ✓ Check your email for the download link!
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{ borderTop: `1px solid ${edition.definition.colors.border}`, padding: '30px 0' }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 20px',
            textAlign: 'center',
            color: edition.definition.colors.muted,
          }}
        >
          <p>© 2025 Clearline 7. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
