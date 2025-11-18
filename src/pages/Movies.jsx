import React from 'react';
import Home from '../products/Home.jsx';
import { useLocation } from "react-router-dom";
import "./Movies.css";
import Nav from '../components/Nav.jsx';

const Movies = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("search")?.toLowerCase() || "";

  const filteredMovies = Home.filter(movie =>
    movie.title.toLowerCase().includes(query)
  );

  return (
    <>
      <Nav/>
    <div className="movies-page">
      <h2 className="movies-title">
        {query ? `Results for "${query}"` : "All Movies"}
      </h2>

      <div className="movies-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <div className="movie-card" key={movie.id}>
              <img src={movie.img} alt={movie.title} />
              <h4>{movie.title}</h4>
              <p>⭐ {movie.rating}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No movies found</p>
        )}
      </div>
    </div>
    </>

  );
};

export default Movies;
