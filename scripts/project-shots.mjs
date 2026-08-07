// Screenshots der Live-Seiten / Repos für die Projektkarten.
// Ergebnis: public/images/projects/<slug>.png, Viewport 1280x800.
// Nicht erreichbare Ziele werden übersprungen (kein Platzhalterbild).
import { mkdirSync } from 'node:fs';
import { chromium } from 'playwright';

const OUT_DIR = 'public/images/projects';
const VIEWPORT = { width: 1280, height: 800 };

const targets = {
  'garmopol-web': 'https://garmopol.net',
  'claude-skills': 'https://github.com/clemensjl/claude-skills',
};

const only = process.argv.slice(2);
const entries = Object.entries(targets).filter(
  ([slug]) => only.length === 0 || only.includes(slug),
);

mkdirSync(OUT_DIR, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: VIEWPORT });
let failed = 0;

for (const [slug, url] of entries) {
  const path = `${OUT_DIR}/${slug}.png`;
  try {
    // 'load' statt 'networkidle': Seiten mit Dauerverbindungen (z. B. GitHub)
    // erreichen networkidle nie.
    const res = await page.goto(url, { waitUntil: 'load', timeout: 30000 });
    if (!res || !res.ok()) throw new Error(`HTTP ${res ? res.status() : 'kein Response'}`);
    await page.waitForTimeout(1500);
    await page.screenshot({ path, fullPage: false });
    console.log(`OK   ${slug} <- ${url}`);
  } catch (err) {
    failed++;
    console.error(`SKIP ${slug} <- ${url}: ${err.message}`);
  }
}

await page.close();
await browser.close();
process.exitCode = failed > 0 ? 1 : 0;
