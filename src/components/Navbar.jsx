import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaDashcube, FaHome, FaHSquare, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="header">
      <Link to="/">
        <h2>P-Swap</h2>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/"><FaHome /> Home</Link>
        </li>

        <li>
          <Link to="/dashboard"> Dashboard</Link>
        </li>

        <button className="home-btn"> 
          
          <li>
          <Link to="/login">Login</Link >
        </li>
      
      </button>

        </ul>

        
       
      

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
