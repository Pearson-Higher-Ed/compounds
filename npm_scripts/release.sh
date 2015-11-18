#!/bin/bash -e

# Releases the kraken. Thanks to Michael Jackson:
# https://github.com/mjackson/expect/blob/master/scripts/release.sh

if ! [ -e npm_scripts/release.sh ]; then
  echo >&2 "npm_scripts/release.sh must be run from the repository root"
  exit 1
fi

update_version() {
  echo "$(node -p "p=require('./${1}');p.version='${2}';JSON.stringify(p,null,2)")" > $1
  echo "Updated ${1} version to ${2}"
}

validate_semver() {
  if ! [[ $1 =~ ^[0-9]\.[0-9]+\.[0-9](-.+)? ]]; then
    echo >&2 "Version $1 is not valid! It must be a valid semver string like 1.0.2 or 2.3.0-beta.1"
    exit 1
  fi
}

branch_name=$(git rev-parse --abbrev-ref HEAD)
current_version=$(node -p "require('./package').version")

printf "Next version (current is $current_version)? "
read next_version

validate_semver $next_version

npm test

update_version 'package.json' $next_version

git commit --allow-empty -am "chore(): release $next_version"

git tag -a $next_version -m $next_version
git tag latest -f

git push origin $branch_name
git push origin $next_version
git push origin latest -f

npm run build-all

npm publish
