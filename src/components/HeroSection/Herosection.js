import React from 'react';
import './Herosection.css';
import image from '../../assets/landing.jpg';
function Herosection() {
  return (
    <section id="hero" className="banner_wrapper">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="left-container text-center text-lg-start">
          <h1><span>One Stop</span><br />Pharma printing solutions</h1>
          <p>
            Discover our high-quality printing solutions for the pharmaceutical industry. From labels and packaging to educational materials,
            we deliver exceptional quality and reliability.
            <br />
            That's not it. We're not just about printing. We're about innovation and excellence.
          </p>
          <a className="main-btn mt-4" href="#aboutus">Learn More</a>
        </div>
        <div className="right-container text-center">
          <img src={image} className="img-fluid" alt="Food Banner" />
        </div>
      </div>
    </section>
  );
}

export default Herosection;
