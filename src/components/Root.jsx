import React from "react";
import "./Root.css";
import bgvideo from "../assets/video.mp4";

const Root = () => {
  return (
    <div className="root">
      
      <video src={bgvideo} autoPlay muted loop class='bg-video'/>
      <div className="bg-overlay"></div>

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
