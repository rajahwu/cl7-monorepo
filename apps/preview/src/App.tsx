import { useState } from 'react'
import { SetDefinitionProvider } from '@clearline7/theme'
import {
  Clearline7,
  BlogPosts,
  ClericalOfficePro,
  ClerkRoomStandard,
  FederalFlow,
  TechDocs,
  WikiGuidelines,
  SetDefinition
} from '@clearline7/set-definitions'
import { SpecimenSheet } from '@clearline7/components'

const STYLE_SETS: Record<string, SetDefinition> = {
  'Clearline 7': Clearline7,
  'Blog Posts': BlogPosts,
  'Clerical Office Pro': ClericalOfficePro,
  'ClerkRoom Standard': ClerkRoomStandard,
  'Federal Flow': FederalFlow,
  'TechDocs': TechDocs,
  'Wiki Guidelines': WikiGuidelines,
}

function App() {
  const [activeSet, setActiveSet] = useState('Clearline 7')

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{
        width: '250px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRight: '1px solid #ddd',
      }}>
        <h2 style={{ margin: '0 0 20px 0', fontSize: '18px' }}>Preview Controls</h2>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Style Set
          </label>
          <select
            value={activeSet}
            onChange={(e) => setActiveSet(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          >
            {Object.keys(STYLE_SETS).map(key => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
        </div>

        <div style={{ fontSize: '14px', color: '#666' }}>
          <p>Select a style set to preview how your document will look with different styling.</p>
        </div>
      </aside>

      <main style={{ flex: 1, overflow: 'auto' }}>
        <SetDefinitionProvider setDefinition={STYLE_SETS[activeSet]}>
          <SpecimenSheet title={`${activeSet} Preview`} />
        </SetDefinitionProvider>
      </main>
    </div>
  )
}

export default App
