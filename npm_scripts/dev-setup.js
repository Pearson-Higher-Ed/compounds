const path = require('path');
const exec = require('./exec');
const fs = require('fs-extra');

try {
  fs.copySync(path.join(__dirname, '..', 'node_modules/pearson-elements/dist/fonts'), path.join(__dirname, '..', 'fonts'));
} catch (err) {
  console.error(err)
}

fs.copy(path.join(__dirname, '..', 'node_modules/pearson-elements/dist/css/elements.css'), path.join(__dirname, '..', 'demo/elements.css'), function (err) {
  if (err) {
    return console.error(err);
  }
});
