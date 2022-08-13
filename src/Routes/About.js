import React from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImgTwo from "../Components/HeroImgTwo";
import AboutContent from "../Components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImgTwo heading="About" text="Who is Nick, and what does he do?" />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
