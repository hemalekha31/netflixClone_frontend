import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Nav.css";
import bell from "../assets/bell-solid-full.svg";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const [query, setQuery] = useState("");

  // Initialize search input if on search page
  useEffect(() => {
    if (location.pathname === "/search") {
      const q = new URLSearchParams(location.search).get("query") || "";
      setQuery(q);
    }
  }, [location]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dropdown outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
    localStorage.removeItem("activeProfile");
    navigate("/signin");
  };

  // Navigate to search page on click
  const handleInputClick = () => {
    if (location.pathname !== "/search") {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  // Update query and search automatically
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    navigate(`/search?query=${encodeURIComponent(value)}`);
  };

  return (
    <div className={`nav ${show ? "scrolled" : ""}`}>
      <div className="nav_content">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix Logo"
          className="nav_logo"
          onClick={() => navigate("/")}
        />

        <ul>
          <li onClick={() => navigate("/homepage")}>Home</li>
          <li onClick={() => navigate("/tvshow")}>TV Shows</li>
          <li onClick={() => navigate("/movies")}>Movies</li>
          <li onClick={() => navigate("/new&popular")}>New & Popular</li>
        </ul>
      </div>

      <div className="nav-right">
        <div className="search-wrapper">
          <img
            src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-5.png"
            className="icon"
            alt="Search"
          />
          <input
            type="text"
            className="search-input"
            placeholder="Search movies..."
            value={query}
            onClick={handleInputClick} // Navigate when clicking input
            onChange={handleSearchChange} // Update search while typing
          />
        </div>

        <p>Children</p>
        <img src={bell} className="icon" alt="Bell" />
        <div
          className="nav-profile"
          onClick={() => setDropdownVisible(!dropdownVisible)}
          ref={dropdownRef}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Profile Avatar"
          />
          <img
            src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3250959/caret-down-icon-md.png"
            alt="Dropdown Icon"
            className="caret-icon"
          />

          {dropdownVisible && (
            <div className="dropdown">
              <button onClick={() => navigate("/account")} className="accbut">
                Account
              </button>

              <p>Help Center</p>
              <p onClick={handleLogout}>Sign Out</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
