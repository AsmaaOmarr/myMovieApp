import { Link } from "react-router-dom";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/store/slices/movieSlice";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { constants } from "../constants";

// eslint-disable-next-line react/prop-types
const Movie = ({ id, title, poster_path }) => {
  const dispatch = useDispatch();

  const favorite = useSelector((state) =>
    state.getMovies.favoriteMovies.some((movie) => movie.id === id)
  );

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleFavorite(id));
  };

  return (
    <Link
      to={`/myMovieApp/home/movieDetails/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card
        sx={{
          width: 240,
          position: "relative",
          borderRadius: 3,
          boxShadow: 3,
          transition: "all 0.3s ease-in-out",
          marginBottom: 2,
          "&:hover": {
            transform: "scale(1.05)",
            backgroundColor: "transparent",
            color: "white",
          },
        }}
      >
        {/* Favorite Icon */}
        <IconButton
          onClick={handleFavoriteClick}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: favorite ? "crimson" : "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              color: "crimson",
            },
          }}
        >
          <FavoriteIcon />
        </IconButton>

        {/* Movie Poster */}
        <CardMedia
          component="img"
          height="260"
          image={constants.imgPath + poster_path}
          alt={title}
          sx={{
            objectFit: "fill",
          }}
        />
        {/* Movie Title */}
        <CardContent sx={{ textAlign: "center", p: 1 }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default memo(Movie);
