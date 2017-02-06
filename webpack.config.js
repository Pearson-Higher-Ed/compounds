module.exports = {
  entry: {
   dev  : ['webpack/hot/dev-server', './demo/demo.js', './demo/main.js'],
   dist : ['./Compounds.js']
  },
  output: {
    path          : './',
    filename      : 'build/[name].compounds.js',
    libraryTarget : 'umd'
  },
  devtool: 'cheap-module-source-map',
  externals: [
    {
      'react': {
        root      : 'React',
        commonjs2 : 'react',
        commonjs  : 'react',
        amd       : 'react'
      }
    },
    {
      'react-dom': {
        root      : 'ReactDOM',
        commonjs2 : 'react-dom',
        commonjs  : 'react-dom',
        amd       : 'react-dom'
      }
    }
  ],
  contentBase: './demo', // for webpack dev server
  module: {
    preLoaders: [
      {
        test    : /\.js$/,
        loader  : 'eslint',
        exclude : /node_modules/
      }
    ],
    loaders: [
      {
        test   : /\.scss$/,
        loader : 'style!css!sass' // sass -> css -> javascript -> inline style
      },
      {
        test   : /\.js$/,
        loader : 'babel',
        query  : {
          cacheDirectory : true,
          presets        : ['es2015', 'react', 'stage-0']
        }
      },
      {
        test   : /\.json$/,
        loader : 'json'
      }
    ]
  }
};
