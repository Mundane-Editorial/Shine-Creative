import React from 'react';
import './Herosection.css';

function Herosection() {
  return (
    <section id="hero" className="hero top-banner">
      <div className="container-fluid px-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <h1 className="hero-title">One stop pharma printing solutions</h1>
              <p className="hero-description">
                We are a team of experienced professionals who are committed to providing you with the best possible printing services.
              </p>
              <div className="mt-4">
                <button className="main-btn">Get in Touch</button>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 text-center">
              {/* Add an image or additional content here if needed */}
              <img
                src="./assets/img/hero-image.jpg"
                alt="Pharma Printing Solutions"
                className="img-fluid hero-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
