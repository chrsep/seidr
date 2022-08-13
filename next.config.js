const withPreact = require("next-plugin-preact")

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    browsersListForSwc: true,
    legacyBrowsers: false
  }
}

module.exports = withPreact(nextConfig)