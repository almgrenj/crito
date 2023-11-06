import React, { useContext } from 'react';
import ThemeContext from '../../ThemeContext'; 
import { Link } from 'react-router-dom'; 
import './Header.css';
import logotype from '../../assets/images/logotype.svg';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header ${theme}`}> 
      <div className="header-left">
        <nav>
          <ul className="navbar">
            <li><Link to="/home">Home</Link></li> 
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className="header-logo-container">
        <Link to="/home"> 
          <img src={logotype} alt="Your Logo" className="header-logo" />
        </Link>
      </div>
      <div className="header-right">
        <button className="theme-toggle-button" onClick={toggleTheme}>
          Theme <i className="fas fa-moon"></i>
        </button>
        <button className="login-button">
          Login <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
