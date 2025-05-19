# TMDB Clone

A responsive movie browsing web application built with **React.js**, integrating with **The Movie Database (TMDB) API**. Users can explore trending movies, manage their watchlist, and enjoy seamless navigation across pages.

## Live Demo

[Live App on Vercel](https://tmdb-clone-two.vercel.app)

---

## Tech Stack

- **React.js** (Functional Components & Hooks)  
- **Tailwind CSS** – for responsive UI design  
- **Axios** – to fetch API data  
- **TMDB API** – to retrieve movie data  
- **Vite** – for fast build setup  
- **Vercel** – for deployment  

---

## Project Structure

tmdb-clone/
│
├── src/
│   ├── Components/
│   │   ├── Banner.jsx
│   │   ├── Movies.jsx
│   │   ├── MoviesCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── Pagination.jsx
│   │   └── WatchList.jsx
│   │
│   ├── App.jsx
│   └── main.jsx       <-- (not index.js because Vite uses main.jsx by default)
│
├── .env
├── vite.config.js
├── package.json
├── README.md
└── node_modules/


## Features

- Browse trending movies fetched from TMDB  
- Add or remove movies from your Watchlist  
- Pagination support to browse multiple pages  
- Responsive design using Tailwind  
- API key handled securely via environment variables  

---

## Environment Setup

To run the project locally, create a .env file at the root:

env
VITE_TMDB_API_KEY=your_tmdb_api_key_here

# Getting Started
1. Clone the Repository
git clone https://github.com/Kajal-Raghav123/tmdb-clone.git
cd tmdb-clone
2. Install Dependencies
npm install
3. Add API Key
Create a .env file in the root:
VITE_TMDB_API_KEY=your_tmdb_api_key_here
4. Run the App
npm run dev



