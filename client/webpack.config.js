const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const outputPath = path.resolve(__dirname, './dist');

module.exports = {
    entry: path.resolve(__dirname, './src'),
    output: {
        path: outputPath,
        filename: 'index.js',
    },
    plugins: [
        new webpack.DllReferencePlugin({
            scope: 'lib',
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            manifest: require('../lib/dist/lib-manifest.json'), // eslint-disable-line
        }),
        new webpack.DllReferencePlugin({
            scope: 'beta',
            extensions: ['.js', '.jsx'],
            manifest: require('../dll/dist/beta-manifest.json'), // eslint-disable-line
        }),
        new webpack.DllReferencePlugin({
            context: path.join(__dirname, '..', 'lib'),
            manifest: require('../lib/dist/lib-manifest.json'), // eslint-disable-line
        }),
        new webpack.DllReferencePlugin({
            context: path.join(__dirname, '..', 'dll'),
            manifest: require('../dll/dist/alpha-manifest.json'), // eslint-disable-line
        }),
        new HtmlPlugin({
            template: path.resolve(__dirname, './src/index.html'),
        }),
        new CopyPlugin([
            {
                from: path.join(__dirname, '..', 'dll', 'dist'),
                to: path.join(outputPath, 'dll', 'dist'),
            },
            {
                from: path.join(__dirname, '..', 'lib', 'dist'),
                to: path.join(outputPath, 'lib', 'dist'),
            },
        ]),
        // new AddAssetHtmlPlugin([
        //     {
        //         filepath: require.resolve('../lib/dist/lib.js'),
        //     },
        //     {
        //         filepath: require.resolve('../dll/dist/MyDll.alpha.js'),
        //     },
        //     {
        //         filepath: require.resolve('../dll/dist/MyDll.beta.js'),
        //     },
        // ]),
        new ForkTsCheckerPlugin(),
    ],
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
