import React from 'react';
import { Link } from 'react-router-dom';

const FourthSection = () => (
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-0 gx-5 align-items-end">
        <div className="col-lg-6">
          <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
            <h1 className="mb-3">Property Listing</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat.
              Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.
            </p>
          </div>
        </div>
        <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
          <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
            <li className="nav-item me-2">
              <Link class="btn btn-outline-primary active" data-bs-toggle="pill" to="#tab-1">Featured</Link>
            </li>
            <li className="nav-item me-2">
              <Link class="btn btn-outline-primary" data-bs-toggle="pill" to="#tab-2">For Sell</Link>
            </li>
            <li className="nav-item me-0">
              <Link class="btn btn-outline-primary" data-bs-toggle="pill" to="#tab-3">For Rent</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab-content">
        <div id="tab-1" className="tab-pane fade show p-0 active">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <Link to="/"><img className="img-fluid" src="img/property-1.jpg" alt="" /></Link>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <Link class="d-block h5 mb-2" to="/">Golden Urban House For Sell</Link>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />
                    3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />
                    2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <Link to="/"><img className="img-fluid" src="img/property-2.jpg" alt="" /></Link>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Villa</div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <Link class="d-block h5 mb-2" to="/">Golden Urban House For Sell</Link>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />
                    3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />
                    2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <Link to="/"><img className="img-fluid" src="img/property-3.jpg" alt="" /></Link>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Office</div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <Link class="d-block h5 mb-2" to="/">Golden Urban House For Sell</Link>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />
                    3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />
                    2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <Link to="/"><img className="img-fluid" src="img/property-4.jpg" alt="" /></Link>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Building</div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <Link class="d-block h5 mb-2" to="/">Golden Urban House For Sell</Link>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />
                    3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />
                    2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <Link to="/"><img className="img-fluid" src="img/property-5.jpg" alt="" /></Link>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Home</div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <Link class="d-block h5 mb-2" to="/">Golden Urban House For Sell</Link>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />
                    3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />
                    2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <Link to="/"><img className="img-fluid" src="img/property-6.jpg" alt="" /></Link>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Shop</div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <Link class="d-block h5 mb-2" to="/">Golden Urban House For Sell</Link>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />
                    3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />
                    2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
              <Link class="btn btn-primary py-3 px-5" to="/">Browse More Property</Link>
            </div>
          </div>
        </div>
        <div id="tab-2" className="tab-pane fade show p-0">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <Link to="/"><img className="img-fluid" src="img/property-1.jpg" alt="" /></Link>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <Link class="d-block h5 mb-2" to="/">Golden Urban House For Sell</Link>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />
                    3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />
                    2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <Link to="/"><img className="img-fluid" src="img/property-2.jpg" alt="" /></Link>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Villa</div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <Link class="d-block h5 mb-2" to="/">Golden Urban House For Sell</Link>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />
                    3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />
                    2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <Link to="/"><img className="img-fluid" src="img/property-3.jpg" alt="" /></Link>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Office</div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <Link class="d-block h5 mb-2" to="/">Golden Urban House For Sell</Link>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />
                    3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />
                    2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <Link to="/"><img className="img-fluid" src="img/property-4.jpg" alt="" /></Link>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Building</div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <Link class="d-block h5 mb-2" to="/">Golden Urban House For Sell</Link>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />
                    3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />
                    2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <Link to="/"><img className="img-fluid" src="img/property-5.jpg" alt="" /></Link>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Home</div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <Link class="d-block h5 mb-2" to="/">Golden Urban House For Sell</Link>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />
                    3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />
                    2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <Link to="/"><img className="img-fluid" src="img/property-6.jpg" alt="" /></Link>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Shop</div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <Link class="d-block h5 mb-2" to="/">Golden Urban House For Sell</Link>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />
                    3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />
                    2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <Link class="btn btn-primary py-3 px-5" to="/">Browse More Property</Link>
            </div>
          </div>
        </div>
        <div id="tab-3" className="tab-pane fade show p-0">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <Link to="/"><img className="img-fluid" src="img/property-1.jpg" alt="" /></Link>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <Link class="d-block h5 mb-2" to="/">Golden Urban House For Sell</Link>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />
                    3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />
                    2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <Link to="/"><img className="img-fluid" src="img/property-2.jpg" alt="" /></Link>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Villa</div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <Link class="d-block h5 mb-2" to="/">Golden Urban House For Sell</Link>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />
                    3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />
                    2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <Link to="/"><img className="img-fluid" src="img/property-3.jpg" alt="" /></Link>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Office</div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <Link class="d-block h5 mb-2" to="/">Golden Urban House For Sell</Link>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />
                    3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />
                    2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <Link to="/"><img className="img-fluid" src="img/property-4.jpg" alt="" /></Link>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Building</div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <Link class="d-block h5 mb-2" to="/">Golden Urban House For Sell</Link>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />
                    3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />
                    2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <Link to="/"><img className="img-fluid" src="img/property-5.jpg" alt="" /></Link>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Home</div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <Link class="d-block h5 mb-2" to="/">Golden Urban House For Sell</Link>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />
                    3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />
                    2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <Link to="/"><img className="img-fluid" src="img/property-6.jpg" alt="" /></Link>
                  <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Shop</div>
                </div>
                <div className="p-4 pb-0">
                  <h5 className="text-primary mb-3">$12,345</h5>
                  <Link class="d-block h5 mb-2" to="/">Golden Urban House For Sell</Link>
                  <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    123 Street, New York, USA
                  </p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-ruler-combined text-primary me-2" />
                    1000 Sqft
                  </small>
                  <small className="flex-fill text-center border-end py-2">
                    <i className="fa fa-bed text-primary me-2" />
                    3 Bed
                  </small>
                  <small className="flex-fill text-center py-2">
                    <i className="fa fa-bath text-primary me-2" />
                    2 Bath
                  </small>
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <Link class="btn btn-primary py-3 px-5" to="/">Browse More Property</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default FourthSection;
