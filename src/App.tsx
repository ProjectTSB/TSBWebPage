import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import { Suspense } from 'react'
import lazyImport from './lib/lazyImport'
import LoadingOverlay from '@/components/LoadingOverlay'

const Home = lazyImport(() => import('@/pages/Home'))
const Creator = lazyImport(() => import('@/pages/Creator'))
const Download = lazyImport(() => import('@/pages/Download'))
const FAQ = lazyImport(() => import('@/pages/FAQ'))
const License = lazyImport(() => import('@/pages/License'))

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <div className="min-h-screen bg-background">
        <Suspense fallback={<LoadingOverlay />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/creator" element={<Creator />} />
            <Route path="/download" element={<Download />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/license" element={<License />} />
          </Routes>
        </Suspense>
      </div>
    </ThemeProvider>
  )
}

export default App
