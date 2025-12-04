import { BoxKit } from './BoxKit'
import { TechLaw } from './TechLaw'
import { ElementSeven } from './ElementSeven'

describe('brand-aesthetics sets', () => {
  test('BoxKit core tokens', () => {
    expect(BoxKit.colors.primary).toBeDefined()
    expect(BoxKit.typography.bodyFont).toContain('Inter')
    expect(BoxKit.spacing.scale['16']).toBeDefined()
  })

  test('TechLaw core tokens', () => {
    expect(TechLaw.colors.primary).toBeDefined()
    expect(TechLaw.typography.headingFont).toContain('Merriweather')
    expect(TechLaw.spacing.scale['20']).toBeDefined()
  })

  test('ElementSeven core tokens', () => {
    expect(ElementSeven.colors.primary).toBeDefined()
    expect(ElementSeven.typography.monoFont).toContain('JetBrains')
    expect(ElementSeven.colors.surface).toBeDefined() // Validating extra token
    expect(ElementSeven.spacing.scale['12']).toBeDefined()
  })
})
