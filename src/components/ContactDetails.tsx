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
      <p>Telefon: {siteContent.company.phone}</p>
      <p>E-Mail: {siteContent.company.email}</p>
      {showManagingDirector ? <p>Geschäftsführung: {siteContent.company.managingDirector}</p> : null}
    </address>
  )
}
