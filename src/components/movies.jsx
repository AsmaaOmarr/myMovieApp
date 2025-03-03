import { useState, useEffect, useMemo, memo } from "react";
import Movie from "./movie";
import { v4 as uuid } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Loading from "./loading";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const apiKey = "9813ce01a72ca1bd2ae25f091898b1c7";

  //api.themoviedb.org/3/search/movie?query=YOUR_QUERY&api_key=YOUR_API_KEY

  //act as componentDidMount
  useEffect(() => {
    console.log("Fetching movies");
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
      .then((res) => {
        setMovies(res.data.results);
        setSearchedMovies(res.data.results);
      });
  }, []);

  const searchMovie = (query) => {
    if (!query) {
      setSearchedMovies(movies);
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`
        )
        .then((res) => setSearchedMovies(res.data.results));
    }
  };

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
