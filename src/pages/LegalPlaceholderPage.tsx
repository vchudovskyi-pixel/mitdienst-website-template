import PageMeta from '../components/PageMeta'
import { siteContent } from '../content/siteContent'

type LegalPlaceholderPageProps = {
  title: string
  description: string
}

export default function LegalPlaceholderPage({ title, description }: LegalPlaceholderPageProps) {
  const checklistItems = [
    `Firma / Rechtsform: ${siteContent.company.legalEntity}`,
    `Vertretungsberechtigte Person: ${siteContent.company.managingDirector}`,
    `Kontaktangaben: ${siteContent.company.phone}, ${siteContent.company.email}`,
    `Anschrift: ${siteContent.company.address.join(', ')}`,
    ...siteContent.legalChecklistItems,
  ]

  return (
    <>
      <PageMeta title={title} description={description} />
      <section>
        <h1>{title}</h1>
        <p className="note">
          Platzhalter: Diese Seite enthält keine rechtsverbindlichen Angaben und muss vor produktivem Einsatz mit freigegebenen Unternehmens- und Rechtsinformationen ergänzt werden.
        </p>
      </section>
      <section className="card">
        <h2>Erforderliche Ergänzungen vor Livegang</h2>
        <ul>
          {checklistItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  )
}
