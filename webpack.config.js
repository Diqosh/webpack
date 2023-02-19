const path = require('path')
const HIMLWebpackPlugin = require( 'html-webpack-plugin')
const {CleanWebpackPlugin} = require( 'clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {main: './index.js', analytics: './analytics.js'}, // path to main file
    output: {
        filename: '[name].[contenthash].js', //compressed static js name
        path: path.resolve(__dirname, 'dist') //path where bundle will be
    },
    plugins: [new HIMLWebpackPlugin({template: "./index.html"}), new CleanWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '/public/icons/[name].[ext]'
                }
            }
        ]
    }
}