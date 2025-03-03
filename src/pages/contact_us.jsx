import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center fw-bold text-warning">Get in Touch</h1>
        <p className="text-center text-light w-75 mx-auto">
          Have questions or feedback? We'd love to hear from you! Fill out the
          form below, and we’ll get back to you as soon as possible.
        </p>

        <div className="row mt-5">
          {/* Contact Info Section */}
          <div className="col-md-6 text-light">
            <h3 className="fw-bold">📍 Our Location</h3>
            <p>123 Movie Street, Hollywood, CA, USA</p>
            <h3 className="fw-bold">📧 Email Us</h3>
            <p>support@movieapp.com</p>
            <h3 className="fw-bold">📞 Call Us</h3>
            <p>+1 (555) 123-4567</p>
          </div>

          {/* Contact Form Section */}
          <div className="col-md-6">
            <div className="card p-4 shadow-lg">
              <form>
                <div className="mb-3">
                  <label className="form-label fw-bold">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Write your message..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-warning w-100 fw-bold">
                  Send Message 🚀
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
