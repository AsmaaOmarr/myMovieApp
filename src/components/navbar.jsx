import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/movie.module.css";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg py-3 px-5"
        style={{
          backgroundColor: "transparent ",
        }}
      >
        <div className="container-fluid">
          <Link to="/" className={`navbar-brand text-light me-5`}>
            <h3 className={`${styles.logoColor} ${styles.logo}`}>
              Movie App 🍿
            </h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{ filter: "invert(100%)" }}
            />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={`nav-item`}>
                <Link
                  to="/"
                  className={`nav-link active text-light me-2 ${styles.navItem}`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link active text-light me-2 ${styles.navItem}`}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contactUs"
                  className={`nav-link active text-light me-2 ${styles.navItem}`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            {/* <input
              className="form-control me-2 rounded-4 w-25"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
