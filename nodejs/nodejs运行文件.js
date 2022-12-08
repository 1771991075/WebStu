let obj = {
    name:"张三",
    age:18,
    sex:"男",
    like:"女"
}
let {name,age,sex,like} = obj;
console.log(`我叫${name},今年${age},是个${sex},爱号${like}`)
let list = [1,2,3,4,5];
list.forEach(item=>{
    console.log(item)
})
// 不能进行dom操作和 BOM 操作
// node 运行js文件 node+文件名称
// node -v 检查nodejs版本