let fs = require("fs");
// 参数一将要修改的文件路径 参数二 修改后的文件路径 参数三回调函数
fs.rename("./zuoye/user.js","./zuoye/one.js",(err)=>{
    if(err){
        console.log("修改失败文件名称",err)
    }else{
        console.log("修改成功")
    }
})

// 同步 fs.renameSync();
try{
    fs.renameSync("./zuoye/user.js","./zuoye/one.js");
    console.log('修改成功');
}catch(err){
    console.log("修改失败文件名称",err);
}