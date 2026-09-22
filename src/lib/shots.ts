import { existsSync } from 'node:fs';

// Eine Screenshot-Vorschau gilt erst, wenn alle vier Schritte als Bild vorliegen.
// Fehlt eins, zeigt die Seite das Projekt ohne Vorschau statt mit leerem Rahmen.
export const hasShots = (slug?: string) =>
  !!slug && [0, 1, 2, 3].every((i) => existsSync(`public/images/shots/${slug}/${i}.webp`));
