import { useState, useEffect, useMemo, memo, useContext } from "react";
import Movie from "./movie";
import { v4 as uuid } from "uuid";
import Loading from "./loading";
import { moviesContext } from "../contexts/moviesContextProvider";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllMovies,
  searchMovies,
  toggleFavorite,
} from "../redux/store/slices/movieSlice";

const Movies = () => {
  // const { movies, searchedMovies, searchMovie } = useContext(moviesContext);

  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state) => state.getMovies);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const searchMovie = (query) => {
    dispatch(searchMovies(query));
  };

  const handleFavoriteClick = (id) => {
    dispatch(toggleFavorite(id));
  };

  // if (loading) {
  //   console.log(loading);
  //   return (
  //     <>
  //       <Loading></Loading>
  //     </>
  //   );
  // }

  return (
    <>
      <input
        className="form-control mt-4 mx-auto rounded-4 w-50"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => searchMovie(e.target.value)}
      />
      {/* ifl loading show loading indicator  */}
      {loading && <Loading />}
      {!loading && (
        <div className="mx-5 my-3 d-flex flex-wrap justify-content-evenly">
          {movies.map((movie) => (
            <Movie
              key={uuid()}
              {...movie}
              handleFavoriteClick={handleFavoriteClick}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default memo(Movies);
