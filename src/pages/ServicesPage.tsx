import PageMeta from '../components/PageMeta'

const services = [
  {
    title: 'Webdesign',
    text: 'Gestaltung moderner, markenpassender Interfaces mit klarer Informationsführung und überzeugender visueller Hierarchie.',
  },
  {
    title: 'Website-Entwicklung',
    text: 'Technische Umsetzung performanter, responsiver Websites mit Fokus auf Wartbarkeit, Sicherheit und Erweiterbarkeit.',
  },
  {
    title: 'Website-Relaunch',
    text: 'Neuausrichtung bestehender Auftritte inklusive Inhaltsmigration, Strukturverbesserung und sauberem Go-live-Prozess.',
  },
  {
    title: 'Conversion-Landingpages',
    text: 'Gezielte Seiten für Kampagnen und Angebote, optimiert für klare Handlungsaufforderungen und messbare Ergebnisse.',
  },
  {
    title: 'SEO-Basisoptimierung',
    text: 'Solide technische und inhaltliche Grundlagen für bessere Sichtbarkeit in Suchmaschinen ohne unrealistische Versprechen.',
  },
  {
    title: 'Digitale Strategie',
    text: 'Priorisierte Roadmaps für Inhalte, Seitenaufbau und digitale Touchpoints im Einklang mit Ihren Vertriebszielen.',
  },
  {
    title: 'Wartung & Support',
    text: 'Regelmäßige technische Pflege, Qualitätschecks und schnelle Unterstützung bei inhaltlichen oder funktionalen Anpassungen.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageMeta
        title="Leistungen"
        description="Leistungen der Muster Digital GmbH: Webdesign, Entwicklung, Relaunch, Landingpages, SEO-Grundlagen, Strategie und Support."
      />
      <section>
        <h1>Leistungen</h1>
        <p>
          Wir unterstützen Unternehmen mit klaren, praxisnahen Weblösungen – von der ersten Struktur bis zur laufenden Weiterentwicklung.
        </p>
      </section>
      <section>
        <div className="card-grid">
          {services.map((service) => (
            <article key={service.title} className="card">
              <h2>{service.title}</h2>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
