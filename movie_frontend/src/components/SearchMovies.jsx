import "./SearchMovies.css";
import { useState } from "react";
import axios from "axios";

const SearchMovies = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const searchMovies = async () => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;

    try {
      setError(""); // Clear previous errors

      const response = await axios.get(`http://127.0.0.1:8000/api/movies/search/?query=${trimmedQuery}`);

      if (response.data.results.length === 0) {
        setError("No movies found.");
      } else {
        setMovies(response.data.results);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError("Failed to fetch movies. Check the backend.");
    }
  };

  return (
    <div className="container">
      <h1>🎬 Movie Search</h1>
      
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchMovies}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title} 
            />
            <div className="movie-info">
              <h2>{movie.title}</h2>
              <p>{movie.overview.length > 100 ? movie.overview.slice(0, 100) + "..." : movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchMovies;
