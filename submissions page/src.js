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