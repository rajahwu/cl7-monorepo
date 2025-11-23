import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { ThemeProvider } from '@clearline7/theme'
import { Clearline7 } from '@clearline7/set-definitions'
import { Navigation } from './components/Navigation'
import Overview from './pages/Overview'
import SpecimenPage from './pages/SpecimenPage'

// Component pages
import BlockquotePage from './pages/components/BlockquotePage'
import HeadingPage from './pages/components/HeadingPage'
import ParagraphPage from './pages/components/ParagraphPage'
import CodePage from './pages/components/CodePage'
import ListPage from './pages/components/ListPage'
import CardPage from './pages/components/CardPage'
import ButtonPage from './pages/components/ButtonPage'
import HeaderPage from './pages/components/HeaderPage'
import FooterPage from './pages/components/FooterPage'
import NavigationPage from './pages/components/NavigationPage'

// Style set pages
import Clearline7Page from './pages/sets/Clearline7Page'
import BlogPostsPage from './pages/sets/BlogPostsPage'
import ClericalProPage from './pages/sets/ClericalProPage'
import ClerkRoomPage from './pages/sets/ClerkRoomPage'
import FederalFlowPage from './pages/sets/FederalFlowPage'
import TechDocsPage from './pages/sets/TechDocsPage'
import WikiGuidelinesPage from './pages/sets/WikiGuidelinesPage'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(window.innerWidth > 768)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <ThemeProvider setDefinition={Clearline7}>
      <BrowserRouter>
        <div style={{ display: 'flex' }}>
          <Navigation isOpen={isNavOpen} toggle={toggleNav} />
          <main style={{
            marginLeft: isNavOpen ? '250px' : '0',
            padding: '40px',
            flex: 1,
            maxWidth: '900px',
            transition: 'margin-left 0.3s',
          }}>
            <button
              onClick={toggleNav}
              style={{
                position: 'fixed',
                top: '20px',
                left: '20px',
                zIndex: 1000,
                display: isNavOpen ? 'none' : 'block',
                padding: '10px',
                backgroundColor: '#f5f5f5',
                border: '1px solid #ddd',
                borderRadius: '4px',
              }}
            >
              Menu
            </button>
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/specimen" element={<SpecimenPage />} />

              {/* Document Components */}
              <Route path="/components/blockquote" element={<BlockquotePage />} />
              <Route path="/components/heading" element={<HeadingPage />} />
              <Route path="/components/paragraph" element={<ParagraphPage />} />
              <Route path="/components/code" element={<CodePage />} />
              <Route path="/components/list" element={<ListPage />} />
              <Route path="/components/card" element={<CardPage />} />

              {/* UI Components */}
              <Route path="/components/button" element={<ButtonPage />} />
              <Route path="/components/header" element={<HeaderPage />} />
              <Route path="/components/footer" element={<FooterPage />} />
              <Route path="/components/navigation" element={<NavigationPage />} />

              {/* Style Sets */}
              <Route path="/sets/clearline7" element={<Clearline7Page />} />
              <Route path="/sets/blog-posts" element={<BlogPostsPage />} />
              <Route path="/sets/clerical-pro" element={<ClericalProPage />} />
              <Route path="/sets/clerkroom" element={<ClerkRoomPage />} />
              <Route path="/sets/federal" element={<FederalFlowPage />} />
              <Route path="/sets/techdocs" element={<TechDocsPage />} />
              <Route path="/sets/wiki" element={<WikiGuidelinesPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
