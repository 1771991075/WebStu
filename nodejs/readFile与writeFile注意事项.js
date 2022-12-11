let fs = require("fs");
let list = [
    {
        name:"张三",
        age:18
    },
    {
        name:"张三",
        age:18
    },
    {
        name:"张三",
        age:18
    },
    {
        name:"张三",
        age:18
    }
]

// 写入内容必须为字符串或Buffer对象、TypedArray、DataView。 若不是对象则需要将其转化为字符串在写入。
// 若写入的文件不存在 则默认会根据当前路径创建该文件
fs.writeFile("./zuoye/user.js",JSON.stringify(list),(err)=>{
    if(err){
        console.log("写入失败",err)
    }else{
        console.log("写入成功")
    }
})
// 读取到的数据为字符串
fs.readFile("./zuoye/user.js","utf-8",(err,data)=>{
    if(err){
        console.log("读取失败")
    }else{
        // 将字符串转化为对象
        data = JSON.parse(data);
        console.log(data)
    }
})