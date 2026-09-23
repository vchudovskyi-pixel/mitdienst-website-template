import { siteContent } from '../content/siteContent'

type ContactDetailsProps = {
  showManagingDirector?: boolean
}

const isPlaceholderValue = (value: string) => /^\[.+\]$/.test(value)

const renderContactValue = (label: string, value: string, hrefPrefix: 'tel:' | 'mailto:') => (
  <p>
    {label}:{' '}
    {isPlaceholderValue(value) ? value : <a href={`${hrefPrefix}${value}`}>{value}</a>}
  </p>
)

export default function ContactDetails({ showManagingDirector = false }: ContactDetailsProps) {
  return (
    <address className="contact-details">
      <p>{siteContent.company.legalEntity}</p>
      {siteContent.company.address.map((line) => (
        <p key={line}>{line}</p>
      ))}
      {renderContactValue('Telefon', siteContent.company.phone, 'tel:')}
      {renderContactValue('E-Mail', siteContent.company.email, 'mailto:')}
      {showManagingDirector ? <p>Geschäftsführung: {siteContent.company.managingDirector}</p> : null}
    </address>
  )
}
