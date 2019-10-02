const path = require('path');
const { IgnorePlugin } = require('webpack');
// const WaitPlugin = require('./wait-webpack-plugin');

module.exports = [
	{
		entry: path.resolve(__dirname, './src/shim.tsx'),
		output: {
			path: path.resolve(__dirname, './dist/shim'),
			filename: 'shim.js',
			libraryTarget: 'commonjs2',
			publicPath: 'http://localhost:8081/dist/shim/',
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.js'],
		},
		module: {
			rules: [
				{ test: /\.tsx?$/, loader: 'ts-loader' },
				{
					enforce: 'post',
					test: path.resolve(__dirname, './src/index.tsx'),
					loader: path.resolve(__dirname, 'loader.js'),
				},
			],
		},
		devServer: {
			writeToDisk: true,
		},
		// externals: {
		// 	'.': '__PREPLY_LIB__',
		// },
		devtool: 'source-map',
		// plugins: [
		// 	new IgnorePlugin({
		// 		resourceRegExp: /^\.$/,
		// 	}),
		// ],
	},
	{
		entry: path.resolve(__dirname, './src/index.tsx'),
		output: {
			path: path.resolve(__dirname, './dist/index'),
			filename: 'index.js',
			library: '__PREPLY_LIB__',
			libraryTarget: 'umd',
			publicPath: 'http://localhost:8081/dist/index/',
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
		// externals: {
		// 	react: 'React',
		// 	'react-dom': 'ReactDOM',
		// 	lodash: '_',
		// },
		devtool: 'source-map',
	},
];
