import { siteContent } from '../content/siteContent'

type ContactDetailsProps = {
  showManagingDirector?: boolean
}

export default function ContactDetails({ showManagingDirector = false }: ContactDetailsProps) {
  return (
    <address className="contact-details">
      <p>{siteContent.company.legalEntity}</p>
      {siteContent.company.address.map((line) => (
        <p key={line}>{line}</p>
      ))}
      <p>
        Telefon:{' '}
        <a href={`tel:${siteContent.company.phone}`}>{siteContent.company.phone}</a>
      </p>
      <p>
        E-Mail:{' '}
        <a href={`mailto:${siteContent.company.email}`}>{siteContent.company.email}</a>
      </p>
      {showManagingDirector ? <p>Geschäftsführung: {siteContent.company.managingDirector}</p> : null}
    </address>
  )
}
