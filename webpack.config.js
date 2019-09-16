const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, './src'),
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index.js',
	},
	plugins: [new HtmlWebpackPlugin()],
};
