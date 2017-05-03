const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const demo              = `${__dirname}/demo/demo.js`;
const demoScss          = `${__dirname}/demo/demo.scss`;
const main              = `${__dirname}/demo/main.js`;
const compounds         = `${__dirname}/index.js`;
const icons             = `${__dirname}/node_modules/pearson-elements/dist/icons/p-icons-sprite-1.1.svg`;
const elements          = `${__dirname}/node_modules/pearson-elements/dist/css/elements.css`;
const loadingSpinner    = `${__dirname}/src/loadingSpinner/loadingSpinner.scss`;


module.exports = {
  entry: {
    demo   : [ demo, demoScss ],
    dev    : [ elements, icons, main, loadingSpinner ],
    dist   : [ compounds ]
  },
  output: {
    path          : path.resolve(__dirname, 'build'),
    filename      : '[name].compounds.js',
    publicPath    : '/compounds/',
    libraryTarget : 'umd'
  },
  devtool: 'source-map',
  devServer: {
    host               : '0.0.0.0',
    port               : 8081,
    publicPath         : '/compounds/',
    https              : true,
    overlay            : true,
    watchContentBase   : true,
    historyApiFallback : true,
    watchOptions       : { poll: true }
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    }
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]

      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'stage-0', 'react']
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
    new HtmlWebpackPlugin({
      template: 'demo/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' : JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.NamedModulesPlugin()
  ]
};
