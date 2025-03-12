import React, { useState, useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  Stack,
  CircularProgress,
  Button,
} from "@mui/material";
import { blue, green, grey, yellow } from "@mui/material/colors";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const apiKey = "9813ce01a72ca1bd2ae25f091898b1c7";
  const imgPath = "https://image.tmdb.org/t/p/w500/";

  // Fetch movie details
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error("Error fetching movie details:", err));
  }, [id]);

  // Show loading indicator
  if (!movie) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        backgroundImage: `url(${imgPath}${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: 2,
        color: "white",
        backdropFilter: "blur(8px)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, sm: 5, md: 10 }, // Adjusts padding for different screens
        py: 5,
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
          borderRadius: 2,
          boxShadow: 5,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "white",
          p: 2,
          gap: 2,
        }}
      >
        {/* Movie Poster */}
        <CardMedia
          component="img"
          sx={{
            width: { xs: "100%", sm: "80%", md: 400 },
            height: "auto",
            maxHeight: { xs: 400, md: "100%" },
            borderRadius: 2,
            objectFit: "cover",
          }}
          image={imgPath + movie.poster_path}
          alt={movie.title}
        />

        {/* Movie Details */}
        <CardContent sx={{ flex: 1, p: { xs: 2, md: 3 }, width: "100%" }}>
          <Typography
            variant="h4"
            sx={{
              color: yellow[800],
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              textAlign: { xs: "center", md: "left" },
            }}
            mb={2}
          >
            {movie.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
              textAlign: { xs: "center", md: "left" },
            }}
            mb={2}
          >
            {movie.overview}
          </Typography>

          {/* Genres */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              mb: 2,
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {movie.genres.map((genre) => (
              <Chip key={genre.id} label={genre.name} color="error" />
            ))}
          </Stack>

          {/* Movie Info */}
          <Stack spacing={1} textAlign={{ xs: "center", md: "left" }}>
            <Typography
              variant="body2"
              sx={{ color: blue[500], fontSize: { xs: "0.9rem", md: "1rem" } }}
            >
              <strong>Release Date:</strong> {movie.release_date} 📅
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: green[500], fontSize: { xs: "0.9rem", md: "1rem" } }}
            >
              <strong>Rating:</strong> {movie.vote_average} / 10 ⭐ (
              {movie.vote_count} votes)
            </Typography>

            <Typography
              variant="body2"
              sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
            >
              <strong>Duration:</strong> {movie.runtime} mins ⏳
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: grey[500], fontSize: { xs: "0.9rem", md: "1rem" } }}
            >
              <strong>Languages:</strong>{" "}
              {movie.spoken_languages
                .map((lang) => lang.english_name)
                .join(", ")}{" "}
              🌐
            </Typography>
          </Stack>

          {/* Production Companies */}
          <Box mt={2} textAlign={{ xs: "center", md: "left" }}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              Production:
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              mt={1}
              flexWrap="wrap"
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              {movie.production_companies.map((company) => (
                <Box
                  key={company.id}
                  textAlign="center"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {company.logo_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                      alt={company.name}
                      style={{ maxHeight: "40px", marginBottom: "5px" }}
                    />
                  )}
                  <Typography variant="caption">{company.name}</Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Homepage Button */}
          {movie.homepage && (
            <Button
              variant="outlined"
              color="warning"
              fullWidth
              href={movie.homepage}
              target="_blank"
              sx={{ mt: 4 }}
            >
              Visit Official Site
            </Button>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default memo(MovieDetails);
