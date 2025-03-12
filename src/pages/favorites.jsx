import React from "react";
import { useSelector } from "react-redux";
import Movie from "../components/movie";
import { Box, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";

const Favorites = () => {
  const { favoriteMovies } = useSelector((state) => state.getMovies);

  return (
    <>
      <Box sx={{ textAlign: "center", p: 2 }}>
        <Typography
          variant="h4"
          mb={5}
          sx={{ color: yellow[700], fontWeight: "bold" }}
        >
          My Favorite Movies 🎬
        </Typography>

        {favoriteMovies.length === 0 ? (
          <Typography
            variant="h5"
            color="secondary"
            textAlign={"center"}
            py={20}
          >
            No favorite movies added yet.
          </Typography>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 3,
            }}
          >
            {favoriteMovies.map((movie) => (
              <Movie key={movie.id} {...movie} />
            ))}
          </Box>
        )}
      </Box>
    </>
  );
};

export default Favorites;
