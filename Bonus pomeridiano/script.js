// Ogni volta che si clicca un bottone, il nostro programma chiederà un numero di 4 cifre all’utente.
// Se l’utente ha inserito un numero corretto, allora il programma calcolerà la somma e le media di tutte le cifre che lo compongono stampandola nel DOM, altrimenti ripeterà la richiesta di inserimento finché non avrà inserito un numero corretto.

const btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
    let numChoi = parseInt( prompt('Inserisca un numero di 4 cifre'))
})

console.log(numChoi)
