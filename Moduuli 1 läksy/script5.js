const vuosi = Number(prompt("Anna vuosiluku:"));

if ((vuosi % 4 === 0 && vuosi % 100 !== 0) || (vuosi % 400 === 0)) {
    document.querySelector("#result").innerHTML = `Vuosi ${vuosi} on karkausvuosi.`;
} else {
    document.querySelector("#result").innerHTML = `Vuosi ${vuosi} ei ole karkausvuosi.`;
}