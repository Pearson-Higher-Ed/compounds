const fs = require('fs-extra');

try {
  fs.copySync(__dirname, './npm_scripts')
} catch (err) {
  console.error(err)
}
