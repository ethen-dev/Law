const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: './src/js/main.js',
    output: {
        filename: 'js/main.min.js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
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
            new HtmlWebpackPlugin({ template: './src/index.html'}),
            new ExtractTextPlugin({ 
                filename: 'css/[name].min.css' 
            })
    ]
};

module.exports = config;