const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


const config = {
    entry: './src/js/main.js',
    output: {
        filename: 'js/main.min.js',
        path: __dirname + '../../dist'
    },
    module: {
        rules: [
            {
            test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                    ]
                },
            {
                test: /\.(png|jpe?g|gif|svg|ttf)(\?.*)?$/,
                loader: 'url-loader',
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].min.css'
        })
    ]
};

module.exports = config;