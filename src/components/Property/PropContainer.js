import React from 'react';
import Navigation from '../Navigation';
import FirstProp from './FirstProp';
import SearchBar from '../Home/SearchBar';
import SecondProp from './SecondProp';
import ThirdProp from './ThirdProp';
import Footer from '../Footer';

const PropContainer = () => (
  <div className="container-xxl bg-white p-0">
    <Navigation />
    <FirstProp />
    <SearchBar />
    <SecondProp />
    <ThirdProp />
    <Footer />
  </div>
);

export default PropContainer;
