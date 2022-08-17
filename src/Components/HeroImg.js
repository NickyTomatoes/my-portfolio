import "./HeroImg.css";

import React from "react";
import IntroImg from "../Assests/desktop-img.jpg";
import { Link } from "react-router-dom";
import Div100vh from "react-div-100vh";

const HeroImg = () => {
  return (
    <Div100vh>
      <div className="hero">
        <div className="mask">
          <img className="intro-img" src={IntroImg} alt="Intro Img" />
        </div>
        <div className="content">
          <p>
            Hi<span>!</span> I'm Nick.
          </p>
          <h1>Web Developer.</h1>
          <div>
            <Link to="/projects" className="btn">
              Projects
            </Link>
            <Link to="/contact" className="btn btn-light">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </Div100vh>
  );
};

export default HeroImg;
