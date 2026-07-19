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
// REVIEW: echte E-Mail-Adresse eintragen, sobald geliefert.
export const EMAIL_HREF = 'mailto:#';
