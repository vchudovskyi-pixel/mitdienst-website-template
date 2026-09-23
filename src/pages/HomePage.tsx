import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { siteContent } from '../content/siteContent'

export default function HomePage() {
  return (
    <>
      <PageMeta title={siteContent.home.metaTitle} description={siteContent.home.metaDescription} />

      <section className="hero">
        <p className="eyebrow">{siteContent.home.eyebrow}</p>
        <h1>{siteContent.home.heading}</h1>
        <p>{siteContent.home.intro}</p>
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
          {siteContent.serviceHighlights.map((service) => (
            <article key={service.title} className="card">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>{siteContent.home.reasonsHeading}</h2>
        <div className="split">
          {siteContent.differentiators.map((item) => (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Ausgewählte Referenz-Platzhalter</h2>
        <p>{siteContent.home.referencesIntro}</p>
        <div className="card-grid">
          {siteContent.references.slice(0, 3).map((project) => (
            <article key={project.name} className="card">
              <h3>{project.name}</h3>
              <p>{project.focus}</p>
            </article>
          ))}
        </div>
        <p>
          <Link to="/referenzen">Mehr Referenzen ansehen</Link>
        </p>
      </section>

      <section>
        <h2>Unser Ablauf</h2>
        <ol className="process-list">
          {siteContent.process.map((step) => (
            <li key={step.title}>
              <strong>{step.title}</strong>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="final-cta">
        <h2>{siteContent.home.finalCtaHeading}</h2>
        <p>{siteContent.home.finalCtaText}</p>
        <Link className="btn btn-primary" to="/angebot">
          Zum Projektfragebogen
        </Link>
      </section>
    </>
  )
}
