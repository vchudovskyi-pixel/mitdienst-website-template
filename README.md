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

Zentrale Inhalte und Platzhalter liegen in:

- `src/content/siteContent.ts`

Dort werden insbesondere gepflegt:

- Firmenname und Tagline
- Kontakt- und Rechtsangaben
- Navigation
- SEO-Grundwerte
- Leistungsbausteine
- Referenz-Platzhalter
- Texte für Startseite, Über uns, Kontakt und Rechtstexte

## Neues Kundenprojekt aus der Vorlage ableiten

1. Neues Projekt-Repository oder neuen Branch aus dieser Vorlage erstellen.
2. `src/content/siteContent.ts` mit freigegebenen Kundeninhalten befüllen.
3. Platzhalter für Impressum und Datenschutz durch rechtsgeprüfte Inhalte ersetzen.
4. Referenz- und Leistungsinhalte pro Kundenprojekt abstimmen.
5. Browser-QA auf mobilen und Desktop-Breakpoints durchführen.
6. Erst nach erfolgreicher unabhängiger QA produktive Freigabe erteilen.

## Deployment-Annahmen

- Build-Ziel ist eine statische Vite-Ausgabe.
- `vercel.json`, `404.html` und die Router-Konfiguration erhalten direktes Laden von Unterseiten.
- Die Vorlage ist auf Vercel-kompatibles Hosting ausgelegt, kann aber auch auf anderen SPA-fähigen Setups genutzt werden.

## Qualität und QA

- Die Formulare senden keine Daten an externe Dienste.
- Validierung, Fokusführung, `aria-invalid` und `aria-describedby` bleiben Teil der Grundarchitektur.
- Vor Produktionsabnahme ist unabhängige Browser-QA zwingend erforderlich.
- Automatisierte Checks unterstützen die Qualitätssicherung, ersetzen aber keine finale Browser-Beobachtung.

## Weitere Dokumentation

- `docs/MITDIENST-WEBSITE-DEVELOPMENT-STANDARD.md` – initialer Entwicklungsstandard für Folgeprojekte
