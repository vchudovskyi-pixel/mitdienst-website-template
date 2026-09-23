import PageMeta from '../components/PageMeta'
import { siteContent } from '../content/siteContent'

const cards = [
  {
    title: 'Unsere Haltung',
    text: 'Beschreiben Sie hier, wofür [COMPANY_NAME] steht, welche Zielgruppen angesprochen werden und welchen Anspruch das Unternehmen an seine Website stellt.',
  },
  {
    title: 'Unsere Zusammenarbeit',
    text: 'Nutzen Sie diesen Abschnitt für Projektabläufe, Ansprechpartner, Entscheidungswege und Kommunikationsprinzipien.',
  },
  {
    title: 'Unser Qualitätsverständnis',
    text: 'Dokumentieren Sie hier Standards zu Barrierefreiheit, Responsivität, Wartbarkeit, Qualitätssicherung oder Support.',
  },
] as const

export default function AboutPage() {
  return (
    <>
      <PageMeta title={siteContent.aboutPage.metaTitle} description={siteContent.aboutPage.metaDescription} />
      <section>
        <h1>Über uns</h1>
        <p>{siteContent.aboutPage.intro}</p>
      </section>
      <section className="split">
        {cards.map((card) => (
          <article key={card.title} className="card">
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </article>
        ))}
      </section>
    </>
  )
}
