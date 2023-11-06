import React from 'react';
import './SubscribeSection.css';
import img_backgroundlines from '../../assets/images/background-wavy-lines.svg';

const SubscribeSection = () => {
  return (
    <section className="subscribe-section">
      <div className="subscribe-content">
        <p className="subscribe-text">Get News Updates By Signup</p>
        <div className="subscribe-input-group">
            <input type="email" placeholder="username@domain.com" className="subscribe-input" />
            <button className="subscribe-button">
                Subscribe <i className="fas fa-arrow-right"></i>
            </button>
        </div>
      </div>
      <img src={img_backgroundlines} alt="Background lines" className="subscribe-image"/>
    </section>
  );
}

export default SubscribeSection;
