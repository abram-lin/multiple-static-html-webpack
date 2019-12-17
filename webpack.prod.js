const path = require('path')
const baseConfig = require('./webpack.base')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Merge = require('webpack-merge')
const { HashedModuleIdsPlugin } = require('webpack')

const prodConfig = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin({
      verbose: true
    }),
    new HashedModuleIdsPlugin()
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash:8].js'
  }
}

module.exports = Merge(baseConfig, prodConfig)
