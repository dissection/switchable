var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var uglifyJsPlugin= new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
})
module.exports = {
    //插件项
    plugins: [uglifyJsPlugin],
    //页面入口文件配置
    entry: {
        switchable : './jQuery.switchable.js'
    },
    //入口文件输出配置
    output: {
        path:'./wksrc',
        filename: '[name].min.js'
    }
};