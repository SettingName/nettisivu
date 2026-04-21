const form = document.querySelector("form")
const input = document.getElementById("query")

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
    } catch (error) {
        console.error("No get dataaa:", error)
    }
})