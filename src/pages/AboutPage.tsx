import PageMeta from '../components/PageMeta'

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="Über uns"
        description="Muster Digital GmbH: fiktive Digitalagentur mit klarem Fokus auf verständliche Prozesse, technische Qualität und partnerschaftliche Zusammenarbeit."
      />
      <section>
        <h1>Über uns</h1>
        <p>
          Die Muster Digital GmbH ist eine fiktive Agentur mit einem klaren Anspruch: digitale Auftritte entwickeln, die verständlich, wirksam und nachhaltig betreibbar sind.
        </p>
      </section>
      <section className="split">
        <article className="card">
          <h2>Unsere Haltung</h2>
          <p>
            Gute Websites sind keine Design-Dekoration. Sie verbinden Positionierung, Inhalte und Technik zu einem belastbaren Vertriebs- und Kommunikationskanal.
          </p>
        </article>
        <article className="card">
          <h2>Unsere Zusammenarbeit</h2>
          <p>
            Wir arbeiten transparent, mit klaren Meilensteinen und direktem Austausch. Entscheidungen werden nachvollziehbar dokumentiert.
          </p>
        </article>
        <article className="card">
          <h2>Unser Qualitätsverständnis</h2>
          <p>
            Wartbarer Code, zugängliche Oberflächen und solide SEO-Basics sind für uns keine Extras, sondern Standard.
          </p>
        </article>
      </section>
    </>
  )
}
