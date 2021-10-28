// JSnack 2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const par1 = prompt("Inserisca una parola");
const par2 = prompt("Inserisca un'altra parola");

if (par1.length > par2.length) {
    console.log(`${par2} ${par1}`);
} else if (par1.length < par2.length) {
    console.log(`${par1} ${par2}`)
} else {
    console.log(`Le parole inserite hanno la stessa lunghezza`)
}