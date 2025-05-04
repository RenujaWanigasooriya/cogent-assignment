import React, { useState } from 'react';
import '../css/Footer.css';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prev => ({ ...prev, submitting: true }));
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();

      if (response.ok) {
        setStatus({ submitted: true, submitting: false, info: { error: false, msg: data.message } });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ submitted: false, submitting: false, info: { error: true, msg: data.message } });
      }
    } catch (err) {
      setStatus({ submitted: false, submitting: false, info: { error: true, msg: 'Try again later.' } });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Emirates Towers, Dubai, UAE</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>+971 4 123 4567</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>events@cogentsolutions.ae</span>
              </li>
            </ul>
          </div>
         
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About the Event</a></li>
              <li><a href="#agenda">Agenda</a></li>
              <li><a href="#speakers">Speakers</a></li>
              <li><a href="#register">Register</a></li>
            </ul>
          </div>
         
          <div className="footer-column">
            <h3>Contact Form</h3>
            <div className="contact-form-container">
              {status.submitted ? (
                <div className="thank-you-box">
                  <p>Thank you for your message! We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="footer-form">
                  <div>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
                  </div>
                  <div>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <textarea name="message" rows="3" value={formData.message} onChange={handleChange} required placeholder="Type your message..." />
                  </div>
                  <button type="submit" disabled={status.submitting}>
                    {status.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
       
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Cogent Solutions. All rights reserved.
          </p>
            <div className="social-icons">
              <a href="https://web.facebook.com/cseventsuae/?_rdc=1&_rdr#" className="social-icon facebook">
              <FaFacebook />
                            </a>
              <a href="https://x.com/cseventsdxb" className="social-icon twitter">
              <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/company/cogent-solutions-event-management/" className="social-icon linkedin">
              <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/cs_event_management/" className="social-icon instagram">
              <FaInstagram />
              </a>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;