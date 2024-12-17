import React from 'react';
import './About.css'; // Importing the styles for About page

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Us</h1>
            <p className="about-description">
                Welcome to the Blockchain Club! We are a group of students passionate about exploring the world of blockchain technology and its applications. Our mission is to educate, innovate, and build a community of blockchain enthusiasts who are ready to shape the future of decentralized technologies.
            </p>

            <div className="about-section">
                <h2 className="section-title">Our Mission</h2>
                <p className="section-content">
                    Our mission is to foster a deeper understanding of blockchain technology by organizing workshops, events, and discussions. We aim to bridge the knowledge gap and help students develop the skills needed to contribute to the growing blockchain ecosystem.
                </p>
            </div>

            <div className="about-section">
                <h2 className="section-title">What We Do</h2>
                <p className="section-content">
                    We offer a range of activities, including:
                    <ul>
                        <li>Educational Workshops</li>
                        <li>Guest Speaker Events</li>
                        <li>Hackathons and Competitions</li>
                        <li>Community Building through Collaboration</li>
                    </ul>
                </p>
            </div>

            <div className="about-section">
                <h2 className="section-title">Join Us</h2>
                <p className="section-content">
                    Whether you're a beginner or an experienced developer, there’s a place for you in our club. Join us today and be a part of a community that is passionate about pushing the boundaries of blockchain technology.
                </p>
            </div>
        </div>
    );
};

export default About;
