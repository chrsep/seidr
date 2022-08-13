const withPreact = require("next-plugin-preact")

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImages: true
    },
    browsersListForSwc: true,
    legacyBrowsers: false
  }
}

module.exports = withPreact(nextConfig)