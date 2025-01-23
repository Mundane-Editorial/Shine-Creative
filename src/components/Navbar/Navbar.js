import React, { useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const whatsappNumber = process.env.REACT_APP_WHATSAPP_NUMBER;
  const message = encodeURIComponent('Hi, I would like to get in touch with you.');

  useEffect(() => {
    const navLinks = document.querySelectorAll('nav a'); // Select nav links
    const sections = document.querySelectorAll('section'); // Select all sections

    const activateLink = (link) => {
      navLinks.forEach((nav) => nav.classList.remove('active'));
      link.classList.add('active');
    };

    const handleScroll = () => {
      let scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            if (link.getAttribute('href').includes(sectionId)) {
              activateLink(link);
            }
          });
        }
      });
    };

    const handleLinkClick = (event) => {
      event.preventDefault();
      const targetSection = document.querySelector(event.target.getAttribute('href'));

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Attach event listeners
    window.addEventListener('scroll', handleScroll);
    navLinks.forEach((link) => link.addEventListener('click', handleLinkClick));

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      navLinks.forEach((link) => link.removeEventListener('click', handleLinkClick));
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        {/* Brand */}
        <a className="navbar-brand me-auto" href="#hero">
          <img src="logo.png" alt=" " className="brand-logo" />
          Shine Creative
        </a>

        {/* Offcanvas Menu */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Shine Creative
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link mx-lg-2 active" href="#hero">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-lg-2" href="#aboutus">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-lg-2" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-lg-2" href="#pharmagifts">
                  Gift Items
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-lg-2" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* WhatsApp Button */}
        <button
          className="contact-btn"
          onClick={() =>
            window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
          }
        >
          <i className="bi bi-whatsapp"></i>
        </button>

        {/* Navbar Toggler */}
        <button
          className="navbar-toggler pe-10"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
