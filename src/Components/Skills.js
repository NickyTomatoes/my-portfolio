import "./Skills.css";

import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiJsBadge,
  DiReact,
  DiGithubBadge,
} from "react-icons/di";

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>
        Skills<span>!</span>
      </h1>
      <div className="icons">
        <div className="icon">
          <DiHtml5 size={70} style={{ color: "#fff" }} />
          <p>HTML</p>
        </div>
        <div className="icon">
          <DiCss3 size={70} style={{ color: "#fff" }} />
          <p>CSS</p>
        </div>
        <div className="icon">
          <DiSass size={70} style={{ color: "#fff" }} />
          <p>SASS</p>
        </div>
        <div className="icon">
          <DiJsBadge size={70} style={{ color: "#fff" }} />
          <p>JAVASCRIPT</p>
        </div>
        <div className="icon">
          <DiReact size={70} style={{ color: "#fff" }} />
          <p>REACT</p>
        </div>
        <div className="icon">
          <DiGithubBadge size={70} style={{ color: "#fff" }} />
          <p>GITHUB</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
