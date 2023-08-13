const path = require('node:path')
const withLess = require('next-with-less')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.forEach((rule) => {
      const { oneOf } = rule
      if (oneOf) {
        oneOf.forEach((one) => {
          if (!`${one.issuer?.and}`.includes('_app'))
            return
          one.issuer.and = [path.resolve(__dirname)]
        })
      }
    })

    return config
  },
}

module.exports = withLess(nextConfig)
