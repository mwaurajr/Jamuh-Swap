import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import About from './components/About';
import LandingPage from './Routes/LandingPage';



function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>

      {/* <Routes>
        <Route path="/login" element={<LandingPage />} />
      </Routes>

      <Routes>
        <Route path="/dashboard" element={<LandingPage />} />
      </Routes> */}
    </Router>
  );
}


export default App;