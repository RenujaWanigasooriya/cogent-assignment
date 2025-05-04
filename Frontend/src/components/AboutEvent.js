import React, { useEffect, useRef } from 'react';
import './AboutEvent.css';

const AboutEvent = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    // Initial animations are handled by CSS
    
    // Optional: Add scroll-based animations
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // If section comes into view
      if (sectionTop < windowHeight * 0.75) {
        section.classList.add('in-view');
      }
    };
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    // Check position on initial load
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-container">
        <div className="about-heading">
          <h2>About the Event</h2>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Join us for an exclusive event where industry experts and thought leaders will explore 
              the latest innovations and strategies reshaping the banking landscape. 
              This half-day summit brings together financial institutions, technology partners,
              and Finastra specialists to discuss the transformative journey of modern banking.
            </p>
            <p>
              This event offers a unique opportunity to network with peers, engage with 
              industry experts, and gain valuable insights into the future of banking technology. 
              Discover how Finastra's comprehensive solutions can help your institution thrive 
              in an increasingly competitive and digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEvent;