import "./Footer.css";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { FcHome, FcFeedback } from "react-icons/fc";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FcHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Philadelphia, PA</p>
            </div>
          </div>
          <div className="email">
            <FcFeedback
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <div>
              <p>nicholasacomito@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>
            Portfolio by <span>React</span>
          </h4>
          <p>
            Crafted to showcase my projects and passion about front end
            development<span>.</span>
          </p>
          <p>
            Please check out my GitHub, LinkedIn, and HackerRank Profiles!
            <span>.</span>
          </p>
          <div className="social">
            <a href="https://github.com/NickyTomatoes" target="blank">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/nicholas-comito-9a6963117"
              target="blank"
            >
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.hackerrank.com/Ncomito1221" target="blank">
              <FaHackerrank
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
