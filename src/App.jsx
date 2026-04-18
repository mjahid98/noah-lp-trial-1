import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
import { LanguageProvider } from '@/context/LanguageContext'
import PageLayout    from '@layout/PageLayout/PageLayout'
import Home          from '@/pages/Home/Home'
import Privacy       from '@/pages/Privacy/Privacy'
import Imprint       from '@/pages/Imprint/Imprint'
import SwimmingPonds from '@/pages/SwimmingPonds/SwimmingPonds'
import GreenRoofs    from '@/pages/GreenRoofs/GreenRoofs'
import Gardens       from '@/pages/Gardens/Gardens'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/"               element={<Home />}          />
            <Route path="/swimming-ponds" element={<SwimmingPonds />} />
            <Route path="/green-roofs"    element={<GreenRoofs />}    />
            <Route path="/gardens"        element={<Gardens />}       />
            <Route path="/privacy"        element={<Privacy />}       />
            <Route path="/imprint"        element={<Imprint />}       />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
