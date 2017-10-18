/**
 * Created by luweibin on 2017/9/8.
 */
let webpack = require("webpack");
let webpackDevServer = require("webpack-dev-server");
var config = require("./webpack.dev.config.js");
config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
    publicPath: "/static/",
    stats: { colors: true },
    proxy: {
        '*': ['http://localhost:8080'],
        '/api': {
            target: 'http://m.tuniu.com',
            changeOrigin: true
        }
    }

});
server.listen(8080);