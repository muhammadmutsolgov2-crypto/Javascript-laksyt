const nimi = prompt("Kerro oppilaan nimi:");
const arvottu = Math.floor(Math.random() * 4) + 1;
let tupa = "";

if (arvottu === 1) {
    tupa = "Gryffindor";
} else if (arvottu === 2) {
    tupa = "Slytherin";
} else if (arvottu === 3) {
    tupa = "Hufflepuff";
} else {
    tupa = "Ravenclaw";
}

document.querySelector("#result").innerHTML = `${nimi}, you are ${tupa}.`;