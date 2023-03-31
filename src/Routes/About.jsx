import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";


function About() {
  return (
    <div >
      <Navbar />
      <HeroImage  heading='PRICING.' text='Choose your Trip'/>
      <Footer />
    </div>
  );
}

export default About;
