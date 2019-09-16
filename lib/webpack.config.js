const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, './src'),
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index.js',
		libraryTarget: 'umd',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	module: {
		rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
	},
	devServer: {
		writeToDisk: true,
	},
	devtool: 'source-map',
};
