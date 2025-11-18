import React from "react";
import TvShows from "../products/Tv.jsx";
import Nav from "../components/Nav.jsx";

const Tvshow = () => {
  return (
    <>
      <Nav />
      <div className="movies-page">
        <h2 className="movies-title">TV Shows</h2>

        <div className="movies-grid">
          {TvShows.map((show) => (
            <div className="movie-card" key={show.id}>
              <img src={show.img} alt={show.title} />

              <h4>{show.title}</h4>
              <p>⭐ {show.rating}</p>
              <p style={{ color: "#aaa" }}>📅 {show.year}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tvshow;
