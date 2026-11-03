// Werdegang. Projektdaten = erster Commit im jeweiligen Repo, Soul Codes = Launch am 15.09.2026,
// Praktika und Jobs = LinkedIn-Profil (Stand 2026-11-03).
import type { Lang } from '../i18n';

export const timeline: { when: Record<Lang, string>; title: Record<Lang, string>; text: Record<Lang, string>; href?: string }[] = [
  {
    when: { de: 'Februar 2024', en: 'February 2024' },
    title: { de: 'Praktikum bei Comm-Unity EDV', en: 'Internship at Comm-Unity EDV' },
    text: { de: 'Drei Tage Einblick in den Arbeitsalltag eines IT-Betriebs in Klagenfurt: die Programme und das Team kennengelernt.', en: 'Three days at an IT company in Klagenfurt to see what the work looks like day to day, getting to know their software and the team.' },
  },
  {
    when: { de: 'Herbst 2024', en: 'Autumn 2024' },
    title: { de: 'HTL Mössingerstraße, Klagenfurt', en: 'HTL Mössingerstraße, Klagenfurt' },
    text: { de: 'Abteilung Elektronik und IT. Hier lerne ich Java.', en: 'A technical secondary school, where I am in the electronics and IT department. This is where I learn Java.' },
  },
  {
    when: { de: 'Sommer 2025', en: 'Summer 2025' },
    title: { de: 'Erste Nebenjobs', en: 'First part-time jobs' },
    text: { de: 'Bei G&D Gelato zum Eisverkäufer ausgebildet, samt Kaffeezubereitung, danach den Sommer über im Verkauf ausgeholfen. Im September als Aushilfe bei einzelnen Events der Eventschmiede.', en: 'Trained as an ice cream seller at G&D Gelato, including making coffee, then helped out at the counter for the rest of the summer. In September I worked as a helper at some of the Eventschmiede events.' },
  },
  {
    when: { de: 'Mai 2026', en: 'May 2026' },
    title: { de: 'Racep Labs: Lifemate und Märchenfuchs', en: 'Racep Labs: Lifemate and Märchenfuchs' },
    text: { de: 'Mit zwei Freunden starte ich zwei Apps: einen KI-Alltags-Companion und Gutenachtgeschichten für Kinder.', en: 'Two friends and I start building two apps: an AI companion for everyday life and bedtime stories for kids.' },
    href: 'startup/',
  },
  {
    when: { de: 'Juni 2026', en: 'June 2026' },
    title: { de: 'KernClean', en: 'KernClean' },
    text: { de: 'Das erste eigene Windows-Tool: aufräumen, Speicher analysieren, Duplikate finden.', en: 'My first Windows tool of my own: cleanup, storage analysis and duplicate finding.' },
    href: 'projects/kern-clean/',
  },
  {
    when: { de: 'Juli 2026', en: 'July 2026' },
    title: { de: 'Erstes Portfolio und garmopol-web', en: 'First portfolio and garmopol-web' },
    text: { de: 'Die erste Fassung dieser Seite geht online, dazu die Website für garmopol.', en: 'The first version of this site goes live, along with the website for garmopol.' },
    href: 'projects/garmopol-web/',
  },
  {
    when: { de: 'Juli 2026', en: 'July 2026' },
    title: { de: 'Praktikum bei der Informatik Werkstatt', en: 'Internship at Informatik Werkstatt' },
    text: { de: 'Zwei Monate lang das Social Media übernommen: Videos und Posts erstellt, dazu Einblick in die Workshops und dort mitgemacht. Von Mai bis Ende August parallel wieder Verkäufer bei G&D Gelato.', en: 'Two months running their social media, making videos and posts. I also got a look inside their workshops and joined in. From May to the end of August I was back selling ice cream at G&D Gelato as well.' },
  },
  {
    when: { de: 'August 2026', en: 'August 2026' },
    title: { de: 'agentfenster, KernMind, Agent Deck', en: 'agentfenster, KernMind, Agent Deck' },
    text: { de: 'Werkzeuge rund um KI-Agenten: ein Kontrollraum für Klick-Agenten im Zweierteam, ein zweites Gehirn und ein Cockpit für Coding-Agenten.', en: 'Tools for AI agents: a second brain, a cockpit for coding agents and, in a team of two, a control room for agents that click through apps.' },
    href: 'projects/agent-deck/',
  },
  {
    when: { de: 'September 2026', en: 'September 2026' },
    title: { de: 'Soul Codes App', en: 'Soul Codes App' },
    text: { de: 'Mitarbeit an einer Kunden-App zum Launch: fünf Sprachen, Astrokarte, Suchmaschinen-Anbindung.', en: 'Helping a client app get ready for launch: five languages, the astrocartography map and the search engine setup.' },
    href: 'projects/soul-codes/',
  },
  {
    when: { de: 'Oktober 2026', en: 'October 2026' },
    title: { de: 'IT-Techniker bei der School of motivation & happiness', en: 'IT technician at the School of motivation & happiness' },
    text: { de: 'Befristete Stelle bei Ilse Grabner, hybrid in Kärnten. Ich betreue dort die Soul Codes App mit: Anmeldung per Mail-Link statt Passwort, automatisches Konto nach dem Kauf, Zugangsmails über Brevo und Resend, eine Besucheranalyse ohne Cookies, Promocodes für Partnerinnen über Digistore24, eine neu gestaltete Startseite und eine in fünf Runden überarbeitete App samt PDF-Report und neuem App-Icon.', en: 'Fixed-term job with Ilse Grabner, hybrid, in Carinthia in southern Austria. I help look after the Soul Codes App: sign-in by email link instead of a password, an account created automatically after purchase, access emails through Brevo and Resend, cookie-free visitor analytics, promo codes for partners through Digistore24, a redesigned landing page and an app reworked over five rounds, including the PDF report and a new app icon.' },
    href: 'projects/soul-codes/',
  },
  {
    when: { de: 'Oktober 2026', en: 'October 2026' },
    title: { de: 'AgentShot, Hengst Client, Agent Deck 4.4', en: 'AgentShot, Hengst Client, Agent Deck 4.4' },
    text: { de: 'Ein Screenshot-Tool für Coding-Agenten, ein Minecraft-Launcher in Rust und Agent Deck mit Modellwahl direkt aus der CLI. Dazu läuft der Installer von Iris RGB erstmals auf einem echten PC.', en: 'A screenshot tool for coding agents, a Minecraft launcher in Rust, and Agent Deck with model selection pulled straight from the CLI. The Iris RGB installer also runs on a real PC for the first time.' },
    href: 'projects/agentshot/',
  },
  {
    when: { de: 'November 2026', en: 'November 2026' },
    title: { de: 'Perfect Tracking', en: 'Perfect Tracking' },
    text: { de: 'Ein Kalorien-Tracker, der österreichische Lebensmittel kennt.', en: 'A calorie tracker that knows Austrian food.' },
    href: 'projects/perfect-tracking/',
  },
];
