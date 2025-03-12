<<<<<<< HEAD
import React from 'react';
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Make sure to import the styles

const Contact = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    toast.info("Sending...", { autoClose: 2000 }); // Display info toast when sending

    const formData = new FormData(e.target);
    formData.append("access_key", "e9ec8090-0773-419a-ad34-9de6f9047880");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Message sent successfully!");  // Success toast
      e.target.reset();
    } else {
      toast.error("Error sending message. Please try again.");  // Error toast
      toast.error(data.message);
    }
  };

  return (
    <section id="contact">
      <div className="container-fluid p-0">
        <div className="row g-0 vh-100">
          {/* Left Section: Contact Form */}
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div className="contact-form">
              <span className="text-muted">Let's Talk</span>
              <h2 className="display-5 fw-bold">Contact Us</h2>
              <p className="lead">
                We're here to help! Feel free to reach out with any questions or feedback.
              </p>
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <input
                    className="form-control"
                    placeholder="Your name"
                    type="text"
                    name="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    placeholder="Your email"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    placeholder="Your phone number"
                    type="tel"
                    name="phone"
                    pattern="^[0-9]{10}$"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Your message"
                    rows="4"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary" type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Section: Map */}
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div className="map-container">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1399.9777749488928!2d77.10641792202728!3d30.90526449025201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f814c11da0189%3A0xe461223a80a90395!2sShine%20Creative!5e0!3m2!1sen!2sin!4v1737705017694!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ToastContainer for react-toastify */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default Contact;
=======
import React, { useState } from 'react';
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Make sure to import the styles

const Contact = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    toast.info("Sending...", { autoClose: 2000 }); // Display info toast when sending

    const formData = new FormData(e.target);
    formData.append("access_key", "e9ec8090-0773-419a-ad34-9de6f9047880");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Message sent successfully!");  // Success toast
      e.target.reset();
    } else {
      toast.error("Error sending message. Please try again.");  // Error toast
      toast.error(data.message);
    }
  };

  return (
    <section id="contact">
      <div className="container-fluid p-0">
        <div className="row g-0 vh-100">
          {/* Left Section: Contact Form */}
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div className="contact-form">
              <span className="text-muted">Let's Talk</span>
              <h2 className="display-5 fw-bold">Contact Us</h2>
              <p className="lead">
                We're here to help! Feel free to reach out with any questions or feedback.
              </p>
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <input
                    className="form-control"
                    placeholder="Your name"
                    type="text"
                    name="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    placeholder="Your email"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    placeholder="Your phone number"
                    type="tel"
                    name="phone"
                    pattern="^[0-9]{10}$"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Your message"
                    rows="4"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary" type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Section: Map */}
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div className="map-container">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1399.9777749488928!2d77.10641792202728!3d30.90526449025201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f814c11da0189%3A0xe461223a80a90395!2sShine%20Creative!5e0!3m2!1sen!2sin!4v1737705017694!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ToastContainer for react-toastify */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default Contact;
>>>>>>> 7187b2e (github pages deployment test)
