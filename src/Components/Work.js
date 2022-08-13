import "./WorkCard.css";
import WorkCard from "./WorkCard";
import WorkdCardData from "./WorkCardData";

import React from "react";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">
        Check these out<span>!</span>
      </h1>
      <div className="projects-container">
        {WorkdCardData.map((val, index) => {
          return (
            <WorkCard
              key={index}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
