const webpack = require('webpack');
const path = require('path');
const commons = require('./webpack.commons');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: [
        commons.entry
    ],
    output: commons.output,
    module: {
        loaders: [
            ...commons.module.rules
        ]
    },
    devtool: 'cheap-module-source-map',
    cache: false,
    resolve: commons.resolve,
    plugins: [
        ...commons.plugins,
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
        new UglifyJsPlugin({
            uglifyOptions: {
                ie8: false,
                compress: true,
                mangle: true
            }
        })
    ]
}
