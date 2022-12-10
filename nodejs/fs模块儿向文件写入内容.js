let fs = require('fs');
// 异步写入文件内容 参数一 要写入的文件路径 参数二 内容 参数三回调函数
// 若文件中有数据则会覆盖其原来数据

fs.writeFile('./zuoye/user.js','123123',(err)=>{
    if(err){
        console.log("写入失败",err)
    }else{
        console.log("写入成功")
    }
})

//同步
try{
    fs.writeFileSync('./zuoye/user.js','123123');
    console.log("写入成功")
}catch(err){
    console.log('写入数据失败',err);
}
