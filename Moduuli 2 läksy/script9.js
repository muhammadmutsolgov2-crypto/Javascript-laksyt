function even(arr) {
    const evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

const originalArray = [2, 7, 4, 9, 12, 15];
const evenArray = even(originalArray);

console.log("Alkuperäinen taulukko:", originalArray);
console.log("Parilliset luvut sisältävä taulukko:", evenArray);