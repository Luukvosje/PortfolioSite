const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.hamburger-menu');
const navbuttons01 = document.querySelector('.nav-links01');
const navbuttons02 = document.querySelector('.nav-links02');
const navbuttons03 = document.querySelector('.nav-links03');


openMenu.addEventListener('click', show);
navbuttons01.addEventListener('click', show);
navbuttons02.addEventListener('click', show);
navbuttons03.addEventListener('click', show);

function show() {
    if (mainMenu.style.top == '0%') {
        openMenu.classList.remove("change");
        mainMenu.style.top = '-100%';
        openMenu.style.posistion = "relative";
    }
    else {
        mainMenu.style.top = '0%';
        openMenu.style.posistion = "fixed";
        openMenu.classList.toggle("change");
    }
}
var html = false;
document.body.onscroll = function() {
	if (document.getElementById("skillview").getBoundingClientRect().bottom <= window.innerHeight && !html) {
		document.body.onscroll = "";
        document.getElementById("html").style.animation = "html 2s forwards";
        document.getElementById("csharp").style.animation = "csharp 2s forwards";
        document.getElementById("css").style.animation = "css 2s forwards";
        document.getElementById("art").style.animation = "art 2s forwards";
        document.getElementById("unity").style.animation = "unity 2s forwards";
        document.getElementById("dutch").style.animation = "dutch 2s forwards";
        document.getElementById("english").style.animation = "english 2s forwards";
        html = true;
	}
}

// var i = 0;
// var wordcount = 0;
// var text1 = 'developer';
// var text2 = 'photographer';
// var text3 = 'game designer';
// var speed = 50;
// var wordfull = true;

// function typeWriter() {
//     typeword(wordcount);
// }

// function typeword(count) {
//     if (i < text1.length && count == 0) {
//         document.getElementById("titletext").innerHTML += text1.charAt(i);
//         i++;
//         setTimeout(typeWriter, speed);
//     }
//     if(wordfull && count)

//     if (i < text2.length && count == 1) {
//         document.getElementById("titletext").innerHTML += text2.charAt(i);
//         i++;
//         setTimeout(typeWriter, speed);
//     }

//     if (i < text3.length && count == 2) {
//         document.getElementById("titletext").innerHTML += text3.charAt(i);
//         i++;
//         setTimeout(typeWriter, speed);
//     }

//     if (i == text1.length || i == text2.length || i == text3.length) {
//         i = 0;
//         wordfull = true;
//         console.log(wordcount);
//         if (wordcount == 2 && !wordfull) {
//             wordcount = 0
//         }
//         else if(!wordfull){
//             wordcount++;
//         }
//     }
// }


