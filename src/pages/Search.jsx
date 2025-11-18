import React from "react";
import { useLocation } from "react-router-dom";
import "./search.css";
import Nav from "../components/Nav.jsx"

const Search = ({ allData = [] }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";

  const results = allData.filter((item) => {
    const title = item?.title || "";
    return title.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
<Nav/>
    <div className="search-results">
      {query && <h2>Search results for: <span className="query">{query}</span></h2>}

      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="movie-grid">
          {results.map((item) => (
            <div className="movie-card" key={item.id}>
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    </>

  );
};

export default Search;
