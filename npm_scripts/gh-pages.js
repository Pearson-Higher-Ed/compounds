const exec = require('./exec');

exec('npm run build-docs');
exec('git checkout gh-pages');
exec('git add -f www');
exec('git commit -m 'update gh-pages'');
exec('git filter-branch --subdirectory-filter www/ -f');
