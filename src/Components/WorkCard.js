import "./WorkCard.css";

import React from "react";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="Project One" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
      </div>
      <div className="pro-btns">
        <a href={props.view} target="_blank" className="btn">
          View
        </a>
        <a href={props.source} target="_blank" className="btn">
          Source
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
