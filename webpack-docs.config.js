const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: [
    path.join(__dirname, './docs/src/app/app.js')
  ],

  output: {
    path: path.join(__dirname, './www'),
    filename: 'app.js'
  },

  resolve: {
    alias: {
      'pearson-compounds': path.join(__dirname, './src'),
      'main.scss': path.join(__dirname, './docs/src/www/scss/main.scss'),
      'elements.scss': path.join(__dirname, './node_modules/pearson-elements/scss/elements.scss')
    }
  },

  devtool: 'source-map',

  devServer: {
    contentBase: path.join(__dirname, './docs/src/www'),
    hot: true
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    // Ensures that we're building the production version of React
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: path.join(__dirname, './docs/src/www/index.html')
    })
  ],

  module: {
    loaders: [
      { test: /\.(woff|ttf|eot|svg)(\?[a-z0-9]+)?$/, loaders: ['file'] },
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
    ]
  }

};
