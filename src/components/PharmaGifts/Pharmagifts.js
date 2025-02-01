import React from 'react';
import './Pharmagifts.css';

const images = [
  "https://via.placeholder.com/100", // Replace with actual image URLs
  "https://via.placeholder.com/100",
  "https://via.placeholder.com/100",
  "https://via.placeholder.com/100",
  "https://via.placeholder.com/100",
];

function Pharmagifts() {
  return (
    <section id="pharmagifts" className="d-flex align-items-center">
      <div className="container py-5">
        <div className="row align-items-center">

          {/* Right Side - Scrolling Images (Multiple Lines) */}
          <div className="col-lg-6 image-scroller">
            {[...Array(3)].map((_, lineIndex) => (
              <div key={lineIndex} className={`wrapper ${lineIndex % 2 === 0 ? 'wrapper-left' : 'wrapper-right'}`}>
                <div className="scroll-track">
                  {[...images, ...images, ...images].map((src, index) => (
                    <div key={index} className="item">
                      <img src={src} alt={`Pharma gift ${index}`} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Left Side - Text Content */}
          <div className="col-lg-6 text-container">
            <h2 className="section-title mb-4"><span>Personalized</span> Gifts...</h2>
            <p className="lead mb-4">
              we offer a wide range of customizable gifts that make the perfect token of appreciation from your organization.
              Whether you're looking to express gratitude or build lasting connections, our selection includes high-quality diaries,
              pens, bottles, keychains, paperweights, and much more. Each item can be personalized with your brand or message, ensuring
              a thoughtful, memorable gesture for your clients, employees, or partners. Let us help you create the perfect gift that
              reflects your organization's values and makes every recipient feel valued.
            </p>
            <div className="mt-4">
              <a className="main-btn mt-1" href="#">Conditions Applied*</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Pharmagifts;
