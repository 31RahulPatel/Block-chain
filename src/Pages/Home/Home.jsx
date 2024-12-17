import React from 'react';
import './Home.css'; // Importing the styles for the Home page
import '../../Components/Subscribe/Subscribe'
import Subscribe from '../../Components/Subscribe/Subscribe';
// import Eventcard from '../../Components/Eventcard/Eventcard';
const Home = () => {
    return (
        <div className="home-container">
            <div className="hero-section">
                <h1 className="hero-title">Welcome to the Blockchain Club</h1>
                <p className="hero-description">
                    A place to explore, learn, and build the future with blockchain technology.
                </p>
                <a href="/about" className="hero-button">Learn More About Us</a>
            </div>

            <div className="features-section">
                <h2 className="section-title">Why Join Us?</h2>
                <div className="features-list">
                    <div className="feature-card">
                        <h3 className="feature-title">Educational Workshops</h3>
                        <p className="feature-description">
                            Learn the basics and advanced concepts of blockchain technology.
                        </p>
                    </div>
                    <div className="feature-card">
                        <h3 className="feature-title">Hackathons & Competitions</h3>
                        <p className="feature-description">
                            Showcase your skills and compete with like-minded individuals.
                        </p>
                    </div>
                    <div className="feature-card">
                        <h3 className="feature-title">Networking Opportunities</h3>
                        <p className="feature-description">
                            Meet professionals and enthusiasts in the blockchain community.
                        </p>
                    </div>
                </div>
            </div>

            <div className="call-to-action">
                <h2>Ready to Start Your Blockchain Journey?</h2>
                <a href="/about" className="cta-button">Join the Club</a>
            </div>
            <div className="subs">
                <Subscribe />
                
            </div>
         
        </div>
    );
};

export default Home;
