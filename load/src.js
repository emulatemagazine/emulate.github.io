// first, sets up storage for the letters 
const letterIds = {};
const ids = ["e_image", "m_image", "u_image", "l_image", "a_image", "t_image", "i_image", "n_image", "g_image"];
const letters = ["E", "M", "U", "L", "A", "T", "I", "N", "G"];

// first, see if the viewer is on a small screen 
const mediaQuery = window.matchMedia('(max-width: 750px)');

function handleMediaQueryChange (e) {
    const emulating = document.getElementById("emulating");
    if (e.matches) {
        // then, rewrite the on mouse over function to nothing
        emulating.onmouseover = null;
        // then, only randomly rotate the letters 10 degrees 
        // we do not randomly rotate the subtitles
        for (let i = 0; i < ids.length; i++) {
            random_rotate(ids[i], 10);
            random_letter(ids[i],letters[i]);
        }
    } else {
        window.addEventListener("load", call_random_rotate);
    }
}

// Initial check
handleMediaQueryChange(mediaQuery);
// Continually call handleMediaQueryChange if it goes above/below 750px
mediaQuery.addEventListener('change', handleMediaQueryChange);

function call_random_rotate() {
    for (let i = 0; i < ids.length; i++) {
        random_rotate(ids[i], 15);
        random_letter(ids[i],letters[i]);
    }
    let subtitles = ["click_image", "anywhere_image", "to_image", "enter_image"];
    for(let i = 0; i < subtitles.length; i++){
        random_rotate(subtitles[i], 15);
    }
}

function random_rotate(id, degree){
    // chooses between -15 and 15 degrees 
    const min = degree * -1 ;
    const max = degree;
    var toRotate = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById(id).style.transform = "rotate("+ toRotate.toString() + "deg)";
}

function random_letter(id, letter){
    const min = 1;
    const max = 11;
    let currentImg = Math.floor(Math.random() * (max - min + 1)) + min;
    // sets the most current id for a given letter so it can be accessed in other pages 
    letterIds[letter] = currentImg;

    let img = document.getElementById(id);
    img.src = "images/letters/" + letter + "/" + currentImg + ".png";
}

window.addEventListener("click", enterPage);

function enterPage(){
    window.location.href = "home/main.html";
}