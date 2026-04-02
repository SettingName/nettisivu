function diceProb() {
    const dices = +prompt("Nummber of dice: ")
    const targetSum = +prompt("Target sum: ")
    const totalTrys = 10000
    let hits = 0

    for (let tryCount = 0; tryCount < totalTrys; tryCount++) {
        let totalSum = 0

        for (let rolls = 0; rolls < dices; rolls++) {
            totalSum += Math.floor(Math.random() * 6) + 1
        }
        
        if (totalSum == targetSum) {
            hits++
        }
    }

    document.querySelector("#prob").innerHTML = "Probability to get sum " + targetSum + " with " + dices + " dice is " + (hits / totalTrys * 100).toFixed(2) + "%";
}

diceProb()