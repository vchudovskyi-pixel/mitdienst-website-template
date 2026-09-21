import PageMeta from '../components/PageMeta'

const projects = [
  {
    name: 'Alpenwerk Präzisionstechnik',
    sector: 'Industriezulieferer',
    focus: 'Relaunch mit klarer Produktstruktur und Anfrage-Optimierung',
    result: 'Mehr qualifizierte Erstkontakte über strukturierte Leistungsseiten.',
  },
  {
    name: 'Nordlicht Energieberatung',
    sector: 'Beratung',
    focus: 'Neubau mit Fokus auf Vertrauensaufbau und Terminanfragen',
    result: 'Klarere Positionierung und verbesserte Kontaktquote über Mobilgeräte.',
  },
  {
    name: 'RheinLogistik Systems',
    sector: 'Logistik',
    focus: 'Mehrsprachig vorbereiteter Webauftritt mit modularem Content-System',
    result: 'Schnellere Inhaltspflege und konsistente Darstellung komplexer Leistungen.',
  },
  {
    name: 'Stadtgarten Wohnbau',
    sector: 'Bau & Immobilien',
    focus: 'Landingpage-System für neue Projekte mit regionalem SEO-Fokus',
    result: 'Bessere Auffindbarkeit für lokale Suchanfragen rund um Neubauprojekte.',
  },
]

export default function ReferencesPage() {
  return (
    <>
      <PageMeta
        title="Referenzen"
        description="Fiktive Demo-Referenzen der Muster Digital GmbH als Beispiel für Arbeitsweise, Struktur und Ergebnisse digitaler Projekte."
      />
      <section>
        <h1>Referenzen</h1>
        <p className="note">
          Hinweis: Alle folgenden Projekte sind fiktive Demo-Referenzen und dienen ausschließlich zur Veranschaulichung.
        </p>
      </section>
      <section className="stack">
        {projects.map((project) => (
          <article key={project.name} className="card">
            <h2>{project.name}</h2>
            <p>
              <strong>Branche:</strong> {project.sector}
            </p>
            <p>
              <strong>Projektfokus:</strong> {project.focus}
            </p>
            <p>
              <strong>Ergebnis:</strong> {project.result}
            </p>
          </article>
        ))}
      </section>
    </>
  )
}
