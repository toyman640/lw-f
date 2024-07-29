import React from 'react';
import Navigation from '../Navigation';
import FirstHomeSection from './FirstSection';
import SearchBar from './SearchBar';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
import FifthSection from './FifthSection';
import Footer from '../Footer';

const HomeContainer = () => (
  <div className="container-xxl bg-white p-0">
    <Navigation />
    <FirstHomeSection />
    <SearchBar />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <FifthSection />
    <Footer />
  </div>
);

export default HomeContainer;
