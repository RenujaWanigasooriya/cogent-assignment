import React, { useState, useEffect } from 'react';
import '../css/Navbar.css';

const Navbar = ({ scrollPosition }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    if (scrollPosition > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [scrollPosition]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="https://cogentsolutions.ae/">
            <img src="images/cogentlogo01.png" alt="Cogent Solutions" />
          </a>
        </div>
        
        <div className="navbar-toggle" onClick={toggleMobileMenu}>
          <span className={`navbar-icon ${mobileMenuOpen ? 'open' : ''}`}></span>
        </div>
        
        <ul className={`navbar-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <li className="navbar-item">
            <a href="#home" onClick={closeMobileMenu}>Home</a>
          </li>
          <li className="navbar-item">
            <a href="#about" onClick={closeMobileMenu}>About</a>
          </li>
          <li className="navbar-item">
            <a href="#agenda" onClick={closeMobileMenu}>Agenda</a>
          </li>
          <li className="navbar-item">
            <a href="#speakers" onClick={closeMobileMenu}>Speakers</a>
          </li>
          <li className="navbar-item">
            <a href="#register" onClick={closeMobileMenu} className="navbar-cta">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;