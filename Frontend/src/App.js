import React, { useState, useEffect } from 'react';
import './App.css';
import Banner from './components/Banner';
import AboutEvent from './components/AboutEvent';
import Agenda from './components/Agenda';
import Speaker from './components/Speaker';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TopReasons from './components/TopReasons';
import AboutFinastra from './components/AboutFinastra';


function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsFormSubmitted(true);
        setTimeout(() => setIsFormSubmitted(false), 5000);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="App">
      <Navbar scrollPosition={scrollPosition} />
      
      <main>
        <Banner />
        <AboutEvent />
        <TopReasons />
        <Speaker />
        <Agenda />
        <AboutFinastra />
        <RegistrationForm onSubmit={handleFormSubmit} isSubmitted={isFormSubmitted} />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;