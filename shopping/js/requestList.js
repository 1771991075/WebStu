function requestList(method, url,id) {
    return new Promise((reslove, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                let listData = xhr.response;
                listData = JSON.parse(listData);
                reslove(listData);
                let newArry = listData.data.list.filter((item, index) => {
                    return item.id == id;
                })
                $('h3').text(newArry[0].store_name);
                $('.leftp_1').text('原价：￥'+ newArry[0].ot_price + '');
                $('.rightp_1').text(newArry[0].sales);
            }
        }
    })
    
}
