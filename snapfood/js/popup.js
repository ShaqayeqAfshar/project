
let button = document.querySelector(".button--popup");
let pop = document.querySelector(".popup--div");

button.onclick = showMenu;
function showMenu() {
  pop.classList.toggle("opener");
}

let buton = document.querySelector(".popup--close");
let popup = document.querySelector(".popup--div");

buton.onclick = closeMenu;
function closeMenu(){
  popup.classList.toggle("closer");
}
