import React from "react";
import "./Root.css";
import bgvideo from "../assets/books.mp4";

const Root = () => {


  const handleClick = () => {
    alert("Clicked Explore btn")
  }

  const handleMenu = () =>{
    alert("Clicked Menu SideBar")
  }

  return (
        <div className="landingpage">

            <video src={bgvideo} autoPlay muted loop class="video-bg" />
            <div className="bg-overlay"></div>

            <div className="navbar">
                <div className="menu" onClick={handleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className="home-text">
                <h1>Welcome to BookSwap</h1>
                <p>The love of learning, the sequestered nooks, and all the sweet serenity of books.</p>
            </div>

            <div className="home-btn" onClick={handleClick}>Explore</div>

        </div>
    )

};

export default Root;
