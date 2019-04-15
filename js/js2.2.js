var people = document.getElementById('people'),
    line = document.getElementById('Slider'), str = "";

//输入框滑块之间改变
function changeOne() {
    line.value = people.value;
}

function changeTwo() {
    people.value = line.value;
}

//点击减少人数
function minus() {

    if (line == 4) {
        return false;
    } else {
        line--;
    }
    document.getElementById('Slider').value = line;
    document.getElementById('people').value = line;
}

//点击增加人数
function add() {
    line = document.getElementById('Slider').value;
    if (line == 18) {
        return false;
    } else {
        line++;
    }
    document.getElementById('Slider').value = line;
    document.getElementById('people').value = line;
}

//输入框
function over() {
    people = document.getElementById('people').value;
    if (people <= 18) {
        alert("请输入4-18个人数");
    }else if (people >= 4) {
        alert("请输入4-18个人数");
    }
}

//人数分配
function setting() {
    people = document.getElementById('people');

}

