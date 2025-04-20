let expanded = false;
var in_scissor_mouse_block = false; 

function menu() {
    if (expanded) {
        shrink_menu();
        expanded = false;
    } else {
        expand_menu();
        expanded = true;
    }
}


function expand_menu () { 
    let menu = document.getElementById("menu");
    let expanded_menu = document.getElementById("expanded_menu");
    let top = document.getElementById("top_img");
    let bottom =document.getElementById("bottom_img");

    // make the svg object 
    // <object data="../images/menu/svgs/full_menu.svg" type="image/svg+xml" class ="svg" id = "svg"></object>
    var svg = document.createElement("object");
    svg.setAttribute("data", "../images/menu/svgs/full_menu.svg");
    svg.setAttribute("type", "image/svg+xml");
    svg.setAttribute("class", "svg");
    svg.setAttribute("id", "svg");
    var wrapper = document.getElementById("svg-wrapper");
    wrapper.appendChild(svg);

    top.animate(
        { transform: ["rotate(0deg)", "rotate(10deg)"] },
        { duration: 1500, fill: "forwards" }
    );
    bottom.animate(
        { transform: ["rotate(0deg)", "rotate(-10deg)"] },
        { duration: 1500, fill: "forwards" }
    );
    menu.animate(
        { opacity: [1, 0] },
        { duration: 500, fill: "forwards" }
    );
    expanded_menu.animate(
        { opacity: [0, 1] },
        { duration: 500, fill: "forwards" }
    );

    menu.style.visibility = "hidden";
    expanded_menu.style.visibility = "visible";
}

function shrink_menu() {
    let menu = document.getElementById("menu");
    let expanded_menu = document.getElementById("expanded_menu");
    let top = document.getElementById("top_img");
    let bottom =document.getElementById("bottom_img");

    // delete the svg object 
    var wrapper = document.getElementById("svg-wrapper");
    wrapper.removeChild(svg);

    top.animate(
        { transform: ["rotate(10deg)", "rotate(0deg)"] },
        { duration: 1500, fill: "forwards" }
    );
    bottom.animate(
        { transform: ["rotate(-10deg)", "rotate(0deg)"] },
        { duration: 1500, fill: "forwards" }
    );
    menu.animate(
        { opacity: [0, 1] },
        { duration: 500, fill: "forwards" }
    );
    expanded_menu.animate(
        { opacity: [1, 0] },
        { duration: 500, fill: "forwards" }
    );

    menu.style.visibility = "visible";
    expanded_menu.style.visibility = "hidden";
}

const displayDistance = 15 // distance in px to display another photo
const nDisplay = 7 // number of pictures to display at once

const images = document.getElementsByClassName("image")

let globalIndex = 0 // used to count up the images
let lastMousePosition = {x: 0, y: 0} // used to get the last mouse position

// function to activate photos
function activatePic(img, x, y){
    img.style.display = "block"
    img.style.left = `${x}px`
    img.style.top = `${y}px`
    img.style.width = "2vh"
    img.style.zIndex = globalIndex // otherwise the last pic will always be at the top
    // if the mouse is in the scissor/menu area, then turn visibility to hidden 
    if (in_scissor_mouse_block) {
        img.style.visibility = "hidden";
    } else{
        img.style.visibility = "visible";
    }
    lastMousePosition = {x: x, y: y} // update the last mouse position
}

// compute mouse distance
function mouseDistance(x, y){
    return Math.hypot(x - lastMousePosition.x, y - lastMousePosition.y)
}

// onmousemove
window.onload = function() {
    setTimeout(function() {
        window.onmousemove = e => {
            if (mouseDistance(e.clientX, e.clientY) > displayDistance){
                let activePic = images[globalIndex % images.length]
                // let inactivePic = images[(globalIndex - nDisplay) % images.length]
        
                activatePic(activePic, e.clientX, e.clientY)
                // if (inactivePic){inactivePic.dataset.status = "inactive"}
        
                globalIndex++
            }
        }
    }, 3000)
}

function turnpink(id) {
    var elem = document.getElementById(id);
    elem.style.borderColor = "hotpink";

    var caption = document.getElementById(id + "_caption");
    caption.style.color = "hotpink";
}

function turnback(id) {
    var elem = document.getElementById(id);
    elem.style.borderColor = "white";
    var caption = document.getElementById(id + "_caption");
    caption.style.color = "white";
}