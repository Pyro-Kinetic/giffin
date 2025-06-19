// modal
const dialog = document.getElementById("gif-select")
dialog.addEventListener("click", (event) => event.target === dialog && dialog.close())

function showModal() {
    dialog.showModal()
}

// GIFs
axios.get(`https://api.giphy.com/v1/gifs/search?api_key=u0KyWi18hDrrxUz86aspP5Qn9aF8bVfb&q=dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
    .then((response) => {
        displayImages(response)
    })
    .catch(error => {
        console.log(error)
    })

const displayImages = (response) => {
    const data = response.data.data
    const gifContainer = document.querySelector(".gif-container")
    gifContainer.innerHTML = ""
    console.log(data)

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