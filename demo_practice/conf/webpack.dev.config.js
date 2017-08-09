const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const baseWebpackConfig = require('./webpack.base.config.js');

module.exports = merge(baseWebpackConfig, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(process.cwd(), 'dist'),
        historyApiFallback: true,
        open: true,
        hot: true,
        stats: {
            colors: true,
            chunks: false,
            'errors-only': true,
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
})