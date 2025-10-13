import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import Home from '@/pages/Home'
import Creator from '@/pages/Creator'
import Download from '@/pages/Download'
import FAQ from '@/pages/FAQ'
import License from '@/pages/License'

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creator" element={<Creator />} />
          <Route path="/download" element={<Download />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/license" element={<License />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App 
