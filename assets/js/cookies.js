//CookieBar
let popUp = document.getElementById("CookiePopup");
//When user clicks the accept button
document.getElementById("acceptCookie").addEventListener("click", () =>{
  //create date object
  let d = new Date();
  d.setMinutes(2 + d.getMinutes());
  
  document.cookie = "myCookieName=thisIsMyCookie; expires = " + d + ";";
  popUp.classList.add("hide");
  popUp.classList.remove("show");
});


const checkCookie = () => {
  let input = document.cookie.split("=");
  if(input[0] == "myCookieName"){
    popUp.classList.add("hide");
    popUp.classList.remove("show");
  }
  else{
    popUp.classList.add("show");
    popUp.classList.remove("hide");
  }
}
window.onload = () => {
  setTimeout(() => {
    checkCookie();
  }, 2);
}
