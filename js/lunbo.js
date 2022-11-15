// 鼠标经过轮播区，左右箭头显示，离开隐藏
var focus = document.querySelector('.focus');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var pic_box = document.querySelector('.pic_box');
var lis = document.querySelectorAll('.pic_box li');
var circle = document.querySelector('.circle');

//每张图片大小计算
var liW = focus.offsetWidth;

focus.onmouseenter = function () {
    prev.style.display = 'block';
    next.style.display = 'block';
    //鼠标经过轮播区,停止轮播
    clearInterval(timer);
}
focus.onmouseleave = function () {
    prev.style.display = 'none';
    next.style.display = 'none';
    //鼠标移走，开始轮播
    timer = setInterval(function () {
        next.onclick();
    },2000);
}

//动态生成小圆点
for (var i = 0; i < lis.length; i++) {
    var li = document.createElement('li');
    li.setAttribute('index', i);
    circle.appendChild(li);
    //小圆点交互
    li.onclick = function () {
        for (var i = 0; i < circle.children.length; i++) {
            circle.children[i].className = '';
        }
        this.className = 'on';
        var idx = this.getAttribute('index');
        //当点击了某个小圆点时，把索引号赋值给num
        num = idx;
        //当点击了某个小圆点时，把索引号赋值给cir
        cir = idx;
        animate(pic_box, -idx * liW);
    }
}

// 给第一项 默认添加on
circle.children[0].className = 'on';

//克隆图片
var first = pic_box.children[0].cloneNode(true);
pic_box.appendChild(first);

//追加盒子宽度
pic_box.style.width = liW * pic_box.children.length + 'px';

//左右键点击切换
var num = 0;
var cir = 0; //小圆对应的索引号
var flag = true; //节流阀  防抖和节流
prev.onclick = function () {
    if (flag) {
        flag = false;
        //当图片滚动到第一张图片时，让ul快速的、不做动画的跳到克隆好的最后一张图片：
        //left = pic_box.children.length-1*liW ; num = pic_box.children.length-1;
        if (num == 0) {
            num = pic_box.children.length - 1
            pic_box.style.left = -num * liW + 'px';
            // return false; 如果滚动到最后一张不想滚动，可以设置false，让按钮点不动;
        }
        num--;//索引号增加
        //-num*liW  目标位置
        animate(pic_box, -num * liW, function () {
            flag = true;
        });
        cir--;
        if (cir < 0) {
            cir = circle.children.length - 1;
        }
        circleChange(cir);
    }
}
next.onclick = function () {
    if (flag) {
        flag = false;
        //当图片滚动到克隆的最后一张图片时。让ul快速的、不做动画的跳到最左侧：left = 0;
        if (num == pic_box.children.length - 1) {
            pic_box.style.left = 0;
            num = 0;
        }
        num++;//索引号增加
        //-num*liW  目标位置
        animate(pic_box, -num * liW, function () {
            flag = true;
        });
        cir++;
        if (cir == circle.children.length) {
            cir = 0;
        }
        circleChange(cir);
    }
}

//排他思想封装          形参cir  当前小圆的索引号
function circleChange(cir) {
    for (var i = 0; i < circle.children.length; i++) {
        circle.children[i].className = '';
    }
    circle.children[cir].className = 'on';
}

//自动轮播
var timer = setInterval(function () {
    next.onclick();
},2000);





