const path = require('path');
const postcssConfig = require('./postcss.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const fontRegex = /(font+\/)/;

module.exports = {
    entry: {
        app: path.join(process.cwd(), 'app', 'index.js'),
        // print: path.join(process.cwd(), 'app', 'print.js'),
        // index: path.join(process.cwd(), 'app', 'index.js'),
    },
    output: {
        filename: 'bundle.js',
        path: path.join(process.cwd(), 'dist'),
    },
    resolve: {
        alias: {},
        extensions: ['.js', '.jsx'],
        modules: [
            'node_modules',
        ],
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.s[a|c]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: postcssConfig,
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.js(x)?$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_module/,
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: 'font/[name].[ext]',
                    },
                }],
                include: fontRegex,
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 5120,
                        name: 'image/[name].[ext]',
                    },
                }],
                exclude: fontRegex,
            },
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: postcssConfig.plugins,
                vue: {
                    postcss: postcssConfig.plugins,
                    loaders: {
                        sass: 'style-loader!css-loader!postcss-loader!sass-loader?indentedSyntax',
                        scss: 'style-loader!css-loader!postcss-loader!sass-loader',
                    },
                    cssModules: {
                        localIdentName: '[path][name]---[local]---[hash:base64:5]',
                        camelCase: true,
                    },
                },
                eslint: {
                    configFile: path.join(process.cwd(), '.eslintrc'),
                },
            },
        }),
        new HtmlWebpackPlugin({
            title: 'demo',
            filename: 'index.html',
            template: path.join(process.cwd(), 'app', 'index.html'),
            inject: true,
            minify:{
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
    ]
};