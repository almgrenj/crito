import React from 'react'
import './TopBar.css'

const TopBar = () => {
  return (
    <div className="top-bar">
    <div className="top-bar-left">
      <p className="top-bar-text"><i className="fas fa-phone-alt"></i> +46 (8) 121 470 50</p>
      <p className="top-bar-text"><i className="fas fa-envelope"></i> info@crito.com</p>
      <p className="top-bar-text"><i className="fas fa-map-marker-alt"></i> Sveavägen 31, 111 34 STOCKHOLM</p>
  </div>  
    <div className="top-bar-right">
        <div className="top-bar-social-media-links">
            <a href="https://www.facebook.com/" className="top-bar-social-media-link">
                <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com/" className="top-bar-social-media-link">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/" className="top-bar-social-media-link">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/" className="top-bar-social-media-link">
                <i className="fab fa-linkedin"></i>
            </a>
        </div>
    </div>
    <hr className="top-bar-divider" />
  </div>
  )
}

export default TopBar