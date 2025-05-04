import React from 'react';
import '../css/AboutFinastra.css';

const AboutFinastra = () => {
  return (
    <section className="about-finastra">
      <div className="about-container">
        <h2 className="about-title">About Finastra</h2>
        
        <div className="about-content">
          <p>
            Finastra is a global provider of financial services software applications across 
            <span className="highlight"> Lending</span>,
            <span className="highlight"> Payments</span>,
            <span className="highlight"> Treasury and Capital Markets</span>, and
            <span className="highlight"> Universal (retail and digital) Banking</span>.
            </p>
            <p>
            Committed to unlocking the potential of people, businesses and communities everywhere, 
            its vision is to accelerate the future of <span className="highlight-gradient">Open Finance</span> through 
            technology and collaboration, and its pioneering approach is why it is trusted by 
            <span className="stat-highlight"> ~8,100</span> financial institutions, including 
            <span className="stat-highlight"> 45 of the world's top 50</span> banks.

            <p className="cta-text">For more information, visit</p>
            <a href="https://www.finastra.com" className="cta-link" target="_blank" rel="noopener noreferrer">
              www.finastra.com
            </a>
          </p>
        </div>
        
        
      </div>
    </section>
  );
};

export default AboutFinastra;