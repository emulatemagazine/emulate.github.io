let clicked = 0;

function openMenu(){
    if(clicked === 0){
        menu.style.display = "block";
        clicked++;
    } else if(clicked === 1){
        menu.style.display = "none";
        clicked--;
    }
}
function change_color(id) {
    let elem  = document.getElementById(id);
    if (id=="emulate"){
        elem.src = "../images/emulate/emulate-logo-uppercase-blue.png";
    }
}

function change_back(id) {
    let elem  = document.getElementById(id);
    if (id=="emulate"){
        elem.src = "../images/emulate/emulate-logo-uppercase.png";
    }
}