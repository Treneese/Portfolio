// src/components/EducationCard.js

import React from 'react';
import './EducationCard.css';

const EducationCard = ({ education }) => {
    return (
        <div className="card">
            <img src={education.image} alt={education.name} />
            <h3>{education.name}</h3>
            <p>{education.field}</p>
            <p>{education.degree_certification_type}</p>
            <p>{education.start_date} - {education.end_date}</p>
            <a href={education.school_link}>School Link</a>
        </div>
    );
};

export default EducationCard;
