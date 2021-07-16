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

var bottoneInizioGioco = document.getElementById("bt1");

//todo  applico il display none

document.getElementById("Inserisci il numero").style.display = " none";
document.getElementById("bt2").style.display = " none";
document.getElementById("titolo2").style.display = " none";

bottoneInizioGioco.addEventListener("click", (event) => {
  // al click del bottone scompaiono il titolo i numeri random e il bottone
  document.getElementById("titolo").style.display = " none";
  document.getElementById("nrandom").style.display = " none";
  // al click del bottone parte un timer di 30 secondi
  var timer = 30;
  var downloadTimer = setInterval(function () {
    document.getElementById("countdown").innerHTML = timer;
    timer -= 1;
    if (timer <= -1) {
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = " ";
      //todo  applico il display inline (alla fine dei 30 secondi)
      document.getElementById("Inserisci il numero").style.display = "inline";
      document.getElementById("bt2").style.display = "inline";
      document.getElementById("titolo2").style.display = "inline";
    }
  }, 1000);
});

// ? -------------------------FUNZIONI----------------------------------
function RandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function scompari(variabile) {
  document.getElementById(variabile).style.display = " none";
  document.getElementById(variabile).style.visibility = "hidden";
}
