// Requires sharp (available in the Codex workspace dependency runtime).
// Originals stay untouched; convert their embedded color profiles to sRGB.
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const sharp = require('sharp')

async function main() {
  const root = path.resolve(__dirname, '..')
  const page = fs.readFileSync(path.join(root, 'pages/works/art.js'), 'utf8')
  const files = [...page.matchAll(/image: '([^']+)'/g)].map(match => match[1])
  const dir = path.join(root, 'public/images/art-previews')
  fs.mkdirSync(dir, { recursive: true })
  const manifest = {}
  for (const file of files) {
    const input = fs.readFileSync(path.join(root, 'public/images/works/art', file))
    const hash = crypto.createHash('sha256').update(input).digest('hex').slice(0, 16)
    const metadata = await sharp(input).metadata()
    const variants = []
    for (const width of [...new Set([480, 960, 1600, 2200].map(size => Math.min(size, metadata.width)))]) {
      const name = `${hash}-${width}.webp`
      await sharp(input).rotate().resize({ width, withoutEnlargement: true }).toColourspace('srgb').webp({ quality: 86 }).toFile(path.join(dir, name))
      variants.push({ width, src: `/images/art-previews/${name}` })
    }
    const blur = await sharp(input).rotate().resize({ width: 12 }).toColourspace('srgb').webp({ quality: 45 }).toBuffer()
    manifest[file] = { width: metadata.width, height: metadata.height, variants, blurDataURL: `data:image/webp;base64,${blur.toString('base64')}` }
    console.log(`${file}: ${input.length} original bytes → ${fs.statSync(path.join(root, 'public', variants[Math.min(1, variants.length - 1)].src)).size} gallery bytes`)
  }
  fs.writeFileSync(path.join(root, 'lib/art-previews.json'), JSON.stringify(manifest, null, 2) + '\n')
}
main().catch(error => { console.error(error); process.exit(1) })
