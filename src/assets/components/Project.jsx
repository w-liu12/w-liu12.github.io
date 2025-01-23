import "../css/Project.css";
import React from "react";

function Project({ image, company, title, description, skills, className }) {
  const variantClass = className === "purple" ? "purple" : "green";

  return (
    <div className={`project ${variantClass}`}>
      <div className="project-top">
        <img src={image} alt={title} className="project-image" />
        <h2 className="project-skills">{skills}</h2>
      </div>
      <div className="project-text">
        <h3 className="project-title">
          <span>{company}:</span> {title}
        </h3>
        <p className="project-description">{description}</p>
      </div>
      <div className="project-overlay"></div>
    </div>
  );
}

export default Project;
