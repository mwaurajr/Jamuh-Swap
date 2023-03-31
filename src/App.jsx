import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import About from './Routes/About';
import LandingPage from './Routes/LandingPage';
import Login from './components/Signup'



function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* 

      <Routes>
        <Route path="/dashboard" element={<LandingPage />} />
      </Routes> */}
    </Router>
  );
}


export default App;