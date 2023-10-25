import React from 'react';
import './FeaturesContainer.css';
import paperz from '../../assets/images/paperz.svg';
import dorfus from '../../assets/images/dorfus.svg';
import martino from '../../assets/images/martino.svg';
import square from '../../assets/images/square.svg';
import gobona from '../../assets/images/gobona.svg';

const FeaturesContainerSection = () => {
  return (
    <div>
    <div className="logo-row">
        <img src={paperz} alt="Paperz logo"/>
        <img src={dorfus} alt="Dorfus logo"/>
        <img src={martino} alt="Martino logo"/>
        <img src={square} alt="Square logo"/> 
        <img src={gobona} alt="Gobona logo"/>
  </div>
    <div className="features-container">
    <div className="text-section">
        <div className="title-container">
            <h1 className="features-title">Features</h1>
            <div className="features-subtitle">
                <div>Our Accounting is</div>
                <div>trusted by thousands</div>
                <div>of companies</div>
            </div>
            <button className="learn-more-button">Learn More <i className="fas fa-arrow-right"></i></button>
        </div>
    </div>
    
    <div className="textbox-section">
        <div className="textbox">
            <i className="fas fa-briefcase icon-class"></i>
            <p className="textbox-title">Business Advice</p>
            <p className="textbox-text">Some short lorem ipsum.</p>
        </div>
        <div className="textbox">
            <i className="fas fa-coins icon-class"></i>
            <p className="textbox-title">Startup Business</p>
            <p className="textbox-text">Some short lorem ipsum.</p>
        </div>
        <div className="textbox">
            <i className="fas fa-lightbulb icon-class"></i>
            <p className="textbox-title">Financial Advice</p>
            <p className="textbox-text">Some short lorem ipsum.</p>
        </div>
        <div className="textbox">
            <i className="fas fa-shield-alt icon-class"></i>
            <p className="textbox-title">Risk Management</p>
            <p className="textbox-text">Some short lorem ipsum.</p>
        </div>
    </div>
</div>
</div>
  )
}

export default FeaturesContainerSection