const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new Dotenv({ silent: true, }))
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
    }
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ],
    config.module.rules.push({
      use: defaultLoaders.babel,
      include: [path.resolve(__dirname, '..', 'shared')],
      exclude: [path.resolve(__dirname, '..', 'shared/node_modules')],
    })
    return config
  },
}
