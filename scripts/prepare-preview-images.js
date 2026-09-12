// Run with Node 14 (the image encoder bundled with Next 12 predates global fetch).
// Keep small, same-origin previews and blur placeholders ready before deployment.
const fs = require('fs')
const path = require('path')
const https = require('https')
const crypto = require('crypto')
const { processBuffer, decodeBuffer } = require('next/dist/server/lib/squoosh/main')

const root = path.resolve(__dirname, '..')
const output = path.join(root, 'public/images/previews')
const manifestFile = path.join(root, 'lib/preview-images.json')
fs.mkdirSync(output, { recursive: true })
const manifest = fs.existsSync(manifestFile) ? JSON.parse(fs.readFileSync(manifestFile)) : {}
const videoIds = ['HPjwlZ6knHg', 'ozoFFEIhW4U', 'h5JMTz7PoKQ', 'yDacHXX2EZw', 'UUkftG2KH5o', 'JGnXe_geyY0', 'BiToRaCrnHg']
const sources = new Set(videoIds.map(id => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`))
sources.add('/images/works/traffic-flow/thumbnail-intersection-hd.webp')
for (const file of ['lib/press.js', 'lib/publications.js']) {
  const text = fs.readFileSync(path.join(root, file), 'utf8')
  for (const match of text.matchAll(/["']?image["']?\s*:\s*(["'])(.*?)\1/g)) {
    if (!match[2].endsWith('.gif')) sources.add(match[2])
  }
}

function download(url, redirects = 0) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && redirects < 5) {
        res.resume()
        resolve(download(new URL(res.headers.location, url).href, redirects + 1))
      } else if (res.statusCode !== 200) {
        res.resume()
        reject(new Error(`HTTP ${res.statusCode}`))
      } else {
        const chunks = []
        res.on('data', chunk => chunks.push(chunk))
        res.on('end', () => resolve(Buffer.concat(chunks)))
        res.on('error', reject)
      }
    })
    req.setTimeout(20000, () => req.destroy(new Error('Download timed out')))
    req.on('error', reject)
  })
}

async function prepare(src) {
  const detailedPressImage = src === '/images/adobe-for-business-interview.jpg'
  if (manifest[src] && (!detailedPressImage || manifest[src].preset === 'detail-v2')) return
  try {
    let buffer
    let sourceUrl = src
    if (src.includes('/maxresdefault.jpg')) {
      for (const [filename, minimumWidth] of [['maxresdefault.jpg', 1280], ['sddefault.jpg', 640], ['hqdefault.jpg', 480]]) {
        try {
          sourceUrl = src.replace('maxresdefault.jpg', filename)
          const candidate = await download(sourceUrl)
          const dimensions = await decodeBuffer(candidate)
          if (dimensions.width >= minimumWidth) { buffer = candidate; break }
        } catch { /* Some videos do not have every thumbnail size. */ }
      }
      if (!buffer) throw new Error('No usable video thumbnail')
    } else {
      buffer = src.startsWith('https:') ? await download(src) : fs.readFileSync(path.join(root, 'public', src))
    }
    const hash = crypto.createHash('sha256').update(detailedPressImage ? 'detail-v2' : '').update(buffer).digest('hex').slice(0, 16)
    const { width, height } = await decodeBuffer(buffer)
    const variants = []
    const widths = [Math.min(320, width), Math.min(640, width), Math.min(960, width)]
    if (detailedPressImage) widths.push(Math.min(1280, width), Math.min(1920, width))
    if (src.endsWith('-hd.webp') || src.includes('/maxresdefault.jpg')) widths.push(width)
    for (const size of [...new Set(widths)]) {
      const image = await processBuffer(buffer, [{ type: 'resize', width: size }], 'webp', detailedPressImage ? 90 : 80)
      const name = `${hash}-${size}.webp`
      fs.writeFileSync(path.join(output, name), image)
      variants.push({ width: size, src: `/images/previews/${name}` })
    }
    const blur = await processBuffer(buffer, [{ type: 'resize', width: 12 }], 'webp', 45)
    manifest[src] = { width, height, sourceUrl, preset: detailedPressImage ? 'detail-v2' : undefined, variants, blurDataURL: `data:image/webp;base64,${blur.toString('base64')}` }
    console.log(`Prepared ${src}`)
  } catch (error) {
    console.warn(`Kept original for ${src}: ${error.message}`)
  }
}

async function main() {
  const queue = [...sources].filter(src => !process.argv.includes('--youtube-only') || src.includes('/maxresdefault.jpg'))
    .filter(src => !process.argv.includes('--local-only') || src.startsWith('/'))
  await Promise.all(Array.from({ length: 3 }, async () => {
    while (queue.length) await prepare(queue.shift())
  }))
  fs.writeFileSync(manifestFile, JSON.stringify(manifest, null, 2) + '\n')
  console.log(`Ready: ${Object.keys(manifest).length} previews`)
}
main().then(() => process.exit(0), error => { console.error(error); process.exit(1) })
