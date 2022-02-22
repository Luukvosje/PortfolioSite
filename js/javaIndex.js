const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.hamburger-menu');
const navbuttons = document.querySelector('.nav-links');




openMenu.addEventListener('click',show);
navbuttons.addEventListener('click',show);

function show(){
    if(mainMenu.style.top == '0%'){
        openMenu.classList.remove("change");
        mainMenu.style.top = '-100%';
        openMenu.style.posistion = "relative";
    }
    else{
        mainMenu.style.top = '0%';
        openMenu.style.posistion = "fixed";
        openMenu.classList.toggle("change");
    }
}


