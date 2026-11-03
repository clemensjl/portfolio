// Werdegang. Projektdaten = erster Commit im jeweiligen Repo, Soul Codes = Launch am 15.09.2026,
// Praktika und Jobs = LinkedIn-Profil (Stand 2026-11-03).
import type { Lang } from '../i18n';

export const timeline: { when: Record<Lang, string>; title: Record<Lang, string>; text: Record<Lang, string>; href?: string }[] = [
  {
    when: { de: 'Februar 2024', en: 'February 2024' },
    title: { de: 'Praktikum bei Comm-Unity EDV', en: 'Internship at Comm-Unity EDV' },
    text: { de: 'Mein erstes Praktikum in einem IT-Betrieb in Klagenfurt.', en: 'My first internship at an IT company in Klagenfurt.' },
  },
  {
    when: { de: 'Herbst 2024', en: 'Autumn 2024' },
    title: { de: 'HTL Mössingerstraße, Klagenfurt', en: 'HTL Mössingerstraße, Klagenfurt' },
    text: { de: 'Abteilung Elektronik und IT. Hier lerne ich Java.', en: 'Electronics and IT department. This is where I learn Java.' },
  },
  {
    when: { de: 'Sommer 2025', en: 'Summer 2025' },
    title: { de: 'Erste Nebenjobs', en: 'First side jobs' },
    text: { de: 'Saisonarbeit bei G&D Gelato, im September dazu bei der Eventschmiede in Klagenfurt.', en: 'Seasonal work at G&D Gelato, plus the Eventschmiede in Klagenfurt in September.' },
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
    when: { de: 'Juli 2026', en: 'July 2026' },
    title: { de: 'Praktikum bei der Informatik Werkstatt', en: 'Internship at Informatik Werkstatt' },
    text: { de: 'Zwei Monate Praktikum in Klagenfurt, nebenbei wieder Saisonarbeit bei G&D Gelato.', en: 'Two months of internship in Klagenfurt, alongside seasonal work at G&D Gelato again.' },
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
  {
    when: { de: 'Oktober 2026', en: 'October 2026' },
    title: { de: 'IT-Techniker bei der School of motivation & happiness', en: 'IT technician at School of motivation & happiness' },
    text: { de: 'Befristete Stelle bei Ilse Grabner, hybrid in Kärnten.', en: 'Fixed-term position with Ilse Grabner, hybrid in Carinthia.' },
  },
  {
    when: { de: 'Oktober 2026', en: 'October 2026' },
    title: { de: 'AgentShot, Hengst Client, Agent Deck 4.4', en: 'AgentShot, Hengst Client, Agent Deck 4.4' },
    text: { de: 'Ein Screenshot-Tool für Coding-Agenten, ein Minecraft-Launcher in Rust und Agent Deck mit Modellwahl direkt aus der CLI. Dazu läuft der Installer von Iris RGB erstmals auf einem echten PC.', en: 'A screenshot tool for coding agents, a Minecraft launcher in Rust and Agent Deck with model choice straight from the CLI. The Iris RGB installer also runs on a real PC for the first time.' },
    href: 'projects/agentshot/',
  },
  {
    when: { de: 'November 2026', en: 'November 2026' },
    title: { de: 'Perfect Tracking', en: 'Perfect Tracking' },
    text: { de: 'Ein Kalorien-Tracker, der österreichische Lebensmittel kennt.', en: 'A calorie tracker that knows Austrian food.' },
    href: 'projects/perfect-tracking/',
  },
];
