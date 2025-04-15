import "../css/Favorites.css";
import MovieCard from "../components/MovieCard";

function Favorites({ favorites, onFavoriteClick }) {
  return (
    <section className="favorites">
      <h2>Favorite Movies</h2>
      {favorites.length === 0 ? (
        <div className="favorites-empty">
          <h2>No Favorite Movies Yet</h2>
          <p>Start adding your favorite movies and they will appear here</p>
        </div>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onFavoriteClick={onFavoriteClick}
              isFavorited={true}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Favorites;