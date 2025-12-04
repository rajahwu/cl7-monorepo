import React from 'react'
import { editions, EditionEntry } from '@clearline7/set-definitions'
import { useSearchParams } from 'react-router-dom'

export function StyleSetSelector() {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentSlug = searchParams.get('set') || 'federal'

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({ set: e.target.value })
  }

  const editionsList = Object.values(editions) as EditionEntry[]

  return (
    <div
      style={{
        padding: '1rem',
        borderBottom: '1px solid #ccc',
        background: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <label htmlFor="style-set-select" style={{ fontWeight: 'bold' }}>
        Active Style Set:
      </label>
      <select
        id="style-set-select"
        value={currentSlug}
        onChange={handleChange}
        style={{ padding: '0.5rem', borderRadius: '4px' }}
      >
        {editionsList.map((edition) => (
          <option key={edition.slug} value={edition.slug}>
            {edition.name}
          </option>
        ))}
      </select>
      <span style={{ fontSize: '0.9rem', color: '#666' }}>
        {editionsList.find((e) => e.slug === currentSlug)?.tagline}
      </span>
    </div>
  )
}
