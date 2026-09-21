import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'

export default function NotFoundPage() {
  return (
    <>
      <PageMeta title="Seite nicht gefunden" description="Die angeforderte Seite wurde nicht gefunden." />
      <section>
        <h1>Seite nicht gefunden</h1>
        <p>Die gewünschte Seite existiert nicht oder wurde verschoben.</p>
        <Link className="btn btn-primary" to="/">
          Zur Startseite
        </Link>
      </section>
    </>
  )
}
