const target = document.getElementById("target")
const list = ["First item", "Second item", "Third item"]

let index = 0
for (let text of list) {
    const li = document.createElement("li")
    li.textContent = text 
    if (index === 1) {li.classList.add("my-item")}           
    target.appendChild(li)
    index++
}