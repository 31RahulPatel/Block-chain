import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Blogs from './Pages/Blogs/Blogs.jsx';
import Events from './Pages/Events/Event.jsx';
import Membership from './Pages/Membership/Membership.jsx';
import ContactUs from './Pages/Contactus/Contactus.jsx';
import './App.css';

const App = () => {
  return (
    // Add basename to match the GitHub Pages repository name
    <Router basename="/Block-chain">
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Default route */}
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<Home />} /> {/* Catch-all for invalid paths */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
