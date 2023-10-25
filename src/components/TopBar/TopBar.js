import React from 'react'
import './TopBar.css'

const TopBar = () => {
  return (
    <div class="top-bar">
    <div class="top-bar-left">
      <p class="top-bar-text"><i class="fas fa-phone-alt"></i> +46 (8) 121 470 50</p>
      <p class="top-bar-text"><i class="fas fa-envelope"></i> info@crito.com</p>
      <p class="top-bar-text"><i class="fas fa-map-marker-alt"></i> Sveavägen 31, 111 34 STOCKHOLM</p>
  </div>  
    <div class="top-bar-right">
        <div class="top-bar-social-media-links">
            <a href="https://www.facebook.com/" class="top-bar-social-media-link">
                <i class="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com/" class="top-bar-social-media-link">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/" class="top-bar-social-media-link">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/" class="top-bar-social-media-link">
                <i class="fab fa-linkedin"></i>
            </a>
        </div>
    </div>
    <hr class="top-bar-divider" />
  </div>
  )
}

export default TopBar