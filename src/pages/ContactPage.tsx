import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import PageMeta from '../components/PageMeta'

type ContactFormData = {
  name: string
  email: string
  company: string
  message: string
}

type ContactErrors = Partial<Record<keyof ContactFormData, string>>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactPage() {
  const [data, setData] = useState<ContactFormData>({ name: '', email: '', company: '', message: '' })
  const [errors, setErrors] = useState<ContactErrors>({})
  const [sent, setSent] = useState(false)
  const [formMessage, setFormMessage] = useState('')
  const summaryRef = useRef<HTMLDivElement>(null)
  const pendingFocusFieldRef = useRef<keyof ContactFormData | null>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const validate = () => {
    const nextErrors: ContactErrors = {}

    if (!data.name.trim()) nextErrors.name = 'Bitte geben Sie Ihren Namen ein.'
    if (!data.email.trim()) nextErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein.'
    else if (!emailPattern.test(data.email)) nextErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
    if (!data.message.trim()) nextErrors.message = 'Bitte geben Sie eine Nachricht ein.'

    return nextErrors
  }

  const validateField = (field: keyof ContactFormData, values: ContactFormData) => {
    if (field === 'name' && !values.name.trim()) return 'Bitte geben Sie Ihren Namen ein.'
    if (field === 'email') {
      if (!values.email.trim()) return 'Bitte geben Sie Ihre E-Mail-Adresse ein.'
      if (!emailPattern.test(values.email)) return 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
    }
    if (field === 'message' && !values.message.trim()) return 'Bitte geben Sie eine Nachricht ein.'

    return undefined
  }

  useEffect(() => {
    const field = pendingFocusFieldRef.current
    if (!field) return

    const focusMap = {
      name: nameRef,
      email: emailRef,
      company: null,
      message: messageRef,
    } as const

    focusMap[field]?.current?.focus()
    pendingFocusFieldRef.current = null
  }, [errors])

  const updateField = <K extends keyof ContactFormData>(field: K, value: ContactFormData[K]) => {
    const nextData = { ...data, [field]: value }
    setData(nextData)

    if (!errors[field]) return

    setErrors((current) => {
      if (!current[field]) return current

      const nextError = validateField(field, nextData)

      if (nextError) return { ...current, [field]: nextError }

      const { [field]: _removed, ...rest } = current
      return rest
    })
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(false)
    setFormMessage('')

    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setFormMessage('Bitte prüfen Sie die markierten Felder.')
      pendingFocusFieldRef.current =
        (['name', 'email', 'message'] as const).find((field) => Boolean(nextErrors[field])) ?? null
      return
    }

    setErrors({})
    setData({ name: '', email: '', company: '', message: '' })
    setFormMessage('Vielen Dank. Ihre Anfrage wurde lokal erfasst (keine externe Übertragung).')
    setSent(true)
  }

  return (
    <>
      <PageMeta
        title="Kontakt"
        description="Kontaktformular der Muster Digital GmbH für unverbindliche Projektanfragen ohne externe Datenübertragung."
      />
      <section>
        <h1>Kontakt</h1>
        <p>Schreiben Sie uns zu Ihrem Vorhaben. Wir melden uns mit einer ersten Einschätzung zurück.</p>
      </section>

      <section>
        <form noValidate className="form" onSubmit={onSubmit}>
          <div
            ref={summaryRef}
            tabIndex={-1}
            className="form-status"
            aria-live="polite"
            aria-atomic="true"
          >
            {formMessage}
          </div>

          <div className="field">
            <label htmlFor="name">Name *</label>
            <input
              id="name"
              name="name"
              required
              ref={nameRef}
              value={data.name}
              onChange={(event) => updateField('name', event.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name ? (
              <p className="error" id="name-error">
                {errors.name}
              </p>
            ) : null}
          </div>

          <div className="field">
            <label htmlFor="email">E-Mail *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              ref={emailRef}
              value={data.email}
              onChange={(event) => updateField('email', event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email ? (
              <p className="error" id="email-error">
                {errors.email}
              </p>
            ) : null}
          </div>

          <div className="field">
            <label htmlFor="company">Unternehmen</label>
            <input
              id="company"
              name="company"
              value={data.company}
              onChange={(event) => updateField('company', event.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="message">Nachricht *</label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              ref={messageRef}
              value={data.message}
              onChange={(event) => updateField('message', event.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message ? (
              <p className="error" id="message-error">
                {errors.message}
              </p>
            ) : null}
          </div>

          <button className="btn btn-primary" type="submit">
            Unverbindlich absenden
          </button>
          {sent ? <p className="note">Es erfolgt keine externe Übertragung der Daten.</p> : null}
        </form>
      </section>
    </>
  )
}
