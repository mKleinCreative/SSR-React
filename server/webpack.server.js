const path = require('path')
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals')

const config = {
  // inform webpack that we're building a bundle for node JS rather than browser
  target: 'node',

  // tell webpack the root of our applicaiton
  entry: './src/index.js',

  // tell webpack where to put output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config);