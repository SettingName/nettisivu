const canditadesNum = +prompt("How many candidates: ")
const voterNum = +prompt("How many voters: ")
const candis = []

for (let howMany = 0; howMany < canditadesNum; howMany++) {
    const candName = prompt("Name candidate: ")
    candis.push({
        name: candName,
        votes: 0
    })
}

for ( let mones = 0; mones < voterNum; mones++) {
    const vote = prompt("Who do you vote for (leave empty for no vote): ")
    
    if (vote === "") {
        continue
    }

    const targetCandi = candis.find(target => target.name.toUpperCase() === vote.toUpperCase())
    if (targetCandi) {
        targetCandi.votes++
    }
}

let winner = candis[0]
for (let mones = 1; mones < candis.length; mones++) {
    if (candis[mones].votes > winner.votes) {
        winner = candis[mones]
    }
}

console.log(`The winner is ${winner.name} with ${winner.votes} votes.`)
console.log("results:")

candis.forEach(c => {
    console.log(`${c.name}: ${c.votes} votes`)

});