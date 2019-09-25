const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port:3000,
        host: `localhost`,
        disableHostCheck: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Managemnt'
        })

    ],
    output: {
        path:path.resolve(__dirname,'./dist'),
        filename: '[name].bundle.js',
        publicPath: '/'

    },
    module:{
        rules:[
            {test: /\.txt$/, use:'raw-loader'},
        ]
    },
};