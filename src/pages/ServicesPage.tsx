import PageMeta from '../components/PageMeta'
import { siteContent } from '../content/siteContent'

export default function ServicesPage() {
  return (
    <>
      <PageMeta title={siteContent.servicesPage.metaTitle} description={siteContent.servicesPage.metaDescription} />
      <section>
        <h1>Leistungen</h1>
        <p>{siteContent.servicesPage.intro}</p>
      </section>
      <section>
        <div className="card-grid">
          {siteContent.services.map((service) => (
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
