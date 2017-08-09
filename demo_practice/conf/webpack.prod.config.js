const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const baseWebpackConfig = require('./webpack.base.config.js');

module.exports = merge(baseWebpackConfig, {
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
                drop_console: true,
            },
        }),
        new CopyWebpackPlugin([
            {
                // from: './dev',
                from: './dev/favicon.ico',
            },
        ], {
            ignore: [
                // '*.html',
                // 'router.js',
                // 'style/**/*',
                // 'script/**/*',
                // 'store/**/*',
                // 'component/**/*',
                // 'data/**/*',
                // 'font/**/*',
            ],
        }),
    ],
})