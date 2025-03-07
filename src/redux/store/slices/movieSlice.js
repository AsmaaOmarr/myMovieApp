import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { constants } from "../../../constants";

export const getAllMovies = createAsyncThunk("getAllMovies", async () => {
  //   const response = await axios.get(
  //     `https://api.themoviedb.org/3/discover/movie?api_key=${constants.apiKey}`
  //   );
  //   return response.data.results;

  const response = await axios.get(`http://localhost:5000/movies`);
  return response.data;
});

export const searchMovies = createAsyncThunk("searchMovies", async (query) => {
  if (!query) {
    const response = await axios.get(`http://localhost:5000/movies`);
    return response.data;
  }
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${constants.apiKey}&query=${query}`
  );
  return response.data.results;
  //   const response = await axios.get(
  //     `http://localhost:5000/movies?title_like=${query}`
  //   );
  //   return response.data;
});

export const toggleFavorite = createAsyncThunk(
  "movies/toggleFavorite",
  async (movieId, { getState }) => {
    const state = getState();
    const movie = state.getMovies.movies.find((m) => m.id === movieId);

    if (movie) {
      const updatedMovie = { ...movie, favorite: !movie.favorite };
      await axios.patch(
        `http://localhost:5000/movies/${movieId}`,
        updatedMovie
      );
      return updatedMovie; // Return the updated movie to Redux
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: { movies: [], loading: false, failed: false, favoriteCount: 0 },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllMovies.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload;
      state.favoriteCount = action.payload.filter((m) => m.favorite).length;
    });

    builder
      .addCase(searchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      });

    builder.addCase(toggleFavorite.fulfilled, (state, action) => {
      state.movies = state.movies.map((movie) =>
        movie.id === action.payload.id ? action.payload : movie
      );
      state.favoriteCount = state.movies.filter(
        (m) => m.favorite == true
      ).length;
    });
  },
});

export default movieSlice.reducer;
