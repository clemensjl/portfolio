// Cover-Karten für Projekte ohne zeigbaren Screenshot (Desktop-App vor dem Release,
// Skill-Sammlung ohne Oberfläche, Instanz mit privaten Inhalten). Bewusst als Karte
// gestaltet, nicht als Fake-Screenshot. Pro Sprache eine Datei: Die Karte steht auf
// der de- und der en-Seite und ist dort auch das OG-Bild.
// Keine Versionsnummern im Bild — die veralten still, weil nichts die Karten neu baut.
import { chromium } from 'playwright';

const covers = [
  {
    slug: 'agent-deck',
    de: {
      kicker: 'Windows-App · Electron',
      title: 'Agent Deck',
      line: 'Mehrere Coding-Agenten in einem Fenster — je Session ein echtes Terminal, ein eigener Account.',
      foot: 'Installer über das öffentliche Release-Repo',
    },
    en: {
      kicker: 'Windows app · Electron',
      title: 'Agent Deck',
      line: 'Several coding agents in one window — a real terminal and its own account per session.',
      foot: 'Installer from the public release repository',
    },
    chips: ['Electron', 'React', 'TypeScript', 'node-pty', 'xterm.js'],
  },
  {
    slug: 'kernmind',
    de: {
      kicker: 'Self-hosted · Open Source',
      title: 'KernMind',
      line: 'Zweites Gehirn auf der eigenen Instanz — sammeln, per KI befragen, mit eigenem API-Key oder offline.',
      foot: 'kernmind.vercel.app · MIT',
    },
    en: {
      kicker: 'Self-hosted · Open source',
      title: 'KernMind',
      line: 'A second brain on your own instance — collect it, ask it, with your own API key or fully offline.',
      foot: 'kernmind.vercel.app · MIT',
    },
    chips: ['Next.js', 'TypeScript', 'SQLite / Turso', 'Chrome MV3', 'Ollama'],
  },
  {
    slug: 'agentfenster',
    de: {
      kicker: 'Windows · Vor dem Start',
      title: 'agentfenster',
      line: 'Der Agent arbeitet auf einem unsichtbaren zweiten Desktop — in der eigenen Sitzung, live beobachtbar, jederzeit übernehmbar.',
      foot: 'agentfenster.com · MCP-Server mit elf Werkzeugen',
    },
    en: {
      kicker: 'Windows · Pre-launch',
      title: 'agentfenster',
      line: 'The agent works on an invisible second desktop — inside your own session, watchable live, yours to take over.',
      foot: 'agentfenster.com · MCP server with eleven tools',
    },
    chips: ['Python', 'Win32', 'MCP', 'ConPTY', 'Record & Replay'],
  },
  {
    slug: 'openpass',
    de: {
      kicker: 'Self-hosted · AGPL-3.0',
      title: 'OpenPass',
      line: 'Passwort-Tresor, der auf dem Gerät verschlüsselt wird — der eigene Server sieht nur Blobs.',
      foot: 'Pre-Audit-Alpha · noch nicht veröffentlicht',
    },
    en: {
      kicker: 'Self-hosted · AGPL-3.0',
      title: 'OpenPass',
      line: 'A password vault encrypted on the device — your own server only ever sees blobs.',
      foot: 'Pre-audit alpha · not released yet',
    },
    chips: ['Rust', 'SQLite', 'Argon2id', 'XChaCha20', 'Tauri'],
  },
  {
    slug: 'claude-skills',
    de: {
      kicker: 'Agent Skills · MIT',
      title: 'Agent Skills für Rechtstexte',
      line: 'Impressum, Datenschutz und Compliance mit den Paragrafen, die tatsächlich gelten.',
      foot: 'npx skills@latest add clemensjl/claude-skills',
    },
    en: {
      kicker: 'Agent skills · MIT',
      title: 'Agent Skills for Legal Texts',
      line: 'Imprint, privacy and compliance citing the provisions that actually apply.',
      foot: 'npx skills@latest add clemensjl/claude-skills',
    },
    chips: ['AT', 'DE', 'CH', 'FR', 'IT', 'UK', 'US', 'AU', 'EU'],
  },
];

const css = `
  :root {
    --bg: #16191d; --surface: #1e2228; --border: #30363d;
    --text: #e6e9ec; --muted: #9aa3ad; --accent: #3fb950;
  }
  * { box-sizing: border-box; }
  body {
    margin: 0; width: 1200px; height: 675px; background: var(--bg); color: var(--text);
    font-family: 'Segoe UI', system-ui, sans-serif; line-height: 1.5;
    display: flex; flex-direction: column; justify-content: center; padding: 0 84px;
  }
  .rule { height: 1px; background: var(--border); margin-bottom: 40px; }
  .kicker {
    font-family: Consolas, monospace; font-size: 20px; letter-spacing: 0.08em;
    text-transform: uppercase; color: var(--accent); margin-bottom: 22px;
  }
  h1 { font-size: 64px; font-weight: 650; letter-spacing: -0.03em; margin: 0 0 18px; }
  p { font-size: 27px; color: var(--muted); margin: 0; max-width: 900px; }
  .chips { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 40px; }
  .chip {
    font-family: Consolas, monospace; font-size: 19px; color: var(--muted);
    border: 1px solid var(--border); background: var(--surface);
    border-radius: 999px; padding: 7px 17px;
  }
  .foot {
    font-family: Consolas, monospace; font-size: 19px; color: var(--muted);
    margin-top: 46px; padding-top: 22px; border-top: 1px solid var(--border);
  }
`;

const browser = await chromium.launch();
try {
  for (const c of covers) {
    for (const lang of ['de', 'en']) {
      const t = c[lang];
      const out = `public/images/projects/${c.slug}${lang === 'en' ? '-en' : ''}.png`;
      const page = await browser.newPage({ viewport: { width: 1200, height: 675 } });
      await page.setContent(`<!doctype html><meta charset="utf-8"><style>${css}</style>
        <body>
          <div class="rule"></div>
          <div class="kicker">${t.kicker}</div>
          <h1>${t.title}</h1>
          <p>${t.line}</p>
          <div class="chips">${c.chips.map((s) => `<span class="chip">${s}</span>`).join('')}</div>
          <div class="foot">${t.foot}</div>
        </body>`);
      await page.screenshot({ path: out });
      await page.close();
      console.log(out, 'geschrieben');
    }
  }
} finally {
  await browser.close();
}
