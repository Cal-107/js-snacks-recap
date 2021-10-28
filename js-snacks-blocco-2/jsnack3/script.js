// JSnack 4
// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione dispari

const arrayList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

let tot = 0;
for (let i = 0; i < arrayList.length; i++) {
    if (i % 2 !== 0) {
        tot += arrayList[i];
        console.log(tot);
    }
}
console.log(tot);