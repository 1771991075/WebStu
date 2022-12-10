let fs = requrie('fs');
console.log(fs);
// 异步拷贝文件 任意文件类型均可拷贝。 参数一 将要拷贝的文件路径 参数二 拷贝到那个文件路径中 参数三回调函数
fs.copyFile('./zuoye/order.js','./zuoye/user.js',(err)=>{
    if(err){
        console.log("拷贝失败",err)
    }else{
        console.log("拷贝成功")
    }
})
// 同步拷贝
try{
    fs.copyFileSync("./file/index.js","./file/index.txt");
    console.log("js文件拷贝成功")
  }catch(err){
      console.log("拷贝失败",err)
  }