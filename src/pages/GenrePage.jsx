import React from "react";
import { useParams } from "react-router-dom";
import Home from "../products/Home.jsx";
import "./GenrePage.css";
import Nav from "../components/Nav.jsx";
const GenrePage = () => {
  const { genre } = useParams();

  const filteredMovies = Home.filter(
    (movie) => movie.genre && movie.genre.toLowerCase() === genre.toLowerCase()
  );

  return (
    <>
      <Nav />
    <div className="genre-page">

      <h2 className="genre-title">
        {genre.charAt(0).toUpperCase() + genre.slice(1)} Movies
      </h2>

      {filteredMovies.length === 0 ? (
        <p>No movies found in this genre.</p>
      ) : (
        <div className="movies-grid">
          {filteredMovies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img src={movie.img} alt={movie.title} />
              <h4>{movie.title}</h4>
              <p>⭐ {movie.rating}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    </>

  );
};

export default GenrePage;
