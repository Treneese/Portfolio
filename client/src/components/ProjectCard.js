// src/components/ProjectCard.js

import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="card">
            <h3>{project.title}</h3>
            <p>{project.about}</p>
            <p>{project.description}</p>
            <p>{project.technologies}</p>
            <p>{project.features}</p>
            <p>{project.challenges}</p>
            <a href={project.demo}>Demo</a>
            <a href={project.github}>GitHub</a>
            <img src={project.image} alt={project.title} />
        </div>
    );
};

export default ProjectCard;
