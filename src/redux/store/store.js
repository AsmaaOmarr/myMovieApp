import { configureStore } from "@reduxjs/toolkit";
import getMoviesReducer from "./slices/movieSlice";

const store = configureStore({
  reducer: {
    getMovies: getMoviesReducer,
  },
});

export default store;