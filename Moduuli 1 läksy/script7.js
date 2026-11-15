const maara = Number(prompt("Kuinka monta noppaa heitetään?"));
let summa = 0;

for (let i = 0; i < maara; i++) {
    const heitto = Math.floor(Math.random() * 6) + 1;
    summa += heitto;
}

document.querySelector("#result").innerHTML = `Heittojen summa on: ${summa}`;