<a name="0.3.12"></a>
## [0.3.12](https://github.com/Pearson-Higher-Ed/npm-scripts/compare/v0.3.2...v0.3.12) (2017-01-24)


### Bug Fixes

* add copy-utils command to relevant scripts just in case the developer forgets ([d78709e](https://github.com/Pearson-Higher-Ed/npm-scripts/commit/d78709e))
* conditionally run the copy if the release script is being run by another component. ([5b9bf90](https://github.com/Pearson-Higher-Ed/npm-scripts/commit/5b9bf90))
* move copy command in ci.js ([d7dc68a](https://github.com/Pearson-Higher-Ed/npm-scripts/commit/d7dc68a))
* remove dev-setup mkdir command as it is unnecessary and breaks on Windows ([e14364b](https://github.com/Pearson-Higher-Ed/npm-scripts/commit/e14364b))
* restore master branch check on release script ([ae1c472](https://github.com/Pearson-Higher-Ed/npm-scripts/commit/ae1c472))
* update dev-setup to work cross platform ([397d3ac](https://github.com/Pearson-Higher-Ed/npm-scripts/commit/397d3ac))
* update npm token ([e034dd6](https://github.com/Pearson-Higher-Ed/npm-scripts/commit/e034dd6))
* Webpack fix to allow mobile access ([f8c8990](https://github.com/Pearson-Higher-Ed/npm-scripts/commit/f8c8990))


### Features

* cross-platform added for postinstall ([81e4745](https://github.com/Pearson-Higher-Ed/npm-scripts/commit/81e4745))
* cross-platform added for postinstall ([a195690](https://github.com/Pearson-Higher-Ed/npm-scripts/commit/a195690))



<a name="0.3.2"></a>
## [0.3.2](https://github.com/Pearson-Higher-Ed/npm-scripts/compare/v0.3.1...v0.3.2) (2016-10-11)


### Bug Fixes

* Ignore component-specific styles for unit testing. ([162aa45](https://github.com/Pearson-Higher-Ed/npm-scripts/commit/162aa45))



<a name="0.3.1"></a>
## [0.3.1](https://github.com/Pearson-Higher-Ed/npm-scripts/compare/v0.3.0...v0.3.1) (2016-10-01)


### Bug Fixes

* Display filename of changelog. ([3f125cf](https://github.com/Pearson-Higher-Ed/npm-scripts/commit/3f125cf))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/Pearson-Higher-Ed/npm-scripts/compare/v0.2.0...v0.3.0) (2016-10-01)


### Features

* Check package.json main field to ensure it is changed to actual component name. ([a1fdbb2](https://github.com/Pearson-Higher-Ed/npm-scripts/commit/a1fdbb2))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/Pearson-Higher-Ed/npm-scripts/compare/v0.1.0...v0.2.0) (2016-09-10)


### Features

* Add remaining npm scripts. ([38b2252](https://github.com/Pearson-Higher-Ed/npm-scripts/commit/38b2252))



<a name="0.1.0"></a>
# [0.1.0](https://github.com/Pearson-Higher-Ed/npm-scripts/compare/896ea18...v0.1.0) (2016-08-02)


### Bug Fixes

* **demo:** Remove obsolete script include for demo, as it is now webpacked into the dev build. ([db3e8cf](https://github.com/Pearson-Higher-Ed/npm-scripts/commit/db3e8cf))
* Add Intl.js polyfill for Safari and update READMEs on polyfill service. ([54cb581](https://github.com/Pearson-Higher-Ed/npm-scripts/commit/54cb581))
* Enable source maps for webpack dev server. ([e13cd6b](https://github.com/Pearson-Higher-Ed/npm-scripts/commit/e13cd6b))
* Reference release script in npm_scripts, and lint demo script. ([896ea18](https://github.com/Pearson-Higher-Ed/npm-scripts/commit/896ea18))
* Use verify npm script to ensure package name has [@pearson](https://github.com/pearson)-components scope. ([772586f](https://github.com/Pearson-Higher-Ed/npm-scripts/commit/772586f))


### Features

* **component-archetype:** run demo tests against feature branch in ci ([073f975](https://github.com/Pearson-Higher-Ed/npm-scripts/commit/073f975))
* **demo:** Add event listener for card comments. ([8ed5d8f](https://github.com/Pearson-Higher-Ed/npm-scripts/commit/8ed5d8f))



