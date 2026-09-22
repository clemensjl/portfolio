// Projektbilder (OG-Bild, Fallback in Listen) aus den echten Screenshots unter
// public/images/shots/<slug>/: je Projekt ein aussagekraeftiger Schritt als JPEG 1200x750.
//   node scripts/shot-covers.mjs
import sharp from 'sharp';

const covers = {
  'soul-codes': 0,
  'agent-deck': 2,
  agentfenster: 1,
  kernmind: 0,
  'kern-clean': 3,
};

for (const [slug, step] of Object.entries(covers)) {
  const out = `public/images/projects/${slug}.jpg`;
  await sharp(`public/images/shots/${slug}/${step}.webp`)
    .resize(1200, 750)
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(out);
  console.log('wrote', out);
}
