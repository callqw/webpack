/**
 * Created by xj on 2017/4/18.
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    context:__dirname,
entry:'./src/app.js',
    output:{
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    module:{
        loaders:[
            {
                test:/\.html$/,
                loader:'html-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        filename:'index.html',
        template:'index.html',
        inject:'body'
    })]
}