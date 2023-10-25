import React from 'react'
import './ConsultingSection.css'
import backgroundlines from '../../assets/images/background-lines-right.svg'

const ConsultingSection = () => {
  return (
    <section className="consulting-section">
    <h1 className="consulting-title">Our Services</h1>
    <div className="consulting-subtitle">
      <div>We Provide the Best</div>
      <div>Service For Consulting</div>
    </div>
    
    <div className="box-container">
      <div className="box">
        <div className="title-underline"></div> 
        <h3>Business Advice</h3>
        <p>Lorem, ipsu dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
        <br/>
        <button className="arrow-button">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>

      <div className="box">
        <div className="title-underline"></div> 
        <h3>Startup Business</h3>
        <p>Lorem, ipsu dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
        <br/>
        <button className="arrow-button">
          <i className="fas fa-arrow-right"></i> 
        </button>
      </div>

      <div className="box">
        <div className="title-underline"></div> 
        <h3>Financial Advice</h3>
        <p>Lorem, ipsu dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
        <br/>
        <button className="arrow-button">
          <i className="fas fa-arrow-right"></i> 
        </button>
      </div>

      <div className="box">
        <div className="title-underline"></div> 
        <h3>Risk Management</h3>
        <p>Lorem, ipsu dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
        <br/>
        <button className="arrow-button">
          <i className="fas fa-arrow-right"></i> 
        </button>
      </div>                     
    </div>
    <button className="browse-services-button">Browse Services <i className="fas fa-arrow-right"></i></button>
    <img src={backgroundlines} alt="" className="curved-lines-right"/>
  </section>
  )
}

export default ConsultingSection