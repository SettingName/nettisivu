function printFiveNumsRev() {
    let numberArray = []
    for (let loops = 0; loops < 5; loops++) {
        let askNum = prompt("Give a number: ")
        numberArray.push(askNum)
    }
    for (let revLoops = 0; revLoops < 5; revLoops++) {
        console.log(numberArray[4-revLoops])
    }
}
printFiveNumsRev()