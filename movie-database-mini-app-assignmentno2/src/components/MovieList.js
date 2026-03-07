import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, favourites, toggleFavourite, isFavouriteSection  }) {

  return (

    <div className={isFavouriteSection ? "fav-list" : ""}>

      {movies.map(movie => (

        <MovieCard
          key={movie.id}
          movie={movie}
          toggleFavourite={toggleFavourite}
          isFavourite={favourites.some(f => f.id === movie.id)}
           isFavouriteSection={isFavouriteSection}
        />

      ))}

    </div>

  );

}

export default MovieList;