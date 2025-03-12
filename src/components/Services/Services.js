import React from 'react'
import './Services.css';
function Services() {
  const offered = [
    {
      id: 1,
      logo: "fa-solid fa-tags",
      title: "Register for free.",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?",
    },
    {
      id: 2,
      logo: "fa-solid fa-box",
      title: "Verify your identity ",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?",
    },
    {
      id: 3,
      logo: "fa-solid fa-book-open",
      title: "Add recipient's bank details.",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?",
    },
    {
      id: 4,
      logo: "fa-solid fa-tags",
      title: "Pay for your transfer.",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?",
    },
    {
      id: 5,
      logo: "fa-solid fa-box",
      title: "choose an amount to send.",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?",
    },
    {
      id: 6,
      logo: "fa-solid fa-book-open",
      title: "That's it.",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?",
    },
  ];
  
  return (
    <section id="services" className="py-5 py-xl-8">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="mb-4 display-5 text-center fw-bold">Why choose <span>us ?</span></h2>
            <p className="text-secondary mb-5 text-center">
              We offer a wide range of high-quality printing solutions for the pharmaceutical industry, including labels, packaging, Catalogs, Product Cards, and many more.
            </p>
            <hr className="w-80 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>

      <div className="container overflow-hidden">
        <div className="row justify-content-center gy-4">
          {offered.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4">
              <div className="service-box text-center p-4 rounded">
                <i className={`${item.logo} service-icon`}></i>
                <h5 className="fw-bold mt-3">{item.title}</h5>
                <p className="text-secondary">{item.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services;