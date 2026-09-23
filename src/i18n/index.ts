import de from './de';
import en from './en';

export const languages = { de: 'Deutsch', en: 'English' } as const;
export type Lang = keyof typeof languages;
export type UiKey = keyof typeof de;

const ui: Record<Lang, Record<UiKey, string>> = { de, en };

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key];
}

export function otherLang(lang: Lang): Lang {
  return lang === 'de' ? 'en' : 'de';
}

export const langStaticPaths = [
  { params: { lang: 'de' as Lang } },
  { params: { lang: 'en' as Lang } },
];

export const GITHUB_URL = 'https://github.com/clemensjl';
export const EMAIL_HREF = 'mailto:clemens@jele.at';

// Telefon und WhatsApp stehen bewusst NICHT hier (das Repo ist oeffentlich): die Nummer liegt in
// der Vercel-Umgebungsvariable CONTACT_PHONE und kommt nur ueber api/kontakt.js, nach IP-Pruefung.

export const LINKEDIN_URL = 'https://www.linkedin.com/in/clemens-jele-a18b373a2/';

// Profile in der Reihenfolge, in der sie im Kontaktblock stehen.
export const SOCIALS: { label: string; href: string }[] = [
  { label: 'LinkedIn', href: LINKEDIN_URL },
  { label: 'GitHub', href: GITHUB_URL },
  { label: 'X', href: 'https://x.com/clemensjl' },
];
