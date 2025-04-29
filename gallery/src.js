// when the gallery page is loaded, display the most recent event
// window.addEventListener("load", populate('april-fools'));

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
    // if we had node.js i think we would be able to read in the file 
    var folder_size; 
    if (id == "april-fools") {
        folder_size = 50; 
    }
    if (id == "yule") {
        folder_size = 26;
    }
    if (id == "halloween") {
        folder_size = 20;
    }

    // establish the first side to be left
    // var left_column = true; 
    // loop through the folder 
    for (i =1; i < folder_size + 1; i++) {
        let img = document.createElement('img');
        // give the image a source 
        img.src = '../images/eventPhotos/' + id + '/' + i + '.jpg';
        img.classList.add("event-img");
        // makes it so it only loads when the user scrolls down to it 
        img.loading = "lazy";
        // // place in appropriate column
        // if (left_column) {
        //     // img.style.marginLeft = "25%";
        //     document.getElementById("left").appendChild(img);
        // } else {
        //     // img.style.marginRight = "25%";
        //     document.getElementById("right").appendChild(img);
        // }
        // // change the column side 
        // left_column = left_column ? false : true;
        document.getElementById("container").appendChild(img);
    }

    // then, set tab 
    tab = id;
}

function refresh(){
    const container = document.getElementById("container");
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    // remove images from left and right column
    // let col1 = document.getElementById("left");
    // let col2 = document.getElementById("right");
    // while (col1.firstChild) {
    //     col1.removeChild(col1.lastChild);
    // }
    // while (col2.firstChild) {
    //     col2.removeChild(col2.lastChild);
    // }
}

function change_color(id) {
    // if you are already on the page, don't highlight pink on mouse over 
    if (id == tab) {
        return;
    }
    let elem  = document.getElementById(id);
    // need to change the photo for this one 
    if (id=="emulate"){
        elem.src = "../images/emulate/emulate_pink.png";
    } else {
        elem.style.color = "HotPink";
    }
}

function change_back(id) {
    let elem  = document.getElementById(id);
    // need to change the photo for this one 
    if (id=="emulate"){
        elem.src = "../images/emulate/emulate_white.png";
    } else {
        elem.style.color = "white";
    }
}