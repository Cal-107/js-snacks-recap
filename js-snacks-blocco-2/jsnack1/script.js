// JSnack 2
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

const numIns = parseInt( prompt('Inserisca un numero'));

if ( numIns % 2 == 0) {
    console.log(numIns)
} else if ( numIns % 2 !== 0) {
    console.log(numIns + 1)
}