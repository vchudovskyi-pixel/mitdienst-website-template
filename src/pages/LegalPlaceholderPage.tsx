import PageMeta from '../components/PageMeta'

type LegalPlaceholderPageProps = {
  title: string
  description: string
}

export default function LegalPlaceholderPage({ title, description }: LegalPlaceholderPageProps) {
  return (
    <>
      <PageMeta title={title} description={description} />
      <section>
        <h1>{title}</h1>
        <p className="note">
          Platzhalter: Diese Seite enthält keine rechtsverbindlichen Angaben und muss vor produktivem Einsatz mit echten Unternehmens- und Rechtsinformationen ergänzt werden.
        </p>
      </section>
      <section className="card">
        <h2>Erforderliche Ergänzungen vor Livegang</h2>
        <ul>
          <li>Vollständige Unternehmensangaben und vertretungsberechtigte Personen</li>
          <li>Kontakt- und Registerdaten</li>
          <li>Rechtskonforme Datenschutzangaben inklusive Verarbeitungszwecke</li>
          <li>Informationen zu eingesetzten Diensten und Tracking-Tools</li>
        </ul>
      </section>
    </>
  )
}
