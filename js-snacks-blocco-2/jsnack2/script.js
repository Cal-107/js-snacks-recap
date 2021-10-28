// JSnack 3
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

const nameList = ['Walter', 'Julie', 'Jax', 'Jessie', 'Sylvie', 'Max', 'Loki', 'Tony', 'Steve'];
const surnameList = ['Holmes', 'Teller', 'White', 'Pinkman', 'Wallace', 'Odinson', 'Stark', 'Rogers'];

for (let i = 0; i < 3; i++) {
    console.log(`${nameList[Math.floor(Math.random() * nameList.length)]} ${surnameList[Math.floor(Math.random() * surnameList.length)]}`);
}