import React, { useState, useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./loading";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const apiKey = "9813ce01a72ca1bd2ae25f091898b1c7";
  const imgPath = "https://image.tmdb.org/t/p/w500/";

  //didmount
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then((res) => {
        console.log(res.data);
        setMovie(res.data);
      })
      .catch((err) => console.error("Error fetching movie details:", err));
  }, [id]);

  if (!movie) {
    return (
      <>
        <Loading></Loading>
      </>
    );
  }

  return (
    <div
      className="container mt-5"
      style={{
        backgroundImage: `url(${imgPath}/${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "15px",
        padding: "20px",
        color: "white",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        className="card bg-dark text-white shadow-lg border-0 mx-auto"
        style={{ maxWidth: "900px", borderRadius: "15px" }}
      >
        <div className="row g-0">
          {/* Movie Poster */}
          <div className="col-md-4">
            <img
              src={imgPath + movie.poster_path}
              className="img-fluid"
              style={{ borderRadius: "15px 0 0 0" }}
            />
          </div>

          {/* Movie Details */}
          <div className="col-md-8">
            <div className="card-body p-4">
              {/* name and overview */}
              <h2 className="card-title text-warning">{movie.title}</h2>
              <p className="card-text">{movie.overview}</p>

              {/* Genres */}
              <div className="mb-3">
                {/* should add key when use map */}
                {movie.genres.map((genre) => (
                  <div key={genre.id} className="badge bg-danger me-2">
                    {genre.name}
                  </div>
                ))}
              </div>

              {/* date and rating and time */}
              <p className="card-text">
                <span className="fw-bold text-info me-2">Release Date :</span>
                {movie.release_date} 📅
              </p>
              <p className="card-text">
                <span className="fw-bold text-success me-2">Rating :</span>
                {movie.vote_average} / 10 ⭐ ({movie.vote_count} votes)
              </p>
              <p className="card-text">
                <span className="fw-bold text-light me-2">Duration :</span>
                {movie.runtime} mins ⏳
              </p>

              {/* Spoken Languages */}
              <p className="card-text">
                <span className="fw-bold text-secondary me-2">Languages :</span>
                {movie.spoken_languages
                  .map((lang) => lang.english_name)
                  .join(", ")}{" "}
                🌐
              </p>

              {/* Production */}
              <div className="mb-3">
                <span className="fw-bold text-light mb-1">Production : </span>
                <div className="d-flex flex-wrap mt-2">
                  {movie.production_companies.map((company) => (
                    <div key={company.id} className="me-3 text-center">
                      {company.logo_path && (
                        <img
                          src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                          alt={company.name}
                          style={{ maxHeight: "40px", marginBottom: "5px" }}
                        />
                      )}
                      <p className="small">{company.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Homepage Link */}
              {movie.homepage && (
                <a
                  href={movie.homepage}
                  target="_blank"
                  rel=""
                  className="btn btn-outline-warning w-100"
                >
                  Visit Official Site
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(MovieDetails);
