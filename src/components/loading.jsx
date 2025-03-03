import React from "react";

const Loading = () => {
  return (
    <>
      // h-100 works only if parent has fixed size
      <div
        className="d-flex justify-content-center align-items-center text-light"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Loading;
