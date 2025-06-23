# Giffin - A GIF & Sticker Search App

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
| **HTML5**  | Structuring and presenting content.        |
| **SCSS/CSS3** | For responsive design and styling.      |
| **JavaScript (ES6+)** | Core functionality programming. |
| **Axios**  | For seamless API requests.                |
| **Font Awesome** | Iconography for enhanced visual design. |
| **Google Fonts (Syne Mono, Roboto)** | Fonts for improved typography. |
| **Giphy API** | Integration to fetch GIFs and stickers. |

---

## 📦 Installation

To set up and run the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**:
   If using SCSS, ensure you have `node-sass` installed via NPM. The main dependency in the project is:
   ```bash
   npm install sass
   ```

3. **Add Giphy API Key**:
   - Register for a free [Giphy API key](https://developers.giphy.com/dashboard/).
   - Replace the placeholder API key in `main.js` with your own:
     ```javascript
     const gifUrl = `https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=${inputString}&limit=100&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
     ```

4. **Run Application**:
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

## 👩‍💻 Code Structure

- **index.html**: Application structure and layout.
- **style.scss**: Styles written in SCSS for responsive design.
- **main.js**: JavaScript logic for app interaction and API handling.
  - **State Class**: Manages UI states and user interaction.
  - **Page Class**: Manages API requests and search functionality.

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

For inquiries or feedback, feel free to reach out to the project maintainer:
- **Name**: Christensen Cadeau
- **GitHub**: [My GitHub Profile](https://github.com/pyro-kinetic)
