import { useState, useEffect, useMemo, memo, useContext } from "react";
import Movie from "./movie";
import { v4 as uuid } from "uuid";
import Loading from "./loading";
import { moviesContext } from "../contexts/moviesContextProvider";

const Movies = () => {
  const { movies, searchedMovies, searchMovie } = useContext(moviesContext);

  if (movies.length == 0) {
    return (
      <>
        <Loading></Loading>
      </>
    );
  }

  // if (searchedMovies.length == 0) {
  //   return (
  //     <>
  //       <div className="d-flex justify-content-center">
  //         <img src="src/assets/undraw_file-search_cbur.svg" alt="" />
  //       </div>
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
      <div className="mx-5 my-3 d-flex flex-wrap justify-content-evenly">
        {searchedMovies.map((movie) => (
          <Movie key={uuid()} {...movie} />
        ))}
      </div>
    </>
  );
};

export default memo(Movies);
