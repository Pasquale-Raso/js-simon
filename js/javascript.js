// Descrizione:
// Un alert() espone 5 numeri generati casualmente. (Decidete voi se debbano essere tutti diversi)
// Non appena l'utente schiaccia "ok", parte un timer di 30 secondi. (Bonus: visualizzare il timer)
// Al termine dei 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). (Bonus: far inserire i numeri da un form)
// Dopo che sono stati inseriti i 5 numeri, il software mostra in un alert quanti e quali dei numeri da indovinare sono stati individuati. (Bonus: stampare in pagina il risultato, in alternativa all'alert.)

// ! crea un ciclo di 5 numeri random

var nRandom = [];

for (let i = 0; i < 5; i++) {
  var nCasuali = RandomNumber(1, 100);
  nRandom.push(nCasuali);
}
console.log(nRandom);

// ! stampo in html i 5 numeri

var printNRandom = document.getElementById("nrandom");
nrandom.innerHTML = nRandom;

// ! crea un bottone di inizio gioco

var bottoneInizioGioco = document.getElementById("bt");

//todo  applico i display none

document.getElementById("1numero").style.display = " none";
document.getElementById("bt1").style.display = " none";
document.getElementById("titolo1").style.display = " none";
document.getElementById("titolo2").style.display = "none";
document.getElementById("2numero").style.display = "none";
document.getElementById("bt2").style.display = "none";
document.getElementById("titolo3").style.display = "none";
document.getElementById("3numero").style.display = "none";
document.getElementById("bt3").style.display = "none";
document.getElementById("titolo4").style.display = "none";
document.getElementById("4numero").style.display = "none";
document.getElementById("bt4").style.display = "none";
document.getElementById("titolo5").style.display = "none";
document.getElementById("5numero").style.display = "none";
document.getElementById("bt5").style.display = "none";
document.getElementById("tit").style.display = "none";
document.getElementById("nrandom2").style.display = "none";
document.getElementById("tit2").style.display = "none";
document.getElementById("nIDU").style.display = "none";

// ! evento al click del bottone

bottoneInizioGioco.addEventListener("click", (event) => {
  // al click del bottone scompaiono il titolo i numeri random e il bottone
  document.getElementById("titolo").style.display = " none";
  document.getElementById("nrandom").style.display = " none";
  // al click del bottone parte un timer di 30 secondi
  var timer = 3;
  var downloadTimer = setInterval(function () {
    document.getElementById("countdown").innerHTML = timer;
    timer -= 1;
    if (timer <= -1) {
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = " ";
      //todo  applico il display inline (alla fine dei 30 secondi)
      document.getElementById("titolo1").style.display = "inline";
      document.getElementById("1numero").style.display = "inline";
      document.getElementById("bt1").style.display = "inline";
    }
  }, 1000);
});

// ! creo bottoni di conferma ai form inseriti dall'utente

var bottone1 = document.getElementById("bt1");
var bottone2 = document.getElementById("bt2");
var bottone3 = document.getElementById("bt3");
var bottone4 = document.getElementById("bt4");
var bottone5 = document.getElementById("bt5");

// ! chiedo l'inserimento del 1° numero e lo inserisco in un array (numeriInseritiDaUtente)

var numeriInseritiDaUtente = [];
console.log(numeriInseritiDaUtente);
function getValue(event) {
  elements = form.elements;
  for (var i = 0; i < elements.length; i++) {
    switch (elements[i].id) {
      case "1numero":
        numeriInseritiDaUtente.push(form.elements[i].value);
        break;
      default:
        break;
    }
  }
  event.preventDefault();
}
var form = document.getElementById("form");
form.addEventListener("submit", getValue);

// ! evento al click del bottone ("bt1")

bottone1.addEventListener("click", (event) => {
  // al click del bottone ("bt1") scompaiono il titolo, il bottone e l'input
  document.getElementById("titolo1").style.display = "none";
  document.getElementById("1numero").style.display = "none";
  document.getElementById("bt1").style.display = "none";
  // al click del bottone ("bt1") compaiono il titolo, il bottone e l'input del ("bt2")
  document.getElementById("titolo2").style.display = "inline";
  document.getElementById("2numero").style.display = "inline";
  document.getElementById("bt2").style.display = "inline";
});

// ! chiedo l'inserimento del 2° numero e lo inserisco in un array (numeriInseritiDaUtente)

function getValue2(event) {
  elements = form2.elements;
  for (var i = 0; i < elements.length; i++) {
    switch (elements[i].id) {
      case "2numero":
        numeriInseritiDaUtente.push(form2.elements[i].value);
        break;
      default:
        break;
    }
  }
  event.preventDefault();
}
var form2 = document.getElementById("form2");
form2.addEventListener("submit", getValue2);

