let id = 53;
//导航栏
function request(method, url) {
    return new Promise((reslove, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                let data = JSON.parse(xhr.response);
                reslove(data);
                console.log(data);
                let html = '';
                data.data.forEach(item => {
                    let li = ` <li onclick="getId(${item.id})"><a href="javascript:;">${item.cate_name}</a></li>
                            `;
                    html += li;
                });
                document.querySelector('.nav>ul').innerHTML = html;
            }
        }
    }).then(() => {
        $('.nav>ul>li').eq(0).addClass('on');
        $('.nav>ul>li').on('click', function () {
            $(this).addClass('on').siblings().removeClass('on');
        })
    })
}
request('get', 'http://demo26.crmeb.net/api/category');

function getId(id) {
    id = id;
    render([]);
    request1('get', 'http://demo26.crmeb.net/api/pc/get_products?page=1&limit=25&cid=' + id + '&sid=0&priceOrder=&news=0');
};