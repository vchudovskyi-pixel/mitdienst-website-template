# MITDIENST Website Development Standard v1

## 1. Projektinitialisierung

- Neues Kundenprojekt ausschließlich auf Basis des MITDIENST Website Template starten.
- Eigene Kunden-Branches oder abgeleitete Repositories verwenden; niemals direkt auf `main` arbeiten.
- Vor dem ersten inhaltlichen Umbau Routing, Formularpfade und Deployment-Annahmen verifizieren.

## 2. Content und Konfiguration

- Kundenspezifische Basisdaten zentral in `src/content/siteContent.ts` pflegen.
- Platzhalter müssen vor Go-live vollständig ersetzt oder bewusst entfernt werden.
- Freigegebene Inhalte, Claims, Referenzen und Kontaktdaten dürfen nicht verstreut in einzelnen Komponenten verbleiben.

## 3. Responsive Anforderungen

- Die Website muss ohne horizontales Scrollen bei mindestens 320 px, 390 px, 768 px und gängigen Desktop-Breiten nutzbar sein.
- Mobile Navigation muss in geschlossenem und geöffnetem Zustand bedienbar bleiben.
- Browser-Zoom darf nicht deaktiviert oder technisch umgangen werden.

## 4. Accessibility-Anforderungen

- Semantische HTML-Struktur mit korrekt ausgezeichnetem Hauptinhalt beibehalten.
- Tastaturbedienung, sichtbare Fokuszustände und Skip-Link dürfen nicht regressieren.
- Dokumentensprache Deutsch (`lang="de"`) beibehalten, sofern kein anderes freigegebenes Sprachkonzept vorliegt.
- Formularfehler müssen programmatisch erkennbar und fokussierbar bleiben.

## 5. Navigation

- Bestehende Hauptnavigation, Footer-Navigation und direkte Unterseiten-Routen erhalten.
- Interne Linkziele und Route-Rewrites müssen nach Inhaltsanpassungen weiter funktionieren.
- 404-Handling und direkte Reloads auf Unterseiten sind Teil des Standards.

## 6. Formulare und Validierung

- Kontaktformular und Angebotswizard dürfen nur nach expliziter Nutzeraktion Erfolg melden.
- Pflichtfelder müssen Fortschritt oder Absenden bei ungültigen Daten blockieren.
- `aria-invalid`, `aria-describedby`, feldbezogene Fehlerlöschung und Fokus auf das erste fehlerhafte Feld sind verpflichtend.
- Änderungen nach einer Erfolgsmeldung müssen den lokalen Erfolgshinweis zurücksetzen, ohne automatisch erneut zu senden.

## 7. SEO-Grundlagen

- Seitentitel und Meta-Descriptions je Route pflegen.
- Platzhalter-Metadaten vor Go-live durch echte Kundendaten ersetzen.
- Interne Verlinkung, klare Überschriftenhierarchie und verständliche Seitentitel sicherstellen.

## 8. Rechtliche Seiten

- `Impressum` und `Datenschutz` sind bis zur juristisch freigegebenen Befüllung nur Platzhalter.
- Vor Produktionsfreigabe müssen alle rechtlich relevanten Angaben geprüft und ergänzt werden.
- Keine Demo-, Dummy- oder Fremddaten auf Live-Systemen belassen.

## 9. Code-Qualität

- Vorhandene Architektur nur ändern, wenn ein klarer technischer Bedarf besteht.
- Accessibility-, Routing- oder Responsive-Fixes dürfen nicht versehentlich zurückgebaut werden.
- Keine TypeScript-, Lint- oder Build-Regeln abschwächen, um grüne Checks zu erzwingen.

## 10. Build, Lint und Tests

- Vor Review mindestens `npm run lint`, `npm run test` und `npm run build` ausführen.
- Fehlgeschlagene Checks müssen behoben oder nachvollziehbar dokumentiert werden.
- Automatisierte Ergebnisse sind notwendige, aber nicht hinreichende Freigabekriterien.

## 11. Preview Deployment

- Für jede relevante Änderung soll eine Vorschau bereitstehen, sofern die Zielplattform dies unterstützt.
- Routing, Medienpfade und Formverhalten in der Vorschau prüfen.

## 12. Unabhängige Browser-QA

- Finale QA muss unabhängig im Browser beobachtet werden.
- Mobile, Tablet- und Desktop-Ansichten sind gesondert zu prüfen.
- Browser-QA ist obligatorisch und kann nicht durch Unit-Tests ersetzt werden.

## 13. Remediation Cycle

- Gefundene QA-Mängel priorisieren, gezielt beheben und erneut validieren.
- Jede Behebung darf keine Regression in Navigation, Responsivität oder Barrierefreiheit erzeugen.

## 14. Finale Abnahme

- Finale Abnahme erfolgt erst nach erfolgreicher unabhängiger Browser-QA und Review der rechtlichen Inhalte.
- Automatisierte Tests allein stellen keine Produktionsfreigabe dar.

## 15. Merge und Produktionsdeployment

- Merge erst nach Review, Freigabe und bestandener QA durchführen.
- Produktionsdeployment gehört nicht in den initialen Template-Umbau ohne explizite Freigabe.

## 16. Post-Deployment Smoke Test

- Nach dem Deployment zentrale Routen, Navigation, Kontaktformular, Angebotswizard und Rechtstexte stichprobenartig prüfen.
- Auffälligkeiten unmittelbar dokumentieren und in den Remediation Cycle zurückführen.
