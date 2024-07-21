// src/components/BlogCard.js

import React from 'react';
import './BlogCard.css';

const BlogCard = ({ blog }) => {
    return (
        <div className="card">
             <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <a href={blog.link}>Read More</a>
        </div>
    );
};

export default BlogCard;
