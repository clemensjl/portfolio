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
    const page = await browser.newPage({ viewport });
    for (const route of routes) {
      const name = (route === '/' ? 'root' : route.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, ''));
      await page.goto(BASE + route, { waitUntil: 'networkidle' });
      await page.screenshot({ path: `screenshots/${device}-${name}.png`, fullPage: true });
      console.log(`OK ${device} ${route}`);
    }
    await page.close();
  }
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
