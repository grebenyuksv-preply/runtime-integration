const path = require('path');
const webpack = require('webpack');

// const WebpackAssetsManifest = require('webpack-assets-manifest');
// const WaitPlugin = require('./wait-webpack-plugin');

module.exports = {
    entry: {
        lib: ['./src'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'MyDll.[name].js',
        library: '[name]_[hash]',
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, 'dist', '[name]-manifest.json'),
            name: '[name]_[hash]',
        }),
    ],
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
    //  react: 'React',
    //  'react-dom': 'ReactDOM',
    //  lodash: '_',
    // },
    devtool: 'source-map',
};
