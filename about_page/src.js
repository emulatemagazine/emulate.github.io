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