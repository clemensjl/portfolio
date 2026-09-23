// Vercel Function: gibt Telefonnummer und WhatsApp-Link nur an unauffaellige Besucher heraus.
// Die Nummer steht nie im Repo (oeffentlich) und nie im HTML, sondern nur in der
// Vercel-Umgebungsvariable CONTACT_PHONE (z. B. "+43 680 1234567").
//
// Abgelehnt wird, wenn
//  - der Aufruf nach Bot aussieht (User-Agent, fehlende Browser-Header, kein POST),
//  - ip-api.com die IP als Proxy/VPN oder Rechenzentrum meldet,
//  - proxycheck.io sie als Proxy/VPN/Tor meldet oder das Risiko hoch ist,
//  - keiner der beiden Dienste antwortet (im Zweifel nichts herausgeben).

const BOT_UA = /bot|crawl|spider|slurp|curl|wget|python|httpclient|axios|node-fetch|go-http|java\/|headless|phantom|scrapy|playwright|puppeteer|selenium/i;

async function json(url, ms = 2500) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    const r = await fetch(url, { signal: ctrl.signal });
    return r.ok ? await r.json() : null;
  } catch {
    return null;
  } finally {
    clearTimeout(t);
  }
}

export async function pruefeIp(ip) {
  const [a, b] = await Promise.all([
    json(`http://ip-api.com/json/${encodeURIComponent(ip)}?fields=status,proxy,hosting`),
    json(`https://proxycheck.io/v2/${encodeURIComponent(ip)}?vpn=1&risk=1`),
  ]);
  const ipApi = a?.status === 'success' ? a : null;
  const pc = b?.status === 'ok' || b?.status === 'warning' ? b[ip] : null;
  if (!ipApi && !pc) return { ok: false, grund: 'unbekannt' };
  if (ipApi && (ipApi.proxy || ipApi.hosting)) return { ok: false, grund: 'netz' };
  if (pc && (pc.proxy === 'yes' || /vpn|tor|proxy|hosting/i.test(pc.type ?? '') || (pc.risk ?? 0) >= 67)) {
    return { ok: false, grund: 'netz' };
  }
  return { ok: true };
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'private, no-store');
  res.setHeader('X-Robots-Tag', 'noindex');

  const phone = process.env.CONTACT_PHONE;
  const ua = req.headers['user-agent'] ?? '';
  const lang = req.headers['accept-language'] ?? '';
  const ip = String(req.headers['x-real-ip'] ?? req.headers['x-forwarded-for'] ?? '').split(',')[0].trim();

  if (req.method !== 'POST') return res.status(405).json({ ok: false });
  if (!phone || !ip || !lang || BOT_UA.test(ua)) return res.status(403).json({ ok: false });

  const pruefung = await pruefeIp(ip);
  if (!pruefung.ok) return res.status(403).json({ ok: false });

  const digits = phone.replace(/\D/g, '');
  return res.status(200).json({
    ok: true,
    phone,
    tel: `tel:+${digits}`,
    whatsapp: `https://wa.me/${digits}`,
  });
}
