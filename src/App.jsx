import { BrowserRouter, Routes, Route, Navigate, useLocation, useParams, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { LanguageProvider, useLanguage } from '@/context/LanguageContext'
import PageLayout    from '@layout/PageLayout/PageLayout'
import Home          from '@/pages/Home/Home'
import Privacy       from '@/pages/Privacy/Privacy'
import Imprint       from '@/pages/Imprint/Imprint'
import SwimmingPonds from '@/pages/SwimmingPonds/SwimmingPonds'
import GreenRoofs    from '@/pages/GreenRoofs/GreenRoofs'
import Gardens       from '@/pages/Gardens/Gardens'

const LANGS = ['en', 'fr', 'de']

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

function LangGuard() {
  const { lang } = useParams()
  const { setLang } = useLanguage()
  useEffect(() => {
    if (LANGS.includes(lang)) setLang(lang)
  }, [lang, setLang])
  if (!LANGS.includes(lang)) return <Navigate to="/en" replace />
  return <Outlet />
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/en" replace />} />
          <Route path="/:lang" element={<LangGuard />}>
            <Route element={<PageLayout />}>
              <Route index                    element={<Home />}          />
              <Route path="swimming-ponds"    element={<SwimmingPonds />} />
              <Route path="green-roofs"       element={<GreenRoofs />}    />
              <Route path="gardens"           element={<Gardens />}       />
              <Route path="privacy"           element={<Privacy />}       />
              <Route path="imprint"           element={<Imprint />}       />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  )
}
