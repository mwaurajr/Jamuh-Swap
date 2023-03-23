import React from "react";
import "./Root.css";
import bgvideo from "../assets/video.mp4";

const Root = () => {
  return (
    <div className="root">
      <div className="bg-overlay"></div>
      <video src={bgvideo} autoPlay muted loop class='bg-video'/>
      
      <div className="content">
            <h1>Welcome</h1>
            <p>To my site.</p>
        </div>

      <div className="navbar"> 
      <div className="menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
      </div>

    
    </div>
  );
};

export default Root;
