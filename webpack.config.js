var path = require('path');
var webpack = require('webpack');

module.exports = {
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	entry:  [
		'webpack/hot/dev-server',
		path.resolve(__dirname, 'src/main.js')
	],
	output: {
		path: path.resolve(__dirname, 'public/dist'),
		publicPath: '/dist/',
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
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	stats: {
		colors: true
	},
	devtool: 'source-map'
};