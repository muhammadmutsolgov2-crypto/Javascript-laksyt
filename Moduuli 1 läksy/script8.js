const alkuVuosi = Number(prompt("Anna alkuvuosi:"));
const loppuVuosi = Number(prompt("Anna loppuvuosi:"));

let htmlLista = "<ul>";

for (let vuosi = alkuVuosi; vuosi <= loppuVuosi; vuosi++) {
    if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || (vuosi % 400 === 0)) {
        htmlLista += `<li>${vuosi}</li>`;
    }
}

htmlLista += "</ul>";
document.querySelector("#result").innerHTML = htmlLista;