import React, { useEffect } from 'react';
import './Footer.css';

function Footer() {
  useEffect(() => {
    const footerLinks = document.querySelectorAll('.footer-links a, .item ul a');

    const handleclick = (event) => {
      event.preventDefault();
      const targetSection = document.querySelector(event.target.getAttribute('href'));
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    footerLinks.forEach((link) => {
      link.addEventListener('click', handleclick);
    });

    return () => {
      footerLinks.forEach((link) => {
        link.removeEventListener('click', handleclick);
      });
    };
  }, []);

  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6 item text">
              <h3>Shine Creative</h3>
              <p>
                Vyas Complex, Opp. JBT Road, Kotlanala, Solan - 173212, HP.
                <br />
                Reach Us at : +91 98170-78978
                <br />
                Email Us at : shinecreative@rediffmail.com
              </p>
            </div>

            {/* social links */}
            <div className="col item social">
              <a href="https://x.com" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://facebook.com" className="social-link">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://instagram.com" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>

            {/* Copyright */}
            <p className="copyright">Copyright © 2013 - 2025 Shine Creative. <br/> All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
