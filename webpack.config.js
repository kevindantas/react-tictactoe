var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: './build',
    filename: 'app.js'
  },
  devServer: {
    inline: true,
    contentBase: './build',
    port: 8088
  },
  module: {
    loaders: [
      {
        test: /\.(jsx||js)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },


      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
};