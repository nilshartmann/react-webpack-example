var path = require('path');

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
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{	test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
			{	test: /\.(png|jpg)$/,	loader: 'url?limit=25000'	},
			{	test: /\.json$/, loader: 'json-loader' }
		]
	},
	stats: {
		colors: true
	},
	devtool: 'source-map'
};