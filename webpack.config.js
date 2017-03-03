const path                  = require('path');
const webpack               = require('webpack');
const HtmlWebpackPlugin     = require('html-webpack-plugin');
const ExtractTextPlugin     = require('extract-text-webpack-plugin');
const react                 = require('react');
const index                 = `${__dirname}/demo/index.html`;
const demo                  = `${__dirname}/demo/demo.js`;
const demoScss              = `${__dirname}/demo/demo.scss`;
const main                  = `${__dirname}/demo/main.js`;
const compounds             = `${__dirname}/Compounds.js`;
const icons                 = `${__dirname}/node_modules/pearson-elements/dist/icons/p-icons-sprite-1.1.svg`;
const elements              = `${__dirname}/node_modules/pearson-elements/dist/css/elements.css`;


const buttonpage = `${__dirname}/demo/demoPages/ButtonPage.js`;
const headerpage = `${__dirname}/demo/demoPages/HeaderPage.js`;
const homepage   = `${__dirname}/demo/demoPages/HomePage.js`;
const iconpage   = `${__dirname}/demo/demoPages/IconPage.js`;
const inputspage = `${__dirname}/demo/demoPages/inputsPage.js`;



const WebpackRoutesToPagesPlugin = require('./webpack-routes-to-pages');

const VENDOR_LIBS = [ 'react', 'react-dom', 'react-intl', 'react-router' ];

module.exports = {
  entry: {
    vendor :  VENDOR_LIBS,
    demo   : [ demo, demoScss ],
    dev    : [ elements, icons, main ],
    dist   : [ compounds ],
    // buttonpage,
    // headerpage,
    // homepage,
    // iconpage,
    // inputspage
  },
  output: {
    path          : path.resolve(__dirname, 'build'),
    filename      : '[name].compounds.js',
    publicPath    : '/compounds',
    libraryTarget : 'umd'
  },
  devtool: "cheap-module-source-map",
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
          options: {
            presets: ["es2015", "stage-0", "react"]
          }
        },
        {
          test: /\.(png|jpg|gif|svg|ttf|woff|woff2)$/,
          loader: 'file-loader',
          options: {
              name: '[name].[ext]?[hash]'
          }
        }
      ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    Infinity}),
    new HtmlWebpackPlugin({
      template: 'demo/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.NamedModulesPlugin(),
    // new WebpackRoutesToPagesPlugin()
  ]
};
