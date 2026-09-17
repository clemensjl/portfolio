// Projektbilder (OG-Bild, Hover-Bild in der Projektliste) direkt aus den Vorschau-Komponenten:
// rendert die Labor-Seite jeder Vorschau und fotografiert sie in einem aussagekraeftigen Schritt.
// Voraussetzung: laufender Dev-Server, z. B. `npx astro dev --port 4400`.
//   node scripts/preview-shots.mjs [http://localhost:4400]
import { chromium } from 'playwright';

const base = process.argv[2] ?? 'http://localhost:4400';
const shots = [
  { lab: 'agentfenster', step: 2, out: ['agentfenster.png', 'agentfenster-en.png'] },
  { lab: 'agent-deck', step: 2, out: ['agent-deck.png', 'agent-deck-en.png'] },
  { lab: 'kernmind', step: 3, out: ['kernmind.png', 'kernmind-en.png'] },
  { lab: 'kern-search', step: 1, out: ['kern-search.jpg'] },
  { lab: 'kern-clean', step: 2, out: ['kern-clean.png'] },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 1000 }, deviceScaleFactor: 1 });
for (const s of shots) {
  await page.goto(`${base}/lab/${s.lab}/?step=${s.step}&live=0`, { waitUntil: 'networkidle' });
  // Filmkorn der Seite ausblenden: im Bild waere es nur Rauschen, das die Datei aufblaeht
  await page.addStyleTag({ content: 'body::after{display:none!important}' });
  await page.waitForTimeout(2500);
  const el = page.locator('[data-preview]').first();
  for (const file of s.out) {
    const jpg = file.endsWith('.jpg');
    await el.screenshot({ path: `public/images/projects/${file}`, type: jpg ? 'jpeg' : 'png', ...(jpg ? { quality: 86 } : {}) });
    console.log('wrote', file);
  }
}
await browser.close();
