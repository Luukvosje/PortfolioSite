var isopen = false;

function openpage(){
    if(!isopen){
    document.getElementById("content").style.top = "0%";
    document.getElementById("scroll").innerHTML = "scrollup";
        isopen = true;
    }
    else{
        document.getElementById("content").style.top = "250%";
        document.getElementById("scroll").innerHTML = "scrolldown";
        isopen = false;
    }
}