import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Flaggschiff-Felder: Projekte mit `flagship` bekommen auf der Startseite eine eigene
// Scroll-Sektion. `preview` benennt die Komponente in src/components/previews,
// `story` liefert genau vier Textschritte passend zu deren data-step 0 bis 3.
const flagshipFields = {
  flagship: z.number().optional(),
  preview: z.string().optional(),
  facts: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
  story: z.array(z.object({ title: z.string(), text: z.string() })).length(4).optional(),
};

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    stack: z.array(z.string()),
    // Nur setzen, wo die eigene Rolle nicht selbsterklaerend ist — etwa bei Projekten,
    // die im Team entstehen und deren Hauptrepo woanders liegt.
    role: z.string().optional(),
    repo: z.string().url().optional(),
    live: z.string().url().optional(),
    download: z.string().url().optional(),
    // optional: reine Bibliotheken ohne Oberflaeche haben kein Bild
    image: z.string().optional(),
    // Nur für generierte Cover-Karten: deren Text steht sonst nirgends auf der Seite.
    // Echte Screenshots bleiben ohne Alt-Text, weil Titel und Zusammenfassung direkt darüber stehen.
    imageAlt: z.string().optional(),
    order: z.number(),
    featured: z.boolean().default(false),
    ...flagshipFields,
  }),
});

const ventures = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ventures' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    status: z.string(),
    stack: z.array(z.string()).default([]),
    live: z.string().url().optional(),
    order: z.number(),
    ...flagshipFields,
  }),
});

export const collections = { projects, ventures };
