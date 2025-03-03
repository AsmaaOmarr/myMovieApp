import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <>
        <footer
          className="text-light py-3 mt-4"
          style={{
            backgroundColor: "transparent",
          }}
        >
          <div className="container text-center">
            <p className="mb-1">
              &copy; {new Date().getFullYear()} My Movie App. All Rights
              Reserved.
            </p>
            <div>
              <a href="#" className="text-light me-3">
                Privacy Policy
              </a>
              <a href="#" className="text-light">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
