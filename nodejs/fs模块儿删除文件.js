let fs = require("fs");
// 异步删除文件
fs.unlink("./zuoye/aa.js",(err)=>{
    if(err){
        console.log("删除文件失败")
    }else{
        console.log("删除文件成功")
    }
})

// 同步 fs.unlinkSync
try{
    fs.unlinkSync("./zuoye/aa.js");
    console.log("删除文件成功");
}catch(err){
    console.log("删除文件失败");
}

// 其他的Api fs.rmdir() 删除文件夹