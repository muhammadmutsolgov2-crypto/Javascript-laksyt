const luku1 = Number(prompt("Anna ensimmäinen luku:"));
const luku2 = Number(prompt("Anna toinen luku:"));
const luku3 = Number(prompt("Anna kolmas luku:"));

const summa = luku1 + luku2 + luku3;
const tulo = luku1 * luku2 * luku3;
const keskiarvo = summa / 3;

document.querySelector("#result").innerHTML =
    `Summa: ${summa} <br> Tulo: ${tulo} <br> Keskiarvo: ${keskiarvo}`;