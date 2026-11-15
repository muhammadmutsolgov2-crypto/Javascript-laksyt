function rollCustomDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

const sides = Number(prompt("Anna nopan tahkojen määrä:"));
const listElement = document.querySelector("#dice-list");
let result;

do {
    result = rollCustomDice(sides);
    const li = document.createElement("li");
    li.textContent = `Heiton tulos: ${result}`;
    listElement.appendChild(li);
} while (result !== sides);