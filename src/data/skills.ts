// Was Clemens selbst programmiert und was er mit KI baut. Bewusst ehrlich getrennt:
// selbst geschrieben ist wenig, alles andere entsteht mit Coding-Agenten und steht im KI-Teil.
import type { Lang } from '../i18n';

interface Item { name: string; detail: string }
interface Capability { title: string; text: string; proof: string }

export const coding: Record<Lang, Item[]> = {
  de: [
    { name: 'Java', detail: 'Seit drei Jahren im Unterricht an der HTL' },
    { name: 'HTML', detail: 'Grundlagen' },
    { name: 'Git und GitHub', detail: 'Jeden Tag: Repos, Branches, Releases' },
  ],
  en: [
    { name: 'Java', detail: 'Three years of classes at HTL' },
    { name: 'HTML', detail: 'The basics' },
    { name: 'Git and GitHub', detail: 'Every day: repos, branches, releases' },
  ],
};

export const withAi: Record<Lang, Capability[]> = {
  de: [
    {
      title: 'Ganze Apps mit Coding-Agenten bauen',
      text: 'Ich plane, beschreibe genau, was entstehen soll, und lasse Claude Code oder Codex den Code schreiben. Desktop, Web und Handy.',
      proof: 'Agent Deck, KernClean, KernMind, Märchenfuchs',
    },
    {
      title: 'Mehrere Agenten gleichzeitig steuern',
      text: 'Aufgaben aufteilen, parallel laufen lassen, Ergebnisse zusammenführen. Aus genau diesem Arbeiten ist Agent Deck entstanden.',
      proof: 'Agent Deck',
    },
    {
      title: 'Agent Skills und Anweisungen schreiben',
      text: 'Wiederverwendbare Skills, die einem Agenten Fachwissen und feste Regeln mitgeben, etwa für Rechtstexte nach österreichischem Recht.',
      proof: 'Agent Skills für Rechtstexte',
    },
    {
      title: 'KI in Produkte einbauen',
      text: 'Geschichten, die für ein Kind entstehen, ein Coach, der die Woche auswertet, ein Suchfeld, das im eigenen Wissen antwortet.',
      proof: 'Märchenfuchs, Lifemate, KernMind',
    },
    {
      title: 'Abläufe automatisieren',
      text: 'Browser-Tests, Screenshots, Übersetzungen in mehrere Sprachen, Deploys: alles, was sich wiederholt, übernimmt ein Skript oder ein Agent.',
      proof: 'Soul Codes App, dieses Portfolio',
    },
    {
      title: 'Prüfen statt blind vertrauen',
      text: 'Was die KI baut, teste ich im echten Programm, lasse Reviews laufen und gebe erst frei, wenn es wirklich funktioniert.',
      proof: 'Jedes Projekt hier',
    },
  ],
  en: [
    {
      title: 'Building whole apps with coding agents',
      text: 'I plan, describe precisely what should exist and let Claude Code or Codex write the code. Desktop, web and mobile.',
      proof: 'Agent Deck, KernClean, KernMind, Märchenfuchs',
    },
    {
      title: 'Running several agents at once',
      text: 'Splitting up tasks, running them in parallel, merging the results. Agent Deck grew out of exactly this way of working.',
      proof: 'Agent Deck',
    },
    {
      title: 'Writing agent skills and instructions',
      text: 'Reusable skills that give an agent domain knowledge and fixed rules, for example for legal texts under Austrian law.',
      proof: 'Agent skills for legal texts',
    },
    {
      title: 'Putting AI into products',
      text: 'Stories written for one child, a coach that reviews the week, a search box that answers from your own notes.',
      proof: 'Märchenfuchs, Lifemate, KernMind',
    },
    {
      title: 'Automating workflows',
      text: 'Browser tests, screenshots, translations into several languages, deploys: whatever repeats is handled by a script or an agent.',
      proof: 'Soul Codes App, this portfolio',
    },
    {
      title: 'Checking instead of trusting blindly',
      text: 'I test what the AI builds in the real program, run reviews and only ship once it actually works.',
      proof: 'Every project here',
    },
  ],
};
