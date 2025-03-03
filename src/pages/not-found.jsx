import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <h1 className="text-danger fw-bold">404 - Page Not Found</h1>
      <p className="text-secondary">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link to="/" className="btn btn-outline-warning mt-3">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
