function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {

        var speed = (target - obj.offsetLeft) / 10;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            //逻辑运算符 如果前面是假，后面不执行，如果是真，后面执行
            callback && callback();
        }
        obj.style.left = obj.offsetLeft + speed + 'px';

    }, 15);

}