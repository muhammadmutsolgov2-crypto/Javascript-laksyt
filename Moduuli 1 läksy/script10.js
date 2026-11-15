const noppienMaara = Number(prompt("Anna noppien lukumäärä:"));
const haluttuSumma = Number(prompt("Anna haluttu silmälukujen summa:"));

const toistot = 10000;
let osumat = 0;

for (let i = 0; i < toistot; i++) {
    let nykySumma = 0;
    for (let j = 0; j < noppienMaara; j++) {
        nykySumma += Math.floor(Math.random() * 6) + 1;
    }
    if (nykySumma === haluttuSumma) {
        osumat++;
    }
}

const todennakoisyys = (osumat / toistot) * 100;

document.querySelector("#result").innerHTML =
    `Probability to get sum ${haluttuSumma} with ${noppienMaara} dice is ${todennakoisyys.toFixed(2)}%`;