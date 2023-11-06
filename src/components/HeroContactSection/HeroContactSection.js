import React, { useContext } from 'react';
import '../Contact.css';
import ThemeContext from '../../ThemeContext'; 
import backgroundlines from '../../assets/images/background-lines.svg';

const HeroContactSection = () => {
  const { theme } = useContext(ThemeContext); 

  return (
    <section className={`hero ${theme}`}> 
    <div className="hero-content">
        <div className="contact-content">
          <nav className="contact-nav">
            <a href="/home">Home</a> 
            <a href="/contact">Contact</a> 
          </nav>
          <h1 className="contact-title">Let's Connect</h1>
        </div>
        <img src={backgroundlines} alt="" className="curved-lines"/>
      </div>
    </section>
  );
}

export default HeroContactSection;
