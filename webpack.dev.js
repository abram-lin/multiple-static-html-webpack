const path = require('path')

const baseConfig = require('./webpack.base')
const { HotModuleReplacementPlugin } = require('webpack')
const Merge = require('webpack-merge')

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    index: 'page1.html',
    hot: true,
    publicPath: '/',
    overlay: true,
    open: true,
    liveReload: true,
    contentBase: [path.join(__dirname, './src'), path.join(__dirname, './public')],
    watchContentBase: true,
    // compress: true, // 启用 gzip 压缩
    port: 9001
  },
  plugins: [
    new HotModuleReplacementPlugin()
  ]
}

module.exports = Merge(baseConfig, devConfig)
