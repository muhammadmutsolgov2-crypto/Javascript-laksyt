const numbers = [];
let num;

do {
    num = Number(prompt("Anna luku (0 lopettaa):"));
    if (num !== 0) {
        numbers.push(num);
    }
} while (num !== 0);

numbers.sort((a, b) => b - a);

console.log("Numerot suurimmasta pienimpään:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}