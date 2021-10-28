// JSnack 3
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

const nameList = ['Walter', 'julie', 'Jax'];
const surnameList = ['Holmes', 'Teller', 'White'];

for (let i = 0; i < nameList.length; i++) {
    console.log(`${nameList[Math.floor(Math.random() * 3)]} ${surnameList[Math.floor(Math.random() * 3)]}`)
}

