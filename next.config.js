const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = phase => ({
  // Build checks must not overwrite files served by the local preview.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
  reactStrictMode: true,
  swcMinify: true
})
