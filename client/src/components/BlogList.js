// src/components/BlogList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';
import './Skills.css';

function BlogList() {
  const [blogs, setBlogs] = useState([]);


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
      <div className="blogs">
        <h2>Blog/Articles</h2>
        <div className="card-container">
          {blogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
  );
}

export default BlogList;