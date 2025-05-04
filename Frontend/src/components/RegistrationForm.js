import React, { useState } from 'react';
import '../css/RegistrationForm.css';

const ModernRegistrationForm = ({ onSubmit, isSubmitted }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    message: '',
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [focused, setFocused] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = 'Job title is required';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: undefined
      }));
    }
  };

  const handleFocus = (e) => {
    setFocused(prev => ({ ...prev, [e.target.name]: true }));
  };

  const handleBlur = (e) => {
    setFocused(prev => ({ ...prev, [e.target.name]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      try {
        await onSubmit(formData);
        setFormData({
          name: '',
          email: '',
          company: '',
          jobTitle: '',
          message: '',
          agreeTerms: false
        });
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section className="registration-section" id="register">
      <div className="registration-container">
        <div className="registration-title-section">
          <h1>Join Us</h1>
          <p>Register for the Reimagine Banking with Finastra event and be part of the future of financial technology. Fill out the form to secure your spot.</p>
          <div className="event-details">
            <div className="event-detail">
              <i className="far fa-calendar-alt"></i>
              <span>9th April 2025</span>
            </div>
            <div className="event-detail">
              <i className="far fa-clock"></i>
              <span>9:30 AM - 2:00 PM GMT+2</span>
            </div>
            <div className="event-detail">
              <i className="fas fa-map-marker-alt"></i>
              <span>The Nile Ritz-Carlton, Cairo, Egypt</span>
            </div>
          </div>
        </div>
        
        <div className="registration-form-container">
          {isSubmitted ? (
            <div className="form-success-message">
              <div className="success-icon">✓</div>
              <h3>Registration Successful!</h3>
              <p>Thank you for registering for the Reimagine Banking with Finastra event. We've sent confirmation details to your email.</p>
            </div>
          ) : (
            <form className="registration-form" onSubmit={handleSubmit}>
              <h2 className="form-heading">Register Now</h2>
              
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className={`${errors.name ? 'error' : ''} ${formData.name || focused.name ? 'has-value' : ''}`}
                  placeholder=" "
                />
                <label htmlFor="name" className={formData.name || focused.name ? 'active' : ''}>Full Name</label>
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className={`${errors.email ? 'error' : ''} ${formData.email || focused.email ? 'has-value' : ''}`}
                  placeholder=" "
                />
                <label htmlFor="email" className={formData.email || focused.email ? 'active' : ''}>Email Address</label>
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`${errors.company ? 'error' : ''} ${formData.company || focused.company ? 'has-value' : ''}`}
                    placeholder=" "
                  />
                  <label htmlFor="company" className={formData.company || focused.company ? 'active' : ''}>Company</label>
                  {errors.company && <span className="error-message">{errors.company}</span>}
                </div>
                
                <div className="form-group">
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`${errors.jobTitle ? 'error' : ''} ${formData.jobTitle || focused.jobTitle ? 'has-value' : ''}`}
                    placeholder=" "
                  />
                  <label htmlFor="jobTitle" className={formData.jobTitle || focused.jobTitle ? 'active' : ''}>Job Title</label>
                  {errors.jobTitle && <span className="error-message">{errors.jobTitle}</span>}
                </div>
              </div>
              
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className={`${formData.message || focused.message ? 'has-value' : ''}`}
                  rows="4"
                  placeholder=" "
                ></textarea>
                <label htmlFor="message" className={formData.message || focused.message ? 'active' : ''}>Message (Optional)</label>
              </div>
              
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                />
                <label htmlFor="agreeTerms">I agree to receive updates about the event and future events.</label>
                {errors.agreeTerms && <span className="error-message checkbox-error">{errors.agreeTerms}</span>}
              </div>
              
              <button type="submit" className="submit-button" disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Register Now'}
                <span className="button-arrow">→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ModernRegistrationForm;