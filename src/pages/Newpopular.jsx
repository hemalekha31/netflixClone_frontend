import React from 'react';
import Newmovies from '../products/Newmovies.jsx';
import Nav from '../components/Nav.jsx';

const Newpopular = () => {
  const popularMovies = Newmovies; 

  return (
    <>
      <Nav/>
    <div className="movies-page">
      <h2 className="movies-title">New & Popular</h2>

      <div className="movies-grid">
        {popularMovies.map(movie => (
          <div className="movie-card" key={movie.id}>
            <img src={movie.img} alt={movie.title} />

            <h4>{movie.title}</h4>

            <p>⭐ {movie.rating}</p>
            <p style={{ color: "#aaa", marginTop: "5px" }}>
              📅 {movie.year}
            </p>
          </div>
        ))}
      </div>
    </div>
    </>

  );
};

export default Newpopular;
