import PageMeta from '../components/PageMeta'
import { siteContent } from '../content/siteContent'

export default function AboutPage() {
  return (
    <>
      <PageMeta title={siteContent.aboutPage.metaTitle} description={siteContent.aboutPage.metaDescription} />
      <section>
        <h1>Über uns</h1>
        <p>{siteContent.aboutPage.intro}</p>
      </section>
      <section className="split">
        {siteContent.aboutPage.cards.map((card) => (
          <article key={card.title} className="card">
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </article>
        ))}
      </section>
    </>
  )
}
