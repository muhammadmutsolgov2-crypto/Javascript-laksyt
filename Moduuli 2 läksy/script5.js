const numbers = [];

while (true) {
    const num = Number(prompt("Anna luku:"));
    if (numbers.includes(num)) {
        console.log(`Luku ${num} on annettu aiemmin! Lopetetaan.`);
        break;
    }
    numbers.push(num);
}

numbers.sort((a, b) => a - b);
console.log("Annetut luvut nousevassa järjestyksessä:", numbers);