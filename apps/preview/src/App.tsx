import { useSearchParams, Link, Routes, Route, Navigate } from 'react-router-dom'
import { SetDefinitionProvider } from '@clearline7/theme'
import { editions, EditionEntry } from '@clearline7/set-definitions'
import { StyleSetSelector } from './components/StyleSetSelector'

// Pages
import SpecimenPage from './pages/SpecimenPage'
import { DocumentPreview } from './pages/DocumentPreview'
import { ColorSpecimen } from './pages/specimens/ColorSpecimen'
import { TypographySpecimen } from './pages/specimens/TypographySpecimen'
import { SpacingSpecimen } from './pages/specimens/SpacingSpecimen'
import BlockquotePage from './pages/components/BlockquotePage'
import ButtonPage from './pages/components/ButtonPage'
import CardPage from './pages/components/CardPage'
import CodePage from './pages/components/CodePage'
import FooterPage from './pages/components/FooterPage'
import HeaderPage from './pages/components/HeaderPage'
import HeadingPage from './pages/components/HeadingPage'
import ListPage from './pages/components/ListPage'
import NavigationPage from './pages/components/NavigationPage'
import ParagraphPage from './pages/components/ParagraphPage'

export default function App() {
  const [searchParams] = useSearchParams()
  const currentSlug = searchParams.get('set') || 'federal'

  // Find the definition object based on the slug
  const activeEdition =
    (Object.values(editions) as EditionEntry[]).find((e) => e.slug === currentSlug) ||
    editions.federal

  return (
    <SetDefinitionProvider setDefinition={activeEdition.definition}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <header style={{ borderBottom: '1px solid #ccc' }}>
          <StyleSetSelector />
        </header>

        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          <nav
            style={{
              width: '250px',
              borderRight: '1px solid #ccc',
              overflowY: 'auto',
              padding: '1rem',
              background: '#f9f9f9',
            }}
          >
            <h3 style={{ marginTop: 0 }}>Previews</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to={`/document?set=${currentSlug}`}>Document Preview</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to={`/specimen?set=${currentSlug}`}>Specimen Sheet</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to={`/specimens/typography?set=${currentSlug}`}>Typography</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to={`/specimens/colors?set=${currentSlug}`}>Colors</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to={`/specimens/spacing?set=${currentSlug}`}>Spacing</Link>
              </li>
            </ul>

            <h3>Components</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <hr style={{ margin: '1rem 0' }} />
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to={`/components/blockquote?set=${currentSlug}`}>Blockquote</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to={`/components/button?set=${currentSlug}`}>Button</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to={`/components/card?set=${currentSlug}`}>Card</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to={`/components/code?set=${currentSlug}`}>Code</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to={`/components/footer?set=${currentSlug}`}>Footer</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to={`/components/header?set=${currentSlug}`}>Header</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to={`/components/heading?set=${currentSlug}`}>Heading</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to={`/components/list?set=${currentSlug}`}>List</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to={`/components/navigation?set=${currentSlug}`}>Navigation</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to={`/components/paragraph?set=${currentSlug}`}>Paragraph</Link>
              </li>
            </ul>
          </nav>

          <main style={{ flex: 1, overflowY: 'auto', padding: '2rem', background: '#fff' }}>
            <Routes>
              <Route path="/" element={<Navigate to={`/document?set=${currentSlug}`} replace />} />
              <Route path="/document" element={<DocumentPreview />} />
              <Route path="/specimen" element={<SpecimenPage />} />
              <Route path="/specimens/typography" element={<TypographySpecimen />} />
              <Route path="/specimens/colors" element={<ColorSpecimen />} />
              <Route path="/specimens/spacing" element={<SpacingSpecimen />} />
              <Route path="/components/blockquote" element={<BlockquotePage />} />
              <Route path="/components/button" element={<ButtonPage />} />
              <Route path="/components/card" element={<CardPage />} />
              <Route path="/components/code" element={<CodePage />} />
              <Route path="/components/footer" element={<FooterPage />} />
              <Route path="/components/header" element={<HeaderPage />} />
              <Route path="/components/heading" element={<HeadingPage />} />
              <Route path="/components/list" element={<ListPage />} />
              <Route path="/components/navigation" element={<NavigationPage />} />
              <Route path="/components/paragraph" element={<ParagraphPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </SetDefinitionProvider>
  )
}
