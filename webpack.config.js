var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: './src/js/common.js',

    output: {
        path: path.join(__dirname, './dist'),
        filename: './js/bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),

        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),

        new ExtractTextPlugin('./css/bundle.css'),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),

        new CopyWebpackPlugin([
            { from: './src/img/**', to: './img', flatten: true },
            { from: './src/css/fonts', to: './css/fonts', flatten: true }
        ])
    ]
};