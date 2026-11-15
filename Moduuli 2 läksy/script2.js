const count = Number(prompt("Kuinka monta osallistujaa?"));
const participants = [];

for (let i = 0; i < count; i++) {
    const name = prompt(`Anna osallistujan ${i + 1} nimi:`);
    participants.push(name);
}

participants.sort();

const listElement = document.querySelector("#participants-list");
for (let i = 0; i < participants.length; i++) {
    const li = document.createElement("li");
    li.textContent = participants[i];
    listElement.appendChild(li);
}