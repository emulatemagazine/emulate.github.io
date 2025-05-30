// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");
const menu = document.querySelector("#menu");

// const paper1 = document.querySelector("#p1");
// const paper2 = document.querySelector("#p2");
// const paper3 = document.querySelector("#p3");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 0;
let maxLocation = 0;
let clicked = 0;

function createBook(issue, numPg){
    let pg = 1;
    maxLocation = numPg;

    for (let i = 1; i <= maxLocation; i++){
        let page = document.createElement("div")
        book.append(page)
        page.id = "p" + i;
        page.style.zIndex = (numPg - i + 3).toString()
        page.classList.add("paper")

        let front = document.createElement("div")
        let back = document.createElement("div")
        page.append(front)
        page.append(back)
        front.id = "front" + i
        back.id = "back" + i
        front.classList.add("front")
        back.classList.add("back")

        let f = document.createElement("div")
        let b = document.createElement("div")
        front.append(f)
        back.append(b)
        f.id = "f" + i
        b.id = "b" + i
        f.classList.add("front-content")
        b.classList.add("back-content")

        let fimg = document.createElement("img")
        let bimg = document.createElement("img")
        fimg.src = '../images/library/magazines/' + issue + '/' + pg + '.png'
        pg++
        bimg.src = '../images/library/magazines/' + issue + '/' + pg + '.png'

        pg++
        f.append(fimg)
        b.append(bimg)
    }

}

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-27vh)";
    nextBtn.style.transform = "translateX(27vh)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }

    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage(){
    let index = currentLocation + 1;
    // let paper = "#p" + currentLocation + 1
    let id = document.getElementById("p" + index.toString());

    let zIndex = currentLocation + 4;
    if(currentLocation <= maxLocation) {
        if(currentLocation === maxLocation-1){
            closeBook(false);
        }else if(currentLocation === 0){
            openBook();
        }
        id.classList.add("flipped");
        id.style.zIndex = zIndex.toString();
    }
    currentLocation++;
}

function goPrevPage(){
    let index = currentLocation + 1;

    // let paper = "#p" + currentLocation + 1
    let id = document.getElementById("p" + index.toString());

    let zIndex = maxLocation - currentLocation + 3;
    if(currentLocation > 0 && currentLocation <= maxLocation){
        if(currentLocation === 1){
            closeBook(true);
            p1.classList.remove("flipped");
            p1.style.zIndex = 999;

        }else if(currentLocation === maxLocation-1){
            openBook();
        }
        id.classList.remove("flipped");
        id.style.zIndex = zIndex.toString()
    }
    currentLocation--;
}


// function goPrevPage() {
//     if(currentLocation > 0) {
//         switch(currentLocation) {
//             case 1:
//                 closeBook(true);
//                 p1.classList.remove("flipped");
//                 p1.style.zIndex = 3+3;
//                 break;
//             case 2:
//                 p2.classList.remove("flipped");
//                 p2.style.zIndex = 2+3;
//                 break;
//             case 3:
//                 openBook();
//                 p3.classList.remove("flipped");
//                 p3.style.zIndex = 1+3;
//                 break;
//             default:
//                 throw new Error("unkown state");
//         }
//
//         currentLocation--;
//     }
// }

function exit(iD){
    location.reload()
}
function openMenu(){
    if(clicked === 0){
        menu.style.display = "block";
        clicked++;
    } else if(clicked === 1){
        menu.style.display = "none";
        clicked--;
    }
}

function openViewer(iD, elmt, numPg){
    let x = document.getElementById(iD);
    x.style.display = "flex"
    createBook(elmt, numPg);
}

function previewOn(Spine, Cover){
    let spine = document.getElementById(Spine);
    let cover = document.getElementById(Cover)

    spine.style.transform = "rotate3d(1, 2, 0, 30deg) translateX(-30px) translateY(30px)"
    cover.style.transform = "rotate3d(-1, -2, 0, 65deg) translateX(-" + cover.offsetX + ") translateY(30px)"

    // x.style.zIndex = "1";

}
function previewOff(Spine, Cover){
    let spine = document.getElementById(Spine);
    let cover = document.getElementById(Cover);

    spine.style.transform = "rotate(0deg)"
    cover.style.transform = "rotate3d(0, 1, 0, 80deg)"


}





// let spines = Object.values(document.getElementsByClassName("spine"));
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// spines.map(function (s, i) {
//     let randomHeight = getRandomInt(800,1500);
//     s.style.height = '${randomHeight}px';
//     // s.style.top = `${800 - randomHeight}px`;
// });

function change_color(id) {
    let elem  = document.getElementById(id);
    if (id=="emulate"){
        elem.src = "../images/emulate/emulate-logo-uppercase.png";
    }
}

function change_back(id) {
    let elem  = document.getElementById(id);
    if (id=="emulate"){
        elem.src = "../images/emulate/emulate-logo-white-uppercase.png";
    }
}