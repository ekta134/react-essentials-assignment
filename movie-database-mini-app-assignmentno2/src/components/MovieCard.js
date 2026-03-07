import React from "react";


function MovieCard({ movie, toggleFavourite, isFavourite, isFavouriteSection }) {

   // Favourite section UI
  if (isFavouriteSection) {
    return (
      <div className="fav-movie">

        <ion-icon
          name="heart-outline"
          className="fav-heart"
        ></ion-icon>

        {movie.title} ({movie.year})

      </div>
    );
  }

  // UI for Matching Movies
  return (

    <div className="movie-card">

      <div className="movie-info">

        <div className="title-row">
          {movie.title} {movie.year} • {movie.genre}
        </div>

        <div className="tag-row">

          <span className="rating-badge">
            ⭐ {movie.rating}
          </span>

          {movie.tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}

        </div>

      </div>

      <button
        className= {isFavourite ? "fav-btn active" : "fav-btn"}
        onClick={() => toggleFavourite(movie)}
      >
        <ion-icon
          className="heart-icon"
          name={isFavourite ? "heart" : "heart-outline"}
        ></ion-icon>

        {isFavourite ? "Favorited" : "Favorite"}
      </button>

    </div>

  );
}

export default MovieCard;