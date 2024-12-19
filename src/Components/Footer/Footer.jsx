import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-title">Blockchain Club</h3>
        <p className="footer-description">
          Join us to explore the world of blockchain technology and stay updated with our latest events and resources.
        </p>
        <nav className="footer-nav">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/blogs" className="footer-link">Blogs</Link>
          <Link to="/events" className="footer-link">Events</Link>
          <Link to="/membership" className="footer-link">Membership</Link>
          <Link to="/contact" className="footer-link">Contact Us</Link>
        </nav>
        <p className="footer-copyright">© 2025 Blockchain Club. All rig+hts reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
