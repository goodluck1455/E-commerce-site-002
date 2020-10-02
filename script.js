let permIdentity = document.querySelector(".perm-identity-2");
let loginHover = document.querySelector(".loginHover");

let helpoutline = document.querySelector(".help-outline-2");
let loginHoverB = document.querySelector(".loginHoverB");

let menubar = document.querySelector(".menubar");
let closeMenu = document.querySelector("#closeBtn");
let openMenu = document.querySelector("#menu-btn");

openMenu.addEventListener("click", ()=>{
    menubar.style.display = "block";

})
closeMenu.addEventListener("click", ()=>{
    menubar.style.display = "none";

})