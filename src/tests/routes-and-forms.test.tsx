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

  it('blocks wizard progression when required fields are missing', () => {
    renderPath('/angebot')

    fireEvent.click(screen.getByRole('button', { name: /weiter/i }))

    expect(screen.getByText(/bitte wählen sie eine projektart aus/i)).toBeInTheDocument()
    expect(screen.getByText(/bitte beschreiben sie ihr projektziel/i)).toBeInTheDocument()
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

    fireEvent.click(screen.getByRole('button', { name: /anfrage lokal speichern/i }))

    expect(screen.getByText(/vielen dank\. die anfrage wurde nur lokal simuliert/i)).toBeInTheDocument()
  })
})
