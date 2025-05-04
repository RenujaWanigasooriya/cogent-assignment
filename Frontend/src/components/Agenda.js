import React, { useState, useEffect } from 'react';
import './Agenda.css';

const agendaItems = [
  {
    time: '09:00 AM',
    title: 'Registration & Welcome',
  },
  {
    time: '10:00 AM',
    title: 'Opening Remarks',
    description: 'Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking',
  },
  {
    time: '10:10 AM',
    title: 'Keynote session: Digital Transformation in a Gen AI World',
    description: 'Ms. Siobhan Byron, Executive Vice President, Finastra Universal Banking',
  },
  {
    time: '10:30 AM',
    title: 'Decoding the Future - Transformation: The Opportunity & Time is Now',
    description: 'Mr. Daragh OByrne, Senior Director, Marketing, Universal Banking, Finastra',
  },
  {
    time: '11:00 AM',
    title: 'Panel Discussion: Customer Acquisition - Gaining New Customers in a Hyper Competitive World',
    description: 'Hamid Nirouzad, Managing Director - Africa, Finastra Universal Banking Ahmad Hamdy, Head of Information Technology, International Company for Leasing S.A.E. "Incolease".Ms. Riham Ismail Kassem Muhammad, Corporate & Supporting Functions CEX Senior, FABMISR',
  },
  {
    time: '11:30 AM',
    title: 'Panel Discussion: Customer Retention - Keeping Customers When Loyalty Is Dead',
    description: 'Karim El Mourabet, Solution Consulting Director - Middle East & Africa, Finastra Universal Banking Heba Yehia, Head of Digital Products, Arab African International Bank Ismail Ali, Co-Founder and CEO of CARITech Mohamed Elazzazy, Head of IT Governance and Change Management, Al-Baraka Bank Egypt',
  },
  {
    time: '12:00 PM',
    title: 'Coffee Break & Networking',
  },
  {
    time: '12:30 PM',
    title: 'Panel Discussion: Cost to Serve: Deliver Customer Delight',
    description: 'Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking Shehab Moustafa, Country Center of Excellence Director, Money Fellows Matthew Hughes, Head of FS&I, International Markets, Atos Emad Shawky Habib Hanna, Chief Data and Analytics Officer, Banque Misr.',
  },
  {
    time: '01:00 PM',
    title: 'The Essential Elements: What do you need to be "all things to all people"?',
    description: 'Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking',
  },
  {
    time: '01:30 PM',
    title: 'Making the case for change: The Question is How',
    description: 'Marwan Abouzeid, Principal Solutions Consultant & Customer Value Lead, MEA & APAC, Finastra Universal Banking',
  },
  {
    time: '01:50 PM',
    title: 'Closing Remarks',
    description: 'Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking',
  },
  {
    time: '02:00 PM',
    title: 'Lunch',
  },
];

const Agenda = () => {
  const [activeTime, setActiveTime] = useState(agendaItems[0].time);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = agendaItems.findIndex(item => item.time === activeTime);
      const nextIndex = (currentIndex + 1) % agendaItems.length;
      setActiveTime(agendaItems[nextIndex].time);
    }, 10000); // auto-change every 10 seconds
    return () => clearInterval(interval);
  }, [activeTime]);

  return (
    <section className="agenda-section">
      <div className="section-header">
        <h2>Agenda</h2>
        <div className="section-divider"></div>
      </div>
      <div className="agenda-container">
        <div className="agenda-timeline">
          {agendaItems.map((item, index) => (
            <div
              key={item.time}
              className={`timeline-item ${activeTime === item.time ? 'active' : ''}`}
              onClick={() => setActiveTime(item.time)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="timeline-point"></div>
              <div className="timeline-content">
                <div className="timeline-time">{item.time}</div>
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-description">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
