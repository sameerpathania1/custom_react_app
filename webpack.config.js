const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const zopfli = require('@gfx/zopfli');

var parentDir = path.join(__dirname, './');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: parentDir + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  devServer: {
    contentBase: __dirname + '/src',
    inline: true,
    port: 3300
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({
      uglifyOptions: {
        output: {
          comments: false,
          beautify: false
        },
        compress: {
          drop_console: true
        },
        mangle: {
          safari10: true,
        },
        warnings: false
      }
    })],
  },
  plugins: [
    new CompressionPlugin({
    }),
  ]
}