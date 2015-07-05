React Webpack Example
=====================
Very simple and not yet complete example on how to use [Webpack](https://webpack.github.io) together with [React](https://facebook.github.io/react/).

Use case:
---------
Present greeting cards to user :-)

[![Sample Application](screenshot2.png)](https://nilshartmann.github.io/react-webpack-example/)

You can find a running example of the app's latest version here: https://nilshartmann.github.io/react-webpack-example/

Features shown so far:
----------------------
* Require CSS files from javascript
* Require images from Javascript (large ones that are copied & small ones that are inlined. Transparent for requirer)
* Require JSon from JavaScript
* Use [babel](http://babeljs.io/) to enable [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) and [ECMAScript 2015/ES6](https://github.com/lukehoban/es6features) language features and [ES7 language proposals](http://babeljs.io/docs/usage/experimental/). 
* Use [Webpack Development Server](http://webpack.github.io/docs/webpack-dev-server.html) with [React Hot Loader](http://gaearon.github.io/react-hot-loader/) to reload React components without loosing the state

Run:
----
* ```npm install```: To install all dependencies
* ```npm run devserver```: to start Webpack development server
* Point your browser to ```http://localhost:8080``` and enjoy greeting cards :-)
* Change some CSS or JavaScript files and see modifications on the fly. No reloading is necessary. React state will be preserved during reloads.

Blog post
---------
This example application is part of a (german) blog post, that I've written about React and Webpack. You can find
the blog post on the german React community site [reactjs.de](http://reactjs.de): http://reactjs.de/posts/react-anwendungen-mit-webpack-entwickeln


