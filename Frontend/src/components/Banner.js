import React, { useEffect, useState } from 'react';
import './Banner.css';

const Banner = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleParallax = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section 
      className="banner-container" 
      id="home"
      style={{ backgroundPositionY: `${scrollPosition * 0.5}px` }}
    >
      <div className="banner-overlay">
        <div className="banner-content">
          <p className="organized-by">Organized By</p>
          <h1 className="company-name">FINASTRA</h1>
          <div className="title-container">
            <h2 className="event-title">Reimagine Banking:</h2>
            <h2 className="event-subtitle">Adapt. Evolve. Thrive.</h2>
          </div>
          <div className="event-details">
            <p className="event-info">Date: 9th April 2025</p>
            <p className="event-info">Time: 9:30 AM - 2:00 PM GMT+2</p>
            <p className="event-info">The Nile Ritz-Carlton, Cairo, Egypt</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;