import "./AboutContent.css";

import React from "react";
import { Link } from "react-router-dom";
import deskgraphic from "../Assests/DeskGraphic.jpg";
import laptop from "../Assests/Laptop.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Nicholas Comito</h1>
        <p>
          Passionate, self-taught, front end | SQL developer with a thirst for
          knowledge and a drive to grow<span>!</span>
        </p>
        <p>
          Born and raised in Philadelphia, PA, a career change promted me to
          take an immediate interest in programming and data analytics and I
          have since hit the ground running
          <span>.</span>
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={deskgraphic} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={laptop} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
