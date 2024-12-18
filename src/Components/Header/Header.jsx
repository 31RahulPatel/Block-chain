import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => setMenuActive(!menuActive);

  // Function to close the menu when clicking outside
  const handleClickOutside = (event) => {
    if (!event.target.closest('.header')) {
      setMenuActive(false);
    }
  };

  React.useEffect(() => {
    // Add event listener to detect click outside
    document.addEventListener('click', handleClickOutside);
    return () => {
      // Cleanup listener on component unmount
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className={`header ${menuActive ? 'active' : ''}`}>
      <div className="header-logo">
        <Link to="/" className="logo">Blockchain Club</Link>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <nav className={`header-nav ${menuActive ? 'active' : ''}`}>
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
