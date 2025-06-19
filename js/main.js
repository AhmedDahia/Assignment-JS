function btn(){
    document.body.style.backgroundColor='yellow';
}

function btn2(){
    document.body.style.color='red';
}

function btn3(){
    let sizeBtn = document.getElementById('sizeBtn');
    let currentSize = sizeBtn.setWidth;
    sizeBtn.style.width = (currentSize + 20)+'px';
}

function btn4(){
    let item = document.getElementById('item');
    item.style.border='5px solid black';
}

function btn5(){
    document.body.style.backgroundColor='green';
}
function btn6(){
    let heading = document.getElementById('heading');
    heading.style.fontSize = '40px';
    heading.style.color='red'
}
function btn7(){
    let img = document.getElementById('img');
    img.style.border='5px solid black'
}
function btn8(btn){
    document.body.style.backgroundColor='black';
     btn.style.color='black';
}
function btn9(){
    let item2= document.getElementById('item2');
    item2.style.fontStyle='italic';
}
function btn10(){
    let item3 = document.getElementById('item3');
    item3.style.backgroundColor='lightblue'
}