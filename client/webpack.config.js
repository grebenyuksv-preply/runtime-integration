const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, './src'),
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index.js',
	},
	plugins: [new HtmlWebpackPlugin(), new ForkTsCheckerWebpackPlugin()],
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					transpileOnly: true,
				},
			},
		],
	},
	devtool: 'source-map',
	devServer: {
		writeToDisk: true,
	},
};
