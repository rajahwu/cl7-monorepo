import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@clearline7/theme'
import { Clearline7 } from '@clearline7/set-definitions'
import { Navigation } from './components/Navigation'
import Overview from './pages/Overview'

// Guide pages (The Style Guide)
import {
  IntroPage,
  PhilosophyPage,
  MatrixPage,
  WritingPage,
  GrammarPage,
  LayoutPage,
  TemplatesPage,
  ImplementationPage,
  GovernancePage,
} from './pages/guide'

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
          <main
            style={{
              marginLeft: isNavOpen ? '250px' : '0',
              padding: '40px',
              flex: 1,
              maxWidth: '900px',
              transition: 'margin-left 0.3s',
            }}
          >
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

              {/* Part I: The Style System */}
              <Route path="/guide/intro" element={<IntroPage />} />
              <Route path="/guide/philosophy" element={<PhilosophyPage />} />
              <Route path="/guide/matrix" element={<MatrixPage />} />

              {/* Part II: The Core Guide */}
              <Route path="/guide/writing" element={<WritingPage />} />
              <Route path="/guide/grammar" element={<GrammarPage />} />
              <Route path="/guide/layout" element={<LayoutPage />} />

              {/* Part III: Implementation & Governance */}
              <Route path="/guide/templates" element={<TemplatesPage />} />
              <Route path="/guide/implementation" element={<ImplementationPage />} />
              <Route path="/guide/governance" element={<GovernancePage />} />

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
