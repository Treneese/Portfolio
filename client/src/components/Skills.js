// src/components/Skills.js

import React, { useState, useEffect } from 'react';
import EducationCard from './EducationCard';
// import axios from 'axios';
import axios from '../axiosConfig'; 
import './Skills.css';

function Skills() {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    axios.get('/api/education')
        .then(response => {
          setEducations(response.data);
        })
        .catch(error => {
            console.error("There was an error fetching the education!", error);
        });
}, []);

  return (
    <div className="skills">
      <h1>Skills</h1>
      <p>"You can’t use up creativity. The more you use, the more you have."- Maya Angelou</p>
      <div className="technical-skills">
        <h2>Technical Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Python</li>
          <li>Flask</li>
          <li>Git/GitHub</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Database</li>
          <li>SQL</li>
          <li>Bcrypt</li>
          <li>Ipdb</li>
        </ul>
      </div>
      
      <div className="soft-skills">
        <h2>Soft Skills</h2>
        <ul>
          <li>Teamwork</li>
          <li>Self-motivated</li>
          <li>Communication</li>
          <li>Problem-solving</li>
          <li>Attention to detail</li>
          <li>Creativity</li>
          <li>Structure</li>
          <li>Debugging</li>
          <li>Critical thinking</li>
          <li>Innovative thinking</li>
        </ul>
      </div>
      
      
      <div className="education">
        <h2>Education</h2>
        <div className="card-container">
          {educations.map(education => (
            <EducationCard key={education.id} education={education} />
          ))}
        </div>
      </div>
    </div>
  );
}


export default Skills;
