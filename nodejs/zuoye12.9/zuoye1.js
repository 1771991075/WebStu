let fs = require('fs');
function getData(url){
    return new Promise((reslove,reject)=>{
        fs.readFile(url,'utf-8',(err,data)=>{
            if(err){
                console.log('读取失败',err);
            }
            reslove(data);
        })
    })
}
async function getD(){
    let res = await getData('./one.txt');
    console.log(res);
    let res1 = await getData('./two.txt');
    console.log(res1);
    let res2 = await getData('./three.txt');
    console.log(res2);
    let res3 = await getData('./four.txt');
    console.log(res3);
};
getD();