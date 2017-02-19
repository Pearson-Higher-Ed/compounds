const exec = require('./exec');

exec(`mocha --compilers js:babel-register --require babel-polyfill --require ignore-styles --require intl --require test/utils/dom.js`);
