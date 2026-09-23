# MITDIENST Website Template

Produktionsorientierte React-/TypeScript-/Vite-Vorlage für zukünftige MITDIENST-Kundenwebsites.
Die bestehende Routing-, Responsive-, Accessibility- und Formularvalidierungs-Architektur aus dem Muster-Digital-Prototyp wurde bewusst beibehalten und auf wiederverwendbare Platzhalter-Inhalte umgestellt.

## Zweck des Repositorys

Dieses Repository ist der kanonische Ausgangspunkt für neue MITDIENST-Website-Projekte.
Es stellt eine belastbare Grundstruktur für typische Unternehmenswebsites bereit, inklusive:

- Startseite
- Leistungen
- Referenzen
- Über uns
- Angebotsanfrage als mehrstufiger Wizard
- Kontaktformular
- Impressum
- Datenschutz

## Technologie-Stack

- React 19
- TypeScript
- Vite
- React Router
- Vitest + Testing Library
- Oxlint
- Vercel-kompatibles SPA-Routing mit direktem Route-Reload-Support

## Lokale Entwicklung

```bash
npm install
npm run dev
```

## Build-, Lint- und Test-Kommandos

```bash
npm run build
npm run lint
npm run test
npm run preview
```

## Wichtige Routen

- `/` – Startseite
- `/leistungen` – Leistungsübersicht
- `/referenzen` – Referenz-Platzhalter
- `/ueber-uns` – Unternehmensdarstellung
- `/angebot` – mehrstufige Angebotsanfrage
- `/kontakt` – Kontaktformular
- `/impressum` – rechtlicher Platzhalter
- `/datenschutz` – rechtlicher Platzhalter

## Wo kundenspezifische Inhalte konfiguriert werden

### Zentrale Inhalte

Die meisten austauschbaren Inhalte und Platzhalter liegen in:

- `src/content/siteContent.ts`

Dort werden insbesondere gepflegt:

- Firmenname und Tagline
- Kontakt- und Rechtsangaben
- Navigation
- SEO-Grundwerte
- Leistungsbausteine
- Referenz-Platzhalter
- Texte für Startseite, Über uns, Kontakt und Rechtstexte
- Auswahloptionen für den Angebotswizard

### Branding und Assets

Folgende Dateien werden üblicherweise pro Kundenprojekt angepasst:

- `src/index.css` – Farbwerte und visuelle Branding-Basics über CSS-Variablen im `:root`
- `public/favicon.svg` – Favicon / Browser-Icon
- `public/icons.svg` – optionale SVG-Sprite-Datei für projektspezifische Icons
- `index.html` – Default-Meta-Description und Dokumenttitel

## Neues Kundenprojekt aus der Vorlage ableiten

1. Neues Projekt-Repository oder neuen Branch aus dieser Vorlage erstellen.
2. `src/content/siteContent.ts` mit freigegebenen Kundeninhalten befüllen.
3. Branding in `src/index.css` sowie ggf. `public/favicon.svg` und `public/icons.svg` ersetzen.
4. Platzhalter für Impressum und Datenschutz durch rechtsgeprüfte Inhalte ersetzen.
5. Referenz-, Leistungs- und SEO-Inhalte pro Kundenprojekt abstimmen.
6. Browser-QA auf mobilen und Desktop-Breakpoints durchführen.
7. Erst nach erfolgreicher unabhängiger QA produktive Freigabe erteilen.

## Vor Produktion ersetzen

Vor einem Go-live müssen mindestens diese Punkte projektspezifisch ersetzt oder bestätigt werden:

- `[COMPANY_NAME]`, `[COMPANY_TAGLINE]`, `[LEGAL_ENTITY]`, `[MANAGING_DIRECTOR]`
- `[PHONE]`, `[EMAIL]`, `[ADDRESS_LINE_1]`, `[ADDRESS_LINE_2]`
- Leistungs-, Referenz- und Unternehmens-Texte in `src/content/siteContent.ts`
- SEO-Titel/-Beschreibungen und ggf. Domain-/URL-Angaben
- Favicon, optionale Icons und visuelle Branding-Farben
- Impressum und Datenschutz mit rechtsgeprüften Inhalten

## Pre-Production-Checkliste

- [ ] Alle Template-Platzhalter durch freigegebene Kundendaten ersetzt oder bewusst entfernt
- [ ] `Impressum` und `Datenschutz` final rechtlich geprüft und befüllt
- [ ] Branding-Farben, Favicon und sonstige Assets kundenkonform ersetzt
- [ ] SEO-Titel, Meta-Descriptions und Social-/Link-Vorschau-Inhalte geprüft
- [ ] Kontaktformular und Angebotswizard im Zielprojekt mit echten Inhalten geprüft
- [ ] Unabhängige Browser-QA auf 320 px, 390 px, 768 px und Desktop durchgeführt

## Deployment-Annahmen

- Build-Ziel ist eine statische Vite-Ausgabe.
- `vercel.json`, `404.html` und die Router-Konfiguration erhalten direktes Laden von Unterseiten.
- Die Vorlage ist auf Vercel-kompatibles Hosting ausgelegt, kann aber auch auf anderen SPA-fähigen Setups genutzt werden.
- Die GitHub-Pages-Workflow-Konfiguration berücksichtigt sowohl Root-Sites (`<owner>.github.io`) als auch Projekt-Sites.

## Qualität und QA

- Die Formulare senden keine Daten an externe Dienste.
- Validierung, Fokusführung, `aria-invalid` und `aria-describedby` bleiben Teil der Grundarchitektur.
- Vor Produktionsabnahme ist unabhängige Browser-QA zwingend erforderlich.
- Automatisierte Checks unterstützen die Qualitätssicherung, ersetzen aber keine finale Browser-Beobachtung.

## Weitere Dokumentation

- `docs/MITDIENST-WEBSITE-DEVELOPMENT-STANDARD.md` – initialer Entwicklungsstandard für Folgeprojekte
