import React from 'react';
import Navigation from '../Navigation';
import FirstHomeSection from './FirstSection';
import SearchBar from './SearchBar';
import SecondSection from './SecondSection';

const HomeContainer = () => (
  <div className="container-xxl bg-white p-0">
    <Navigation />
    <FirstHomeSection />
    <SearchBar />
    <SecondSection />
  </div>
);

export default HomeContainer;
