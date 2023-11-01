import React from 'react';
import '../Contact.css';
import backgroundlines from '../../assets/images/background-lines.svg';

const HeroNewsSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="contact-content">
          <nav className="contact-nav">
            <a href="/home">Home</a> 
            <a href="/news">News</a> 
          </nav>
          <h1 className="contact-title">News & Articles</h1>
        </div>
        <img src={backgroundlines} alt="Background lines" className="contact-curves" />
      </div>
    </section>
  );
}

export default HeroNewsSection;
