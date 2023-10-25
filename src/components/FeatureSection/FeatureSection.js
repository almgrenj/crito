import React from 'react';
import './FeatureSection.css';
import daria from '../../assets/images/daria-pimkina-tYaccl19A3Q-unsplash.jpg';


const FeatureSection = () => {
  return (
    <div className="feature-section">
    <div className="feature-image">
      <img src={daria} alt=""/>
      <div className="blue-box">
        <div className="box-title">
          Samantha Brown, <span className="box-subtitle">Founder</span> 
        </div>
        <div className="box-text">
          <p>"Lorem ipsum..."</p> 
        </div>
      </div>
    </div>
    
    <div className="feature-text">
      <h1 className="feature-title">About Company</h1>
      <h2 className="feature-subtitle">
        <div>We Are Business</div>
        <div>Consulting & Credit</div>
        <div>Repair Experts</div>
      </h2>
      <p className="feature-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="feature-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="button-container">
        <button className="feature-button">Learn More <i className="fas fa-arrow-right"></i></button>
        <button className="feature-button-play">
          <div className="play-icon-container">
            <i className="fas fa-play"></i>
          </div>
          <span>Intro Video</span>
        </button>
      </div>          
    </div>
  </div>
  )
}

export default FeatureSection