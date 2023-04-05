import React from "react";
import "./Root.css";
import bgvideo from "../assets/books.mp4";
import { useNavigate } from "react-router-dom";

const Root = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/signup");
  }

  return (
    <div className="landingpage">
      <video src={bgvideo} autoPlay muted loop className="video-bg" />
      <div className="bg-overlay"></div>

      <div className="home-text">
        <h1>Welcome to P-Swap</h1>
        <p>The love of learning, the sequestered nooks, and all the sweet serenity of books.</p>
      </div>

      <div className="home-btn" onClick={handleClick}>
        Explore
      </div>
    </div>
  );
};

export default Root;
