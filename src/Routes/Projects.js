import React from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImgTwo from "../Components/HeroImgTwo";
import Work from "../Components/Work";
import Skills from "../Components/Skills";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImgTwo heading="Projects" text="Here is some of my recent work" />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default Projects;
