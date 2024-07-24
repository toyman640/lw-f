import React from 'react';
import Navigation from '../Navigation';
import FirstHomeSection from './FirstSection';
import SearchBar from './SearchBar';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';

const HomeContainer = () => (
  <div className="container-xxl bg-white p-0">
    <Navigation />
    <FirstHomeSection />
    <SearchBar />
    <SecondSection />
    <ThirdSection />
  </div>
);

export default HomeContainer;
