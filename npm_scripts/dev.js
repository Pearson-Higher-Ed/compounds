const exec = require('./exec');

exec(`npm run dev-setup`);
exec(`webpack-dev-server --port 8081 --devtool source-map --hot --host 0.0.0.0 --progress --colors`);
