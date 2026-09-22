import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="Digitale Websites für den Mittelstand"
        description="Muster Digital GmbH entwickelt hochwertige Websites, Relaunches und digitale Strategien für kleine und mittlere Unternehmen."
      />

      <section className="hero">
        <p className="eyebrow">Digitale Sichtbarkeit mit Substanz</p>
        <h1>Websites, die Vertrauen schaffen und Anfragen bringen.</h1>
        <p>
          Wir konzipieren und entwickeln moderne Unternehmenswebsites für deutsche KMU – klar strukturiert, technisch sauber und auf Conversion ausgerichtet.
        </p>
        <div className="actions">
          <Link className="btn btn-primary" to="/angebot">
            Projekt anfragen
          </Link>
          <Link className="btn btn-secondary" to="/leistungen">
            Leistungen ansehen
          </Link>
        </div>
      </section>

      <section>
        <h2>Unsere Leistungen</h2>
        <div className="card-grid">
          <article className="card">
            <h3>Webdesign & UX</h3>
            <p>Informationsarchitektur, Wireframes und UI-Design mit Fokus auf Klarheit und Vertrauen.</p>
          </article>
          <article className="card">
            <h3>Technische Entwicklung</h3>
            <p>Performante, wartbare Umsetzung mit modernen Frontend-Standards und sauberer Codebasis.</p>
          </article>
          <article className="card">
            <h3>Relaunch & Migration</h3>
            <p>Strukturierter Übergang von bestehenden Websites ohne unnötige Risiken oder lange Ausfallzeiten.</p>
          </article>
        </div>
      </section>

      <section>
        <h2>Warum Muster Digital?</h2>
        <div className="split">
          <div>
            <h3>Strategisch statt nur hübsch</h3>
            <p>Jede Seite bekommt ein klares Ziel: informieren, qualifizieren und in Kontakt führen.</p>
          </div>
          <div>
            <h3>Technisch belastbar</h3>
            <p>Responsive Umsetzung, schnelle Ladezeiten und klare Komponentenstruktur für langfristige Pflege.</p>
          </div>
          <div>
            <h3>Transparente Zusammenarbeit</h3>
            <p>Feste Ansprechpartner, nachvollziehbare Schritte und verständliche Empfehlungen.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Ausgewählte Demo-Projekte</h2>
        <p>Alle Beispiele sind fiktive Showcase-Projekte zur Veranschaulichung unserer Arbeitsweise.</p>
        <div className="card-grid">
          <article className="card">
            <h3>Alpenwerk Präzisionstechnik</h3>
            <p>Relaunch mit klarer Leistungsnavigation, Service-Landingpages und besserer Lead-Qualität.</p>
          </article>
          <article className="card">
            <h3>Nordlicht Energieberatung</h3>
            <p>Neubau einer erklärungsstarken Website mit Termin-CTA für B2B-Beratungsgespräche.</p>
          </article>
          <article className="card">
            <h3>RheinLogistik Systems</h3>
            <p>International vorbereiteter Unternehmensauftritt mit modularer Inhaltsstruktur.</p>
          </article>
        </div>
        <p>
          <Link to="/referenzen">Mehr Referenzen ansehen</Link>
        </p>
      </section>

      <section>
        <h2>Unser Ablauf</h2>
        <ol className="process-list">
          <li>
            <strong>Analyse</strong>
            <p>Ziele, Zielgruppen und Wettbewerb werden gemeinsam geschärft.</p>
          </li>
          <li>
            <strong>Konzept</strong>
            <p>Struktur, Inhalte und Seitenlogik entstehen als belastbare Entscheidungsgrundlage.</p>
          </li>
          <li>
            <strong>Umsetzung</strong>
            <p>Design, Entwicklung und Qualitätssicherung erfolgen iterativ und nachvollziehbar.</p>
          </li>
          <li>
            <strong>Weiterentwicklung</strong>
            <p>Nach Livegang begleiten wir Pflege, Tracking und Optimierung.</p>
          </li>
        </ol>
      </section>

      <section className="final-cta">
        <h2>Bereit für den nächsten Website-Schritt?</h2>
        <p>Nutzen Sie unseren strukturierten Projektfragebogen und erhalten Sie eine fundierte Erstbewertung.</p>
        <Link className="btn btn-primary" to="/angebot">
          Zum Projektfragebogen
        </Link>
      </section>
    </>
  )
}
