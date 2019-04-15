function animate(obj,target) {
    clearInterval(obj.timer);
    var speed = obj.offsetLeft < target ? 10: -10; // 用来判断是＋5 还是－5
    obj.timer = setInterval(function () {
        var result = target-obj.offsetLeft;    //它们的差值不会超过5
        obj.style.left = obj.offsetLeft + speed +"px";
        if (Math.abs(result)<=15){   //如果它们的差值小于5 说明到位置了
            clearInterval(obj.timer);
            obj.style.left = target;    //因为有5像素的差距所以需要直接等于目标位置
        }
    },10)
}
window.onload = function () {
    //1.获取元素
    var box = document.getElementById('all');
    var ul  = document.getElementById("ul");
    var ulLis = ul.children;
    // 2.操作元素
//    因为要做无缝滚动所以要克隆第一张放到最后
    ul.appendChild(ul.children[0].cloneNode(true));
//    创建ol和li
    var ol = document.createElement("ol");  // 生成ol
    box.appendChild(ol);
    for (var i=0;i<ulLis.length-1;i++){
        var li = document.createElement("li"); //生成li
        // li.innerHTML = i + 1;
        ol.appendChild(li);
    }
    ol.children[0].className = "current";
//    3.开始做动画
    var  olLis = ol.children;
    for (var i=0;i<olLis.length;i++){   //排他思想
        olLis[i].index = i;
        olLis[i].onmouseover = function () {
            for (var j=0;j<olLis.length;j++){
                olLis[j].className = "";
            }
            this.className = "current";
            animate(ul,-this.index*document.documentElement.clientWidth);   // 调用运动函数
            key = square = this.index;
        }
    }
//    4. 设置定时器
    var timer = null;   //轮播图的定时器
    var key = 0;   // 控制播放张数
    var square = 0;  // 控制小方块
    timer = setInterval(autoPlay,3000);
    function autoPlay() {
        key++;   //先++
        if (key>ulLis.length-1){ //再判断
            ul.style.left = 0; // 迅速调回
            key=1;     // 因为第六张就是第一张，第一张播放完，该播放第二张
        }
        animate(ul,-key*document.documentElement.clientWidth); //最后再执行

        square++;
        if (square>olLis.length-1){
            square = 0;
        }
        for (var i=0;i<olLis.length;i++){
            olLis[i].className = "";
        }
        olLis[square].className = "current";
    }
    function autoplay1() {
        key--;
        if (key<0){
            ul.style.left = -3650+"px";//5*730
            key=5;
        }
        animate(ul,-key*730);
        square--;
        if (square<0) {
            square = olLis.length - 1;
        }
            for (var i = 0;i<olLis.length;i++){
                olLis[i].className = "";
            }
            olLis[square].className = "current";
    }
    // 当鼠标经过大盒子，清除定时器
    box.onmouseover = function () {
        clearInterval(timer);
    }
    box.onmouseout = function () {
        timer = setInterval(autoPlay,3000);
    }
}