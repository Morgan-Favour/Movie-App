import "./css/App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteClick = (movie) => {
    setFavorites((prevFavorites) => {
      const isFavorited = prevFavorites.some((fav) => fav.id === movie.id);
      if (isFavorited) {
        return prevFavorites.filter((fav) => fav.id !== movie.id);
      } else {
        return [...prevFavorites, movie];
      }
    });
  };

  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                favorites={favorites}
                onFavoriteClick={handleFavoriteClick}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                onFavoriteClick={handleFavoriteClick}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;