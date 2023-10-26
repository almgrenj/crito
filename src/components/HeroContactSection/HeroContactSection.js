import React from 'react';
import '../Contact.css';
import backgroundlines from '../../assets/images/background-lines.svg';

const HeroContactSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="contact-content">
          <nav className="contact-nav">
            <a href="/home">Home</a> 
            <a href="/contact">Contact</a> 
          </nav>
          <h1 className="contact-title">Let's Connect</h1>
        </div>
        <img src={backgroundlines} alt="Background lines" className="contact-curves" />
      </div>
    </section>
  );
}

export default HeroContactSection;
