import { spawn, spawnSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { chromium } from 'playwright';

const PORT = 4321;
const BASE = `http://localhost:${PORT}`;
const routes = [
  '/',
  '/404.html',
  '/de/', '/en/',
  '/de/projects/', '/en/projects/',
  '/de/projects/wincleaner/', '/en/projects/wincleaner/',
  '/de/projects/kina-search/', '/en/projects/kina-search/',
  '/de/projects/panini-tracker/', '/en/projects/panini-tracker/',
  '/de/projects/techcompare/', '/en/projects/techcompare/',
  '/de/projects/claude-skills/', '/en/projects/claude-skills/',
  '/de/projects/agentfenster/', '/en/projects/agentfenster/',
  '/de/projects/garmopol-web/', '/en/projects/garmopol-web/',
  '/de/projects/authcodegenerator/', '/en/projects/authcodegenerator/',
  '/de/startup/', '/en/startup/',
  '/de/about/', '/en/about/',
];
const viewports = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844 },
};

const server = spawn('npx', ['astro', 'preview', '--port', String(PORT)], {
  shell: true,
  stdio: 'ignore',
});

async function waitForServer() {
  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch(BASE + '/de/');
      if (res.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error('Preview-Server nicht erreichbar');
}

let browser;
try {
  await waitForServer();
  mkdirSync('screenshots', { recursive: true });
  browser = await chromium.launch();
  for (const [device, viewport] of Object.entries(viewports)) {
    // reducedMotion: deterministische Screenshots (kein Mid-Animation-Zustand)
    // und zugleich Nachweis, dass bei prefers-reduced-motion alle Inhalte
    // sichtbar bleiben (Scroll-Reveal deaktiviert sich dann komplett).
    const page = await browser.newPage({ viewport, reducedMotion: 'reduce' });
    for (const route of routes) {
      const name = (route === '/' ? 'root' : route.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, ''));
      await page.goto(BASE + route, { waitUntil: 'networkidle' });
      await page.screenshot({ path: `screenshots/${device}-${name}.png`, fullPage: true });
      console.log(`OK ${device} ${route}`);
    }
    await page.close();
  }

  // Motion-Pfad-Check: ein Kontext OHNE reducedMotion — deckt den einzigen
  // Mechanismus ab, der Inhalte dauerhaft verstecken kann (js-reveal +
  // IntersectionObserver). Bis ans Seitenende scrollen, dann darf kein
  // .reveal-Element mehr ohne .is-visible sein.
  const motionPage = await browser.newPage({ viewport: viewports.desktop });
  for (const route of ['/de/', '/de/projects/', '/de/startup/']) {
    await motionPage.goto(BASE + route, { waitUntil: 'networkidle' });
    const jsReveal = await motionPage.evaluate(() =>
      document.documentElement.classList.contains('js-reveal')
    );
    if (!jsReveal) {
      throw new Error(`Motion-Check ${route}: js-reveal nicht gesetzt — Reveal-Script läuft nicht, Check wäre wirkungslos`);
    }
    await motionPage.evaluate(async () => {
      for (let y = 0; y <= document.body.scrollHeight; y += 400) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 100));
      }
    });
    await motionPage.waitForTimeout(700);
    const { total, hidden } = await motionPage.evaluate(() => ({
      total: document.querySelectorAll('.reveal').length,
      hidden: document.querySelectorAll('.reveal:not(.is-visible)').length,
    }));
    if (hidden > 0) {
      throw new Error(`Motion-Check ${route}: ${hidden} von ${total} .reveal-Elementen bleiben nach Scroll versteckt`);
    }
    console.log(`OK motion ${route} (${total}/${total} reveals sichtbar)`);
  }
  await motionPage.close();
} finally {
  if (browser) {
    try {
      await browser.close();
    } catch {}
  }
  if (process.platform === 'win32') {
    spawnSync('taskkill', ['/pid', String(server.pid), '/t', '/f']);
  } else {
    server.kill();
  }
}
