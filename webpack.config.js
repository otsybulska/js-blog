const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: ['@babel/polyfill', './#src/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({}),
            new TerserWebpackPlugin({})
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './#src/index.html'
        }),
        //new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './#src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            { 
                test: /\.(js|ts)$/, 
                exclude: /node_modules/, 
                loader: 'babel-loader' 
            }
        ]
    }
}