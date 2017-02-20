const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const react             = require('react');
const index             = `${__dirname}/demo/index.html`;
const demo              = `${__dirname}/demo/demo.js`;
const main              = `${__dirname}/demo/main.js`;
const compounds         = `${__dirname}/Compounds.js`;
const icons             = `${__dirname}/node_modules/pearson-elements/assets/icons/`;
const fonts             = `${__dirname}/node_modules/pearson-elements/dist/fonts/`;
const elements          = `${__dirname}node_modules/pearson-elements/scss/elements.scss`;


const VENDOR_LIBS = [ 'react', 'react-dom', 'react-intl', 'react-router' ]

module.exports = {
  entry: {
    dist   : [ compounds ],
    qa     : [ compounds, main ],
    dev    : [ demo, compounds ],
    vendor : VENDOR_LIBS
  },
  output: {
    path          : path.resolve(__dirname, 'build'),
    filename      : '[name].compounds.js',
    publicPath    : '/',
    libraryTarget : 'umd'
  },
  devtool: "cheap-eval-source-map",
  module: {
    rules: [
        {
            test: /\.(css|scss$)/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        },
        // {
        //   test: /\.(svg)$/,
        //   use: [
        //     {
        //       loader: 'url-loader',
        //       options: { limit:40000 }
        //     },
        //     'image-webpack-loader'
        //   ]
        // },
//         {
//           loader: ExtractTextPlugin.extract({
//             loader: 'sass-loader'
//           }),
//           test: /\.scss$/
//         }
      ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'demo/index.html',
      excludeChunks: [ 'qa.compounds.js', 'dist.compounds.[hash].js' ],
      "files": {
        "css": [ "main.css" ],
        "js": [ "build/dev.compounds.js", "build/vendor.js"]
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
    }),
    new ExtractTextPlugin('styles.css')
  ]
};
