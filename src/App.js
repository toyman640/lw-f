import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeContainer from './components/Home/HomeContainer';
import PropContainer from './components/Property/PropContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeContainer />} />
          <Route exact path="/property-list" element={<PropContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
