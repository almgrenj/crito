import React from 'react'
import './Article.css'
import img_backgroundlines1 from '../../assets/images/linkedin-sales-solutions-Mis5fyJi7Q0-unsplash.jpg';
import img_backgroundlines2 from '../../assets/images/emiliano-vittoriosi-vEN1bsdSjxM-unsplash.jpg';
import img_backgroundlines3 from '../../assets/images/kobu-agency-ipARHaxETRk-unsplash.jpg';


const ArticleSection = () => {
  return (
    <section className="articles-section">
          <div className="articles-header">
            <div className="articles-titles">
              <h3 className="articles-header-title">Article & News</h3>
              <h2 className="articles-header-subtitle">Get Every Single Articles & News</h2>
            </div>
            <button className="browse-articles-button">Browse Articles <i className="fas fa-arrow-right"></i></button>
          </div>
        
          <div className="articles-gallery">
            <div className="article">
              <div className="date-box">
                <div className="day">25</div>
                <div className="month">Mar</div>
              </div>
              <img src={img_backgroundlines1} alt="Article image1"/> 
              <h2>Business</h2>
              <h3>How To Use Digitalization</h3>
              <h3>In The Classroom</h3>
              <p>Lorem ipsum...</p>
            </div>
            <div className="article">
              <div className="date-box">
                <div className="day">17</div>
                <div className="month">Mar</div>
              </div>
              <img src={img_backgroundlines2} alt="Article image2"/> 
              <h2>Business</h2>
              <h3>How To Implement Chat GPT</h3>
              <h3>In Your Projects</h3>
              <p>Lorem ipsum...</p>
            </div>
            <div className="article">
              <div className="date-box">
                <div className="day">13</div>
                <div className="month">Mar</div>
              </div>
              <img src={img_backgroundlines3} alt="Article image3"/>
              <h2>Business</h2>
              <h3>The Guide To Support</h3>
              <h3>Modern CSS Design</h3>
              <p>Lorem ipsum...</p>
            </div>

          </div>
        
          <div className="dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </section>
  )
}

export default ArticleSection