// Session-Board im Hero: jedes Projekt eine "Session" mit Status und den letzten Log-Zeilen.
// href: Anker auf der Startseite (#slug) oder relativ zur Sprachseite (projects/slug/).
// Bei jeder Aenderung `nowUpdated` mitziehen. Nur eintragen, was wirklich laeuft oder fertig ist.
import type { Lang } from '../i18n';

// working = baue gerade, waiting = wartet auf etwas (Freigabe, Umzug, Pruefung), done = zuletzt fertig
export type SessionState = 'working' | 'waiting' | 'done';

export const nowUpdated = '2026-11-12';

export interface Session {
  title: string;
  href: string;
  state: SessionState;
  log: Record<Lang, string[]>;
}

export const sessions: Session[] = [
  {
    title: 'Perfect Tracking',
    href: 'projects/perfect-tracking/',
    state: 'working',
    log: {
      de: ['Kalorien zählen mit österreichischen Lebensmitteln', 'Neuer Look: Tagesziel als Halbkreis, Gewicht auf einem Lineal', 'Barcode-Scan, eigene Rezepte und Freunde sind schon drin'],
      en: ['Calorie tracking with Austrian food', 'New look: your daily goal as a half circle, weight on a ruler', 'Barcode scanning, your own recipes and friends are already in'],
    },
  },
  {
    title: 'Agent Deck',
    href: '#agent-deck',
    state: 'working',
    log: {
      de: ['Version 4.4.2 ist da', 'Das KI-Modell wählst du jetzt direkt beim Start', 'Die nächste Version ist in Arbeit'],
      en: ['Version 4.4.2 is out', 'You now pick the AI model right at launch', 'The next version is in the works'],
    },
  },
  {
    title: 'Iris RGB',
    href: 'projects/iris-rgb/',
    state: 'working',
    log: {
      de: ['RGB-Licht für Windows, ohne Konto und ohne Werbung', 'Läuft schon auf dem ersten echten PC'],
      en: ['RGB lighting for Windows, no account and no ads', 'Already running on the first real PC'],
    },
  },
  {
    title: 'Hengst Client',
    href: 'projects/hengst-client/',
    state: 'working',
    log: {
      de: ['Ein eigener Minecraft-Launcher', 'Lädt schon jede Spielversion herunter'],
      en: ['My own Minecraft launcher', 'Already downloads any game version'],
    },
  },
  {
    title: 'Soul Codes App',
    href: '#soul-codes',
    state: 'done',
    log: {
      de: ['Neue Oberfläche ist live', 'Der PDF-Bericht ist jetzt in Kapitel gegliedert'],
      en: ['The new design is live', 'The PDF report now comes in chapters'],
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
