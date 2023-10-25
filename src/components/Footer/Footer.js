import React from 'react'
import './Footer.css' 
import img_backgroundlines from '../../assets/images/background-lines-white-right.svg'
import img_logotype from '../../assets/images/logotype-white.svg'


const Footer = () => {
  return (
    <footer className="footer">

    <div className="footer-content">
    <img src={img_backgroundlines} alt="Background lines" className="footer-bg-image" /> 
      <div className="footer-column">
      <img src={img_logotype} alt="Your Logo" className="footer-logo-img" /> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure preasentium.</p>
    </div>
    
    <div className="footer-column">
      <p className="footer-column-title">Company</p>
      <a href="https://www.example.com">About</a>
      <a href="https://www.example.com">Features</a>
      <a href="https://www.example.com">Works</a>
      <a href="https://www.example.com">Career</a>
  </div>

    <div className="footer-column">
        <p className="footer-column-title">Help</p>
        <a href="https://www.example.com">Customer Support</a>
        <a href="https://www.example.com">Delivery Details</a>
        <a href="https://www.example.com">Terms & Conditions</a>
        <a href="https://www.example.com">Privacy Policy</a>
    </div>

    <div className="footer-column">
        <p className="footer-column-title">Resources</p>
        <a href="https://www.example.com">Free eBooks</a>
        <a href="https://www.example.com">Development Tutorial</a>
        <a href="https://www.example.com">How to - Blog</a>
        <a href="https://www.example.com">Youtube Playlist</a>
    </div>

    <div className="footer-column">
      <p className="footer-column-title">Link</p>
      <a href="https://www.example.com">Free eBooks</a>
      <a href="https://www.example.com">Development Tutorial</a>
      <a href="https://www.example.com">How to - Blog</a>
      <a href="https://www.example.com">Youtube Playlist</a>
  </div>

    </div>
    <div className="copyright-section">
      <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
      <div className="social-media-links">
          <a href="https://www.facebook.com/YourPageName" className="social-media-link">
              <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com/your_twitter_handle" className="social-media-link">
              <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/your_instagram_handle" className="social-media-link">
              <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/your_linkedin_profile" className="social-media-link">
              <i className="fab fa-linkedin"></i>
          </a>
      </div>
    </div>
</footer>
  )
}

export default Footer