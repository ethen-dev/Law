const merge = require('webpack-merge');
const webpackBaseConf = require('./webpack.base.conf');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = merge(webpackBaseConf, {
    module: {
        rules: [{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/[name].min.css'
        })
    ]
});

module.exports = config;