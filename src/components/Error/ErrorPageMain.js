import React from "react";
import Navigation from "../Navigation";
import ErrorFirst from "./ErrorPart";
import ErrorSecond from "./ErrorSecond";
import Footer from "../Footer";

const ErrorComponent = () => (
  <div className="container-xxl bg-white p-0">
    <Navigation />
    <ErrorFirst />
    <ErrorSecond />
    <Footer />
  </div>
);

export default ErrorComponent;