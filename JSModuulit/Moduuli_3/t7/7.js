document.getElementById("trigger").addEventListener("mouseover", () => {
    document.getElementById("target").src = "img/picB.jpg"
})

document.getElementById("trigger").addEventListener("mouseout", () => {
    document.getElementById("target").src = "img/picA.jpg"
})