// "Gerade dran": die Leiste unter dem Hero. Bei jeder Aenderung `updated` mitziehen.
// Nur Dinge eintragen, die wirklich laufen oder wirklich fertig sind.
import type { Lang } from '../i18n';

export type NowKind = 'building' | 'next' | 'done';

export const nowUpdated = '2026-09-23';

export const now: { kind: NowKind; text: Record<Lang, string>; href?: string }[] = [
  {
    kind: 'building',
    text: { de: 'Lifemate: Backend zieht von Google Cloud auf Vercel', en: 'Lifemate: moving the backend from Google Cloud to Vercel' },
    href: '#lifemate',
  },
  {
    kind: 'building',
    text: { de: 'Agent Deck: laufend neue Versionen, zuletzt 3.5.0', en: 'Agent Deck: shipping new versions, latest 3.5.0' },
    href: '#agent-deck',
  },
  {
    kind: 'next',
    text: { de: 'Zertifikat „Claude Code in Action“ der Anthropic Academy', en: '“Claude Code in Action” certificate from Anthropic Academy' },
    href: '#zertifikate',
  },
  {
    kind: 'done',
    text: { de: 'Soul Codes App jetzt auch auf Spanisch, Portugiesisch und Französisch', en: 'Soul Codes App now also in Spanish, Portuguese and French' },
    href: '#soul-codes',
  },
];
