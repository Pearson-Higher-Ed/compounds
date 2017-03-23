const fs                = require('fs');
const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const demo              = `${__dirname}/demo/demo.js`;
const demoScss          = `${__dirname}/demo/demo.scss`;
const main              = `${__dirname}/demo/main.js`;
const src               = `${__dirname}/index.js`;
const icons             = `${__dirname}/node_modules/pearson-elements/dist/icons/p-icons-sprite-1.1.svg`;
const elements          = `${__dirname}/node_modules/pearson-elements/dist/css/elements.css`;
const fontsBaseLocation = `${__dirname}/node_modules/pearson-elements/dist/fonts/`;

const fontFileNames = fs.readdirSync(fontsBaseLocation, 'utf-8');
const fonts         = fontFileNames.map(filename => fontsBaseLocation+filename);

// console.log(fontLocation)
const VENDOR_LIBS = [ 'react', 'react-dom', 'react-intl' ];

module.exports = {
  entry: {
    vendor : VENDOR_LIBS,
    fonts  : fonts,
    demo   : [ demo, demoScss ],
    dev    : [ elements, icons ],
    dist   : [ src ],
    qa     : [ main ]
  },
  output: {
    path          : path.resolve(__dirname, 'build'),
    filename      : '[name].compounds.js',
    publicPath    : '/compounds/',
    libraryTarget : 'umd'
  },
  devtool: "source-map",
  devServer: {
    host               : "0.0.0.0",
    port               : 8081,
    publicPath         : "/compounds/",
    https              : true,
    overlay            : true,
    watchContentBase   : true,
    historyApiFallback : true,
    watchOptions       : { poll: true }
  },
  module: {
    rules: [
        {
          test: /\.(css|scss)$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            //resolve-url-loader may be chained before sass-loader if necessary
            use: ['css-loader', 'sass-loader']
          })
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
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
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'demo/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.NamedModulesPlugin()
  ]
};
