import React from "react";
import styles from "../styles/movie.module.css";

const About = () => {
  return (
    <>
      <div className="container py-0 text-light">
        <h1 className="text-center mb-4 fw-bold text-warning">
          About Movie App
        </h1>
        <p className="lead text-center mx-auto w-75">
          🎬 Welcome to <strong className="fw-bold">Movie App</strong>, your
          ultimate destination for discovering movies, exploring reviews, and
          staying updated with the latest releases.
        </p>

        <div className="row mt-5 ">
          {/* Left Section */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-4">🎯 Our Mission</h2>
            <p>
              Our mission is to revolutionize the way movie lovers experience
              cinema by providing a seamless, immersive, and personalized
              platform. We aim to be the ultimate destination for film
              enthusiasts, offering the latest releases, in-depth reviews,
              high-quality trailers, and AI-driven recommendations. Whether
              you're searching for classic masterpieces or upcoming
              blockbusters, our goal is to create a vibrant community where
              users can explore, discuss, and celebrate the magic of
              movies—anytime, anywhere.
            </p>
          </div>

          {/* Right Section (Image) */}
          <div className={`col-md-6 text-center ${styles.aboutImg}`} style={{}}>
            <img
              src="https://galalitescreens.com/wp-content/uploads/2017/11/cinema-theatre.webp"
              alt="Movie theater"
              className="img-fluid rounded-4 shadow"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
