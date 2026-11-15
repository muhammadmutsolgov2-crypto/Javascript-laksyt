function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

const listElement = document.querySelector("#dice-list");
let result;

do {
    result = rollDice();
    const li = document.createElement("li");
    li.textContent = `Heiton tulos: ${result}`;
    listElement.appendChild(li);
} while (result !== 6);