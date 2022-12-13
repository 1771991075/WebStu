let http = require('http');
let fs = require('fs');
const { resolve } = require('path');
// 创建web服务
let sever = http.createServer();
// 监听请求
sever.on('request',(req,res)=>{
    res.setHeader('Content-Type','text/html;charset=utf-8');
    console.log(req.url);
    if(req.url === '/'){
        fs.readFile('./pages/home.html',(err,data)=>{
            if(err){
                res.end('请求失败');
            }else{
                res.end(data);
            }
        })
    }else{
        res.end('404 找不到当前页面');
    }
})

// 启动服务
sever.listen(9090,()=>{
    console.log("web服务器已启动....");
})