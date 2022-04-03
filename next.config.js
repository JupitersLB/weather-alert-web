/** @type {import('next').NextConfig} */
module.exports = {
  productionBrowserSourceMaps: true,
  webpack(config, { dev, webpack, buildId }) {
    const codeVersion = JSON.stringify(buildId)

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NEXT_PUBLIC_BUILD_ID': codeVersion,
      })
    )
    config.mode =
      process.env.NEXT_PUBLIC_RUN_ENV in ['staging', 'production'] // staging not supported by nextjs
        ? 'production'
        : 'development'
    config.devtool = 'hidden-source-map'
    return config
  },
  redirects: async () => [
    {
      source: '/',
      destination: '/home',
      permanent: true,
    },
  ],
}
