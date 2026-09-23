import PageMeta from '../components/PageMeta'
import { siteContent } from '../content/siteContent'

export default function ReferencesPage() {
  return (
    <>
      <PageMeta title={siteContent.referencesPage.metaTitle} description={siteContent.referencesPage.metaDescription} />
      <section>
        <h1>Referenzen</h1>
        <p className="note">{siteContent.referencesPage.note}</p>
      </section>
      <section className="stack">
        {siteContent.references.map((project) => (
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
