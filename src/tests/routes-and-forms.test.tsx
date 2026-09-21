import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import App from '../App'

afterEach(() => {
  cleanup()
})

const renderPath = (path: string) => {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
  const fullPath = path === '/' ? `${basePath || ''}/` : `${basePath}${path}`
  window.history.pushState({}, 'Test', fullPath)
  render(<App />)
}

describe('required routes', () => {
  const cases = [
    ['/', /websites, die vertrauen schaffen/i],
    ['/leistungen', /^leistungen$/i],
    ['/referenzen', /^referenzen$/i],
    ['/ueber-uns', /über uns/i],
    ['/angebot', /projektanfrage/i],
    ['/kontakt', /^kontakt$/i],
    ['/impressum', /^impressum$/i],
    ['/datenschutz', /^datenschutz$/i],
  ] as const

  it.each(cases)('renders %s', (path, heading) => {
    renderPath(path)
    expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument()
  })
})

describe('form validation', () => {
  it('validates contact form required fields', () => {
    renderPath('/kontakt')

    fireEvent.click(screen.getByRole('button', { name: /unverbindlich absenden/i }))

    expect(screen.getByText(/bitte geben sie ihren namen ein/i)).toBeInTheDocument()
    expect(screen.getByText(/bitte geben sie ihre e-mail-adresse ein/i)).toBeInTheDocument()
    expect(screen.getByText(/bitte geben sie eine nachricht ein/i)).toBeInTheDocument()
  })

  it('clears only the corrected contact field error immediately', () => {
    renderPath('/kontakt')

    fireEvent.click(screen.getByRole('button', { name: /unverbindlich absenden/i }))

    const nameInput = screen.getByLabelText(/name \*/i)
    const emailInput = screen.getByLabelText(/e-mail \*/i)

    expect(nameInput).toHaveAttribute('aria-invalid', 'true')
    expect(nameInput).toHaveAttribute('aria-describedby', 'name-error')
    expect(emailInput).toHaveAttribute('aria-invalid', 'true')

    fireEvent.change(nameInput, { target: { value: 'Anna Beispiel' } })

    expect(nameInput).toHaveAttribute('aria-invalid', 'false')
    expect(nameInput).not.toHaveAttribute('aria-describedby')
    expect(screen.queryByText(/bitte geben sie ihren namen ein/i)).not.toBeInTheDocument()
    expect(emailInput).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByText(/bitte geben sie ihre e-mail-adresse ein/i)).toBeInTheDocument()
  })

  it('updates and clears the contact email error immediately', () => {
    renderPath('/kontakt')

    fireEvent.click(screen.getByRole('button', { name: /unverbindlich absenden/i }))

    const emailInput = screen.getByLabelText(/e-mail \*/i)

    fireEvent.change(emailInput, { target: { value: 'ungueltig' } })

    expect(emailInput).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByText(/bitte geben sie eine gültige e-mail-adresse ein/i)).toBeInTheDocument()

    fireEvent.change(emailInput, { target: { value: 'anna@example.de' } })

    expect(emailInput).toHaveAttribute('aria-invalid', 'false')
    expect(emailInput).not.toHaveAttribute('aria-describedby')
    expect(screen.queryByText(/bitte geben sie eine gültige e-mail-adresse ein/i)).not.toBeInTheDocument()
  })

  it('blocks wizard progression when required fields are missing', () => {
    renderPath('/angebot')

    fireEvent.click(screen.getByRole('button', { name: /weiter/i }))

    expect(screen.getByText(/bitte wählen sie eine projektart aus/i)).toBeInTheDocument()
    expect(screen.getByText(/bitte beschreiben sie ihr projektziel/i)).toBeInTheDocument()
  })

  it('requires a preferred contact method before the summary step', () => {
    renderPath('/angebot')

    fireEvent.change(screen.getByLabelText(/projektart/i), { target: { value: 'Website-Relaunch' } })
    fireEvent.change(screen.getByLabelText(/projektziel/i), { target: { value: 'Neue Website mit besserer Lead-Qualität.' } })
    fireEvent.click(screen.getByRole('button', { name: /weiter/i }))

    fireEvent.change(screen.getByLabelText(/unternehmen/i), { target: { value: 'Muster Maschinenbau' } })
    fireEvent.click(screen.getByRole('button', { name: /weiter/i }))

    fireEvent.change(screen.getByLabelText(/zeitrahmen/i), { target: { value: 'In 1–2 Monaten' } })
    fireEvent.change(screen.getByLabelText(/budgetrahmen/i), { target: { value: '10.000–20.000 €' } })
    fireEvent.click(screen.getByRole('button', { name: /weiter/i }))

    fireEvent.change(screen.getByLabelText(/projektbeschreibung/i), { target: { value: 'Mehrsprachige Produktseiten und besserer Anfrageprozess.' } })
    fireEvent.click(screen.getByRole('button', { name: /weiter/i }))

    fireEvent.change(screen.getByLabelText(/ansprechpartner/i), { target: { value: 'Anna Beispiel' } })
    fireEvent.change(screen.getByLabelText(/^e-mail \*/i), { target: { value: 'anna@example.de' } })
    fireEvent.click(screen.getByRole('button', { name: /weiter/i }))

    expect(screen.getByText(/bitte wählen sie eine kontaktmethode/i)).toBeInTheDocument()
  })

  it('clears only the corrected wizard field errors immediately', () => {
    renderPath('/angebot')

    fireEvent.click(screen.getByRole('button', { name: /weiter/i }))

    const projectType = screen.getByLabelText(/projektart \*/i)
    const goals = screen.getByLabelText(/projektziel \*/i)

    expect(projectType).toHaveAttribute('aria-invalid', 'true')
    expect(goals).toHaveAttribute('aria-invalid', 'true')

    fireEvent.change(projectType, { target: { value: 'Website-Relaunch' } })

    expect(projectType).toHaveAttribute('aria-invalid', 'false')
    expect(projectType).not.toHaveAttribute('aria-describedby')
    expect(screen.queryByText(/bitte wählen sie eine projektart aus/i)).not.toBeInTheDocument()
    expect(goals).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByText(/bitte beschreiben sie ihr projektziel/i)).toBeInTheDocument()

    fireEvent.change(goals, { target: { value: 'Neue Website mit besserer Lead-Qualität.' } })
    fireEvent.click(screen.getByRole('button', { name: /weiter/i }))

    fireEvent.change(screen.getByLabelText(/unternehmen/i), { target: { value: 'Muster Maschinenbau' } })
    fireEvent.click(screen.getByRole('button', { name: /weiter/i }))
    fireEvent.click(screen.getByRole('button', { name: /weiter/i }))

    const timeframe = screen.getByLabelText(/zeitrahmen \*/i)
    const budget = screen.getByLabelText(/budgetrahmen \*/i)

    expect(timeframe).toHaveAttribute('aria-invalid', 'true')
    expect(budget).toHaveAttribute('aria-invalid', 'true')

    fireEvent.change(timeframe, { target: { value: 'In 1–2 Monaten' } })

    expect(timeframe).toHaveAttribute('aria-invalid', 'false')
    expect(timeframe).not.toHaveAttribute('aria-describedby')
    expect(screen.queryByText(/bitte wählen sie einen zeitrahmen/i)).not.toBeInTheDocument()
    expect(budget).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByText(/bitte wählen sie ein budget/i)).toBeInTheDocument()

    fireEvent.change(budget, { target: { value: '10.000–20.000 €' } })
    fireEvent.click(screen.getByRole('button', { name: /weiter/i }))

    fireEvent.change(screen.getByLabelText(/projektbeschreibung/i), {
      target: { value: 'Mehrsprachige Produktseiten und besserer Anfrageprozess.' },
    })
    fireEvent.click(screen.getByRole('button', { name: /weiter/i }))
    fireEvent.click(screen.getByRole('button', { name: /weiter/i }))

    const contactName = screen.getByLabelText(/ansprechpartner \*/i)
    const contactEmail = screen.getByLabelText(/^e-mail \*/i)

    expect(contactName).toHaveAttribute('aria-invalid', 'true')
    expect(contactEmail).toHaveAttribute('aria-invalid', 'true')

    fireEvent.change(contactName, { target: { value: 'Anna Beispiel' } })

    expect(contactName).toHaveAttribute('aria-invalid', 'false')
    expect(contactName).not.toHaveAttribute('aria-describedby')
    expect(screen.queryByText(/bitte geben sie einen ansprechpartner an/i)).not.toBeInTheDocument()
    expect(contactEmail).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByText(/bitte geben sie eine e-mail-adresse an/i)).toBeInTheDocument()
  })

  it('clears the preferred contact error immediately without clearing other contact-step errors', () => {
    renderPath('/angebot')

    fireEvent.change(screen.getByLabelText(/projektart/i), { target: { value: 'Website-Relaunch' } })
    fireEvent.change(screen.getByLabelText(/projektziel/i), { target: { value: 'Neue Website mit besserer Lead-Qualität.' } })
    fireEvent.click(screen.getByRole('button', { name: /weiter/i }))

    fireEvent.change(screen.getByLabelText(/unternehmen/i), { target: { value: 'Muster Maschinenbau' } })
    fireEvent.click(screen.getByRole('button', { name: /weiter/i }))

    fireEvent.change(screen.getByLabelText(/zeitrahmen/i), { target: { value: 'In 1–2 Monaten' } })
    fireEvent.change(screen.getByLabelText(/budgetrahmen/i), { target: { value: '10.000–20.000 €' } })
    fireEvent.click(screen.getByRole('button', { name: /weiter/i }))

    fireEvent.change(screen.getByLabelText(/projektbeschreibung/i), {
      target: { value: 'Mehrsprachige Produktseiten und besserer Anfrageprozess.' },
    })
    fireEvent.click(screen.getByRole('button', { name: /weiter/i }))
    fireEvent.click(screen.getByRole('button', { name: /weiter/i }))

    const preferredEmail = screen.getByLabelText(/^e-mail$/i)
    const contactEmail = screen.getByLabelText(/^e-mail \*/i)

    expect(preferredEmail.closest('fieldset')).toHaveAttribute('aria-invalid', 'true')
    expect(contactEmail).toHaveAttribute('aria-invalid', 'true')

    fireEvent.click(preferredEmail)

    expect(preferredEmail.closest('fieldset')).toHaveAttribute('aria-invalid', 'false')
    expect(preferredEmail.closest('fieldset')).not.toHaveAttribute('aria-describedby')
    expect(screen.queryByText(/bitte wählen sie eine kontaktmethode/i)).not.toBeInTheDocument()
    expect(contactEmail).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByText(/bitte geben sie eine e-mail-adresse an/i)).toBeInTheDocument()
  })

  it('submits wizard through all steps', () => {
    renderPath('/angebot')

    fireEvent.change(screen.getByLabelText(/projektart/i), { target: { value: 'Website-Relaunch' } })
    fireEvent.change(screen.getByLabelText(/projektziel/i), { target: { value: 'Neue Website mit besserer Lead-Qualität.' } })
    fireEvent.click(screen.getByRole('button', { name: /weiter/i }))

    fireEvent.change(screen.getByLabelText(/unternehmen/i), { target: { value: 'Muster Maschinenbau' } })
    fireEvent.click(screen.getByRole('button', { name: /weiter/i }))

    fireEvent.change(screen.getByLabelText(/zeitrahmen/i), { target: { value: 'In 1–2 Monaten' } })
    fireEvent.change(screen.getByLabelText(/budgetrahmen/i), { target: { value: '10.000–20.000 €' } })
    fireEvent.click(screen.getByRole('button', { name: /weiter/i }))

    fireEvent.change(screen.getByLabelText(/projektbeschreibung/i), { target: { value: 'Mehrsprachige Produktseiten und besserer Anfrageprozess.' } })
    fireEvent.click(screen.getByRole('button', { name: /weiter/i }))

    fireEvent.change(screen.getByLabelText(/ansprechpartner/i), { target: { value: 'Anna Beispiel' } })
    fireEvent.change(screen.getByLabelText(/^e-mail \*/i), { target: { value: 'anna@example.de' } })
    fireEvent.click(screen.getByLabelText(/^e-mail$/i))
    fireEvent.click(screen.getByRole('button', { name: /weiter/i }))

    expect(screen.getByText(/beim speichern wird die anfrage nur lokal simuliert/i)).toBeInTheDocument()
    expect(screen.queryByText(/vielen dank\. die anfrage wurde nur lokal simuliert/i)).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /anfrage lokal speichern/i }))

    expect(screen.getByText(/vielen dank\. die anfrage wurde nur lokal simuliert/i)).toBeInTheDocument()
  })
})
