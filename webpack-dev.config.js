const path = require('path');
const webpack = require('webpack');

module.exports = {

  entry: [
    'webpack/hot/dev-server',
    path.join(__dirname, './docs/src/app/app.js')
  ],

  output: {
    path: path.join(__dirname, './docs/src/www'),
    filename: 'app.js'
  },

  resolve: {
    alias: {
      'pearson-compounds': path.join(__dirname, './src'),
      'main.scss': path.join(__dirname, './docs/src/www/scss/main.scss')
    }
  },

  debug: true,

  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.join(__dirname, './docs/src/www'),
    hot: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [
      { test: /\.(woff|ttf|eot|svg)(\?[a-z0-9]+)?$/, loaders: ['file'] },
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
    ]
  }

};
