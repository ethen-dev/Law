const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConf = require('./webpack.base.conf');

webpackBaseConf.entry = ['./src/webpack/dev-client'].concat(webpackBaseConf.entry);

const config = merge(webpackBaseConf, {
    devtool: 'cheap-eval-source-map',
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]
});

module.exports = config;