// ! evento al click del bottone ("bt2")

bottone2.addEventListener("click", (event) => {
  // al click del bottone ("bt2") scompaiono il titolo, il bottone e l'input
  document.getElementById("titolo2").style.display = "none";
  document.getElementById("2numero").style.display = "none";
  document.getElementById("bt2").style.display = "none";
  // al click del bottone ("bt2") compaiono il titolo, il bottone e l'input del ("bt3")
  document.getElementById("titolo3").style.display = "inline";
  document.getElementById("3numero").style.display = "inline";
  document.getElementById("bt3").style.display = "inline";
});

// ! chiedo l'inserimento del 3° numero e lo inserisco in un array (numeriInseritiDaUtente)

function getValue3(event) {
  elements = form3.elements;
  for (var i = 0; i < elements.length; i++) {
    switch (elements[i].id) {
      case "3numero":
        numeriInseritiDaUtente.push(form3.elements[i].value);
        break;
      default:
        break;
    }
  }
  event.preventDefault();
}
var form3 = document.getElementById("form3");
form3.addEventListener("submit", getValue3);

// ! evento al click del bottone ("bt3")

bottone3.addEventListener("click", (event) => {
  // al click del bottone ("bt3") scompaiono il titolo, il bottone e l'input
  document.getElementById("titolo3").style.display = "none";
  document.getElementById("3numero").style.display = "none";
  document.getElementById("bt3").style.display = "none";
  // al click del bottone ("bt3") compaiono il titolo, il bottone e l'input del ("bt4")
  document.getElementById("titolo4").style.display = "inline";
  document.getElementById("4numero").style.display = "inline";
  document.getElementById("bt4").style.display = "inline";
});

// ! chiedo l'inserimento del 4° numero e lo inserisco in un array (numeriInseritiDaUtente)

function getValue4(event) {
  elements = form4.elements;
  for (var i = 0; i < elements.length; i++) {
    switch (elements[i].id) {
      case "4numero":
        numeriInseritiDaUtente.push(form4.elements[i].value);
        break;
      default:
        break;
    }
  }
  event.preventDefault();
}
var form4 = document.getElementById("form4");
form4.addEventListener("submit", getValue4);

// ! evento al click del bottone ("bt4")

bottone4.addEventListener("click", (event) => {
  // al click del bottone ("bt4") scompaiono il titolo, il bottone e l'input
  document.getElementById("titolo4").style.display = "none";
  document.getElementById("4numero").style.display = "none";
  document.getElementById("bt4").style.display = "none";
  // al click del bottone ("bt4") compaiono il titolo, il bottone e l'input del ("bt5")
  document.getElementById("titolo5").style.display = "inline";
  document.getElementById("5numero").style.display = "inline";
  document.getElementById("bt5").style.display = "inline";
});

// ! chiedo l'inserimento del 5° numero e lo inserisco in un array (numeriInseritiDaUtente)

function getValue5(event) {
  elements = form5.elements;
  for (var i = 0; i < elements.length; i++) {
    switch (elements[i].id) {
      case "5numero":
        numeriInseritiDaUtente.push(form5.elements[i].value);
        break;
      default:
        break;
    }
  }
  event.preventDefault();
}
var form5 = document.getElementById("form5");
form5.addEventListener("submit", getValue5);

// ! evento al click del bottone ("bt5")

bottone5.addEventListener("click", (event) => {
  // al click del bottone ("bt5") scompaiono il titolo, il bottone e l'input
  document.getElementById("titolo5").style.display = "none";
  document.getElementById("5numero").style.display = "none";
  document.getElementById("bt5").style.display = "none";
  // ! confronto tra array nRandom e numeriInseritiDaUtente
  if (nRandom == numeriInseritiDaUtente) {
    alert("hai vinto");
  } else {
    alert("hai perso");
  }
  document.getElementById("tit").style.display = "inline";
  document.getElementById("nrandom2").style.display = "inline";
  document.getElementById("tit2").style.display = "inline";
  document.getElementById("nIDU").style.display = "inline";
});

var printNIDU = document.getElementById("nIDU");
nIDU.innerHTML = numeriInseritiDaUtente;
var printRandom = document.getElementById("nrandom2");
nrandom2.innerHTML = nRandom;
// ? -------------------------FUNZIONI----------------------------------
function RandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function scompari(variabile) {
  document.getElementById(variabile).style.display = " none";
  document.getElementById(variabile).style.visibility = "hidden";
}
