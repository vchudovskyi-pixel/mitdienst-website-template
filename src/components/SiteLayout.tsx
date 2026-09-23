import { useRef } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { siteContent } from '../content/siteContent'

export default function SiteLayout() {
  const mobileNavRef = useRef<HTMLDetailsElement>(null)

  const closeMobileNav = () => {
    if (mobileNavRef.current) {
      mobileNavRef.current.open = false
    }
  }

  return (
    <>
      <a className="skip-link" href="#hauptinhalt">
        Zum Inhalt springen
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <NavLink to="/" className="brand" aria-label={`${siteContent.company.name} Startseite`}>
            {siteContent.company.name}
          </NavLink>
          <details className="mobile-nav" ref={mobileNavRef}>
            <summary aria-label="Menü öffnen">Menü</summary>
            <nav aria-label="Hauptnavigation">
              <ul>
                {siteContent.navigation.map((link) => (
                  <li key={link.to}>
                    <NavLink to={link.to} onClick={closeMobileNav}>
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
          <nav className="desktop-nav" aria-label="Hauptnavigation">
            <ul>
              {siteContent.navigation.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="hauptinhalt" className="container" tabIndex={-1}>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <strong>{siteContent.company.name}</strong>
            <p>{siteContent.company.tagline}</p>
            <address className="contact-details">
              <p>{siteContent.company.legalEntity}</p>
              {siteContent.company.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>Telefon: {siteContent.company.phone}</p>
              <p>E-Mail: {siteContent.company.email}</p>
            </address>
          </div>
          <div>
            <h2 className="footer-heading">Schnellzugriff</h2>
            <ul>
              {siteContent.navigation.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="footer-heading">Rechtliches</h2>
            <ul>
              <li>
                <NavLink to="/impressum">Impressum</NavLink>
              </li>
              <li>
                <NavLink to="/datenschutz">Datenschutz</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
