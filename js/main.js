// Modal
const dialog = document.getElementById("gif-select")
dialog.addEventListener("click", (event) => event.target === dialog && dialog.close())

function showModal() {
    dialog.showModal()
}

// Search function
const form = document.getElementById("gif-search")
// const searchInput = document.getElementById("search")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const formValues = Object.fromEntries(formData.entries())
    const searchParam = formValues.search
    // const searchVal = formData.get("search")

    // API call
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=u0KyWi18hDrrxUz86aspP5Qn9aF8bVfb&q=${searchParam}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
        .then((response) => {
            displayImages(response)
        })
        .catch(error => {
            console.log(error)
        })
})


// GIFs
const displayImages = (response) => {
    const data = response.data.data
    const gifContainer = document.querySelector(".gif-container")
    gifContainer.innerHTML = ""
    // console.log(data)

    data.forEach((info) => {
        const url = info.images.original.url
        const name = info.title
        const id = info.id

        const imageElement = document.createElement("img")
        imageElement.src = url
        imageElement.alt = name
        imageElement.id = id

        gifContainer.appendChild(imageElement)
    })
}