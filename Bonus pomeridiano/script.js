// Ogni volta che si clicca un bottone, il nostro programma chiederà un numero di 4 cifre all’utente.
// Se l’utente ha inserito un numero corretto, allora il programma calcolerà la somma e le media di tutte le cifre che lo compongono stampandola nel DOM, altrimenti ripeterà la richiesta di inserimento finché non avrà inserito un numero corretto.

const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    let inputUte = ( prompt('Inserisca un numero di 4 cifre'));

    while( inputUte.length !== 4 || isNaN(inputUte) ) {
        inputUte = ( prompt('Inserisca un numero di 4 cifre'));
        console.log(inputUte);
    }

    let tot = 0;
    let media = 0;
    for (let i = 0; i < inputUte.length; i++) {
        tot += parseInt(inputUte[i]);
    }

    media = tot / inputUte.length;

    console.log(tot, media);
})

