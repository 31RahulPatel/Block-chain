import React from 'react';
import './Blogs.css'; // Importing styles for Blogs page
import BlogCard from '../../Components/Blogcard/Blogcard'; // Importing BlogCard component

const Blogs = () => {
    // Example data for blogs (replace with dynamic data or API calls later)
    const blogs = [
        {
            id: 1,
            title: 'Understanding Blockchain Basics',
            author: 'John Doe',
            date: 'Dec 10, 2024',
            description: 'A beginner-friendly guide to understanding blockchain technology and its core principles.',
            image: 'https://via.placeholder.com/300', // Replace with actual image URL
        },
        {
            id: 2,
            title: 'Top 5 Use Cases for Blockchain in 2024',
            author: 'Jane Smith',
            date: 'Dec 12, 2024',
            description: 'Explore the most innovative and impactful blockchain use cases shaping the future.',
            image: 'https://via.placeholder.com/300', // Replace with actual image URL
        },
        {
            id: 3,
            title: 'How to Get Started with Smart Contracts',
            author: 'Alice Johnson',
            date: 'Dec 14, 2024',
            description: 'Learn how to build and deploy smart contracts using Ethereum.',
            image: 'https://via.placeholder.com/300', // Replace with actual image URL
        },
    ];

    return (
        <div className="blog-container">
            <h1 className="blog-title">Our Blogs</h1>
            <p className="blog-subtitle">Stay updated with the latest insights, news, and tutorials in the blockchain world.</p>

            <div className="blog-list">
                {blogs.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        title={blog.title}
                        author={blog.author}
                        date={blog.date}
                        description={blog.description}
                        image={blog.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Blogs;
