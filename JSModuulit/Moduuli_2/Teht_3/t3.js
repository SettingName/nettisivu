const dogNames = []
for (namesAsked = 0; namesAsked < 6; namesAsked++){
    let givenName = prompt("Give a name of a dog: ")
    dogNames.push(givenName)
}

dogNames.sort().reverse()

const list1 = document.getElementById("dogNames")

dogNames.forEach(dogName => {
    const list2 = document.createElement("list2")
    list2.innerHTML = dogName + "<br>"
    list1.appendChild(list2)
})
