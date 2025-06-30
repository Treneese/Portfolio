// src/components/Skills.js

import React, { useState, useEffect } from 'react';
import EducationCard from './EducationCard';
import axios from 'axios';
// import axios from '../axiosConfig'; 
import './Skills.css';

function Skills() {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    axios.get('https://treneese-engineer-portfolio-backend.vercel.app/api/education')
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
    <li><strong>Programming & Scripting:</strong> Python, JavaScript (ES6+), HTML5, CSS3, C#</li>
    <li><strong>Frameworks & Libraries:</strong> React, Flask, Socket.io, REST APIs</li>
    <li><strong>Databases:</strong> SQLite, PostgreSQL, SQLAlchemy</li>
    <li><strong>AI & Data:</strong> OpenAI API, JSON, Data Structures & Algorithms, Pandas (basic)</li>
    <li><strong>Cybersecurity:</strong> Cybersecurity Fundamentals, Cisco IOS (Basic), Secure Auth (Bcrypt)</li>
    <li><strong>DevOps & Deployment:</strong> Git, GitHub, Vercel, Railway, AWS (Basics)</li>
    <li><strong>Mapping & Visualization:</strong> Mapbox, Figma, Canva, Adobe Creative Cloud</li>
    <li><strong>3D & Game Dev:</strong> Unity, Blender, Sketchbook, SketchUp, Revit, Character Creator 4</li>
    <li><strong>Other Tools:</strong> IPDB, Gunicorn, Celtx, JSON, VSCode</li>
  </ul>
      </div>
      
      <div className="soft-skills">
        <h2>Soft Skills</h2>
        <ul>
    <li>Creative Problem Solving</li>
    <li>Team Collaboration</li>
    <li>Independent Leadership</li>
    <li>Adaptability</li>
    <li>Critical Thinking</li>
    <li>Detail-Oriented</li>
    <li>Empathy & Communication</li>
    <li>Resilience</li>
    <li>Visionary Thinking</li>
    <li>Purpose-Driven Mindset</li>
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
