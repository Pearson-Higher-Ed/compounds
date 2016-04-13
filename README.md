# Core Components for Pearson Web UX 
[![Build Status](https://travis-ci.org/Pearson-Higher-Ed/compounds.svg?branch=v0)](https://travis-ci.org/Pearson-Higher-Ed/compounds)
[![Coverage Status](https://coveralls.io/repos/github/Pearson-Higher-Ed/compounds/badge.svg?branch=v0)](https://coveralls.io/github/Pearson-Higher-Ed/compounds?branch=v0)

This module provides a foundational set of [React](http://facebook.github.io/react) or vanilla JS (ES6-preferred) 
components for building Pearson web user experiences.

## Consuming this Module

When published, the Universal Module Definition (UMD-compliant) package can be installed in the root of your consuming 
application:

    npm install --save react react-dom pearson-compounds
    
## Toolchain

- [Node.js](http://nodejs.org) v5
- [webpack](https://webpack.github.io/) (`npm install -g webpack`)
    - Bundling of all dependencies, including external React
    - Pre-processing of styles and icons
    - Babel 6 for transpiling ES6 and JSX

Recommendation: If you are using different node versions on your machine, use [nvm](https://github.com/creationix/nvm) 
to manage them.

## Getting Started on Development

Compounds depends on Elements. As neither SDK is published yet, there is no current explicit dependency. When published,
Elements will be defined in this project's package.json.

Temporarily, the dependency must be sym-linked:

Perform a git clone of both repositories to your local development environment.

    cd elements
    npm install
    npm link
    cd ../compounds
    npm install
    npm link pearson-elements
    
Now you can start a hot-reloadable webpack dev server at localhost:8000:

    npm start
    
The spawned Node server hosts a webpack-generated SPA using React Router for rendering the components.

As you save changes, the changes are automatically reloaded in the browser.

## Test

The project is wired to unit test with the Mocha framework, "expect" assertion library, and expect-jsx to turn React 
elements into formatted strings.

    npm test
    
## Documentation Site

The static demo site is scripted to deploy to GitHub Pages (gh-pages branch).

## Contributions

All submissions must be via pull request and approved before the pearson-design-accelerator@pearson.com team will merge 
and allow it to enter the release process. All submissions must pass this project's linting, test with 100% code coverage, 
and be compatible with the version of React (if applicable) approved for the Pearson User Experience Platform.

## License

Copyright 2015 Pearson Education. This software is published under the [MIT](LICENSE) license.
