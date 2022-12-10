let fs = require("fs");
console.log(fs);
// 异步向文件中追加内容 参数一 文件路径 参数二 将要追加的内容('字符串') 参数三回调函数

fs.appendFile('./zuoye.user.js','\r\n 123123',(err)=>{
    if(err){
        console.log("追加失败")
    }else{
        console.log("追加成功")
    }
})

// 同步
fs.appendFileSync("./file/index.js","\r\nconsole.log(11111)");