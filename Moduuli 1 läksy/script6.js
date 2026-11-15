const kysely = confirm("Should I calculate the square root?");

if (kysely) {
    const luku = Number(prompt("Anna luku:"));
    if (luku < 0) {
        document.querySelector("#result").innerHTML = "The square root of a negative number is not defined";
    } else {
        const neliojuuri = Math.sqrt(luku);
        document.querySelector("#result").innerHTML = `Neliöjuuri on ${neliojuuri}`;
    }
} else {
    document.querySelector("#result").innerHTML = "The square root is not calculated.";
}