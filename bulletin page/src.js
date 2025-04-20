function highlight(){
    document.getElementById("title").style.color = "darkred";
}
function unhighlight(){
    document.getElementById("title").style.color = "black";
}
function exit(id){
    document.getElementById(id).style.display = "none";
}

// dragElement(document.getElementById("welcome"));
// dragElement(document.getElementById("zine"));
//
// function dragElement(elmnt) {
//     var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//     if (document.getElementById(elmnt.id + "header")) {
//         // if present, the header is where you move the DIV from:
//         document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//     } else {
//         // otherwise, move the DIV from anywhere inside the DIV:
//         elmnt.onmousedown = dragMouseDown;
//     }
//
//     function dragMouseDown(e) {
//         e = e || window.event;
//         e.preventDefault();
//         // get the mouse cursor position at startup:
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         document.onmouseup = closeDragElement;
//         // call a function whenever the cursor moves:
//         document.onmousemove = elementDrag;
//     }
//
//     function elementDrag(e) {
//         e = e || window.event;
//         e.preventDefault();
//         // calculate the new cursor position:
//         pos1 = pos3 - e.clientX;
//         pos2 = pos4 - e.clientY;
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         // set the element's new position:
//         elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//         elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//     }
//
//     function closeDragElement() {
//         // stop moving when mouse button is released:
//         document.onmouseup = null;
//         document.onmousemove = null;
//     }
// }

window.addEventListener("load", function randomize(){
    let r;
    let list = document.getElementsByClassName("randomize")
    for(let i=0; i<36; i++){
        r = Math.floor(Math.random()*200);
        list[i].style.margin = r + "px";
    }
});

window.addEventListener("load", randomize(document.getElementById("doodle")));
const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
function randomize(ID){
    ID.style.left = getRandom(0, 300 - 200)+'px';
    ID.style.top = getRandom(0, 300 - 200)+'px';
}


function random_rotate(id){
    // chooses between -30 and 30 degrees
    const min = -15;
    const max = 15;
    var degree = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById(id).style.transform = "rotate("+ degree.toString() + "deg)";
}

const numMin = 2;
const numMax = 4;
let numElements = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;

for(let i = 0; i <= numElements; i++){
    randomElement();
}
function randomElement(){
    const eMin = 0;
    const eMax = 40;
    let currentImg = Math.floor(Math.random() * (eMax - eMin + 1)) + eMin;

    let divs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"];
    // let divs = ["b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"];

    const divMin = 0;
    const divMax =6;
    let curDiv = Math.floor(Math.random() * (divMax - divMin + 1)) + divMin;

    const heads = 0;
    const tails = 1;
    let coin = Math.floor(Math.random() * (tails - heads + 1)) + heads;

    let id = "";

    if(coin === 1){
        id = divs[curDiv].toUpperCase() + "-";
    } else {
        id = "-" + divs[curDiv];
    }

    let element = document.getElementById(id);
    let image = '../_archive/collageElements/' + currentImg + '.png';
    element.src = image;
    random_rotate(id)
}