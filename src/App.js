import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeContainer from './components/Home/HomeContainer';
import PropContainer from './components/Property/PropContainer';
import AboutContainer from './components/About/AboutContainer';
import ContactContain from './components/Contact/ContactContain';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeContainer />} />
          <Route exact path="/property-list" element={<PropContainer />} />
          <Route exact path="/about" element={<AboutContainer />} />
          <Route exact path="/contact-us" element={<ContactContain />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
