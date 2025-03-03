import { Link } from "react-router-dom";
import styles from "../styles/movie.module.css";

const Movie = (props) => {
  const { id, title, poster_path } = props;

  const imgPath = "https://image.tmdb.org/t/p/w500/";
  return (
    <>
      <Link to={`/movieDetails/${id}`} className="text-decoration-none">
        <div
          className={`border-0 card mt-5 text-center ${styles.card}`}
          style={{ width: "15rem" }}
        >
          <img
            className="card-img-top"
            src={imgPath + poster_path}
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <h6 className="card-title">{title}</h6>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Movie;
