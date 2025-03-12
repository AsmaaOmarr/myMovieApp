import React, { createContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export const moviesContext = createContext();
// eslint-disable-next-line react/prop-types
const MoviesContextProvider = ({ children }) => {
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
  return (
    <moviesContext.Provider value={{ searchMovie, searchedMovies,movies }}>
      {children}
    </moviesContext.Provider>
  );
};

export default MoviesContextProvider;
