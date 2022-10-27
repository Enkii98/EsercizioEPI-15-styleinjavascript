let menu = document.getElementById("menu");
let nav = document.getElementById("opzionimenu");
let lista = document.querySelectorAll(".opzionilista");
let listamenu = document.getElementsByClassName("menumenu");

///////////bottoni//////////////////////////////
let grande = document.getElementById("grande");
let colore = document.getElementById("colore");
let maiuscolo = document.getElementById("maiuscolo");
let nascondi = document.getElementById("nascondi");
let mostra = document.getElementById("mostra");
////////////////////////////////////////////////

let titolo = document.querySelector("h1");



////////////////////////////////////////////////
menu.addEventListener("click",function (){

  if (nav.style.display == "flex"){
    nav.style.display = "none";
  }
  else {
    nav.style.display = "flex";
  }
});

////////////////////////////////////////////////

for (var i=0; i < lista.length ; i++){
  lista[i].addEventListener("click",function() {
    this.classList.toggle("checked");
  });

  lista[i].addEventListener("mouseover", function () {
    this.classList.toggle("rosso");
  });

  lista[i].addEventListener("mouseout", function () {
    this.classList.toggle("gray");
  });

}  

//lista.addEventListener("click", function (){
//
//  lista.style.textDecoration = "line-through";
//
//});

////////////////////////////////////////////////

grande.addEventListener("click", function () {

  if (titolo.style.fontSize == "2em") {
    titolo.style.fontSize = "4em";
  }

  else {
    titolo.style.fontSize = "2em";
  }
});

colore.addEventListener("click", function () {

  if (titolo.style.color == "inherit") {
    titolo.style.color = "red";

  }

  else {
    titolo.style.color = "inherit";
  }
});

maiuscolo.addEventListener("click", function () {

  if (titolo.style.textTransform == "inherit") {
    titolo.style.textTransform = "uppercase";
  }
  else {
    titolo.style.textTransform = "inherit";
  }
});

nascondi.addEventListener("click", function () {

  if (titolo.style.visibility == "inherit") {
    titolo.style.visibility = "hidden";
  }
  else {
    titolo.style.visibility = "inherit";
  }
});

mostra.addEventListener("click", function () {

  if (titolo.style.visibility == "hidden") {
    titolo.style.visibility = "visible";
  }
});


////////////////////////////////////////////////


for (var i = 0; i < listamenu.length; i++) {
  listamenu[i].addEventListener("mouseover", function () {
    this.classList.toggle("hover");
  });

}  

for (var i = 0; i < listamenu.length; i++) {
  listamenu[i].addEventListener("mouseout", function () {
    this.classList.toggle("cadet");
  });
}
