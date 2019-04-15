var btn =document.getElementById('btn');
var box =document.getElementById('box');
// console.log(btn);
// console.log(box);

    btn.addEventListener('click',function(){
        if(hasClass(box, 'show')){
                removeClass(box,'show');
                addClass(box,'hide');
        }else{
            removeClass(box,'hide');
            addClass(box,'show');
        }
    })




function addClass(el, className) {
    if (hasClass(el, className)) {
        return
    }
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}

function hasClass(el, className) {
    // \s匹配任何空白字符，包括空格、制表符、换页符等等
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}
function removeClass(el, className){
    if (!hasClass(el, className)) {
        return
    }
    let newClass = el.className.split(' ')
    newClass.forEach(function(val, index, newClass){
        if(val === className){
            newClass.splice(index,1);
        }
    }) 
    el.className = newClass.join(' ')
}