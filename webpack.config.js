var path = require('path');
var webpack = require('webpack');
var argv = require('yargs').argv;

function babelLoaders() {
  if (argv.dist) {
    return ['babel?optional[]=es7.functionBind'];
  }

  return ['react-hot', 'babel?optional[]=es7.functionBind'];
}

function entries() {
  if (argv.dist) {
    // path to our 'root' module
    return path.resolve(__dirname, 'src/main.js');
  }

  return [
    // webpack dev server with hot reloading
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',

    // path to our 'root' module
    path.resolve(__dirname, 'src/main.js')
  ];
}

module.exports = {
  resolve: {
    // Make sure, Webpack finds import'ed and require'd files specified without extension
    // so 'import Bla from './Bla' makes webpack to look for files 'Bla', 'Bla.js' and 'Bla.jsx'
    extensions: ['', '.js', '.jsx']
  },

  entry:   entries(),
  output:  {
    // output path
    path:       path.resolve(__dirname, 'public/dist'),
    publicPath: 'dist/',

    // Name of the resulting bundle file that
    filename: 'main.js'
  },
  module:  {
    loaders: [
      // JSX/ES6 handling with babel
      // * babel-loader: uses Babel to transform your JSX/ES6 JavaScript to ECMAScript 5
      // * react-hot: Reloads your React Component on code changes without loosing the application state
      {test: /\.js$/, exclude: /node_modules/, loaders: babelLoaders()},

      {test: /\.js$/, exclude: /node_modules/, loader: "eslint-loader"},
      // CSS handling
      // * style-loader: Embeds referenced CSS code using a <style>-element in your index.html file
      // * css-loader: Parses the actual CSS files referenced from your code. Modifies url()-statements in your
      //   CSS files to match images handled by url loader (see below)
      {test: /\.css$/, loader: 'style!css'},

      // Image Handling
      // * url-loader: Returns all referenced png/jpg files up to the specified limit as inline Data Url
      //   or - if above that limit - copies the file to your output directory and returns the url to that copied file
      //   Both values can be used for example for the 'src' attribute on an <img> element
      {test: /\.(png|jpg)$/, loader: 'url?limit=25000'},

      // JSon file handling
      // * Enables you to 'require'/'import' json files from your JS files
      {test: /\.json$/, loader: 'json-loader'}
    ]
  },
  plugins: [
    // Enable Hot Module Replacement
    new webpack.HotModuleReplacementPlugin(),

    // Avoid publishing files when compilation failed
    new webpack.NoErrorsPlugin()
  ],
  stats:   {

    // Nice colored output
    colors: true
  },

  // Create Sourcemaps for the bundle
  devtool: 'source-map'
};