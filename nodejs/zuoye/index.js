let userList = require('./user.js').userList;
let orderList = require('./order.js').orderList;
let userOrder = [{},{},{}];
userOrder.forEach(item => {
    item.name = '',
    item.orderList = []
});
for (var i = 0 ;i < orderList.length; i++) {
    for(var j = 0; j< userList.length;j++){
        if(userList[j].id == orderList[i].id){
            userOrder[j].name = userList[j].name;
            userOrder[j].orderList.push(orderList[i]);
        }
    }
}
userOrder.forEach(item => {
    console.log(item);
});

