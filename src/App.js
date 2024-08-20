import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeContainer from './components/Home/HomeContainer';
import PropContainer from './components/Property/PropContainer';
import AboutContainer from './components/About/AboutContainer';
import ContactContain from './components/Contact/ContactContain';
import ErrorComponent from './components/Error/ErrorPageMain';
import SignUp from './components/Dashboard/SignUp';
import LogIn from './components/Dashboard/LogIn';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/log-in-user" element={<LogIn />} />
          <Route exact path="/sign-up-user" element={<SignUp />} />
          <Route exact path="/" element={<HomeContainer />} />
          <Route exact path="/property-list" element={<PropContainer />} />
          <Route exact path="/about" element={<AboutContainer />} />
          <Route exact path="/contact-us" element={<ContactContain />} />
          <Route exact path="/error-404" element={<ErrorComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
