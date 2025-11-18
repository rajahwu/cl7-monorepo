import { BrowserRouter, Routes, Route } from 'react-router'
import { ThemeProvider } from '@clearline7/theme'
import { Clearline7 } from '@clearline7/set-definitions'
import Overview from './pages/Overview'
import ChapterOne from './pages/ChapterOne'
import QABoard from './pages/QABoard'

function App() {
  return (
    <ThemeProvider setDefinition={Clearline7}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/intro" element={<ChapterOne />} />
          <Route path="/qa" element={<QABoard />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
