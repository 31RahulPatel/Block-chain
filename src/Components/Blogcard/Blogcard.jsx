import React from 'react';
import './Blogcard.css'; // Importing the styles for BlogCard

const BlogCard = ({ title, description, image, link }) => {
    return (
        <div className="blog-card">
            <img src={image} alt={title} className="blog-card-image" />
            <div className="blog-card-content">
                <h3 className="blog-card-title">{title}</h3>
                <p className="blog-card-description">{description}</p>
                <a href={link} className="blog-card-link">Read More</a>
            </div>
        </div>
    );
};

export default BlogCard;
