import { FormEvent, useMemo, useRef, useState } from 'react'
import PageMeta from '../components/PageMeta'

type OfferData = {
  projectType: string
  goals: string
  company: string
  website: string
  timeframe: string
  budget: string
  details: string
  contactName: string
  contactEmail: string
  contactPhone: string
  preferredContact: string
}

type OfferErrors = Partial<Record<keyof OfferData, string>>

const steps = [
  'Projektfokus',
  'Unternehmen',
  'Rahmen',
  'Projektdetails',
  'Kontakt',
  'Zusammenfassung',
]

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initialState: OfferData = {
  projectType: '',
  goals: '',
  company: '',
  website: '',
  timeframe: '',
  budget: '',
  details: '',
  contactName: '',
  contactEmail: '',
  contactPhone: '',
  preferredContact: '',
}

export default function OfferPage() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<OfferData>(initialState)
  const [errors, setErrors] = useState<OfferErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const errorSummaryRef = useRef<HTMLDivElement>(null)

  const validateStep = (currentStep: number) => {
    const nextErrors: OfferErrors = {}

    if (currentStep === 0) {
      if (!data.projectType) nextErrors.projectType = 'Bitte wählen Sie eine Projektart aus.'
      if (!data.goals.trim()) nextErrors.goals = 'Bitte beschreiben Sie Ihr Projektziel.'
    }

    if (currentStep === 1 && !data.company.trim()) {
      nextErrors.company = 'Bitte nennen Sie Ihr Unternehmen.'
    }

    if (currentStep === 2) {
      if (!data.timeframe) nextErrors.timeframe = 'Bitte wählen Sie einen Zeitrahmen.'
      if (!data.budget) nextErrors.budget = 'Bitte wählen Sie ein Budget.'
    }

    if (currentStep === 3 && !data.details.trim()) {
      nextErrors.details = 'Bitte geben Sie Projektinformationen an.'
    }

    if (currentStep === 4) {
      if (!data.contactName.trim()) nextErrors.contactName = 'Bitte geben Sie einen Ansprechpartner an.'
      if (!data.contactEmail.trim()) nextErrors.contactEmail = 'Bitte geben Sie eine E-Mail-Adresse an.'
      else if (!emailPattern.test(data.contactEmail)) nextErrors.contactEmail = 'Bitte geben Sie eine gültige E-Mail-Adresse an.'
      if (!data.preferredContact) nextErrors.preferredContact = 'Bitte wählen Sie eine Kontaktmethode.'
    }

    return nextErrors
  }

  const currentStepErrors = useMemo(() => Object.keys(errors).length, [errors])

  const nextStep = () => {
    const stepErrors = validateStep(step)
    setErrors(stepErrors)

    if (Object.keys(stepErrors).length > 0) {
      errorSummaryRef.current?.focus()
      return
    }

    setStep((current) => Math.min(current + 1, steps.length - 1))
  }

  const previousStep = () => {
    setErrors({})
    setStep((current) => Math.max(current - 1, 0))
  }

  const submitWizard = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (step !== steps.length - 1) {
      nextStep()
      return
    }

    setSubmitted(true)
  }

  return (
    <>
      <PageMeta
        title="Angebot anfragen"
        description="Mehrstufiger Projektfragebogen der Muster Digital GmbH zur strukturierten Erfassung von Website-Vorhaben."
      />

      <section>
        <h1>Projektanfrage</h1>
        <p>Mit diesem Fragebogen erfassen wir Ihr Vorhaben strukturiert. Pflichtfelder sind mit * markiert.</p>
      </section>

      <section>
        <ol className="step-indicator" aria-label="Schrittanzeige">
          {steps.map((label, index) => (
            <li key={label} aria-current={index === step ? 'step' : undefined}>
              <span>{index + 1}</span>
              {label}
            </li>
          ))}
        </ol>

        <form noValidate className="form" onSubmit={submitWizard}>
          <div ref={errorSummaryRef} tabIndex={-1} className="form-status" aria-live="assertive" aria-atomic="true">
            {currentStepErrors > 0 ? 'Bitte korrigieren Sie die markierten Felder, bevor Sie fortfahren.' : ''}
          </div>

          {step === 0 ? (
            <>
              <div className="field">
                <label htmlFor="projectType">Projektart *</label>
                <select
                  id="projectType"
                  required
                  value={data.projectType}
                  onChange={(event) => setData((current) => ({ ...current, projectType: event.target.value }))}
                  aria-invalid={Boolean(errors.projectType)}
                  aria-describedby={errors.projectType ? 'projectType-error' : undefined}
                >
                  <option value="">Bitte auswählen</option>
                  <option value="Webdesign & Entwicklung">Webdesign & Entwicklung</option>
                  <option value="Website-Relaunch">Website-Relaunch</option>
                  <option value="Landingpage">Landingpage</option>
                  <option value="Strategieberatung">Strategieberatung</option>
                </select>
                {errors.projectType ? (
                  <p className="error" id="projectType-error">
                    {errors.projectType}
                  </p>
                ) : null}
              </div>

              <div className="field">
                <label htmlFor="goals">Projektziel *</label>
                <textarea
                  id="goals"
                  required
                  rows={4}
                  value={data.goals}
                  onChange={(event) => setData((current) => ({ ...current, goals: event.target.value }))}
                  aria-invalid={Boolean(errors.goals)}
                  aria-describedby={errors.goals ? 'goals-error' : undefined}
                />
                {errors.goals ? (
                  <p className="error" id="goals-error">
                    {errors.goals}
                  </p>
                ) : null}
              </div>
            </>
          ) : null}

          {step === 1 ? (
            <>
              <div className="field">
                <label htmlFor="companyName">Unternehmen *</label>
                <input
                  id="companyName"
                  required
                  value={data.company}
                  onChange={(event) => setData((current) => ({ ...current, company: event.target.value }))}
                  aria-invalid={Boolean(errors.company)}
                  aria-describedby={errors.company ? 'company-error' : undefined}
                />
                {errors.company ? (
                  <p className="error" id="company-error">
                    {errors.company}
                  </p>
                ) : null}
              </div>

              <div className="field">
                <label htmlFor="website">Aktuelle Website</label>
                <input
                  id="website"
                  type="url"
                  value={data.website}
                  onChange={(event) => setData((current) => ({ ...current, website: event.target.value }))}
                  placeholder="https://www.beispiel.de"
                />
              </div>
            </>
          ) : null}

          {step === 2 ? (
            <>
              <div className="field">
                <label htmlFor="timeframe">Zeitrahmen *</label>
                <select
                  id="timeframe"
                  required
                  value={data.timeframe}
                  onChange={(event) => setData((current) => ({ ...current, timeframe: event.target.value }))}
                  aria-invalid={Boolean(errors.timeframe)}
                  aria-describedby={errors.timeframe ? 'timeframe-error' : undefined}
                >
                  <option value="">Bitte auswählen</option>
                  <option value="Sofortiger Start">Sofortiger Start</option>
                  <option value="In 1–2 Monaten">In 1–2 Monaten</option>
                  <option value="In 3–6 Monaten">In 3–6 Monaten</option>
                  <option value="Noch offen">Noch offen</option>
                </select>
                {errors.timeframe ? (
                  <p className="error" id="timeframe-error">
                    {errors.timeframe}
                  </p>
                ) : null}
              </div>

              <div className="field">
                <label htmlFor="budget">Budgetrahmen *</label>
                <select
                  id="budget"
                  required
                  value={data.budget}
                  onChange={(event) => setData((current) => ({ ...current, budget: event.target.value }))}
                  aria-invalid={Boolean(errors.budget)}
                  aria-describedby={errors.budget ? 'budget-error' : undefined}
                >
                  <option value="">Bitte auswählen</option>
                  <option value="5.000–10.000 €">5.000–10.000 €</option>
                  <option value="10.000–20.000 €">10.000–20.000 €</option>
                  <option value="20.000 €+">20.000 €+</option>
                  <option value="Noch unklar">Noch unklar</option>
                </select>
                {errors.budget ? (
                  <p className="error" id="budget-error">
                    {errors.budget}
                  </p>
                ) : null}
              </div>
            </>
          ) : null}

          {step === 3 ? (
            <div className="field">
              <label htmlFor="details">Projektbeschreibung *</label>
              <textarea
                id="details"
                required
                rows={6}
                value={data.details}
                onChange={(event) => setData((current) => ({ ...current, details: event.target.value }))}
                aria-invalid={Boolean(errors.details)}
                aria-describedby={errors.details ? 'details-error' : undefined}
              />
              {errors.details ? (
                <p className="error" id="details-error">
                  {errors.details}
                </p>
              ) : null}
            </div>
          ) : null}

          {step === 4 ? (
            <>
              <div className="field">
                <label htmlFor="contactName">Ansprechpartner *</label>
                <input
                  id="contactName"
                  required
                  value={data.contactName}
                  onChange={(event) => setData((current) => ({ ...current, contactName: event.target.value }))}
                  aria-invalid={Boolean(errors.contactName)}
                  aria-describedby={errors.contactName ? 'contactName-error' : undefined}
                />
                {errors.contactName ? (
                  <p className="error" id="contactName-error">
                    {errors.contactName}
                  </p>
                ) : null}
              </div>
              <div className="field">
                <label htmlFor="contactEmail">E-Mail *</label>
                <input
                  id="contactEmail"
                  required
                  type="email"
                  value={data.contactEmail}
                  onChange={(event) => setData((current) => ({ ...current, contactEmail: event.target.value }))}
                  aria-invalid={Boolean(errors.contactEmail)}
                  aria-describedby={errors.contactEmail ? 'contactEmail-error' : undefined}
                />
                {errors.contactEmail ? (
                  <p className="error" id="contactEmail-error">
                    {errors.contactEmail}
                  </p>
                ) : null}
              </div>
              <div className="field">
                <label htmlFor="contactPhone">Telefon</label>
                <input
                  id="contactPhone"
                  type="tel"
                  value={data.contactPhone}
                  onChange={(event) => setData((current) => ({ ...current, contactPhone: event.target.value }))}
                />
              </div>
              <fieldset className="field">
                <legend>Bevorzugte Kontaktmethode *</legend>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="preferredContact"
                      value="E-Mail"
                      checked={data.preferredContact === 'E-Mail'}
                      onChange={(event) => setData((current) => ({ ...current, preferredContact: event.target.value }))}
                    />
                    E-Mail
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="preferredContact"
                      value="Telefon"
                      checked={data.preferredContact === 'Telefon'}
                      onChange={(event) => setData((current) => ({ ...current, preferredContact: event.target.value }))}
                    />
                    Telefon
                  </label>
                </div>
                {errors.preferredContact ? <p className="error">{errors.preferredContact}</p> : null}
              </fieldset>
            </>
          ) : null}

          {step === 5 ? (
            <section className="summary-card" aria-label="Zusammenfassung">
              <h2>Zusammenfassung</h2>
              <dl>
                <dt>Projektart</dt>
                <dd>{data.projectType}</dd>
                <dt>Projektziel</dt>
                <dd>{data.goals}</dd>
                <dt>Unternehmen</dt>
                <dd>{data.company}</dd>
                <dt>Website</dt>
                <dd>{data.website || 'Keine Angabe'}</dd>
                <dt>Zeitrahmen</dt>
                <dd>{data.timeframe}</dd>
                <dt>Budget</dt>
                <dd>{data.budget}</dd>
                <dt>Details</dt>
                <dd>{data.details}</dd>
                <dt>Ansprechpartner</dt>
                <dd>{data.contactName}</dd>
                <dt>E-Mail</dt>
                <dd>{data.contactEmail}</dd>
                <dt>Telefon</dt>
                <dd>{data.contactPhone || 'Keine Angabe'}</dd>
                <dt>Kontaktmethode</dt>
                <dd>{data.preferredContact}</dd>
              </dl>
            </section>
          ) : null}

          <div className="wizard-actions">
            <button type="button" className="btn btn-secondary" onClick={previousStep} disabled={step === 0}>
              Zurück
            </button>
            {step < steps.length - 1 ? (
              <button type="button" className="btn btn-primary" onClick={nextStep}>
                Weiter
              </button>
            ) : (
              <button type="submit" className="btn btn-primary">
                Anfrage lokal speichern
              </button>
            )}
          </div>

          {submitted ? (
            <p className="note">Vielen Dank. Die Anfrage wurde nur lokal simuliert und nicht extern übertragen.</p>
          ) : null}
        </form>
      </section>
    </>
  )
}
