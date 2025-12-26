# 🎬 My-Animedia

**My-Animedia** is a fully functional, interactive anime and movie streaming-style web application that provides a visually immersive experience with glassmorphism, neon effects, and smooth 3D UI transitions. The project includes a complete **frontend built with HTML, CSS, and JavaScript** and a **Node.js backend** for managing user data, reviews, and dynamic content loading.

---

## 🚀 Features

### 🖥️ Frontend
- Fully responsive and animated glassy interface.
- Neon-accented dark theme for cinematic aesthetics.
- Dynamic navigation bar with search, filter, and authentication buttons.
- 3D-style **Hero Sections** featuring highlighted anime, series, or movie banners.
- Interactive content cards for movies, series, and anime collections.
- Integrated rating, tags, and descriptions for each item.
- Smooth transition effects between sections and elements.

### ⚙️ Backend
- Built with **Node.js** and **Express.js**.
- RESTful API structure for communication between frontend and backend.
- Supports dynamic content fetching and database operations.
- MySQL (or any SQL-compatible) database for user accounts, reviews, and media metadata.
- Secure environment variables for database configuration.

---

## 📁 Project Structure

My-Animedia/
│
├── index.html         # Home page with 3D carousel and highlights
├── anime.html         # Anime collection page
├── movie.html         # Movie collection page
├── series.html        # TV series collection page
│
├── public/            # (Optional) Folder for CSS, JS, and image assets
│   ├── css/
│   ├── js/
│   └── images/
│
├── server.js          # Node.js backend entry point
├── package.json       # Node dependencies and scripts
├── .env               # Environment variables (DB_HOST, DB_USER, etc.)
│
└── README.md



---

## 🛠️ Technologies Used

| Category | Technologies |
|-----------|---------------|
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla JS), Font Awesome |
| **Backend** | Node.js, Express.js |
| **Database** | MySQL |
| **Version Control** | Git & GitHub |
| **Deployment** | GitHub Pages (Frontend), Render / Railway (Backend) |

---

## ⚙️ Installation & Setup

Follow these steps to run **My-Animedia** locally:

### 1. Clone the Repository

git clone https://github.com/yourusername/My-Animedia.git
cd My-Animedia
### 2. Install Dependencies

Make sure Node.js is installed, then run:


npm install


### 3. Create Environment Variables

Create a `.env` file in the root directory and add:

env
DB_HOST=your-database-host
DB_USER=your-database-user
DB_PASS=your-database-password
DB_NAME=your-database-name
PORT=5000
### 4. Start the Backend Server


node server.js


The backend will run at `http://localhost:5000`.

### 5. Launch the Frontend

Open `index.html` in your browser or deploy it using GitHub Pages.

---

## 🌐 Deployment

* **Frontend**: Host on **GitHub Pages** or **Vercel**.
* **Backend**: Deploy via **Render.com** or **Railway.app**.
* Ensure `.env` variables match your production database credentials.

---

## 📸 Preview

Home Page (index.html)

> Neon 3D layout with anime carousel and cinematic glass UI.

Anime / Movie / Series Pages

> Filter, search, and explore your favorite content with interactive cards.

---

## 🧑‍💻 Author

**Developer:Abul kalam
**Project:** My-Animedia
**GitHub:** https://dev-kalam.github.io/portfolio/

---

## 📜 License

This project is licensed under the **MIT License** — feel free to modify and use it for personal or educational purposes.


> *“My-Animedia — bringing cinematic anime experiences to the web.”*

