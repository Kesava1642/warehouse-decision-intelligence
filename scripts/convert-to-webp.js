/**
 * Converts heavy PNG hero images to WebP (quality 85).
 * Run from repo root: node scripts/convert-to-webp.js
 * Requires: npm install sharp (or add sharp as devDependency).
 */
const path = require('path');
const fs = require('fs');

const IMAGES_DIR = path.join(__dirname, '..', 'assets', 'images');
const CONFIGS = [
  { src: 'home-hero.png', webp: 'home-hero.webp' },
  { src: 'how it works.png', webp: 'how it works.webp' },
];

async function main() {
  let sharp;
  try {
    sharp = require('sharp');
  } catch (e) {
    console.error('Missing "sharp". Run: npm install sharp');
    process.exit(1);
  }

  for (const { src, webp } of CONFIGS) {
    const srcPath = path.join(IMAGES_DIR, src);
    const outPath = path.join(IMAGES_DIR, webp);
    if (!fs.existsSync(srcPath)) {
      console.warn('Skip (not found):', src);
      continue;
    }
    try {
      await sharp(srcPath)
        .webp({ quality: 85 })
        .toFile(outPath);
      const stat = fs.statSync(outPath);
      console.log('Created:', webp, '(' + Math.round(stat.size / 1024) + ' KB)');
    } catch (err) {
      console.error('Error converting', src, err.message);
    }
  }
}

main();
