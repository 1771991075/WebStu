let fs = require('fs');
function getData(url){
    return new Promise((reslove,reject)=>{
        fs.readFile(url,'utf-8',(err,data)=>{
            if(err){
                console.log('读取失败',err);
            }
            reslove(JSON.parse(data));
        })
    })
}
async function getD(){
    let user = await getData('user.json');
    let order = await getData('order.json');
    console.log(user);
    console.log(order);
    user.forEach(item => {
        let userOrder = {
            name:item.name,
            orderList:[]
        };
        order.forEach(itemOrder=>{
            if(itemOrder.id == item.id){
                userOrder.orderList.push(itemOrder);
            }
        })
        console.log(userOrder);
    });
    
};
getD();