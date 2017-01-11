var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
	context: path.join(__dirname, '/public'),
	entry: './src/js/client.js',
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.(css|scss)$/,
				loader: ExtractTextPlugin.extract(
					'style-loader',
					'css-loader!sass-loader')
			}
		]
	},
	output: {
		path: path.join(__dirname, '/public/src'),
		filename: 'client.min.js'
	},

	devServer: {
		outputPath: path.join(__dirname, '/public/src'),
	},

	plugins: [
		new ExtractTextPlugin('bundlestyle.css'),
		new WriteFilePlugin()

	]
};

// note this config is for webpack v1.x.y.z only
