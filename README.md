# Muster Digital GmbH – Demo-Website

Diese Anwendung ist eine vollständige, fiktive Agentur-Website für **Muster Digital GmbH** (Demo-Zwecke), umgesetzt mit React + TypeScript + Vite.

## Technologie

- React 19
- TypeScript
- Vite
- React Router
- Vitest + Testing Library (Basis-Test)
- Oxlint

## Projektstruktur

- `src/components` – Layout- und Metadaten-Komponenten
- `src/pages` – Alle Seitenrouten (`/`, `/leistungen`, `/referenzen`, `/ueber-uns`, `/angebot`, `/kontakt`, `/impressum`, `/datenschutz`)
- `src/tests` – Basis-Tests
- `src/index.css` – Globales Designsystem, responsive Layout, Fokus-Styles

## Installation

```bash
npm install
```

## Lokale Entwicklung

```bash
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Tests

```bash
npm run test
npm run lint
```

## Wichtige Designentscheidungen

- Eigenständige visuelle Sprache mit klarer Typografie, Kartenlayout und ruhigen Abständen.
- Seitenstruktur mit klaren CTAs und Service-/Prozess-Fokus für deutsche KMU.
- Mehrstufiger Projektfragebogen (`/angebot`) mit Schrittanzeige, Validierung und Zusammenfassung.
- Kontaktformular (`/kontakt`) mit lokaler Validierung ohne externe Datenübertragung.

## Accessibility (WCAG-Basics)

- `lang="de"` im HTML-Dokument.
- Semantische Struktur (`header`, `nav`, `main`, `section`, `footer`) und genau ein `h1` pro Seite.
- Skip-Link „Zum Inhalt springen“.
- Tastaturbedienbare Navigation und sichtbare Fokuszustände.
- Formulare mit Labels, `required`, Fehlermeldungen und ARIA-Verknüpfung.
- Responsive Layout ohne erzwungenes Deaktivieren von Zoom.

## SEO-Umsetzung

- Seitenindividuelle Titel und Meta-Descriptions.
- Robots `index,follow`.
- Open-Graph-Basismeta via `PageMeta`.
- Sinnvolle interne Verlinkung über Navigation und Footer.
- Keine produktive Canonical-URL gesetzt, da keine finale Domain bekannt ist.

## Bekannte Einschränkungen

- Referenzen sind ausschließlich fiktive Showcase-Projekte.
- Formulare speichern nur lokal im UI-Flow und senden nichts an externe Dienste.
- Es ist nur ein Basis-Test enthalten; für produktiven Einsatz sollten zusätzliche E2E- und Accessibility-Tests ergänzt werden.

## Vor Produktivsetzung unbedingt ergänzen

1. Echte, rechtskonforme Inhalte für `Impressum` und `Datenschutz`.
2. Reale Unternehmensdaten und rechtliche Angaben.
3. Datenschutzkonforme Einbindung evtl. Drittanbieter-Tools.
4. Deployment-Konfiguration inkl. finaler Domain/Canonical-Strategie.
