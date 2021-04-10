const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withMDX({
  future: {
    webpack5: true,
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
  },
})
