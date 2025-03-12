import { useState, useEffect, memo } from "react";
import Movie from "./movie";
import { v4 as uuid } from "uuid";
import Loading from "./loading";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllMovies,
  getFavoriteMovies,
  searchMovies,
  toggleFavorite,
} from "../redux/store/slices/movieSlice";
import { TextField, Box, Grid, CircularProgress, Stack } from "@mui/material";
import { fieldStyle } from "../styles/styles";

const Movies = () => {
  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state) => state.getMovies);

  useEffect(() => {
    dispatch(getAllMovies());
    dispatch(getFavoriteMovies());
  }, [dispatch]);

  const searchMovie = (query) => {
    dispatch(searchMovies(query));
  };

  const handleFavoriteClick = (id) => {
    dispatch(toggleFavorite(id));
  };

  return (
    <Box sx={{ textAlign: "center", p: 3 }}>
      {/* Search Input */}
      <TextField
        variant="outlined"
        placeholder="Search Movies... 🔍"
        fullWidth
        onChange={(e) => searchMovie(e.target.value)}
        sx={{
          maxWidth: 500,
          mx: "auto",
          mb: 6,
          borderRadius: 4,
          bgcolor: "background.paper",
          ...fieldStyle,
        }}
      />

      {/* Loading Indicator */}
      {loading ? (
        <CircularProgress sx={{ mt: 5 }} />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {movies.map((movie) => (
            <Box item key={uuid()} xs={12} sm={6} md={4} lg={3}>
              <Movie {...movie} handleFavoriteClick={handleFavoriteClick} />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default memo(Movies);
