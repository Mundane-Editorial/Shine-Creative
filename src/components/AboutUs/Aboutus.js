import React from 'react'
import './Aboutus.css';

function Aboutus() {
  return (
    <section id='aboutus' className="d-flex align-items-center">
      <div className="container py-5">
        <div className="row justify-content-space-between gap-5">
          {/* Left Content */}
          <div className="col-lg-6 d-flex flex-column justify-content-center text-center text-lg-start">
            <h2 className="section-title mb-4">Who We <span>Are</span></h2>
            <p className="lead mb-4">
              We are a passionate team dedicated to delivering innovative
              solutions for our clients. With expertise in cutting-edge
              technology, creativity, and strategy, we aim to transform ideas
              into impactful realities.
            </p>
            <p>
              Our mission is to create seamless digital experiences that inspire
              and engage users, while driving measurable results for businesses.
            </p>
            <div className="mt-4">
              <a className="btn btn-outline-primary" href="#contact">Contact Us</a>
            </div>
          </div>

          {/* Right Content */}
          <div className="container-right col-lg-5 py-5 d-flex justify-content-center align-items-center">
            <div className="row w-100">
              <div className="col-lg-12 mb-3">
                <div className="box">Box-1</div>
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 mb-3">
                <div className="box">Box-2</div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <div className="box">Box-3</div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <div className="box">Box-4</div>
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12 mb-3">
                <div className="box">Box-5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
