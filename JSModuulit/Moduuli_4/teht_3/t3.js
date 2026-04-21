const form = document.querySelector("form")
const input = document.getElementById("query")

let resultsDiv = document.getElementById("results")
if (!resultsDiv) {
    resultsDiv = document.createElement("div")
    resultsDiv.id = "results"
    document.body.appendChild(resultsDiv)
}

form.addEventListener("submit", async function(event) {
    event.preventDefault()

    const query = input.value.trim()
    if (!query) {
        console.log("What to seach:")
        return
    }

    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`

    try {
        const response = await fetch(url)
        const data = await response.json()

        console.log("Search results:", data)

        resultsDiv.innerHTML = ""

        data.forEach(tvShow => {
            const show = tvShow.show

            const article = document.createElement("article")

            const title = document.createElement("h2")
            title.textContent = show.name
            article.appendChild(title)

            const link = document.createElement("a")
            link.href = show.url
            link.target = "_blank"
            link.textContent = "DETAILS"
            article.appendChild(link)

            if (show.image?.medium) {
                const img = document.createElement("img")
                img.src = show.image.medium
                img.alt = show.name
                article.appendChild(img)
            }

            const summaryDiv = document.createElement("div")
            summaryDiv.innerHTML = show.summary || "No sum."
            article.appendChild(summaryDiv)

            resultsDiv.appendChild(article)
        })

    } catch (error) {
        console.error("No get dataaa:", error)
    }
})