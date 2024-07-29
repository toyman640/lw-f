import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className="container-fluid nav-bar bg-transparent">
    <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
      <Link to="index.html" className="navbar-brand d-flex align-items-center text-center">
        <div className="icon p-2 me-2">
          <img className="img-fluid" src="img/icon-deal.png" alt="Icon" style={{ width: '30px', height: '30px' }} />
        </div>
        <h1 className="m-0 text-primary">Makaan</h1>
      </Link>
      <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto">
          <Link to="/" className="nav-item nav-link active">Home</Link>
          <Link to="/about" className="nav-item nav-link">About</Link>
          <div className="nav-item dropdown">
            <Link to="https://www.google.com/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</Link>
            <div className="dropdown-menu rounded-0 m-0">
              <Link to="/property-list" className="dropdown-item">Property List</Link>
              <Link to="property-type.html" className="dropdown-item">Property Type</Link>
              <Link to="property-agent.html" className="dropdown-item">Property Agent</Link>
            </div>
          </div>
          <div className="nav-item dropdown">
            <Link to="https://www.google.com/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
            <div className="dropdown-menu rounded-0 m-0">
              <Link to="testimonial.html" className="dropdown-item">Testimonial</Link>
              <Link to="404.html" className="dropdown-item">404 Error</Link>
            </div>
          </div>
          <Link to="/contact-us" className="nav-item nav-link">Contact</Link>
        </div>
        <Link to="https://www.google.com/" className="btn btn-primary px-3 d-none d-lg-flex">Add Property</Link>
      </div>
    </nav>
  </div>
);

export default Navigation;
