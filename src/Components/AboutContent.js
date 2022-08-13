import "./AboutContent.css";

import React from "react";
import { Link } from "react-router-dom";
import testimg from "../Assests/TestPlaceholderImg.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Nicholas Comito</h1>
        <p>Placeholder Text for description</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={testimg} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={testimg} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
