const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, './src'),
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index.js',
		library: '__PREPLY_LIB__',
		libraryTarget: 'umd',
		publicPath: 'http://localhost:8081/dist/',
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
};
