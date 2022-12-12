// 引入内置http模块儿
const { read } = require('fs');
let http = require('http');
console.log(http)
// 创建web服务
let sever = http.createServer;
console.log(server)
// 监听请求 参数一request 参数二监听到触发回调函数 req表示请求体 res 表示响应体
server.on('request',(req,res)=>{
    // 请求路径
    console.log(req.url);
    // 请求方式
    console.log(req.method);
    console.log('监听到请求了');
    console.log(res);
    // 设置内容编码格式 (响应头)
    res.setHeader('Content-Type','text/html;charset=utf-8');
    // 向客户端响应数据
    res.end('请求成功');
})
//  启动web服务 参数一启动的端口号 参数二启动后进入的回调函数
sever.listen(9090,()=>{
    console.log('web服务器已启动');
})

// 只要修改js代码web服务就必须重新启动