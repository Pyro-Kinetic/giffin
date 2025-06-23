/**
 * The State class handles the management and interaction of different states in the UI,
 * such as switching between GIFs and stickers, handling modals, and scrolling functionality.
 */
class State {
    constructor() {
        this.state = "gif"
        this.page = new Page(this.state)
        this.searchParam = this.page.searchParam
    }

    /**
     * Attaches click event listeners to multiple buttons and elements in the document
     * to enable switching between different states (e.g., GIF, sticker).
     *
     * @return {void} Does not return a value;
     */
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

        gifBtn.addEventListener("click", () => {
            this.switcher("gif")
        })

        stickerBtn.addEventListener("click", () => {
            this.switcher("sticker")
        })

        // clipsButton.addEventListener("click", () => {
        //     this.gifSwitcher("clip")
        // })
    }

    /**
     * Updates the application state, performs an API call, resets the search form,
     * and closes the dialog box.
     *
     * @param {string} string - The new state to switch to.
     * @return {void} This method does not return a value.
     */
    switcher(string) {
        const searchForm = document.getElementById("gif-search")
        const dialog = document.getElementById("gif-select")

        this.state = string
        this.page.state = this.state
        this.page.apiCall(this.searchParam)
        searchForm.reset()
        dialog.close()
    }

    /**
     * Handles the modal behavior, including opening and closing the dialog element,
     * using even listeners.
     *
     * @return {void} Does not return a value; modifies the UI by controlling the dialog's visibility.
     */
    modal() {
        const dialog = document.getElementById("gif-select")
        const menu = document.querySelector(".fa-bars")

        // Close modal on outside click
        dialog.addEventListener("click", (event) => {
            if (event.target === dialog) dialog.close()
        })

        // Show modal on menu click
        menu.addEventListener("click", () => dialog.showModal())
    }

    /**
     * Handles the functionality to show a "scroll to top" button when the page is scrolled down
     * and smoothly scrolls to the top of the page when the button is clicked.
     *
     * @return {void} No return value.
     */
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

    /**
     * Executes a series of methods in sequence to perform specific functionalities:
     * - Initializes modal behavior.
     * - Toggles or updates the application state.
     * - Scrolls the page to the top.
     * - Executes additional page-specific logic.
     *
     * @return {void} This method does not return a value.
     */
    run() {
        this.modal()
        this.stateSwitch()
        this.scrollToTop()
        this.page.run()
    }
}

/**
 * The Page class manage searching and displaying GIFs or stickers
 * from the Giphy API based on the user's input.
 */
class Page {
    constructor(state) {
        this.searchParam = "happy"
        this.state = state
        this.url = ""
    }

    /**
     * Attaches a submit event listener to a search form element. When the form is submitted,
     * it prevents the default browser action, extracts the search query from the form input,
     * and triggers an API call if the input is not empty.
     *
     * @return {void} Does not return a value.
     */
    search() {
        const searchForm = document.getElementById("gif-search")

        // Make an api call on submit
        searchForm.addEventListener("submit", (event) => {
            event.preventDefault()

            const formData = new FormData(event.target)
            const formValues = Object.fromEntries(formData.entries())
            this.searchParam = formValues.search.trim()

            // API call if the input field is not empty
            if (this.searchParam.length !== 0) this.apiCall(this.searchParam)
        })
    }

    /**
     * Makes an API call to fetch GIFs or Stickers based on the current state and input string.
     * Uses the Giphy API to retrieve media based on the query string and updates the state with the fetched data.
     *
     * @param {string} inputString The query string used to search for GIFs or Stickers through the Giphy API.
     * @return {void} This method does not return a value. It handles the API response internally and updates the relevant state.
     */
    apiCall(inputString) {
        const gifUrl = `https://api.giphy.com/v1/gifs/search?api_key=u0KyWi18hDrrxUz86aspP5Qn9aF8bVfb&q=${inputString}&limit=100&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
        const stickerUrl = `https://api.giphy.com/v1/stickers/search?api_key=u0KyWi18hDrrxUz86aspP5Qn9aF8bVfb&q=${inputString}&limit=100&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
        // const clipUrl = `https://api.giphy.com/v1/clips/search?api_key=u0KyWi18hDrrxUz86aspP5Qn9aF8bVfb&q=${inputString}&limit=10&offset=0&country_code=&rating=g&lang=en`

        if (this.state === "gif") this.url = gifUrl
        // else if (this.state === "clip") this.url = clipUrl
        else this.url = stickerUrl

        // API call
        axios.get(this.url)
            .then((response) => {
                this.displayImages(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    /**
     * Displays a list of images inside a specified container on the webpage.
     *
     * @param {Object} response - The response object containing image data.
     * @param {Object[]} response.data.data - Array of objects where each contains data about an image.
     *
     * @return {void} This method does not return any value.
     */
    displayImages(response) {
        const data = response.data.data
        const gifContainer = document.querySelector(".gif-container")
        gifContainer.innerHTML = ""

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