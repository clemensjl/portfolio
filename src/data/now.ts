// Session-Board im Hero: jedes Projekt eine "Session" mit Status und den letzten Log-Zeilen.
// href: Anker auf der Startseite (#slug) oder relativ zur Sprachseite (projects/slug/).
// Bei jeder Aenderung `nowUpdated` mitziehen. Nur eintragen, was wirklich laeuft oder fertig ist.
import type { Lang } from '../i18n';

// working = baue gerade, waiting = wartet auf etwas (Freigabe, Umzug, Pruefung), done = zuletzt fertig
export type SessionState = 'working' | 'waiting' | 'done';

export const nowUpdated = '2026-11-03';

export interface Session {
  title: string;
  href: string;
  state: SessionState;
  log: Record<Lang, string[]>;
}

export const sessions: Session[] = [
  {
    title: 'Agent Deck',
    href: '#agent-deck',
    state: 'working',
    log: {
      de: ['Version 4.4.2 veröffentlicht', 'Modell und Denkaufwand live aus der CLI wählen', 'Nächste Version in Arbeit'],
      en: ['Shipped version 4.4.2', 'Pick model and effort live from the CLI', 'Next version in progress'],
    },
  },
  {
    title: 'Iris RGB',
    href: 'projects/iris-rgb/',
    state: 'working',
    log: {
      de: ['RGB-Dienst in Rust unter 60 MB', 'Installer auf echtem PC getestet'],
      en: ['Rust RGB daemon under 60 MB', 'Installer tested on a real PC'],
    },
  },
  {
    title: 'Perfect Tracking',
    href: 'projects/perfect-tracking/',
    state: 'working',
    log: {
      de: ['Lebensmittel aus BLS 4.0 importiert', 'Heute-Ansicht und schnelles Eintragen'],
      en: ['Imported foods from BLS 4.0', 'Today view and quick logging'],
    },
  },
  {
    title: 'Soul Codes App',
    href: '#soul-codes',
    state: 'done',
    log: {
      de: ['Oberfläche in fünf Runden neu gestaltet', 'PDF-Report im Kapitel-Stil'],
      en: ['Interface redesigned over five rounds', 'Chapter-style PDF report'],
    },
  },
  {
    title: 'Lifemate',
    href: '#lifemate',
    state: 'waiting',
    log: {
      de: ['Google Cloud gekündigt', 'Backend-Umzug auf Vercel steht aus'],
      en: ['Google Cloud cancelled', 'Backend move to Vercel pending'],
    },
  },
  {
    title: 'Anthropic Academy',
    href: '#zertifikate',
    state: 'done',
    log: {
      de: ['Vier Kurse bestanden', 'Zuletzt: Claude Code in Action'],
      en: ['Passed four courses', 'Latest: Claude Code in Action'],
    },
  },
];
