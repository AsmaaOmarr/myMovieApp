import { configureStore } from "@reduxjs/toolkit";
import getMoviesReducer from "./slices/movieSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    getMovies: getMoviesReducer,
    user: userReducer,
  },
});

export default store;
