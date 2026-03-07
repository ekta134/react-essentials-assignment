import React, { useState } from "react";
import moviesData from "./Data/MoviesData";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {

  const [searchQuery, setSearchQuery] = useState("");
  const [favourites, setFavourites] = useState([]);
  
   const filteredMovies = moviesData.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFavourite = (movie) => {

    if (favourites.some(fav => fav.id === movie.id)) {

      setFavourites(
        favourites.filter(fav => fav.id !== movie.id)
      );

    } else {

      setFavourites([...favourites, movie]);

    }

  };

  const resetSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="app">
        

      <div className="card">

        <Header />

        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          resetSearch={resetSearch}
        />

        <div className="results-count">
          {searchQuery && `${filteredMovies.length} results for "${searchQuery}"`}
        </div>

        <div className="grid">

          <div>

            <h3>Matching Movies</h3>

            {searchQuery === "" ? (
              <p className="hint">Type something to search movies</p>
            ) : filteredMovies.length === 0 ? (
              <p className="hint">No movies found</p>
            ) : (
              <MovieList
                movies={filteredMovies}
                favourites={favourites}
                toggleFavourite={toggleFavourite}
                isFavouriteSection={false}
              />
            )}

          </div>

          <div>

            <h3>Favorite Movies</h3>

            {favourites.length === 0 ? (
              <p className="hint">
                You haven't added any favorites yet
              </p>
            ) : (
              <MovieList
                movies={favourites}
                favourites={favourites}
                toggleFavourite={toggleFavourite}
                isFavouriteSection={true}
              />
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;