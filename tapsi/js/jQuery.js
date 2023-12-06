//domNodes
let cards = $("div.cards").children();
let root = $("#root");


//events
cards.on("mouseover", addShadow);
cards.on("mouseout", removeShadow);


//function
function addShadow() {
  $(this).addClass("shadow");
}
function removeShadow() {
  $(this).removeClass("shadow");
}

