var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var bundle = 'test/bundle.js'

module.exports = {
  entry: {
    [bundle]: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './test'),
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'HammerSpace Test Platform',
      filename: './test/index.html',
      template: './src/index.html',
      inject: false
    })
  ]
};
