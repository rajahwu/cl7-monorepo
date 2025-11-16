import { BrowserRouter, Routes, Route } from 'react-router'
import { ThemeProvider } from '@clearline7/theme'
import { Clearline7 } from '@clearline7/set-definitions'
import Overview from './pages/Overview'
import ChapterOne from './pages/ChapterOne'

function App() {
  return (
    <ThemeProvider setDefinition={Clearline7}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/intro" element={<ChapterOne />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
