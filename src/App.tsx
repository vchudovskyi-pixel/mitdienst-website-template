import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import { siteContent } from './content/siteContent'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import LegalPlaceholderPage from './pages/LegalPlaceholderPage'
import NotFoundPage from './pages/NotFoundPage'
import OfferPage from './pages/OfferPage'
import ReferencesPage from './pages/ReferencesPage'
import ServicesPage from './pages/ServicesPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/leistungen" element={<ServicesPage />} />
        <Route path="/referenzen" element={<ReferencesPage />} />
        <Route path="/ueber-uns" element={<AboutPage />} />
        <Route path="/angebot" element={<OfferPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route
          path="/impressum"
          element={<LegalPlaceholderPage title="Impressum" description={siteContent.legalPages.impressumDescription} />}
        />
        <Route
          path="/datenschutz"
          element={<LegalPlaceholderPage title="Datenschutz" description={siteContent.legalPages.privacyDescription} />}
        />
        <Route path="/start" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

  return (
    <BrowserRouter basename={baseUrl}>
      <AppRoutes />
    </BrowserRouter>
  )
}
