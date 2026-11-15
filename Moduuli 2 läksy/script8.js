function concat(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

const namesArray = ["Johnny", "DeeDee", "Joey", "Marky"];
const concatenatedString = concat(namesArray);

document.querySelector("#result").textContent = concatenatedString;