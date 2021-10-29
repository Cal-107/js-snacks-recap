// JSnack 5
// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.

const arrayList1 = [1, 4 , 6, 7, 3, 10, 8, 20, 2, 27];
const arrayList2 = [1, 4 , 6, 7, 3];

console.log(`Numero elementi negli array iniziale: Primo array ${arrayList1.length}, secondo array ${arrayList2.length}`)


while (arrayList2.length !== arrayList1.length) {
    arrayList2.push(Math.floor((Math.random() * 100) + 1))
    console.log(arrayList2)
}
console.log(`Numero elementi negli array pareggiati: Primo array ${arrayList1.length}, secondo array ${arrayList2.length}`)