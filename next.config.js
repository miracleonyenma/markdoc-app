/** @type {import('next').NextConfig} */

const withMarkdoc = require("@markdoc/next.js")

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

module.exports = withMarkdoc()({
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx']
})
