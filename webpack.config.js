var path = require('path');
var webpack = require('webpack');

module.exports = {
	resolve: {
		// Make sure, Webpack finds import'ed and require'd files specified without extension
		// so 'import Bla from './Bla' makes webpack to look for files 'Bla', 'Bla.js' and 'Bla.jsx'
		extensions: ['', '.js', '.jsx']
	},
	entry:  [
		// webpack dev server with hot reloading
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/dev-server',

		// path to our 'root' module
		path.resolve(__dirname, 'src/main.js')
	],
	output: {
		// output path
		path: path.resolve(__dirname, 'public/dist'),
		publicPath: '/dist/',

		// Name of the resulting bundle file that
		filename: 'main.js'
	},
	module: {
		loaders: [
			{	test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel']},
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{	test: /\.(png|jpg)$/,	loader: 'url?limit=25000'	},
			{	test: /\.json$/, loader: 'json-loader' }
		]
	},
	plugins: [
		// Enable Hot Module Replacement
		new webpack.HotModuleReplacementPlugin(),

		// Avoid publishing files when compilation failed
		new webpack.NoErrorsPlugin()
	],
	stats: {
		colors: true
	},
	devtool: 'source-map'
};