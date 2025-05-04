import React, { useEffect, useRef } from 'react';
import '../css/TopReasons.css';
// Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBrain, 
  faChartLine, 
  faHandshake, 
  faRocket, 
  faComments
} from '@fortawesome/free-solid-svg-icons';

// Add icons to library
library.add(faBrain, faChartLine, faHandshake, faRocket, faComments);

const TopReasons = () => {
  const sectionRef = useRef(null);
  const listItems = useRef([]);

  useEffect(() => {
    // Add scroll-based animations
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // If section comes into view
      if (sectionTop < windowHeight * 0.75) {
        section.classList.add('in-view');
        
        // Enhanced list item animations on scroll
        listItems.current.forEach((item, index) => {
          if (item) {
            setTimeout(() => {
              item.classList.add('visible');
            }, index * 150);
          }
        });
      }
    };
    
    // Initialize refs array
    listItems.current = document.querySelectorAll('.reasons-list li');
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    // Check position on initial load
    handleScroll();
    
    // Add hover effects to list items
    const items = document.querySelectorAll('.reasons-list li');
    items.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        const icon = item.querySelector('.reason-icon');
        if (icon) {
          icon.classList.add('pulse');
        }
      });
      
      item.addEventListener('mouseleave', () => {
        const icon = item.querySelector('.reason-icon');
        if (icon) {
          icon.classList.remove('pulse');
        }
      });
    });
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
      
      // Remove event listeners from items
      items.forEach((item) => {
        const icon = item.querySelector('.reason-icon');
        if (icon) {
          item.removeEventListener('mouseenter', () => {
            icon.classList.add('pulse');
          });
          
          item.removeEventListener('mouseleave', () => {
            icon.classList.remove('pulse');
          });
        }
      });
    };
  }, []);
  
  return (
    <section className="top-reasons-section" ref={sectionRef}>
      <div className="top-reasons-container">
        <div className="reasons-text">
          <h2>
            Top Reasons Why This is the Only Conference You Need to Attend in 2025
          </h2>
          <ul className="reasons-list">
            <li>
              <FontAwesomeIcon icon={faBrain} className="reason-icon" />
              <span className="reason-text">Learn from industry experts and thought leaders</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faChartLine} className="reason-icon" />
              <span className="reason-text">Stay ahead of emerging trends and innovations</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faHandshake} className="reason-icon" />
              <span className="reason-text">Connect with fellow banking professionals</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faRocket} className="reason-icon" />
              <span className="reason-text">Enhance your knowledge, skills, and network</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faComments} className="reason-icon" />
              <span className="reason-text">Share your expertise and experience with peers</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TopReasons;