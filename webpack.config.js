/**
 * Created by luweibin on 2017/9/8.
 */
let path = require('path');
let webpack = require("webpack");
module.exports = {
    entry: {
        vendor:['vue','vuex','vue-router','iview'],
        app:['./src/main.js']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/static/',
        filename: '[name].js',
        chunkFilename: 'chunk-[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.css$/,
                use: ["vue-style-loader", "css-loader", "postcss-loader"]
            },
            {
                test: /\.scss$/,
                use: ["vue-style-loader", "css-loader", "postcss-loader",  "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: 'images/[name].[hash:7].[ext]'    // 将图片都放入images文件夹下，[hash:7]防缓存
                    }
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: 'fonts/[name].[hash:7].[ext]'    // 将字体放入fonts文件夹下
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
}