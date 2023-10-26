import React from 'react';
import './Header.css';
import logotype from '../../assets/images/logotype.svg';  // Ensure this path is correct

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <nav>
          <ul className="navbar">
            <li><a href="/home">Home</a> </li>
            <li><a href="#service">Service</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="header-logo-container">
        <img src={logotype} alt="Your Logo" className="header-logo" />
      </div>
      <div className="header-right">
        <button className="login-button">
          Login <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
