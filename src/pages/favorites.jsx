import React from "react";
import { useSelector } from "react-redux";
import Movie from "../components/movie";

const Favorites = () => {
  const movies = useSelector((state) => state.getMovies.movies);
  const favoriteMovies = movies.filter((movie) => movie.favorite); // Get only favorite movies

  return (
    <>
      <div className="container-fluid py-0 text-light">
        <h1 className="text-center mb-4 fw-bold text-warning">
          My Favorite Movies 🎬
        </h1>
        {favoriteMovies.length === 0 ? (
          <p className="text-center mt-3">No favorite movies added yet.</p>
        ) : (
          <div className="d-flex flex-wrap justify-content-evenly mx-5 my-3">
            {favoriteMovies.map((movie) => (
              <Movie key={movie.id} {...movie} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Favorites;
