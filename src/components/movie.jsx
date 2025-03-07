import { Link, useNavigate } from "react-router-dom";
import { memo, useState } from "react";
import styles from "../styles/movie.module.css";
import { constants } from "../constants";
import { useDispatch } from "react-redux";
import { deleteMovie, toggleFavorite } from "../redux/store/slices/movieSlice";
const Movie = (props) => {
  // eslint-disable-next-line react/prop-types
  const { id, title, poster_path, favorite } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    dispatch(toggleFavorite(id));
  };

  const handleDeleteClick = (e) => {
    e.preventDefault();
    dispatch(deleteMovie(id));
  };

  return (
    <Link to={`/movieDetails/${id}`} className="text-decoration-none">
      <div
        className={`border-0 card mt-5 text-center ${styles.card}`}
        style={{ width: "15rem", position: "relative" }}
      >
        {/* Favorite (Heart) Icon */}
        <i
          className={`bi bi-heart-fill ${styles.heartIcon}`}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            fontSize: "1.5rem",
            color: favorite ? "crimson" : "white",
            cursor: "pointer",
            transition: "0.3s ease-in-out",
          }}
          onClick={handleFavoriteClick}
        ></i>
        {/* Delete Icon */}
        <i
          className="bi bi-trash-fill"
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            fontSize: "1.5rem",
            color: "white",
            cursor: "pointer",
          }}
          onClick={handleDeleteClick}
        ></i>

        <img
          className="card-img-top"
          src={constants.imgPath + poster_path}
          alt={title}
        />
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
        </div>
      </div>
    </Link>
  );
};
export default memo(Movie);
