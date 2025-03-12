import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { constants } from "../../../constants";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export const getAllMovies = createAsyncThunk("getAllMovies", async () => {
  try {
    const response = await axios.get(
      `${TMDB_BASE_URL}/discover/movie?api_key=${constants.apiKey}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
});

export const searchMovies = createAsyncThunk("searchMovies", async (query) => {
  try {
    const url = query
      ? `${TMDB_BASE_URL}/search/movie?api_key=${constants.apiKey}&query=${query}`
      : `${TMDB_BASE_URL}/discover/movie?api_key=${constants.apiKey}`;

    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
});

export const getFavoriteMovies = createAsyncThunk(
  "getFavoriteMovies",
  async () => {
    try {
      const response = await axios.get(
        `${TMDB_BASE_URL}/account/21849475/favorite/movies?api_key=${constants.apiKey}`,
        { headers: constants.TMDB_HEADERS }
      );
      return response.data.results;
    } catch (error) {
      console.error("Error fetching favorite movies:", error);
      throw error;
    }
  }
);

export const toggleFavorite = createAsyncThunk(
  "movies/toggleFavorite",
  async (movieId, { dispatch, getState, rejectWithValue }) => {
    try {
      const state = getState();
      console.log("Current favorites:", state.getMovies.favoriteMovies);

      const isFavorite = state.getMovies.favoriteMovies.some(
        (m) => m.id === movieId
      );
      console.log("Is favorite:", isFavorite);
      const response = await axios.post(
        `${TMDB_BASE_URL}/account/21849475/favorite`,
        {
          media_type: "movie",
          media_id: movieId,
          favorite: !isFavorite,
        },
        { headers: constants.TMDB_HEADERS }
      );

      console.log("TMDB API Response:", response.status, response.data);

      if (response.status === 201 || response.status === 200) {
        await dispatch(getFavoriteMovies());
        return movieId;
      } else {
        return rejectWithValue("Failed to update favorite status");
      }
    } catch (error) {
      console.error(
        "Error toggling favorite:",
        error.response?.data || error.message
      );
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    favoriteMovies: [],
    loading: false,
    failed: false,
    countFavorites: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMovies.pending, (state) => {
        state.loading = true;
        // getFavoriteMovies();
      })
      .addCase(getAllMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(getAllMovies.rejected, (state) => {
        state.loading = false;
        state.failed = true;
      });

    builder
      .addCase(searchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(searchMovies.rejected, (state) => {
        state.loading = false;
        state.failed = true;
      });

    builder.addCase(getFavoriteMovies.fulfilled, (state, action) => {
      console.log("Fetched favorite movies:", action.payload);
      state.favoriteMovies = action.payload;
      state.countFavorites = action.payload.length;
    });

    builder.addCase(toggleFavorite.fulfilled, (state, action) => {
      console.log("Toggled favorite movie ID:", action.payload);

      // const isFavorite = state.favoriteMovies.some(
      //   (m) => m.id === action.payload
      // );

      // if (isFavorite) {
      //   state.favoriteMovies = state.favoriteMovies.filter(
      //     (m) => m.id !== action.payload
      //   );
      // } else {
      //   const toggledMovie = state.movies.find((m) => m.id === action.payload);
      //   if (toggledMovie) {
      //     state.favoriteMovies.push({ ...toggledMovie });
      //   }
      // }
    });

    builder.addCase(toggleFavorite.rejected, (state, action) => {
      console.error("Failed to toggle favorite:", action.payload);
    });
  },
});

export default movieSlice.reducer;
