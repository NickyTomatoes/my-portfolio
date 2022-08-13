import "./WorkCard.css";

import React from "react";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <h2 className="project-title">{props.title}</h2>
      <img src={props.imgsrc} alt="Project One" />
      <div className="pro-details">
        <p>{props.text}</p>
      </div>
      <div className="pro-btns">
        <a href={props.view} target="_blank" rel="noreferrer" className="btn">
          View
        </a>
        <a href={props.source} target="_blank" rel="noreferrer" className="btn">
          Source
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
