var webpack = require('webpack');
var Path = require('path');

var BUILD_DIR = Path.join(__dirname, 'dist');
var APP_DIR = Path.join(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        exclude: /node_modules/,
        loader : 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  sassLoader: {
    includePaths: [APP_DIR]
  }
};

module.exports = config;