import React from 'react';
import './Herosection.css';
import Carousel from '../carousel/carousel';
function Herosection() {
  return (
    <section id="hero" className="hero container-fluid">
      <div className="row h-100">
        {/* left text */}
        <div className="col-md-6 left-text">
          <h1 className="display-4 fw-bold">Your One-Stop Pharma Printing Solutions</h1>
          <p className="lead">
            We are a team of experienced professionals committed to providing the best possible printing services to
            meet your needs.
          </p>
          <button className="btn btn-primary btn-lg">Get in Touch</button>
        </div>

        {/* right context */}
        <div className="right-text col-md-6">
          <Carousel />
        </div>
      </div>
    </section>
  );
}

export default Herosection;
