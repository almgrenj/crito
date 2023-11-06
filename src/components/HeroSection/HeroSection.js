import React, { useContext } from 'react'; 
import './Hero.css';
import ThemeContext from '../../ThemeContext'; 
import backgroundlines from '../../assets/images/background-lines.svg';
import showcase from '../../assets/images/showcase-image.svg';

const HeroSection = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`hero ${theme}`}> 
            <img src={backgroundlines} alt="" className="curved-lines"/>
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">We provide The Best business solutions</h1>
                    <p className="hero-subtitle">Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <div className="hero-buttons">
                        <button className="hero-button">Get Consulting <i className="fas fa-arrow-right"></i></button>
                        <button className="hero2-button">Learn More <i className="fas fa-arrow-right"></i></button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={showcase} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
