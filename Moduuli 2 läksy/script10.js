const candidateCount = Number(prompt("Anna ehdokkaiden lukumäärä:"));
const candidates = [];

for (let i = 0; i < candidateCount; i++) {
    const name = prompt(`Name for candidate ${i + 1}`);
    candidates.push({ name: name, votes: 0 });
}

const voterCount = Number(prompt("Anna äänestäjien lukumäärä:"));

for (let i = 0; i < voterCount; i++) {
    const vote = prompt(`Äänestäjä ${i + 1}: Ketä äänestät? (Kirjoita nimi)`);
    if (vote) {
        const candidate = candidates.find(c => c.name.toLowerCase() === vote.toLowerCase());
        if (candidate) {
            candidate.votes++;
        }
    }
}

candidates.sort((a, b) => b.votes - a.votes);

console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);
console.log("results:");
for (let i = 0; i < candidates.length; i++) {
    console.log(`${candidates[i].name}: ${candidates[i].votes} votes`);
}