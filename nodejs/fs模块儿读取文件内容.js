let fs = require("fs");

// 异步读取文件内容 参数一将要读取的文件路径 参数二 编码格式(utf-8),参数三回调函数 err表示读取失败的错误信息,data表示读取成功的数据
//  可以读取任意文件类型

fs.readFile('./zuoye/user.js','utf-8',(err,data)=>{
    if(err){
        console.log('读取失败',err);
    }else{
        console.log('读取成功',data);
    }
})

// 同步读取文件内容
try{
    fs.readFileSync('./zuoye/user.js','utf-8');
    console.log(data);
}catch(err){
    console.log('读取失败',err);
}
