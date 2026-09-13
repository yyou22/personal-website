// Run with sharp available (as in the art-preview preparation script).
// Generated files are checked in; deployment does not need to run this script.
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const sharp = require('sharp')

async function main() {
  const root = path.resolve(__dirname, '..')
  const directory = path.join(root, 'public/assets/hero')
  fs.mkdirSync(directory, { recursive: true })
  const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex').slice(0, 16)
  const model = fs.readFileSync(path.join(root, 'public/scene.glb'))
  const modelName = `scene-${hash(model)}.glb`
  fs.writeFileSync(path.join(directory, modelName), model)

  const original = fs.readFileSync(path.join(root, 'public/images/photo1.png'))
  const metadata = await sharp(original).metadata()
  const variants = []
  const widths = [...new Set([100, 200, 300, 400, 600, metadata.width].map(width => Math.min(width, metadata.width)))]
  for (const width of widths) {
    const pipeline = () => sharp(original).rotate().resize({ width, withoutEnlargement: true }).toColourspace('srgb')
    const encoded = await pipeline().webp({ lossless: true, effort: 6 }).toBuffer()
    const expected = await pipeline().ensureAlpha().raw().toBuffer()
    const actual = await sharp(encoded).ensureAlpha().raw().toBuffer()
    if (!expected.equals(actual)) throw new Error(`Profile pixels changed during encoding at ${width}px`)
    const name = `profile-${hash(encoded)}-${width}.webp`
    fs.writeFileSync(path.join(directory, name), encoded)
    variants.push({ width, src: `/assets/hero/${name}` })
    console.log(`Profile ${width}px: ${encoded.length} bytes; lossless pixel check passed`)
  }
  fs.writeFileSync(path.join(root, 'lib/hero-assets.json'), JSON.stringify({
    model: `/assets/hero/${modelName}`,
    profile: { width: metadata.width, height: metadata.height, variants }
  }, null, 2) + '\n')
  console.log(`Model: ${model.length} bytes; original file preserved exactly`)
}
main().catch(error => { console.error(error); process.exit(1) })
