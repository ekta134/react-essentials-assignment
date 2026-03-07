import React from "react";

function Header() {

  return (

    <div className="header">

      <div>
        <h1>Movie Explorer</h1>
        <p>
          Search, filter, and favorite movies.
          Designed for a single-page React component structure.
        </p>
      </div>

      <button className="theme-btn">
        ☀ Toggle theme
      </button>

    </div>

  );

}

export default Header;