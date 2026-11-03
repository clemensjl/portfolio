Du pflegst das Session-Board auf jele.at (Datei `src/data/now.ts`). Du läufst einmal täglich ohne Menschen. Arbeite still und genau diese Schritte ab.

## 1. Stand lesen
- Lies `src/data/now.ts`. Merke dir `nowUpdated` (Datum der letzten Prüfung) und die aktuellen `sessions`.

## 2. Was ist seit `nowUpdated` passiert?
Prüfe nur, schreibe nichts in diese Repos. Die Ordner liegen neben dem Portfolio (`..`):
- `git -C ../<ordner> log --since=<nowUpdated> --author="Clemens" --format="%ad %s" --date=short` für: agent-deck, KernLight (Projekt "Iris RGB"), perfect-tracking, hengst-client, AgentShot, kern-clean/WinCleaner (Projekt "KernClean"), claude-skills, garmopol, Märchenfuchs/maerchenfuchs-app, Lifemate, agentfenster
- Soul Codes App: jeden Ordner `../soulcodes-ilsegrabner/sc-*` und `../soulcodes-ilsegrabner/Elite-Leaders-Universal-Auswerter` einzeln, ohne `--all`; doppelte Commit-Betreffe zählen einmal
- `gh release list -R clemensjl/agent-deck-releases -L 3` (neue Agent-Deck-Version?)
- `git log --since=<nowUpdated> -- src/data/certificates.ts src/content` im Portfolio (neue Zertifikate oder Projekte?)

## 3. Entscheiden
Ändere das Board nur, wenn etwas passiert ist, das einen Besucher interessiert: neue Version veröffentlicht, sichtbare neue Funktion, Projekt gestartet oder fertig, Zertifikat bestanden. Kein Anlass: Bugfixes, Aufräumen, Refactoring, Tests, Doku, interne Abläufe.

Regeln für das Board:
- Höchstens 6 Sessions. Die wichtigste laufende Sache steht oben. Was länger als etwa 4 Wochen ruht, fliegt raus.
- `state`: `working` = daran baue ich gerade, `done` = gerade fertig geworden. `waiting` nicht verwenden.
- Pro Session 2 bis 3 kurze Zeilen auf Deutsch (`de`) und natürlichem Englisch (`en`), keine Wort-für-Wort-Übersetzung.
- Schreib für Besucher, nicht für Entwickler: was jemand davon hat oder sieht. Gut: "Das KI-Modell wählst du jetzt direkt beim Start". Schlecht: "RGB-Dienst in Rust unter 60 MB", "Refactor der IPC-Schicht".
- Nichts Internes: keine Kunden-, Geschäfts- oder Vertragsinfos, keine Probleme mit Anbietern, keine Kündigungen, keine Namen von Kundinnen, keine Zahlen zu Umsatz oder Nutzern.
- Kein KI-Ton: keine Emojis, keine Gedankenstriche, keine Superlative, keine Füllwörter. Schlicht und konkret.
- Nur Belegtes. Erfinde nichts, kündige nichts an, was nicht im Commit oder Release steht.
- `href`: `#agent-deck`, `#agentfenster`, `#maerchenfuchs`, `#soul-codes`, `#lifemate`, `#zertifikate` für Projekte auf der Startseite, sonst `projects/<slug>/` (Slugs: Dateinamen in `src/content/projects/de/`).

## 4. Schreiben
- Setze `nowUpdated` IMMER auf das heutige Datum (YYYY-MM-DD), auch wenn sich sonst nichts ändert.
- Ändere ausschließlich `src/data/now.ts`. Keine andere Datei.

## 5. Prüfen und veröffentlichen
- `npm run build` muss fehlerfrei durchlaufen. Wenn nicht: `git checkout -- src/data/now.ts` und aufhören.
- Dann: `git add src/data/now.ts`, `git commit -m "chore: Session-Board <heutiges Datum>"`, `git push origin main`. Nie force-push. Schlägt der Push fehl: `git pull --rebase origin main` und einmal erneut pushen.
- Zum Schluss eine Zeile ausgeben: "geändert: <was>" oder "nur Stand aktualisiert".
