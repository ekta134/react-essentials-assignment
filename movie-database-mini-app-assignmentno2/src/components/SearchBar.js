import React from "react";

function SearchBar({ searchQuery, setSearchQuery, resetSearch }) {

  return (

    <div className="search-bar">

      <input
        type="text"
        placeholder='Search movies (e.g. "Interstellar", "Star")'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <button className="reset-btn" onClick={resetSearch}>
        Reset
      </button>

    </div>

  );

}

export default SearchBar;