import React from 'react';
import './FeatureReversed.css';
import image from '../../assets/images/amy-hirschi-K0c8ko3e6AA-unsplash.jpg';

const FeatureReversedSection = () => {
  return (
    <div className="feature-reversed-section">
    <div className="background-box"></div>
    <div className="feature-text">
      <h1 className="feature-reversed-title">Why Choose Us</h1>
      <div className="feature-reversed-subtitle">
        <div>Why We Are The</div>
        <div>Best Business</div>
        <div>Consulting Agency</div>
      </div>
      
      <div className="icon-group">
        <div className="icon-item">
          <i className="fas fa-cogs"></i> 
          <div className="icon-description">
            <h3 className="icon-title">Process Excellence</h3>
            <p>Some short lorem ipsum. Some short.</p>
          </div>
        </div>
        <div className="icon-item">
          <i className="fas fa-chart-line"></i> 
          <div className="icon-description">
            <h3 className="icon-title">Strategic Planning</h3>
            <p>Some short lorem ipsum. Some short.</p>
          </div>
        </div>
        <div className="icon-item">
          <i className="fas fa-paint-brush"></i> 
          <div className="icon-description">
            <h3 className="icon-title">Experience Design</h3>
            <p>Some short lorem ipsum. Some short.</p>
          </div>
        </div>
        <div className="icon-item">
          <i className="fas fa-brain"></i> 
          <div className="icon-description">
            <h3 className="icon-title">Artificiall Intelligence</h3>
            <p>Some short lorem ipsum. Some short.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="feature-reversed-image">
      <img src={image} alt="Descriptive alt text"/>
    </div>
  </div>
  )
}

export default FeatureReversedSection