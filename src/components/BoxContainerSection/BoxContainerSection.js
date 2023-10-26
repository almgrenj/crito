import React from 'react'
import '../Contact.css';

const BoxContainerSection = () => {
  return (
    <div className="box-container">
    <div className="box">
        <i className="fas fa-map-marker-alt box-icon"></i> 
        <div className="box-text-content">
            <h2>Visit Us</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
    </div>
    
    <div className="box">
        <i className="fas fa-phone-alt box-icon"></i>
        <div className="box-text-content">
            <h2>Call Us</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
    </div>
    
    <div className="box">
        <i className="fas fa-envelope box-icon"></i>
        <div className="box-text-content">
            <h2>Email Us</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
    </div>
</div>
  )
}

export default BoxContainerSection