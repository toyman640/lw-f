import React from 'react';
import { Link } from 'react-router-dom';

const SecondAbout = () => (
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div className="about-img position-relative overflow-hidden p-5 pe-0">
            <img className="img-fluid w-100" alt="rando" src="img/about.jpg" />
          </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <h1 className="mb-4">#1 Place To Find The Perfect Property</h1>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
            Aliqu diam amet diam et eos.
            Clita erat ipsum et lorem et sit, sed stet lorem sit
            clita duo justo magna dolore erat amet
          </p>
          <p>
            <i className="fa fa-check text-primary me-3" />
            Tempor erat elitr rebum at clita
          </p>
          <p>
            <i className="fa fa-check text-primary me-3" />
            Aliqu diam amet diam et eos
          </p>
          <p>
            <i className="fa fa-check text-primary me-3" />
            Clita duo justo magna dolore erat amet
          </p>
          <Link className="btn btn-primary py-3 px-5 mt-3" to="/">Read More</Link>
        </div>
      </div>
    </div>
  </div>
);

export default SecondAbout;
