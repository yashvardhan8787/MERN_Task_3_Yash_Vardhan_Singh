import React from "react";
import '../../styles/ProjectCard.css'; 


const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-card-image" />
      <div className="project-card-content">
        <h2 className="project-card-title">{project.title}</h2>
        <p className="project-card-date">{project.date}</p>
        <p className="project-card-description">{project.description}</p>
        <div className="project-card-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-card-tag">{tag}</span>
          ))}
        </div>
        <div className="project-card-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github"></i> GitHub
          </a>
          {project.webapp && (
            <a href={project.webapp} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-globe"></i> Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};



export default ProjectCard;
