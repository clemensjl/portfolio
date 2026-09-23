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

// Kontaktwege neben der E-Mail. Leere Werte werden nicht angezeigt.
// Nummer im internationalen Format mit +, z. B. '+43 660 1234567'.
export const PHONE = '';
// WhatsApp laeuft ueber dieselbe Nummer, ausser hier steht eine andere.
export const WHATSAPP = '';

// Profile in der Reihenfolge, in der sie im Kontaktblock stehen.
// LinkedIn-Profil, z. B. 'https://www.linkedin.com/in/...'. Leer: kein Link.
export const LINKEDIN_URL = '';

export const SOCIALS: { label: string; href: string }[] = [
  ...(LINKEDIN_URL ? [{ label: 'LinkedIn', href: LINKEDIN_URL }] : []),
  { label: 'GitHub', href: GITHUB_URL },
];

export const telHref = (n: string) => `tel:${n.replace(/[^\d+]/g, '')}`;
export const waHref = (n: string) => `https://wa.me/${n.replace(/\D/g, '')}`;
