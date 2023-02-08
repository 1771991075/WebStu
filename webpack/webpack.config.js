// webpack配置文件 遵循的是common.js规范 node模块化
let path = require("path");
module.exports = {
    // 打包模式 development 开发模式 production生产模式
    mode:"production",
    // 打包入口文件
    entry:"./src/index.js",
    // 打包出口
    output:{
        // 打包后的文件名称
        filename:"build.js",
        // 打包路径
        path:path.join(__dirname,"dist")
    },
    // loder 加载器 打包css? 打包图片? 打包jsx  打包规则
    module:{
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    // 插件 在webpack 之外用到的功能模块儿
    plugins:[]
}