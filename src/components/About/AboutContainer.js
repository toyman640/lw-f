import React from 'react';
import Navigation from '../Navigation';
import FirstAbout from './FirstAbout';
import SearchBar from '../Home/SearchBar';
import SecondAbout from './SecondAbout';
import ThirdAbout from './ThirdAbout';
import FourthAbout from './FourthAbout';
import Footer from '../Footer';

const AboutContainer = () => (
  <div className="container-xxl bg-white p-0">
    <Navigation />
    <FirstAbout />
    <SearchBar />
    <SecondAbout />
    <ThirdAbout />
    <FourthAbout />
    <Footer />
  </div>
);

export default AboutContainer;
