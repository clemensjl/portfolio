import { chromium } from 'playwright';

const html = `<!doctype html>
<html><head><meta charset="utf-8"><style>
  body {
    margin: 0; width: 1200px; height: 630px;
    background: #16191d; color: #e6e9ec;
    font-family: 'Segoe UI', system-ui, sans-serif;
    display: flex; flex-direction: column; justify-content: center;
    padding: 0 90px; box-sizing: border-box;
  }
  .mark {
    font-family: Consolas, monospace; font-size: 44px; font-weight: 700;
    color: #3fb950; border: 3px solid #3fb950; border-radius: 18px;
    width: 84px; height: 84px; display: flex; align-items: center;
    justify-content: center; margin-bottom: 40px;
  }
  h1 { font-size: 72px; margin: 0 0 16px; letter-spacing: -2px; }
  p { font-size: 32px; margin: 0; color: #9aa3ad; }
</style></head>
<body>
  <div class="mark">CJ</div>
  <h1>Clemens Jele</h1>
  <p>Desktop-Utilities · Web-Apps · Automatisierung</p>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html);
await page.screenshot({ path: 'public/og-default.png' });
await browser.close();
console.log('public/og-default.png geschrieben');
