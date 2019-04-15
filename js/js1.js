


// // $(document).ready(function(){
// //     //循环执行，每隔1秒钟执行一次 1000
// //     var t1=window.setInterval(refreshCount, 1000);
// //     function refreshCount() {
// //         console.log("ready");
// //     }
// //     //去掉定时器的方法
// //     window.clearInterval(t1);
// // });
// var div=Array.prototype.slice.call(document.getElementsByClassName('a'));
// console.log(div)
// // var num =Math.floor(Math.random()*9)
// // console.log(num)
//
//
//
// setInterval(function () {
//     var box_arr=getArrItem(div,3)
//     console.log(box_arr)
//     for (var i=0;i<3;i++) {
//         box_arr[i].style.background="#"+Math. floor(Math. random()*256). toString(10)
//     }
//     // div[num].style.background="#"+Math. floor(Math. random()*256). toString(10)
//     // console.log( div[7].style.background)
// },1000)
//
//
// // 随机获取数组中任意个数的函数
// function getArrItem(arr, num) {
//     var temp_array = new Array();
//     for (var index in arr) {
//         temp_array.push(arr[index]);
//     }
//     var return_array = new Array();
//     for (var i = 0; i < num; i++) {
//         if (temp_array.length > 0) {
//             var arrIndex = Math.floor(Math.random() * temp_array.length);
//             //将此随机索引的对应的数组元素值复制出来
//             return_array[i] = temp_array[arrIndex];
//             //然后删掉此索引的数组元素,这时候temp_array变为新的数组
//             temp_array.splice(arrIndex, 1);
//         } else {
//             break;
//         }
//     }
//     return return_array;
// }


var flag = true;
var timer;
function choiceCube(){
    var array1 = [];
    for(var i = 0; i < 9; i++){
        array1[i] = i ;
    }
    var array2 = [];
    for(var i = 9; i > 0;){
        var randomNumber = Math.floor(Math.random() * i);
        array2.push(array1[randomNumber]);
        array1[randomNumber] = array1[--i];
    }
    var cube1 = array2[0];
    var cube2 = array2[1];
    var cube3 = array2[3];
    function getColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        if(r==b|r==g||b==g){
            getColor()
        }else{
        return "rgb(" + r + "," + g + "," + b + ")";
        }
    }
    var x = document.getElementsByClassName("cube");
    x[cube1].style.backgroundColor = getColor();
    x[cube2].style.backgroundColor = getColor();
    x[cube3].style.backgroundColor = getColor();
}
function resetColor() {
    var x = document.getElementsByClassName("cube");
    for(i = 0; i < 9; i++){
        x[i].style.backgroundColor = "#fea500";
    }
}
function loopBlink() {
    setTimeout("choiceCube()",0);
    setTimeout("resetColor()",500);
}
function startBlink() {
    if (flag){
        timer = setInterval("loopBlink()",1000);
        flag = false;
    }
}
function stopBlink() {
    clearInterval(timer);
    flag = true;
}

// var int;
// function start(){
// 	//计时器
// 		clearInterval(int);
// 		int=setInterval(run,1000);
// }
// 		function run(){
// 	//重置
// 		var box=document.getElementsByClassName('box');
//
// 		for (var i = 0; i < 9; i++) {
//
// 			box[i].style.background="orange";
//
// 		}
// 	//盒子
// 			var arr=new Array();
// 			for (var i = 0; i < 9; i++) {
// 				arr[i]=i;
// 				};
// 				arr.sort(function(){return 0.5-Math.random();}).slice(5,2);
// 					arr.length=3;
// 	//颜色
// 			var colors=new Array(3);
// 			for (var j = 0; j < colors.length; j++) {
// 				colors[j]="#"+(function(h){
// 					return new Array(7-h.length).join("0")+h
// 					})((Math.random()*0x1000000<<0).toString(16))
// 				}
// 	//运行
// 	for (var k = 0; k <3;k++) {
// 		box[arr[k]].style.background=colors[k];
// 	}
// 	}
//
//
// //点击停止按钮
// function stop(){
// 	clearInterval(int);
// 	var box=document.getElementsByClassName('box');
// 	for (var i = 0; i < 9; i++) {
// 		box[i].style.background="orange";
// 	}
// 	clearInterval(int);
// }