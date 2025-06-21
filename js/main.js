class State {
    constructor() {
        this.state = "gif"
        this.page = new Page(this.state)
    }

    modal() {
        const dialog = document.getElementById("gif-select")
        const menu = document.querySelector(".fa-bars")

        dialog.addEventListener("click", (event) => event.target === dialog && dialog.close())
        menu.addEventListener("click", () => dialog.showModal())
    }

    run() {
        this.modal()
        this.page.run()
    }
}

class Page {
    constructor(state) {
        this.searchParam = "happy"
        this.state = state
    }

    search() {
        const searchForm = document.getElementById("gif-search")

        searchForm.addEventListener("submit", (event) => {
            event.preventDefault()

            const formData = new FormData(event.target)
            const formValues = Object.fromEntries(formData.entries())
            this.searchParam = formValues.search.trim()

            // API call
            if (this.searchParam.length !== 0) this.apiCall(this.searchParam)
        })
    }

    apiCall(inputString) {
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=u0KyWi18hDrrxUz86aspP5Qn9aF8bVfb&q=${inputString}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
            .then((response) => {
                displayImages(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    run() {
        this.apiCall(this.searchParam)
        this.search()
        console.log(this.state)
    }
}


const displayImages = (response) => {
    const data = response.data.data
    const gifContainer = document.querySelector(".gif-container")
    gifContainer.innerHTML = ""
    console.log("                     ")
    console.log("displayImages", data)
    console.log("               ")

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

const main = new State()
main.run()