//下方列表
function request1(method, url) {
    return new Promise((reslove, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                let data = JSON.parse(xhr.response);
                reslove(data);
                console.log(data);
                render(data.data.list,url);
            }
        }
    })
}
request1('get', 'http://demo26.crmeb.net/api/pc/get_products?page=1&limit=25&cid=' + id + '&sid=0&priceOrder=&news=0');

render([]);
function render(list,url) {
    if (list.length === 0) {
        let html = `<div class="nodata">
                    <img src='http://demo26.crmeb.net/home/img/noGoods.348185d.png' alt='' />
                        <p>暂无数据</p>
                        </div>`
        document.querySelector('.con>ul').innerHTML = html;
        return
    }
    let html = '';
    list.forEach((item) => {
        let div = `<li onclick="detail('${item.id}','${url}')">
                            <img src="${item.image}" alt="">
                            <p class="p1"><span class="span1">￥${item.price}</span><span class="span2">￥${item.ot_price}</span></p>
                            <p class="p2">${item.store_name}</p>
                            <p class="p3"><span class="span3">${item.sales}人付款</span><span class="span4">${item.star}分</span></p>
                            </li>
                    `;
        html += div;
    });
    document.querySelector('.con>ul').innerHTML = html;
}

function detail(id,url){
    location.href = './detail.html?'+ id +'&'+ url+'';
}