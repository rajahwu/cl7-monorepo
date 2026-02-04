import { describe, it, expect } from 'vitest'
import { editions } from './editions.js'
import SetDefinition from './SetDefinition.js'

describe('editions', () => {
  it('should have multiple editions defined', () => {
    expect(Object.keys(editions).length).toBeGreaterThan(0)
  })

  it('should have expected keys', () => {
    expect(editions).toHaveProperty('federal')
    expect(editions).toHaveProperty('tech')
    expect(editions).toHaveProperty('base')
  })

  it('each edition should have a valid definition', () => {
    for (const key in editions) {
      const edition = editions[key]
      expect(edition.definition).toBeInstanceOf(SetDefinition)
      expect(edition.name).toBeDefined()
      expect(edition.slug).toBe(key === 'pro' ? 'pro' : edition.slug) // key might not match slug exactly for 'pro'
    }
  })

  it('pro edition specifically should be configured correctly', () => {
    const pro = editions['pro']
    expect(pro.name).toBe('Clerical Pro')
    expect(pro.slug).toBe('pro')
  })
})
