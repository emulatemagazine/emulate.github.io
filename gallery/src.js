// create a set of the folders/events (need to manually update when there is a new event)
const events = new Set(["yule","april-fools","halloween"]);

// sets to the most recent event (april fools open mic) when it loads
window.addEventListener("load", populate("april-fools"));

// keep track of the current tab (for the highlighting function)
var tab = "april-fools";

// this function is called when the button for a particular event is pressed 
function populate(id){
    // turn text white 
    change_back(id);
    
    // this deletes all of the items from col1 and col2
    refresh();

    // change all the other buttons to be transparent and the given one to be blue
    for (const event of events) {
        if (event == id) {
            document.getElementById(event).style.backgroundColor = "#27293D";
        } else {
            document.getElementById(event).style.backgroundColor = "transparent";
        }
    }

    // i am sure there is a smarter way to do this but i rly don't know how 
    // if we had node.js (??) i think we would be able to read in the file 
    var folder_size; 
    if (id == "april-fools") {
        folder_size = 55; 
    }
    if (id == "yule") {
        folder_size = 26;
    }
    if (id == "halloween") {
        folder_size = 22;
    }

    // establish the first side to be left
    var left_column = true; 
    // loop through the folder 
    for (i =1; i < folder_size + 1; i++) {
        let img = document.createElement('img');
        // give the image a source 
        img.src = '../_archive/eventPhotos/' + id + '/' + i + '.jpg';
        // place in appropriate column
        if (left_column) {
            document.getElementById("col1").appendChild(img);
        } else {
            document.getElementById("col2").appendChild(img);
        }
        // change the column side 
        left_column = left_column ? false : true;
    }

    // then, set tab 
    tab = id;
}

function refresh(){
    // remove images from column 1 and column 2 
    let col1 = document.getElementById("col1");
    let col2 = document.getElementById("col2");
    while (col1.firstChild) {
        col1.removeChild(col1.lastChild);
    }
    while (col2.firstChild) {
        col2.removeChild(col2.lastChild);
    }
}


// function zoom(){
//     document.getElementById('zoomed').style.display = "block";
// }
//
// let im = document.querySelector('.img');
//
// let zoom = () => {
//     document.getElementById('zoomed').style.display = "block";
// }
// im.forEach((item) => {
//     item.addEventListener('click', zoom)
// });

function random_rotate(id){
    // chooses between -30 and 30 degrees
    const min = -15;
    const max = 15;
    var degree = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById(id).style.transform = "rotate("+ degree.toString() + "deg)";
}

const numMin = 1;
const numMax = 3;
let numElements = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;

for(let i = 0; i <= numElements; i++){
    randomElement();
}
function randomElement(){
    const eMin = 0;
    const eMax = 39;
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

function change_color(id) {
    // if you are already on the page, don't highlight pink on mouse over 
    if (id == tab) {
        return;
    }
    let elem  = document.getElementById(id);
    // need to change the photo for this one 
    if (id=="emulate"){
        elem.src = "../_archive/emulate/emulate_pink.png";
    } else {
        elem.style.color = "HotPink";
    }
}

function change_back(id) {
    let elem  = document.getElementById(id);
    // need to change the photo for this one 
    if (id=="emulate"){
        elem.src = "../_archive/emulate/emulate_white.png";
    } else {
        elem.style.color = "white";
    }
}