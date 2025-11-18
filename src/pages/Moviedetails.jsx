import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Moviedetails.css";

const Moviedetails = ({ allData }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = allData.find((item) => item.id === Number(id));

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div className="details-container">

      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <div className="details-wrapper">
        <img className="poster" src={movie.img} alt={movie.title} />

        <div className="details-content">
          <h1>{movie.title}</h1>

          <p className="description">
            {movie.description || "No description available."}
          </p>

          <p><b>Genre:</b> {movie.genre}</p>
          <p><b>Rating:</b> ⭐ {movie.rating}</p>
          <p><b>Release:</b> {movie.year}</p>

          <button className="trailer-btn">
            ▶ Watch Trailer
          </button>

          <button className="list-btn">
            ➕ Add to My List
          </button>
        </div>
      </div>

    </div>
  );
};

export default Moviedetails;
