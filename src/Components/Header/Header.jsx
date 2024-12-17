import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/" className="logo">Blockchain Club</Link>
      </div>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/blogs" className="nav-link">Blogs</Link>
        <Link to="/events" className="nav-link">Events</Link>
        <Link to="/membership" className="nav-link">Membership</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
