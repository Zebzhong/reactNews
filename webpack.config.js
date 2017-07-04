var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    //入口
    entry: path.resolve(__dirname, 'app/index.js'),
    //输出
    output: {
        filename: "bundle.js"
    },
    //忽略后缀
    resolve:{
        extensions:['', '.js','.jsx']
    },
    //loaders
    module: {
        loaders: [
            { test: /\.(js|jsx)$/,  loader: 'babel'},
            { test: /\.less$/, loader: 'style!css!postcss!less' },
            { test: /\.css$/,  loader: 'style!css!postcss' },
            { test:/\.(png|jpg|gif)$/,loader:"url-loader?limit=8129" }
        ]
    },
    //css3前缀自动加载
    postcss: [
        require('autoprefixer') //调用autoprefixer插件，例如 display: flex
    ],
 
    plugins: [
        // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),

        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),

        // 打开浏览器
        new OpenBrowserPlugin({
          url: 'http://localhost:8080'
        }),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
          __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ],
    //配置服务器
    devServer: {
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true, //实时刷新
        hot: true  // 使用热加载插件 HotModuleReplacementPlugin
    }
}
