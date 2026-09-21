import { useRef } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const links = [
  { to: '/', label: 'Start' },
  { to: '/leistungen', label: 'Leistungen' },
  { to: '/referenzen', label: 'Referenzen' },
  { to: '/ueber-uns', label: 'Über uns' },
  { to: '/angebot', label: 'Angebot' },
  { to: '/kontakt', label: 'Kontakt' },
]

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
          <NavLink to="/" className="brand" aria-label="Muster Digital GmbH Startseite">
            Muster Digital GmbH
          </NavLink>
          <details className="mobile-nav" ref={mobileNavRef}>
            <summary aria-label="Menü öffnen">Menü</summary>
            <nav aria-label="Hauptnavigation">
              <ul>
                {links.map((link) => (
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
              {links.map((link) => (
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
            <strong>Muster Digital GmbH</strong>
            <p>
              Fiktive Digitalagentur für moderne Websites, klare Prozesse und nachhaltige Ergebnisse für den Mittelstand.
            </p>
          </div>
          <div>
            <h2 className="footer-heading">Schnellzugriff</h2>
            <ul>
              {links.map((link) => (
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
