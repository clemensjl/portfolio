// Werdegang. Projektdaten = erster Commit im jeweiligen Repo (Stand 2026-09-23),
// Soul Codes = Launch und eigene erste Commits am 15.09.2026.
import type { Lang } from '../i18n';

export const timeline: { when: Record<Lang, string>; title: Record<Lang, string>; text: Record<Lang, string>; href?: string }[] = [
  {
    when: { de: 'Herbst 2023', en: 'Autumn 2023' },
    title: { de: 'HTL Mössingerstraße, Klagenfurt', en: 'HTL Mössingerstraße, Klagenfurt' },
    text: { de: 'Abteilung Elektronik und IT. Hier lerne ich seit drei Jahren Java.', en: 'Electronics and IT department. This is where I have been learning Java for three years.' },
  },
  {
    when: { de: 'Mai 2026', en: 'May 2026' },
    title: { de: 'Racep Labs: Lifemate und Märchenfuchs', en: 'Racep Labs: Lifemate and Märchenfuchs' },
    text: { de: 'Mit zwei Freunden starte ich zwei Apps: einen KI-Alltags-Companion und Gutenachtgeschichten für Kinder.', en: 'With two friends I start two apps: an AI companion for everyday life and bedtime stories for kids.' },
    href: 'startup/',
  },
  {
    when: { de: 'Juni 2026', en: 'June 2026' },
    title: { de: 'KernClean', en: 'KernClean' },
    text: { de: 'Das erste eigene Windows-Tool: aufräumen, Speicher analysieren, Duplikate finden.', en: 'My first own Windows tool: cleaning up, analysing storage, finding duplicates.' },
    href: 'projects/kern-clean/',
  },
  {
    when: { de: 'Juli 2026', en: 'July 2026' },
    title: { de: 'Erstes Portfolio und garmopol-web', en: 'First portfolio and garmopol-web' },
    text: { de: 'Die erste Fassung dieser Seite geht online, dazu die Website für garmopol.', en: 'The first version of this site goes online, plus the website for garmopol.' },
    href: 'projects/garmopol-web/',
  },
  {
    when: { de: 'August 2026', en: 'August 2026' },
    title: { de: 'agentfenster, KernMind, Agent Deck', en: 'agentfenster, KernMind, Agent Deck' },
    text: { de: 'Werkzeuge rund um KI-Agenten: ein Kontrollraum für Klick-Agenten im Zweierteam, ein zweites Gehirn und ein Cockpit für Coding-Agenten.', en: 'Tools around AI agents: a control room for click agents built as a team of two, a second brain and a cockpit for coding agents.' },
    href: 'projects/agent-deck/',
  },
  {
    when: { de: 'September 2026', en: 'September 2026' },
    title: { de: 'Soul Codes App', en: 'Soul Codes App' },
    text: { de: 'Mitarbeit an einer Kunden-App zum Launch: fünf Sprachen, Astrokarte, Suchmaschinen-Anbindung.', en: 'Working on a client app around its launch: five languages, astrocartography map, search engine setup.' },
    href: 'projects/soul-codes/',
  },
];
