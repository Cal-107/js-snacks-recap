// JSnack 3
//  Il software deve chiedere per 5 volte all’utente di inserire un numero.
//  Il programma stampa la somma di tutti i numeri inseriti con for
//  e opzionalmente con while

// let somma = 0;

// for (let i = 0; i < 5; i++) {
//     const numIns = parseInt( prompt("Inserisca un numero"));
//     somma += numIns;
// }
// console.log(`${somma} è la somma totale dei numeri inseriti`)


let somma = 0;
let count = 0;

while ( count < 5 ) {
    const numIns = parseInt( prompt("Inserisca un numero"));
    somma += numIns;
    count++;
}
console.log(`${somma} è la somma totale dei numeri inseriti`);