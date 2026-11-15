const dogs = [];

for (let i = 0; i < 6; i++) {
    const name = prompt(`Anna koiran ${i + 1} nimi:`);
    dogs.push(name);
}

dogs.sort();
dogs.reverse();

const listElement = document.querySelector("#dogs-list");
for (let i = 0; i < dogs.length; i++) {
    const li = document.createElement("li");
    li.textContent = dogs[i];
    listElement.appendChild(li);
}