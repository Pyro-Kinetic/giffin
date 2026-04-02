<h1 align="center" style="text-align: center;">Giffin - A GIF & Sticker Search App</h1>
<p align="center" style="text-align: center;">
  <a href="https://pyro-kinetic.github.io/giffin/">
    <img src="https://img.shields.io/badge/Live-%20Demo-50FFB1?style=for-the-badge&logo=giphy&logoColor=071013&labelColor=071013" alt="Live Demo">
  </a>
</p>

**Giffin** is a responsive web application that lets users search, browse, and explore GIFs and stickers using the [Giphy API](https://developers.giphy.com/). It features a clean modern interface and seamless toggling between GIFs and stickers to enhance the user experience.

![Giffin UI Preview](https://media2.giphy.com/media/xT9IgFLfWUZigjoem4/giphy.gif?cid=ae271e21n7774d1owsuv9wusfa24pb43hwrq3lz1t5hdh396&ep=v1_gifs_search&rid=giphy.gif&ct=g) <!-- Preview screen-shot of the page -->

---

## ✨ Features

- **GIF & Sticker Search**: Perform quick searches for your favorite GIFs and stickers.
- **Dynamic Toggles**: Switch between GIFs and stickers with ease.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Scroll-to-Top Button**: Quickly scroll back to the top of the page with a single click.
- **Modern Design**: Minimalist dark-themed UI with vibrant accent colors.
- **Modal Navigation (Mobile)**: Access navigation options through a sleek modal on smaller devices.

---

## 🚀 Technologies Used

| Technology | Description                                |
|------------|--------------------------------------------|
| **HTML5**  | Semantic structure and document layout.    |
| **SCSS/CSS3** | Mobile-first responsive design using Grid and Flexbox. |
| **JavaScript (ES6+)** | Modular logic using classes and modern syntax. |
| **Axios**  | Promise-based HTTP client for API requests (via CDN). |
| **Font Awesome** | Iconography for navigation and UI elements. |
| **Google Fonts** | *Syne Mono* for branding and *Roboto* for content. |
| **Giphy API** | Integration to fetch high-quality GIFs and stickers. |

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- A modern web browser (Chrome, Firefox, Safari, Edge)

---

## 📦 Installation

To set up and run the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**:
   This project uses Sass for styling. Install the compiler via NPM:
   ```bash
   npm install
   ```

3. **Compile SCSS (Optional)**:
   If you make changes to `style.scss`, you need to recompile it to `style.css`:
   ```bash
   npx sass css/style.scss css/style.css --watch
   ```

4. **Add Giphy API Key**:
   - Register for a free [Giphy API key](https://developers.giphy.com/dashboard/).
   - In `js/main.js`, update the `apiCall` method with your key:
     ```javascript
     const gifUrl = `https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=${inputString}...`;
     ```

5. **Run Application**:
   Open `index.html` in your browser or serve the application using a static server:
   ```bash
   npx http-server # or your preferred local server
   ```

---

## 💡 How to Use

1. **Search GIFs/Stickers**: Use the search bar to look up content. Type your query and click the search icon.
2. **Switch States**: Click the "GIFs" or "Stickers" buttons to toggle between search modes.
3. **Mobile Navigation**: On small screens, click the hamburger menu to open the navigation modal.
4. **Scroll to Top**: Use the floating arrow button (visible while scrolling) to return to the top of the page.

---

## 🎨 Design & Palette

Giffin features a "Cyber-Dark" aesthetic with high-contrast accent colors:

- **Background**: `#071013` (Deep Charcoal)
- **Primary Accent**: `#50FFB1` (Electric Mint)
- **Secondary Accent**: `#FCF300` (Vibrant Yellow)
- **Tertiary Accent**: `#CF1259` (Vivid Pink)

The UI is built with a **Mobile-First** approach, featuring specific breakpoints at `480px` (grid layout for results) and `700px` (desktop navigation).

---

## 👩‍💻 Code Structure

- **index.html**: Application structure and layout using semantic HTML5.
- **css/style.scss**: Modular styles with nested selectors and media queries.
- **js/main.js**: Object-Oriented JavaScript implementation.
  - **`State` Class**: Manages UI interactions, navigation modals, and the "Scroll to Top" behavior.
  - **`Page` Class**: Handles search form submission, Giphy API communication, and dynamic rendering of results.

---

## 🤝 Contributing

Contributions are welcome! To make improvements:

1. Fork the repository.
2. Create a new branch for your feature/bugfix:
   ```bash
   git checkout -b feature/my-new-feature
   ```
3. Commit your changes and push:
   ```bash
   git commit -m 'Add some feature'
   git push origin feature/my-new-feature
   ```
4. Open a pull request.

---

## 📬 Contact

- **GitHub**: [My GitHub Profile](https://github.com/pyro-kinetic)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
