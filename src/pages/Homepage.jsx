import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav.jsx";
import heroBanner from "../assets/hero_banner.jpg";
import heroTitle from "../assets/hero_title.png";
import play from "../assets/play_icon.png";
import info from "../assets/info_icon.png";
import "./Homepage.css";
import Home from "../products/Home.jsx";
import herotrailer from "../assets/trailer.mp4";
import { useRef } from "react";
const Homepage = () => {
  const navigate = useNavigate();
  const genres = [
    "Action",
    "Comedy",
    "Horror",
    "Drama",
    "Thriller",
    "Romance",
    "Sci-Fi",
    "Animation",
  ];
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn !== "true") navigate("/signin");
  }, [navigate]);
  const videoRef = useRef(null);
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
    localStorage.removeItem("activeProfile");
    navigate("/");
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false; // unmute
      videoRef.current.play();
    }
  };

  return (
    <div className="homepage">
      <Nav />

      <section className="hero-section">
  <div className="hero-media">
    <img src={heroBanner} alt="Hero Banner" className="hero-img" />
    <video
      ref={videoRef}
      src={herotrailer}
      className="hero-trailer"
      muted
      loop
      preload="metadata"
      style={{ opacity: 0 }}
      onEnded={() => {
        videoRef.current.style.opacity = 0; // hide after ended
      }}
    />
    <div className="hero-overlay"></div>
    <div className="hero-content">
      <img src={heroTitle} alt="Hero Title" className="hero-title-img" />
      <p className="hero-description">
        An ordinary man discovers he’s part of an ancient secret order.
        Chosen to defend Istanbul, he must stop powerful Immortals.
      </p>
      <div className="hero-buttons">
        <button
          className="btn play-btn"
          onClick={() => {
            if (videoRef.current) {
              videoRef.current.muted = false; // unmute
              videoRef.current.style.opacity = 1;
              videoRef.current.play();
            }
          }}
        >
          <img src={play} alt="Play" /> Play
        </button>
        <button className="btn info-btn">
          <img src={info} alt="Info" /> More Info
        </button>
      </div>
    </div>
  </div>
</section>

      <section className="movie-section">
        <h2>Trending Now</h2>
        <div className="movie-row">
          {Home.slice(0, 10).map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img src={movie.img} alt={movie.title} />
              <div className="movie-hover">
                <h4>{movie.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="movie-section top-rated">
        <h2>Top Rated</h2>
        <div className="movie-row">
          {Home.slice(5, 16).map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img src={movie.img} alt={movie.title} />
              <div className="movie-hover">
                <h4>{movie.title}</h4>
                <p>⭐ {movie.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="categories-section">
        <h2>Browse by Genre</h2>
        <div className="category-list">
          {genres.map((genre) => (
            <div
              key={genre}
              className="category-item"
              onClick={() => navigate(`/genre/${genre.toLowerCase()}`)}
              style={{ cursor: "pointer" }}
            >
              {genre}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
