let fs = require('fs');
console.log(fs);
// 异步判断当前文件夹是否存在 参数一 判断的文件夹名称 参数二 回调函数
fs.access("lzc", (err) => {
    // 若有错误信息则表示当前文件夹不存在 若没有错误信息则表示当前文件夹已存在
    if (err) {
        console.log("当前文件夹未存在", err)
    } else {
        console.log("当前文件夹已存在")
    }
})
// 同步判断文件夹是否存在
try {
    fs.accessSync("lzc");
    console.log("lzc文件夹已存在")
} catch (err) {
    console.log("lzc文件夹不存在", err)
}
// 判断文件夹是否存在
try {
    // 若isVal为true则表示当前文件夹已存在若为fs则表示当前文件夹不存在。
    fs.existsSync("lzc");
} catch (isval) {
    if(isval == true){
        console.log("lzc文件夹已存在",isval);
    }else{
        console.log("lzc文件夹不存在", isval);
    }
}