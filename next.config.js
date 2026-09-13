const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = phase => ({
  // Build checks must not overwrite files served by the local preview.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    const cachedAssets = ['/images/previews/:path*', '/images/art-previews/:path*', '/assets/hero/:path*'].map(source => ({
      // These preview filenames contain a hash of their source image.
      source,
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }]
    }))
    return cachedAssets
  }
})
