const fs                = require('fs');
const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const demo              = `${__dirname}/demo/demo.js`;
const demoScss          = `${__dirname}/demo/demo.scss`;
const main              = `${__dirname}/demo/main.js`;
const compounds         = `${__dirname}/index.js`;
const icons             = `${__dirname}/node_modules/pearson-elements/dist/icons/p-icons-sprite-1.1.svg`;
const elements          = `${__dirname}/node_modules/pearson-elements/dist/css/elements.css`;
const fontsDir          = `${__dirname}/node_modules/pearson-elements/dist/fonts/`;
const fonts             = fs.readdirSync(fontsDir, 'utf-8').map(font => fontsDir + font);

module.exports = {
  entry: {
    demo              : [ demo, demoScss ],
    dev               : [ elements, icons ],
    eventInstantiator : [ main ],
    dist              : [ compounds ],
    fonts             : fonts
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
    https              : false,
    overlay            : true,
    watchContentBase   : true,
    disableHostCheck   : true,
    historyApiFallback : true,
    watchOptions       : { poll: true },
    staticOptions      : { redirect: false },
    contentBase        : path.join(__dirname, 'build')
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
        loader: 'babel-loader'
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '/fonts/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '/icons/[name].[ext]?[hash]'
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
