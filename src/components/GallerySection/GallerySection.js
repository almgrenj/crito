import React from 'react';
import './GallerySection.css';
import image1 from '../../assets/images/adeolu-eletu-E7RLgUjjazc-unsplash.jpg'; 
import image2 from '../../assets/images/marek-levak-zANXcXyByos-unsplash.jpg'; 
import image3 from '../../assets/images/oli-dale-xjSkI_seiZY-unsplash.jpg'; 
import image4 from '../../assets/images/carlos-muza-hpjSkU2UYSU-unsplash.jpg'; 

const GallerySection = () => {
  return (
    <div className="gallery-section">
    <h3 className="gallery-title">Project & Case Studies</h3>
    <h2 className="gallery-subtitle">Let's Look at Our Global Projects</h2>
    
    <div className="gallery-row">
      <div className="gallery-item">
        <img src={image1} alt="1"/>
        <div className="text-content">
          <p className="image-title">Grow your business</p>
          <hr className="image-hr"/>
        </div>
        <button className="read-more-button">Read More <i className="fas fa-arrow-right"></i></button>
      </div>
      <div className="gallery-item">
        <img src={image2}alt="2"/>
        <div className="text-content">
          <p className="image-title">Why your clients need a responsive website</p>
          <hr className="image-hr"/>
        </div>
        <button className="read-more-button">Read More <i className="fas fa-arrow-right"></i></button>
      </div>
      <div className="gallery-item">
        <img src={image3} alt="3"/>
        <div className="text-content">
          <p className="image-title">Why your clients need a responsive website</p>
          <hr className="image-hr"/>
        </div>
        <button className="read-more-button">Read More <i className="fas fa-arrow-right"></i></button>
      </div>

       <div className="gallery-item">
        <img src={image4} alt="4"/>
        <div className="text-content">
          <p className="image-title">Why your clients need a responsive website</p>
          <hr className="image-hr"/>
        </div>
        <button className="read-more-button">Read More <i className="fas fa-arrow-right"></i></button>
      </div>
    </div>
    <button className="all-projects-button">All Recent Projects <i className="fas fa-arrow-right"></i></button>
  </div>
  )
}

export default GallerySection