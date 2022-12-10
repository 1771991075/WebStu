// 内置模块儿：指的就是nodejs本身就带有的一些模块儿，开发者拿来即用即可。fs 内置模块儿 path 内置模块儿，http内置模块儿
// 导入内置内置fs模块儿 用来操作文件的
let fs = require("fs");
console.log(fs);
// 创建文件夹 参数一 文件夹名称 参数二 回调函数
// 同步任务：上句代码执行完比下面的代码才会继续执行
// 异步任务：上句代码正在执行时，下面代码也会继续执行
// 异步创建文件夹：所用的异步方法都会对应的回调函数
fs.mkdir('lzc',(err)=>{
    if(err){
        console.log('文件夹创建失败',err);
    }else{
        console.log('文件夹创建成功');
    }
})
console.log("大哥大哥")
// 同步创建文件夹 可以通过使用try...catch捕获同步代码的错误信息。
// try{
//     fs.mkdirSync("lzq");
//     console.log(22222)
// }catch(err){
//     console.log("创建失败",err)
// }
// setTimeout(() => {
//         console.log("1111111")
// }, 2000);
// console.log(222222)