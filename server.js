const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack-dev.config');
const portfinder = require('portfinder');

const host = process.env.HOST || 'localhost';

portfinder.getPort((err, port) => {
  if (err) {
    throw err;
  }

  config.entry = [`webpack-dev-server/client?http://${host}:${port}`].concat(config.entry);

  new WebpackDevServer(webpack(config), config.devServer)
    .listen(port, host, (err) => {
      if (err) {
        throw err;
      }

      console.log(`Listening at ${host}:${port}`);
    })
});
