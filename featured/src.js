function change_color(id) {
    // if you are already on the page, don't highlight pink on mouse over 
    let elem  = document.getElementById(id);
    // need to change the photo for this one 
    if (id=="emulate"){
        elem.src = "../images/emulate/emulate-logo-uppercase-pink.png";
    } else {
        elem.style.color = "HotPink";
    }
}

function change_back(id) {
    let elem  = document.getElementById(id);
    // need to change the photo for this one 
    if (id=="emulate"){
        elem.src = "../images/emulate/emulate-logo-uppercase.png";
    } else {
        elem.style.color = "white";
    }
}

var pages = 3; 
var img = document.getElementById("img");

// shows the previous img 
function prev() {
    // first, get the current img # 
    var num = getNum();

    // subtract 1. If you get 0, go to num of pages 
    var newNum = ( num - 1 == 0 ) ? pages : (num - 1); 

    // replace the src of the image 
    img.src = "../images/featured/liminal-smith/" + newNum + ".jpg";

    changeCaption(newNum);
}
// shows the next img 
function next() {
    // first, get the current img # 
    var num = getNum();

    // add 1. If you get the num of pages + 1, then go to 1 
    var newNum = ( num + 1 == pages + 1 ) ? 1 : (num + 1); 

    // replace the src of the image 
    img.src = "../images/featured/liminal-smith/" + newNum + ".jpg";

    changeCaption(newNum);
}

// extracts the number from the src 
function getNum() {
    // first, get the current img # 
    var path = img.getAttribute('src');
    var match = path.match(/\/(\d+)\.jpg$/);
    var number = match[1]; // "1" as a string
    var numAsInt = parseInt(number, 10); // as an integer
    
    return numAsInt;
}

// replaces the caption (1/3, 2/3, etc)
function changeCaption(num) {
    var caption = document.getElementById("caption");
    caption.textContent = num + " / " + pages;
}

// sets the height of the arrow box based on the pic height to ensure they're in the center 
window.onload = function() {
    var img = document.getElementById("img");
    var height = img.getAttribute('height');

    var arrow_prev = document.getElementById("arrow-prev");
    var arrow_next = document.getElementById("arrow-next");

    arrow_prev.style.height = height; 
    arrow_next.style.height = height; 
};
