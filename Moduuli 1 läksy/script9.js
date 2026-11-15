const luku = Number(prompt("Anna kokonaisluku:"));
let onkoAlkuku = true;

if (luku <= 1) {
    onkoAlkuku = false;
} else {
    for (let i = 2; i < luku; i++) {
        if (luku % i === 0) {
            onkoAlkuku = false;
            break;
        }
    }
}

if (onkoAlkuku) {
    document.querySelector("#result").innerHTML = `Luku ${luku} on alkuluku.`;
} else {
    document.querySelector("#result").innerHTML = `Luku ${luku} ei ole alkuluku.`;
}