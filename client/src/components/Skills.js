// src/components/Skills.js

import React, { useState, useEffect } from 'react';
import EducationCard from './EducationCard';
import axios from 'axios';
import BlogCard from './BlogCard';
import './Skills.css';

function Skills() {
  const [educations, setEducations] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('/api/education')
        .then(response => {
          setEducations(response.data);
        })
        .catch(error => {
            console.error("There was an error fetching the education!", error);
        });
}, []);

useEffect(() => {
  axios.get('/api/blogs')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
          console.error("There was an error fetching the blogs!", error);
      });
}, []);

  return (
    <div className="skills">
      <h1>Skills</h1>
      
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
      
      <div className="experience">
        <h2>Experience</h2>
        <p>
          <strong>Bootcamp Experience:</strong> I attended the Flatiron School's online Software Engineering Bootcamp, a comprehensive program divided into five phases:
          <div className="phase">
<ul>
<li>Phase 1: JavaScript</li>
<li>Phase 2: React</li>
<li>Phase 3: Python</li>
<li>Phase 4: Flask (group project)</li>
<li>Phase 5: Full-Stack Applications (solo project)</li>

</ul>
</div>
Throughout the bootcamp, I created projects for each phase, including four notable projects that are featured on my projects page. In addition to the core curriculum, I gained experience with CSS, HTML, Git/GitHub, SQLite, and IPDB, among other tools and technologies.
        </p>
      
      </div>
      
      <div className="education">
        <h2>Education</h2>
        <div className="card-container">
          {educations.map(education => (
            <EducationCard key={education.id} education={education} />
          ))}
        </div>
      </div>
      
      <div className="blogs">
        <h2>Blog/Articles</h2>
        <div className="card-container">
          {blogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}


export default Skills;
