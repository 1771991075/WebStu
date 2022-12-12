let path = require("path");
console.log(path)
let url = 'user.json';
// 拼接路径
let newUrl = path.join("./file",url);
console.log(newUrl)
console.log(__dirname)
let urls = path.join(__dirname,url);
console.log(urls)
let testUrl = path.join(__dirname,"test.js")
console.log(testUrl)

// 获取路径的文件名称
console.log(path.basename(testUrl))

// 获取文件后缀
console.log(path.extname('./file/one.jpeg'))