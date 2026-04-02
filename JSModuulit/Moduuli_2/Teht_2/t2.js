const numNames = prompt("How many people: ")
const namesList = []
for (namesAsked = 0; namesAsked < numNames; namesAsked++){
    let givenName = prompt("Give a name of a participant: ")
    namesList.push(givenName)
}

const list = document.getElementById("namesList")
namesList.forEach(name => { const li = document.createElement("li"); li.textContent = name; list.appendChild(li); })