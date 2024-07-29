import React from 'react';
import Navigation from '../Navigation';
import FirstContact from './FirstContact';
import SecondContact from './SecondContact';
import Footer from '../Footer';

const ContactContain = () => (
  <div className="container-xxl bg-white p-0">
    <Navigation />
    <FirstContact />
    <SecondContact />
    <Footer />
  </div>
);

export default ContactContain;
