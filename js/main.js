class State {
    constructor() {
        this.state = "gif"
        this.page = new Page(this.state)
        this.searchParam = this.page.searchParam
    }

    stateSwitch() {
        const title = document.getElementById("web-title")
        // const clipsButton = document.getElementById("emojis-btn")

        const gifButton = document.getElementById("gifs-btn")
        const stickerButton = document.getElementById("stickers-btn")

        const gifBtn = document.getElementById("gifs-btn-nav")
        const stickerBtn = document.getElementById("stickers-btn-nav")


        title.addEventListener("click", () => {
            this.switcher("gif")
        })

        gifButton.addEventListener("click", () => {
            this.switcher("gif")
        })

        stickerButton.addEventListener("click", () => {
            this.switcher("sticker")
        })

        gifBtn.addEventListener("click", ()=> {
            this.switcher("gif")
        })

        stickerBtn.addEventListener("click", () => {
            this.switcher("sticker")
        })

        // clipsButton.addEventListener("click", () => {
        //     this.gifSwitcher("clip")
        // })
    }

    switcher(string) {
        const searchForm = document.getElementById("gif-search")
        const dialog = document.getElementById("gif-select")

        this.state = string
        this.page.state = this.state
        this.page.apiCall(this.searchParam)
        searchForm.reset()
        dialog.close()
    }

    modal() {
        const dialog = document.getElementById("gif-select")
        const menu = document.querySelector(".fa-bars")

        dialog.addEventListener("click", (event) => {
            if (event.target === dialog) dialog.close()
            console.log(event.target)
        })

        menu.addEventListener("click", () => dialog.showModal())
    }

    scrollToTop() {
        const scrollButton = document.getElementById("scroll-top");

        // Show button when the page is scrolled down
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                scrollButton.classList.add("visible");
            } else {
                scrollButton.classList.remove("visible");
            }
        });

        // Scroll to top when button is clicked
        scrollButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    run() {
        this.modal()
        this.stateSwitch()
        this.scrollToTop()
        this.page.run()
    }
}

class Page {
    constructor(state) {
        this.searchParam = "happy"
        this.state = state
        this.url = ""
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
        const gifUrl = `https://api.giphy.com/v1/gifs/search?api_key=u0KyWi18hDrrxUz86aspP5Qn9aF8bVfb&q=${inputString}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
        const stickerUrl = `https://api.giphy.com/v1/stickers/search?api_key=u0KyWi18hDrrxUz86aspP5Qn9aF8bVfb&q=${inputString}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
        // const clipUrl = `https://api.giphy.com/v1/clips/search?api_key=u0KyWi18hDrrxUz86aspP5Qn9aF8bVfb&q=${inputString}&limit=10&offset=0&country_code=&rating=g&lang=en`

        if (this.state === "gif") this.url = gifUrl
        // else if (this.state === "clip") this.url = clipUrl
        else this.url = stickerUrl

        axios.get(this.url)
            .then((response) => {
                this.displayImages(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    displayImages(response) {
        const data = response.data.data
        const gifContainer = document.querySelector(".gif-container")
        gifContainer.innerHTML = ""

        // console.log("                     ")
        // console.log("displayImages", data)
        // console.log("               ")

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

    run() {
        this.apiCall(this.searchParam)
        this.search()
        // console.log(this.state)
    }
}

const main = new State()
main.run()